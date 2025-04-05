import { Hono } from 'hono'
import { cors } from 'hono/cors';
import { PinataSDK } from 'pinata'
import * as ethers from 'ethers';


interface Bindings {
  PINATA_JWT: string;
}

const app = new Hono<{ Bindings: Bindings }>()

app.use(cors())

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

// Helper function to verify Ethereum signatures
const verifySignature = (address: string, message: string, signature: string): boolean => {
  try {
    const recoveredAddress = ethers.verifyMessage(message, signature);
    return recoveredAddress.toLowerCase() === address.toLowerCase();
  } catch (error) {
    console.error('Signature verification error:', error);
    return false;
  }
}


app.post('/upload', async (c) => {
  try {
    const body = await c.req.parseBody(); // for multipart/form-data

    const {
      address,
      signature,
      message,
      title,
      description,
      partyAAddress,
      partyBAddress,
    } = body;

    if (!verifySignature(address, message, signature)) {
      return c.json({ error: 'Invalid signature' }, 401);
    }

    // You could combine all fields into one metadata JSON
    const metadata = {
      title,
      description,
      partyAAddress,
      partyBAddress,
    };

    const pinata = new PinataSDK({
      pinataJwt: c.env.PINATA_JWT,
    });

    const signedUrl = await pinata.upload.public.createSignedURL({
      expires: 60,
    });

    const encoder = new TextEncoder();
    const jsonBytes = encoder.encode(JSON.stringify(metadata));

    const uploadResponse = await fetch(signedUrl, {
      method: 'POST',
      body: jsonBytes,
      headers: {
        'Content-Type': 'application/offset+octet-stream', // required!
        'Upload-Length': jsonBytes.length.toString(),      // required!
        'pinataMetadata': JSON.stringify({
          name: title,
        }),
      },
    });
    

    console.log("Upload response:", uploadResponse);

    if (!uploadResponse.ok) {
      const errorText = await uploadResponse.text();
      console.error("Upload failed with status:", uploadResponse.status);
      console.error("Upload failed:", errorText);
      return c.json({ error: 'Pinata upload failed' }, 500);
    }

    let result;
    if (uploadResponse.headers.get("upload-cid")) {
      result = {
        IpfsHash: uploadResponse.headers.get("upload-cid"),
      };
    } else {
      try {
        result = await uploadResponse.json(); // fallback
      } catch {
        result = {};
      }
    }

    return c.json({ ipfsHash: result.IpfsHash }, 200);

  } catch (err) {
    console.error("Server error:", err);
    return c.json({ error: 'Internal server error' }, 500);
  }
});


export default app
//bafkreiaogn32knnfffsuir63l7ctvvcgwgoxmzmoej7tay4psi25vajrp4