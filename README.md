# Overview
This is a blockchain-based arbitration system designed in a hackathon for **GRULL** to automate and streamline dispute resolution processes. It leverages smart contracts on the Ethereum blockchain to provide a transparent, efficient, and trustless mechanism for resolving conflicts between parties. For crisp understanding, here is a ppt : https://gamma.app/docs/Dispute-Resolution-in-the-Age-of-Decentralization-n4khbt41r8s4l92
## Features

- __Decentralized Arbitration:__  Eliminates the need for traditional intermediaries with a blockchain-based approach
- __Smart Contract Integration:__  Automates the arbitration process through Ethereum smart contracts
- __Token Economy:__  Utilizes GRULL tokens for incentivizing fair arbitration and participation
- __Multi-stage Resolution:__  Employs a tiered approach to dispute resolution with escalation mechanisms
- __Evidence Management:__  Secure storage and verification of case evidence
- __Arbitrator Selection:__  Random and fair selection of arbitrators from a qualified pool
- __Transparent Voting:__  Open and verifiable voting process for case resolution

## Technology Stack

Smart Contracts: Solidity on Ethereum blockchain
Frontend: React.js, Ethers.js
Storage: IPFS for decentralized evidence storage
Authentication: Metamask and wallet connect integration
Testing: Hardhat environment with Chai testing framework

Installation
Prerequisites

Node.js (v16.0.0 or higher)
npm (v8.0.0 or higher)
Metamask or other Web3 wallet
Hardhat 

## Setup

### Clone the repository:
bashgit clone https://github.com/Shashwat-Nautiyal/GRULL-Arbitration-System.git
`cd GRULL-Arbitration-System`

### Install dependencies:
`npm install`

### Set up environment variables:
`npm .env.example .env`
### Fill in your API keys and private keys in the .env file and compile smart contracts
`npm hardhat compile`


Start the development server:
`npm run dev`

## Usage
### Creating a Dispute

- Connect your wallet to the application. Buy GRULL tokens
- Navigate to "Create Dispute" section
- Fill in the required details including dispute type, description, and stake amount
- Submit transaction through your wallet
- Upload relevant evidence to IPFS

### Participating as an Arbitrator

- Register as an arbitrator by staking GRULL tokens
- Maintain required reputation score
- When selected, review case details and evidence
- Submit your vote within the designated timeframe
- Receive rewards for honest participation


Contributors

Shashwat Nautiyal (@Shashwat-Nautiyal)

Contact
For questions or support, please open an issue on the GitHub repository or contact the me directly.


