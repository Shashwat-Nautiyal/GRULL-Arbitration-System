import { useState } from 'react';
import { Upload, Plus } from 'lucide-react';
import { PinataSDK } from "pinata";
import { ethers } from 'ethers';
import { useEffect } from 'react';

export default function Disputes() {

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    partyAAddress: '',
    partyBAddress: '',
    evidence: null as File | null,
  });

  const [walletAddress, setWalletAddress] = useState('');
  const [uploading, setUploading] = useState(false);
  const [uploadResult, setUploadResult] = useState(null);
  const [error, setError] = useState('');

  const connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        // Request account access
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setWalletAddress(accounts[0]);
        
        // Listen for account changes
        window.ethereum.on('accountsChanged', (accounts) => {
          setWalletAddress(accounts[0]);
          setFormData(prev => ({ ...prev, partyAAddress: accounts[0] }));
        });
      } catch (error) {
        console.error('Error connecting to MetaMask:', error);
      }
    } else {
      setError('MetaMask is not installed. Please install it to use this application.');
    }
  };

  useEffect(() => {
    connectWallet();
  }, []);

 
  const getPresignedUrl = async (object: Object) => {
    try {
      if (!walletAddress) {
        throw new Error('Please connect your wallet first');
      }
    
      // Create a message to sign
      const message = "I am signing this message to authenticate with Daroga IPFS Upload";
      console.log("sd ",ethers.utils.hexlify(ethers.utils.toUtf8Bytes(message)))
      // Request signature from user
      const signature = await window.ethereum.request({
        method: 'personal_sign',
        params: [ethers.utils.hexlify(ethers.utils.toUtf8Bytes(message)), walletAddress]
      });
      
      // Send the signature data to your server
      const response = await fetch('http://127.0.0.1:8787/upload_url', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          address: walletAddress,
          signature,
          message,
          object
        })
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to get upload URL');
      }

      const data = await response.json();
      return data.url;
    } catch (error) {
      console.error('Error getting presigned URL:', error);
      throw error;
    }
  };

  // const uploadFileAndFormData = async () => {
  //   setUploading(true);
  //   setError('');
  //   setUploadResult(null);
  
  //   try {
  //     let fileIpfsHash = '';
  
  //     // // STEP 1: Upload the evidence file to IPFS
  //     // if (formData.evidence) {
  //     //   const fileUploadUrl = await getPresignedUrl();
  //     //   const fileForm = new FormData();
  //     //   fileForm.append('file', formData.evidence);
  
  //     //   const fileRes = await fetch(fileUploadUrl, {
  //     //     method: 'POST',
  //     //     body: fileForm,
  //     //     mode: 'cors',
  //     //   });
  
  //     //   if (!fileRes.ok) {
  //     //     throw new Error('Failed to upload file to IPFS');
  //     //   }
  
  //     //   const fileResult = await fileRes.json();
  //     //   fileIpfsHash = fileResult.IpfsHash || fileResult.cid || '';
  //     // }
  
  //     // STEP 2: Prepare the full dispute data JSON
  //     const disputeData = {
  //       title: formData.title,
  //       description: formData.description,
  //       partyAAddress: formData.partyAAddress,
  //       partyBAddress: formData.partyBAddress,
  //       // evidenceIpfsHash: fileIpfsHash,
  //       createdAt: new Date().toISOString(),
  //     };
  
  //     // // STEP 3: Upload JSON metadata to IPFS
  //     const metadataUploadUrl = await getPresignedUrl(disputeData);
  
  //     // const metadataRes = await fetch(metadataUploadUrl, {
  //     //   method: 'POST',
  //     //   headers: {
  //     //     'Content-Type': 'application/json',
  //     //   },
  //     //   body: JSON.stringify(disputeData),
  //     //   mode: 'cors',
  //     // });
  
  //     // if (!metadataRes.ok) {
  //     //   throw new Error('Failed to upload dispute metadata to IPFS');
  //     // }
  
  //     // const metadataResult = await metadataRes.json();
  //     // setUploadResult(metadataResult);
  
  //     // console.log('Form and file uploaded to IPFS:', metadataResult);
  //     // return metadataResult;
  
  //   } catch (err: any) {
  //     console.error('Upload error:', err);
  //     setError(err.message || 'Upload failed');
  //     throw err;
  //   } finally {
  //     setUploading(false);
  //   }
  // };
  
  const uploadFileAndFormData = async () => {
    try {
      if (!walletAddress) throw new Error("Wallet not connected");
  
      const message = "I am signing this message to authenticate with Daroga IPFS Upload";
  
      const signature = await window.ethereum.request({
        method: 'personal_sign',
        params: [
          ethers.utils.hexlify(ethers.utils.toUtf8Bytes(message)),
          walletAddress,
        ],
      });
  
      const form = new FormData();
      form.append('title', formData.title);
      form.append('description', formData.description);
      form.append('partyAAddress', formData.partyAAddress);
      form.append('partyBAddress', formData.partyBAddress);
      form.append('signature', signature);
      form.append('message', message);
      form.append('address', walletAddress);
  
      const response = await fetch('http://localhost:8787/upload', {
        method: 'POST',
        body: form,
      });
  
      const result = await response.json();
      console.log("Upload result:", result);
  
      if (!response.ok) {
        throw new Error(result.error || 'Upload failed');
      }
  
      return result.ipfsHash;
  
    } catch (err) {
      console.error("Error uploading:", err);
      throw err;
    }
  };
  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    try {
      const result = await uploadFileAndFormData();
      console.log("CID:", result);
    
    } catch (err) {
      console.error('Submit error:', err);
    }
  
    //Reset
    setFormData({
      title: '',
      description: '',
      partyAAddress: walletAddress,
      partyBAddress: '',
      evidence: null,
    });
  };
  


  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, evidence: e.target.files[0] });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white shadow-xl rounded-lg overflow-hidden">
            <div className="px-6 py-8">
              <h2 className="text-3xl font-extrabold text-gray-900">
                Register a Dispute
              </h2>
              <p className="mt-2 text-gray-600">
                Provide details about your dispute for resolution
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                    Dispute Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    placeholder='Title'
                    className="mt-1 p-3   block w-full border-gray-500 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                    Description
                  </label>
                  <textarea
                    id="description"
                    rows={4}
                    placeholder='Describe the dispute'
                    className="mt-1 block w-full p-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="partyA" className="block text-sm font-medium text-gray-700">
                      Party A Address
                    </label>
                    <input
                      type="text"
                      id="partyA"
                      placeholder='address'
                      className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      value={formData.partyAAddress}
                      onChange={(e) => setFormData({ ...formData, partyAAddress: e.target.value })}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="partyB" className="block text-sm font-medium text-gray-700">
                      Party B Address
                    </label>
                    <input
                      type="text"
                      id="partyB"
                      placeholder='address'
                      className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      value={formData.partyBAddress}
                      onChange={(e) => setFormData({ ...formData, partyBAddress: e.target.value })}
                      required
                    />
                  </div>
                </div>

                {/* <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Evidence
                  </label>
                  {/* <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div className="space-y-1 text-center">
                      <Upload className="mx-auto h-12 w-12 text-gray-400" />
                      <div className="flex text-sm text-gray-600">
                        <label
                          htmlFor="evidence"
                          className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                        >
                          <span>Upload a file</span>
                          <input
                            id="evidence"
                            name="evidence"
                            type="file"
                            className="sr-only"
                            onChange={handleFileChange}
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">
                        PDF, PNG, JPG up to 10MB
                      </p>
                    </div>
                  </div> 
                </div> */}

                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <Plus className="h-5 w-5 mr-2" />
                  Register Dispute
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


