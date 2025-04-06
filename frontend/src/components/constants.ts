export const contractABI = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "allowance",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "needed",
				"type": "uint256"
			}
		],
		"name": "ERC20InsufficientAllowance",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "balance",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "needed",
				"type": "uint256"
			}
		],
		"name": "ERC20InsufficientBalance",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "approver",
				"type": "address"
			}
		],
		"name": "ERC20InvalidApprover",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "receiver",
				"type": "address"
			}
		],
		"name": "ERC20InvalidReceiver",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			}
		],
		"name": "ERC20InvalidSender",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "ERC20InvalidSpender",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "OwnableInvalidOwner",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "OwnableUnauthorizedAccount",
		"type": "error"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "appliedForJuror",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "disputeCreated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "desUrl",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "victim1",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "victim2",
						"type": "address"
					},
					{
						"internalType": "bool",
						"name": "isResolved",
						"type": "bool"
					},
					{
						"components": [
							{
								"internalType": "uint256",
								"name": "id",
								"type": "uint256"
							},
							{
								"internalType": "address",
								"name": "jurorAddress",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "stake",
								"type": "uint256"
							},
							{
								"internalType": "bool",
								"name": "voted",
								"type": "bool"
							},
							{
								"internalType": "bool",
								"name": "vote",
								"type": "bool"
							},
							{
								"internalType": "bool",
								"name": "isOccupied",
								"type": "bool"
							}
						],
						"internalType": "struct dispute_resolution.Juror[]",
						"name": "assingedJurors",
						"type": "tuple[]"
					},
					{
						"components": [
							{
								"internalType": "uint8",
								"name": "vote",
								"type": "uint8"
							},
							{
								"internalType": "uint256",
								"name": "backing_tokens",
								"type": "uint256"
							}
						],
						"internalType": "struct dispute_resolution.vote[]",
						"name": "voteOfJurors",
						"type": "tuple[]"
					},
					{
						"internalType": "uint256",
						"name": "expiry",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "solution",
						"type": "uint256"
					}
				],
				"indexed": false,
				"internalType": "struct dispute_resolution.dispute",
				"name": "",
				"type": "tuple"
			}
		],
		"name": "disputeCreated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "desUrl",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "victim1",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "victim2",
						"type": "address"
					},
					{
						"internalType": "bool",
						"name": "isResolved",
						"type": "bool"
					},
					{
						"components": [
							{
								"internalType": "uint256",
								"name": "id",
								"type": "uint256"
							},
							{
								"internalType": "address",
								"name": "jurorAddress",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "stake",
								"type": "uint256"
							},
							{
								"internalType": "bool",
								"name": "voted",
								"type": "bool"
							},
							{
								"internalType": "bool",
								"name": "vote",
								"type": "bool"
							},
							{
								"internalType": "bool",
								"name": "isOccupied",
								"type": "bool"
							}
						],
						"internalType": "struct dispute_resolution.Juror[]",
						"name": "assingedJurors",
						"type": "tuple[]"
					},
					{
						"components": [
							{
								"internalType": "uint8",
								"name": "vote",
								"type": "uint8"
							},
							{
								"internalType": "uint256",
								"name": "backing_tokens",
								"type": "uint256"
							}
						],
						"internalType": "struct dispute_resolution.vote[]",
						"name": "voteOfJurors",
						"type": "tuple[]"
					},
					{
						"internalType": "uint256",
						"name": "expiry",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "solution",
						"type": "uint256"
					}
				],
				"indexed": false,
				"internalType": "struct dispute_resolution.dispute",
				"name": "",
				"type": "tuple"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "disputeResolved",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "jurorId",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "jurorRewards",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "jurorSlashed",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "desUrl",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "victim1",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "victim2",
						"type": "address"
					},
					{
						"internalType": "bool",
						"name": "isResolved",
						"type": "bool"
					},
					{
						"components": [
							{
								"internalType": "uint256",
								"name": "id",
								"type": "uint256"
							},
							{
								"internalType": "address",
								"name": "jurorAddress",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "stake",
								"type": "uint256"
							},
							{
								"internalType": "bool",
								"name": "voted",
								"type": "bool"
							},
							{
								"internalType": "bool",
								"name": "vote",
								"type": "bool"
							},
							{
								"internalType": "bool",
								"name": "isOccupied",
								"type": "bool"
							}
						],
						"internalType": "struct dispute_resolution.Juror[]",
						"name": "assingedJurors",
						"type": "tuple[]"
					},
					{
						"components": [
							{
								"internalType": "uint8",
								"name": "vote",
								"type": "uint8"
							},
							{
								"internalType": "uint256",
								"name": "backing_tokens",
								"type": "uint256"
							}
						],
						"internalType": "struct dispute_resolution.vote[]",
						"name": "voteOfJurors",
						"type": "tuple[]"
					},
					{
						"internalType": "uint256",
						"name": "expiry",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "solution",
						"type": "uint256"
					}
				],
				"indexed": false,
				"internalType": "struct dispute_resolution.dispute",
				"name": "",
				"type": "tuple"
			},
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "jurorAddress",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "stake",
						"type": "uint256"
					},
					{
						"internalType": "bool",
						"name": "voted",
						"type": "bool"
					},
					{
						"internalType": "bool",
						"name": "vote",
						"type": "bool"
					},
					{
						"internalType": "bool",
						"name": "isOccupied",
						"type": "bool"
					}
				],
				"indexed": false,
				"internalType": "struct dispute_resolution.Juror[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"name": "jurorsAssigned",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "jurorAddress",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "stake",
						"type": "uint256"
					},
					{
						"internalType": "bool",
						"name": "voted",
						"type": "bool"
					},
					{
						"internalType": "bool",
						"name": "vote",
						"type": "bool"
					},
					{
						"internalType": "bool",
						"name": "isOccupied",
						"type": "bool"
					}
				],
				"indexed": false,
				"internalType": "struct dispute_resolution.Juror[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"name": "newJurorsSelected",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "tokensBought",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "stakeAmount",
				"type": "uint256"
			}
		],
		"name": "applyForJuror",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "avgStake",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenAmount",
				"type": "uint256"
			}
		],
		"name": "buyTokens",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "chutiya1",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "chutiya2",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "desUrl",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_expiryHr",
				"type": "uint256"
			}
		],
		"name": "createDispute",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "disputeArray",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "desUrl",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "victim1",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "victim2",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "isResolved",
				"type": "bool"
			},
			{
				"internalType": "uint256",
				"name": "expiry",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "solution",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "disputeJurors",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			}
		],
		"name": "getTokens",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "jurors",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "jurorAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "stake",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "voted",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "vote",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "isOccupied",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "minStakeTokens",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "tokenPrice",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalNoOfJurors",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "voteArray",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "vote",
				"type": "uint8"
			},
			{
				"internalType": "uint256",
				"name": "backing_tokens",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "voteCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "_vote",
				"type": "bool"
			},
			{
				"internalType": "uint256",
				"name": "backingAmount",
				"type": "uint256"
			}
		],
		"name": "voteForDispute",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "wannabeJurorsPool",
		"outputs": [
			{
				"internalType": "address",
				"name": "jurorAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "stake",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "wannabePoolSize",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

export const contractBytecode = "60806040526064600655600a6008555f600a556004600b556003600c555f600d5534801561002b575f80fd5b50336040518060400160405280600581526020017f4752554c4c0000000000000000000000000000000000000000000000000000008152506040518060400160405280600581526020017f4752554c4c00000000000000000000000000000000000000000000000000000081525081600390816100a8919061071a565b5080600490816100b8919061071a565b5050505f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160361012b575f6040517f1e4fbdf70000000000000000000000000000000000000000000000000000000081526004016101229190610828565b60405180910390fd5b61013a8161017760201b60201c565b506101723061014d61023a60201b60201c565b600a61015991906109a9565b620186a061016791906109f3565b61024260201b60201c565b610ac4565b5f60055f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508160055f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b5f6012905090565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036102b2575f6040517fec442f050000000000000000000000000000000000000000000000000000000081526004016102a99190610828565b60405180910390fd5b6102c35f83836102c760201b60201c565b5050565b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610317578060025f82825461030b9190610a34565b925050819055506103e5565b5f805f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20549050818110156103a0578381836040517fe450d38c00000000000000000000000000000000000000000000000000000000815260040161039793929190610a76565b60405180910390fd5b8181035f808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2081905550505b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361042c578060025f8282540392505081905550610476565b805f808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f82825401925050819055505b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516104d39190610aab565b60405180910390a3505050565b5f81519050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f600282049050600182168061055b57607f821691505b60208210810361056e5761056d610517565b5b50919050565b5f819050815f5260205f209050919050565b5f6020601f8301049050919050565b5f82821b905092915050565b5f600883026105d07fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82610595565b6105da8683610595565b95508019841693508086168417925050509392505050565b5f819050919050565b5f819050919050565b5f61061e610619610614846105f2565b6105fb565b6105f2565b9050919050565b5f819050919050565b61063783610604565b61064b61064382610625565b8484546105a1565b825550505050565b5f90565b61065f610653565b61066a81848461062e565b505050565b5b8181101561068d576106825f82610657565b600181019050610670565b5050565b601f8211156106d2576106a381610574565b6106ac84610586565b810160208510156106bb578190505b6106cf6106c785610586565b83018261066f565b50505b505050565b5f82821c905092915050565b5f6106f25f19846008026106d7565b1980831691505092915050565b5f61070a83836106e3565b9150826002028217905092915050565b610723826104e0565b67ffffffffffffffff81111561073c5761073b6104ea565b5b6107468254610544565b610751828285610691565b5f60209050601f831160018114610782575f8415610770578287015190505b61077a85826106ff565b8655506107e1565b601f19841661079086610574565b5f5b828110156107b757848901518255600182019150602085019450602081019050610792565b868310156107d457848901516107d0601f8916826106e3565b8355505b6001600288020188555050505b505050505050565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f610812826107e9565b9050919050565b61082281610808565b82525050565b5f60208201905061083b5f830184610819565b92915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f8160011c9050919050565b5f808291508390505b60018511156108c35780860481111561089f5761089e610841565b5b60018516156108ae5780820291505b80810290506108bc8561086e565b9450610883565b94509492505050565b5f826108db5760019050610996565b816108e8575f9050610996565b81600181146108fe576002811461090857610937565b6001915050610996565b60ff84111561091a57610919610841565b5b8360020a91508482111561093157610930610841565b5b50610996565b5060208310610133831016604e8410600b841016171561096c5782820a90508381111561096757610966610841565b5b610996565b610979848484600161087a565b925090508184048111156109905761098f610841565b5b81810290505b9392505050565b5f60ff82169050919050565b5f6109b3826105f2565b91506109be8361099d565b92506109eb7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff84846108cc565b905092915050565b5f6109fd826105f2565b9150610a08836105f2565b9250828202610a16816105f2565b91508282048414831517610a2d57610a2c610841565b5b5092915050565b5f610a3e826105f2565b9150610a49836105f2565b9250828201905080821115610a6157610a60610841565b5b92915050565b610a70816105f2565b82525050565b5f606082019050610a895f830186610819565b610a966020830185610a67565b610aa36040830184610a67565b949350505050565b5f602082019050610abe5f830184610a67565b92915050565b61428880610ad15f395ff3fe6080604052600436106101b6575f3560e01c80638aeb1dc8116100eb578063c638407111610089578063dd62ed3e11610063578063dd62ed3e14610633578063df30e3251461066f578063ef41624814610697578063f2fde38b146106c1576101b6565b8063c63840711461058a578063d9330e48146105b4578063db46e82b146105f6576101b6565b806395e8266c116100c557806395e8266c146104d45780639ac6f2c8146104fe578063a9059cbb14610526578063c3ac928914610562576101b6565b80638aeb1dc8146104565780638da5cb5b1461048057806395d89b41146104aa576101b6565b80633610724e11610158578063715018a611610132578063715018a6146103ab5780637cd38ff8146103c15780637ff9b59614610402578063800262071461042c576101b6565b80633610724e14610317578063450efe211461033357806370a082311461036f576101b6565b806318160ddd1161019457806318160ddd1461024a57806323b872dd14610274578063313ce567146102b057806333ca8c98146102da576101b6565b806306fdde03146101ba578063095ea7b3146101e4578063138e4f2614610220575b5f80fd5b3480156101c5575f80fd5b506101ce6106e9565b6040516101db9190612b3b565b60405180910390f35b3480156101ef575f80fd5b5061020a60048036038101906102059190612bf9565b610779565b6040516102179190612c51565b60405180910390f35b34801561022b575f80fd5b5061023461079b565b6040516102419190612c79565b60405180910390f35b348015610255575f80fd5b5061025e6107a1565b60405161026b9190612c79565b60405180910390f35b34801561027f575f80fd5b5061029a60048036038101906102959190612c92565b6107aa565b6040516102a79190612c51565b60405180910390f35b3480156102bb575f80fd5b506102c46107d8565b6040516102d19190612cfd565b60405180910390f35b3480156102e5575f80fd5b5061030060048036038101906102fb9190612d16565b6107e0565b60405161030e929190612d50565b60405180910390f35b610331600480360381019061032c9190612d16565b61082e565b005b34801561033e575f80fd5b5061035960048036038101906103549190612d77565b6108d7565b6040516103669190612c79565b60405180910390f35b34801561037a575f80fd5b5061039560048036038101906103909190612d77565b6108e8565b6040516103a29190612c79565b60405180910390f35b3480156103b6575f80fd5b506103bf61092d565b005b3480156103cc575f80fd5b506103e760048036038101906103e29190612d16565b610940565b6040516103f996959493929190612da2565b60405180910390f35b34801561040d575f80fd5b506104166109cc565b6040516104239190612c79565b60405180910390f35b348015610437575f80fd5b506104406109d2565b60405161044d9190612c79565b60405180910390f35b348015610461575f80fd5b5061046a6109d8565b6040516104779190612c79565b60405180910390f35b34801561048b575f80fd5b506104946109de565b6040516104a19190612e01565b60405180910390f35b3480156104b5575f80fd5b506104be610a06565b6040516104cb9190612b3b565b60405180910390f35b3480156104df575f80fd5b506104e8610a96565b6040516104f59190612c79565b60405180910390f35b348015610509575f80fd5b50610524600480360381019061051f9190612d16565b610a9c565b005b348015610531575f80fd5b5061054c60048036038101906105479190612bf9565b610c05565b6040516105599190612c51565b60405180910390f35b34801561056d575f80fd5b5061058860048036038101906105839190612f46565b610c27565b005b348015610595575f80fd5b5061059e610d8b565b6040516105ab9190612c79565b60405180910390f35b3480156105bf575f80fd5b506105da60048036038101906105d59190612d16565b610d91565b6040516105ed9796959493929190612fc6565b60405180910390f35b348015610601575f80fd5b5061061c60048036038101906106179190612d16565b610eaf565b60405161062a92919061303a565b60405180910390f35b34801561063e575f80fd5b5061065960048036038101906106549190613061565b610eea565b6040516106669190612c79565b60405180910390f35b34801561067a575f80fd5b50610695600480360381019061069091906130c9565b610f6c565b005b3480156106a2575f80fd5b506106ab6112e6565b6040516106b89190612c79565b60405180910390f35b3480156106cc575f80fd5b506106e760048036038101906106e29190612d77565b6112f2565b005b6060600380546106f890613146565b80601f016020809104026020016040519081016040528092919081815260200182805461072490613146565b801561076f5780601f106107465761010080835404028352916020019161076f565b820191905f5260205f20905b81548152906001019060200180831161075257829003601f168201915b5050505050905090565b5f80610783611376565b905061079081858561137d565b600191505092915050565b600b5481565b5f600254905090565b5f806107b4611376565b90506107c185828561138f565b6107cc858585611422565b60019150509392505050565b5f6012905090565b601081815481106107ef575f80fd5b905f5260205f2090600202015f91509050805f015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010154905082565b60648161083b91906131a3565b3414610845575f80fd5b8061084f306108e8565b1015610890576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108879061322e565b60405180910390fd5b61089b303383611422565b7f6ebf55d0cee4245affe84127b666e1c5c6614cce8e0de4290cc3210d2b83b63033826040516108cc929190612d50565b60405180910390a150565b5f6108e1826108e8565b9050919050565b5f805f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20549050919050565b610935611512565b61093e5f611599565b565b600e818154811061094f575f80fd5b905f5260205f2090600402015f91509050805f015490806001015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690806002015490806003015f9054906101000a900460ff16908060030160019054906101000a900460ff16908060030160029054906101000a900460ff16905086565b60065481565b600c5481565b60095481565b5f60055f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b606060048054610a1590613146565b80601f0160208091040260200160405190810160405280929190818152602001828054610a4190613146565b8015610a8c5780601f10610a6357610100808354040283529160200191610a8c565b820191905f5260205f20905b815481529060010190602001808311610a6f57829003601f168201915b5050505050905090565b60085481565b6008548111610ae0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ad7906132bc565b60405180910390fd5b80610aea336108e8565b1015610b2b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b2290613324565b60405180910390fd5b5f601060018160018154018082558091505003905f5260205f209060020201905081816001018190555081600a5f828254610b669190613342565b9250508190555033815f015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507fcefb8f1d527a7c7f5628a1580ba499be740fb15959fd5c4ae1dfafbe38222f23601080549050604051610be29190612c79565b60405180910390a160046010805490501115610c0157610c0061165c565b5b5050565b5f80610c0f611376565b9050610c1c818585611422565b600191505092915050565b5f601160018160018154018082558091505003905f5260205f2090600802019050600754815f018190555060075f815480929190610c6490613375565b919050555084816002015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555083816003015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555082816001019081610cfe9190613559565b505f8160030160146101000a81548160ff021916908315150217905550610e1082610d2991906131a3565b42610d349190613342565b81600601819055507fc5dd985576ef3e0b2ba9df51ab1055a642355739126b09f7ed6b7f9b66fa0f95815f015482604051610d70929190613b64565b60405180910390a1610d84815f0154611b5c565b5050505050565b600d5481565b60118181548110610da0575f80fd5b905f5260205f2090600802015f91509050805f015490806001018054610dc590613146565b80601f0160208091040260200160405190810160405280929190818152602001828054610df190613146565b8015610e3c5780601f10610e1357610100808354040283529160200191610e3c565b820191905f5260205f20905b815481529060010190602001808311610e1f57829003601f168201915b505050505090806002015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690806003015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060030160149054906101000a900460ff16908060060154908060070154905087565b600f8181548110610ebe575f80fd5b905f5260205f2090600202015f91509050805f015f9054906101000a900460ff16908060010154905082565b5f60015f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2054905092915050565b6001151560118481548110610f8457610f83613b92565b5b905f5260205f20906008020160030160149054906101000a900460ff16151503610fe3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fda90613c09565b60405180910390fd5b600d5f815480929190610ff590613375565b91905055505f6011848154811061100f5761100e613b92565b5b905f5260205f20906008020190505f80805f90505b83600401805490508110156110c3573373ffffffffffffffffffffffffffffffffffffffff168460040182815481106110605761105f613b92565b5b905f5260205f2090600402016001015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16036110b657600192508091506110c3565b8080600101915050611024565b5081611104576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110fb90613c97565b60405180910390fd5b5f151583600401828154811061111d5761111c613b92565b5b905f5260205f2090600402016003015f9054906101000a900460ff1615151461117b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161117290613cff565b60405180910390fd5b83611185336108e8565b10156111c6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111bd90613d8d565b60405180910390fd5b826005016040518060400160405280876111e0575f6111e3565b60015b60ff16815260200186815250908060018154018082558091505060019003905f5260205f2090600202015f909190919091505f820151815f015f6101000a81548160ff021916908360ff160217905550602082015181600101555050600183600401828154811061125757611256613b92565b5b905f5260205f2090600402016003015f6101000a81548160ff0219169083151502179055508483600401828154811061129357611292613b92565b5b905f5260205f20906004020160030160016101000a81548160ff0219169083151502179055508260060154421015806112cf5750600c54600d54145b156112de576112dd83611e88565b5b505050505050565b5f601080549050905090565b6112fa611512565b5f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160361136a575f6040517f1e4fbdf70000000000000000000000000000000000000000000000000000000081526004016113619190612e01565b60405180910390fd5b61137381611599565b50565b5f33905090565b61138a8383836001611f88565b505050565b5f61139a8484610eea565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81101561141c578181101561140d578281836040517ffb8f41b200000000000000000000000000000000000000000000000000000000815260040161140493929190613dab565b60405180910390fd5b61141b84848484035f611f88565b5b50505050565b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603611492575f6040517f96c6fd1e0000000000000000000000000000000000000000000000000000000081526004016114899190612e01565b60405180910390fd5b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603611502575f6040517fec442f050000000000000000000000000000000000000000000000000000000081526004016114f99190612e01565b60405180910390fd5b61150d838383612157565b505050565b61151a611376565b73ffffffffffffffffffffffffffffffffffffffff166115386109de565b73ffffffffffffffffffffffffffffffffffffffff16146115975761155b611376565b6040517f118cdaa700000000000000000000000000000000000000000000000000000000815260040161158e9190612e01565b60405180910390fd5b565b5f60055f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508160055f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600560108054905010156116a5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161169c90613e2a565b60405180910390fd5b601080549050600a546116b89190613e75565b6009819055505f60108054905067ffffffffffffffff8111156116de576116dd612e22565b5b60405190808252806020026020018201604052801561170c5781602001602082028036833780820191505090505b5090505f60108054905067ffffffffffffffff81111561172f5761172e612e22565b5b60405190808252806020026020018201604052801561175d5781602001602082028036833780820191505090505b5090505f5b6010805490508110156117ea5761179e6010828154811061178657611785613b92565b5b905f5260205f20906002020160010154600954612370565b8382815181106117b1576117b0613b92565b5b602002602001018181525050808282815181106117d1576117d0613b92565b5b6020026020010181815250508080600101915050611762565b506117f5828261239e565b5f5b600b548110156119f7575f82828151811061181557611814613b92565b5b602002602001015190505f6040518060c001604052808381526020016010848154811061184557611844613b92565b5b905f5260205f2090600202015f015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001601084815481106118a2576118a1613b92565b5b905f5260205f2090600202016001015481526020015f151581526020015f151581526020015f15158152509050600e81908060018154018082558091505060019003905f5260205f2090600402015f909190919091505f820151815f01556020820151816001015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550604082015181600201556060820151816003015f6101000a81548160ff02191690831515021790555060808201518160030160016101000a81548160ff02191690831515021790555060a08201518160030160026101000a81548160ff02191690831515021790555050507fdc05738a00d0cc2a3212b44a679e3e3396738abab34bcb107a0e5ffc89c8c1dc826040516119e09190612c79565b60405180910390a1505080806001019150506117f7565b507e3419f2d97b26d3f931679b32bf68cb2440aedb2763b371d98a66f06a28c770600e604051611a279190613f10565b60405180910390a1611b44600e805480602002602001604051908101604052809291908181526020015f905b82821015611b3b578382905f5260205f2090600402016040518060c00160405290815f8201548152602001600182015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160028201548152602001600382015f9054906101000a900460ff161515151581526020016003820160019054906101000a900460ff161515151581526020016003820160029054906101000a900460ff16151515158152505081526020019060010190611a53565b50505050612512565b60105f611b519190612a67565b5f600a819055505050565b5f60118281548110611b7157611b70613b92565b5b905f5260205f2090600802016004018054905014611bc4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611bbb90613f7a565b60405180910390fd5b600c54600e805490501015611c0e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611c0590613fe2565b60405180910390fd5b5f611c17612564565b90505f5b600c54811015611e095760118381548110611c3957611c38613b92565b5b905f5260205f209060080201600401600e838381518110611c5d57611c5c613b92565b5b602002602001015181548110611c7657611c75613b92565b5b905f5260205f209060040201908060018154018082558091505060019003905f5260205f2090600402015f909190919091505f820154815f0155600182015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16816001015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060028201548160020155600382015f9054906101000a900460ff16816003015f6101000a81548160ff0219169083151502179055506003820160019054906101000a900460ff168160030160016101000a81548160ff0219169083151502179055506003820160029054906101000a900460ff168160030160026101000a81548160ff02191690831515021790555050506001600e838381518110611dbd57611dbc613b92565b5b602002602001015181548110611dd657611dd5613b92565b5b905f5260205f20906004020160030160026101000a81548160ff0219169083151502179055508080600101915050611c1b565b507f251ac600cba98b129d49b609615adcd7af697b9623b393bafb2131af1a29360a60118381548110611e3f57611e3e613b92565b5b905f5260205f20906008020160118481548110611e5f57611e5e613b92565b5b905f5260205f209060080201600401604051611e7c929190614109565b60405180910390a15050565b5f805f5b8360050180549050811015611f05576001846005018281548110611eb357611eb2613b92565b5b905f5260205f2090600202015f015f9054906101000a900460ff1660ff1603611ee9578280611ee190613375565b935050611ef8565b8180611ef490613375565b9250505b8080600101915050611e8c565b50808211611f13575f611f16565b60015b60ff16836007018190555060018360030160146101000a81548160ff0219169083151502179055507fe7826f6c2f59cd010bdfd3c98446ff5aba45ac109497b02358a612b62e45c124838460070154604051611f7392919061413e565b60405180910390a1611f836126e9565b505050565b5f73ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1603611ff8575f6040517fe602df05000000000000000000000000000000000000000000000000000000008152600401611fef9190612e01565b60405180910390fd5b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603612068575f6040517f94280d6200000000000000000000000000000000000000000000000000000000815260040161205f9190612e01565b60405180910390fd5b8160015f8673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20819055508015612151578273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040516121489190612c79565b60405180910390a35b50505050565b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036121a7578060025f82825461219b9190613342565b92505081905550612275565b5f805f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2054905081811015612230578381836040517fe450d38c00000000000000000000000000000000000000000000000000000000815260040161222793929190613dab565b60405180910390fd5b8181035f808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2081905550505b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036122bc578060025f8282540392505081905550612306565b805f808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f82825401925050819055505b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516123639190612c79565b60405180910390a3505050565b5f818311612389578282612384919061416c565b612396565b8183612395919061416c565b5b905092915050565b5f5b825181101561250d575f6001826123b79190613342565b90505b83518110156124ff578381815181106123d6576123d5613b92565b5b60200260200101518483815181106123f1576123f0613b92565b5b602002602001015111156124f2575f84838151811061241357612412613b92565b5b602002602001015190508482815181106124305761242f613b92565b5b602002602001015185848151811061244b5761244a613b92565b5b6020026020010181815250508085838151811061246b5761246a613b92565b5b6020026020010181815250505f84848151811061248b5761248a613b92565b5b602002602001015190508483815181106124a8576124a7613b92565b5b60200260200101518585815181106124c3576124c2613b92565b5b602002602001018181525050808584815181106124e3576124e2613b92565b5b60200260200101818152505050505b80806001019150506123ba565b5080806001019150506123a0565b505050565b5f5b600e80549050811015612560575f82828151811061253557612534613b92565b5b602002602001015190506125528160200151308360400151611422565b508080600101915050612514565b5050565b60605f600e8054905067ffffffffffffffff81111561258657612585612e22565b5b6040519080825280602002602001820160405280156125b45781602001602082028036833780820191505090505b5090505f5b600e805490508110156125f357808282815181106125da576125d9613b92565b5b60200260200101818152505080806001019150506125b9565b505f6001600e80549050612607919061416c565b90505b5f8111156126e1575f6001826126209190613342565b424484604051602001612635939291906141bf565b604051602081830303815290604052805190602001205f1c61265791906141fb565b905082818151811061266c5761266b613b92565b5b602002602001015183838151811061268757612686613b92565b5b60200260200101518484815181106126a2576126a1613b92565b5b602002602001018584815181106126bc576126bb613b92565b5b60200260200101828152508281525050505080806126d99061422b565b91505061260a565b508091505090565b5f805f5b60116001601180549050612701919061416c565b8154811061271257612711613b92565b5b905f5260205f209060080201600401805490508110156128c9575f60116001601180549050612741919061416c565b8154811061275257612751613b92565b5b905f5260205f209060080201600401828154811061277357612772613b92565b5b905f5260205f2090600402019050600160116001601180549050612797919061416c565b815481106127a8576127a7613b92565b5b905f5260205f209060080201600701541415158160030160019054906101000a900460ff161515146128a857600281600201546127e59190613e75565b816002015f8282546127f7919061416c565b925050819055506002816002015461280f9190613e75565b8461281a9190613342565b93506128373330600284600201546128329190613e75565b611422565b7fc7e4341e6746fccb235d3ccb951dfcce955b13b67040b0ea16d188c975157199816001015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff166002836002015461288d9190613e75565b60405161289b929190612d50565b60405180910390a16128bb565b8060020154836128b89190613342565b92505b5080806001019150506126ed565b505f5b601160016011805490506128e0919061416c565b815481106128f1576128f0613b92565b5b905f5260205f20906008020160040180549050811015612a62575f60116001601180549050612920919061416c565b8154811061293157612930613b92565b5b905f5260205f209060080201600401828154811061295257612951613b92565b5b905f5260205f2090600402019050600160116001601180549050612976919061416c565b8154811061298757612986613b92565b5b905f5260205f209060080201600701541415158160030160019054906101000a900460ff16151503612a54575f838583600201546129c591906131a3565b6129cf9190613e75565b905080826002015f8282546129e49190613342565b925050819055506129f6303383611422565b7fc7e4341e6746fccb235d3ccb951dfcce955b13b67040b0ea16d188c975157199826001015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1682604051612a4a929190612d50565b60405180910390a1505b5080806001019150506128cc565b505050565b5080545f8255600202905f5260205f2090810190612a859190612a88565b50565b5b80821115612ac7575f8082015f6101000a81549073ffffffffffffffffffffffffffffffffffffffff0219169055600182015f905550600201612a89565b5090565b5f81519050919050565b5f82825260208201905092915050565b8281835e5f83830152505050565b5f601f19601f8301169050919050565b5f612b0d82612acb565b612b178185612ad5565b9350612b27818560208601612ae5565b612b3081612af3565b840191505092915050565b5f6020820190508181035f830152612b538184612b03565b905092915050565b5f604051905090565b5f80fd5b5f80fd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f612b9582612b6c565b9050919050565b612ba581612b8b565b8114612baf575f80fd5b50565b5f81359050612bc081612b9c565b92915050565b5f819050919050565b612bd881612bc6565b8114612be2575f80fd5b50565b5f81359050612bf381612bcf565b92915050565b5f8060408385031215612c0f57612c0e612b64565b5b5f612c1c85828601612bb2565b9250506020612c2d85828601612be5565b9150509250929050565b5f8115159050919050565b612c4b81612c37565b82525050565b5f602082019050612c645f830184612c42565b92915050565b612c7381612bc6565b82525050565b5f602082019050612c8c5f830184612c6a565b92915050565b5f805f60608486031215612ca957612ca8612b64565b5b5f612cb686828701612bb2565b9350506020612cc786828701612bb2565b9250506040612cd886828701612be5565b9150509250925092565b5f60ff82169050919050565b612cf781612ce2565b82525050565b5f602082019050612d105f830184612cee565b92915050565b5f60208284031215612d2b57612d2a612b64565b5b5f612d3884828501612be5565b91505092915050565b612d4a81612b8b565b82525050565b5f604082019050612d635f830185612d41565b612d706020830184612c6a565b9392505050565b5f60208284031215612d8c57612d8b612b64565b5b5f612d9984828501612bb2565b91505092915050565b5f60c082019050612db55f830189612c6a565b612dc26020830188612d41565b612dcf6040830187612c6a565b612ddc6060830186612c42565b612de96080830185612c42565b612df660a0830184612c42565b979650505050505050565b5f602082019050612e145f830184612d41565b92915050565b5f80fd5b5f80fd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b612e5882612af3565b810181811067ffffffffffffffff82111715612e7757612e76612e22565b5b80604052505050565b5f612e89612b5b565b9050612e958282612e4f565b919050565b5f67ffffffffffffffff821115612eb457612eb3612e22565b5b612ebd82612af3565b9050602081019050919050565b828183375f83830152505050565b5f612eea612ee584612e9a565b612e80565b905082815260208101848484011115612f0657612f05612e1e565b5b612f11848285612eca565b509392505050565b5f82601f830112612f2d57612f2c612e1a565b5b8135612f3d848260208601612ed8565b91505092915050565b5f805f8060808587031215612f5e57612f5d612b64565b5b5f612f6b87828801612bb2565b9450506020612f7c87828801612bb2565b935050604085013567ffffffffffffffff811115612f9d57612f9c612b68565b5b612fa987828801612f19565b9250506060612fba87828801612be5565b91505092959194509250565b5f60e082019050612fd95f83018a612c6a565b8181036020830152612feb8189612b03565b9050612ffa6040830188612d41565b6130076060830187612d41565b6130146080830186612c42565b61302160a0830185612c6a565b61302e60c0830184612c6a565b98975050505050505050565b5f60408201905061304d5f830185612cee565b61305a6020830184612c6a565b9392505050565b5f806040838503121561307757613076612b64565b5b5f61308485828601612bb2565b925050602061309585828601612bb2565b9150509250929050565b6130a881612c37565b81146130b2575f80fd5b50565b5f813590506130c38161309f565b92915050565b5f805f606084860312156130e0576130df612b64565b5b5f6130ed86828701612be5565b93505060206130fe868287016130b5565b925050604061310f86828701612be5565b9150509250925092565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f600282049050600182168061315d57607f821691505b6020821081036131705761316f613119565b5b50919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f6131ad82612bc6565b91506131b883612bc6565b92508282026131c681612bc6565b915082820484148315176131dd576131dc613176565b5b5092915050565b7f4e6f7420656e6f75676820746f6b656e7320696e20636f6e74726163740000005f82015250565b5f613218601d83612ad5565b9150613223826131e4565b602082019050919050565b5f6020820190508181035f8301526132458161320c565b9050919050565b7f20416d6f756e74206c657373207468616e206d696e696d756d20736574206c695f8201527f6d69740000000000000000000000000000000000000000000000000000000000602082015250565b5f6132a6602383612ad5565b91506132b18261324c565b604082019050919050565b5f6020820190508181035f8301526132d38161329a565b9050919050565b7f20476172656562207361616c65206268616167212100000000000000000000005f82015250565b5f61330e601583612ad5565b9150613319826132da565b602082019050919050565b5f6020820190508181035f83015261333b81613302565b9050919050565b5f61334c82612bc6565b915061335783612bc6565b925082820190508082111561336f5761336e613176565b5b92915050565b5f61337f82612bc6565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036133b1576133b0613176565b5b600182019050919050565b5f819050815f5260205f209050919050565b5f6020601f8301049050919050565b5f82821b905092915050565b5f600883026134187fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826133dd565b61342286836133dd565b95508019841693508086168417925050509392505050565b5f819050919050565b5f61345d61345861345384612bc6565b61343a565b612bc6565b9050919050565b5f819050919050565b61347683613443565b61348a61348282613464565b8484546133e9565b825550505050565b5f90565b61349e613492565b6134a981848461346d565b505050565b5b818110156134cc576134c15f82613496565b6001810190506134af565b5050565b601f821115613511576134e2816133bc565b6134eb846133ce565b810160208510156134fa578190505b61350e613506856133ce565b8301826134ae565b50505b505050565b5f82821c905092915050565b5f6135315f1984600802613516565b1980831691505092915050565b5f6135498383613522565b9150826002028217905092915050565b61356282612acb565b67ffffffffffffffff81111561357b5761357a612e22565b5b6135858254613146565b6135908282856134d0565b5f60209050601f8311600181146135c1575f84156135af578287015190505b6135b9858261353e565b865550613620565b601f1984166135cf866133bc565b5f5b828110156135f6578489015182556001820191506020850194506020810190506135d1565b86831015613613578489015161360f601f891682613522565b8355505b6001600288020188555050505b505050505050565b5f815f1c9050919050565b5f819050919050565b5f61364e61364983613628565b613633565b9050919050565b61365e81612bc6565b82525050565b5f82825260208201905092915050565b5f815461368081613146565b61368a8186613664565b9450600182165f81146136a457600181146136ba576136ec565b60ff1983168652811515602002860193506136ec565b6136c3856133bc565b5f5b838110156136e4578154818901526001820191506020810190506136c5565b808801955050505b50505092915050565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f61372661372183613628565b6136f5565b9050919050565b61373681612b8b565b82525050565b5f8160a01c9050919050565b5f60ff82169050919050565b5f6137666137618361373c565b613748565b9050919050565b61377681612c37565b82525050565b5f81549050919050565b5f82825260208201905092915050565b5f819050815f5260205f209050919050565b5f6137ba6137b583613628565b613748565b9050919050565b5f8160081c9050919050565b5f6137df6137da836137c1565b613748565b9050919050565b5f8160101c9050919050565b5f6138046137ff836137e6565b613748565b9050919050565b60c082015f80830154905061381f8161363c565b61382b5f860182613655565b506001830154905061383c81613714565b613849602086018261372d565b506002830154905061385a8161363c565b6138676040860182613655565b5060038301549050613878816137a8565b613885606086018261376d565b5061388f816137cd565b61389c608086018261376d565b506138a6816137f2565b6138b360a086018261376d565b5050505050565b5f6138c5838361380b565b60c08301905092915050565b5f600482019050919050565b5f6138e78261377c565b6138f18185613786565b93506138fc83613796565b805f5b8381101561392b578161391288826138ba565b975061391d836138d1565b9250506001810190506138ff565b5085935050505092915050565b5f81549050919050565b5f82825260208201905092915050565b5f819050815f5260205f209050919050565b5f60ff82169050919050565b5f61398261397d83613628565b613964565b9050919050565b61399281612ce2565b82525050565b604082015f8083015490506139ac81613970565b6139b85f860182613989565b50600183015490506139c98161363c565b6139d66020860182613655565b5050505050565b5f6139e88383613998565b60408301905092915050565b5f600282019050919050565b5f613a0a82613938565b613a148185613942565b9350613a1f83613952565b805f5b83811015613a4e5781613a3588826139dd565b9750613a40836139f4565b925050600181019050613a22565b5085935050505092915050565b5f61012083015f808401549050613a718161363c565b613a7d5f870182613655565b50600184018583036020870152613a948382613674565b92505060028401549050613aa781613714565b613ab4604087018261372d565b5060038401549050613ac581613714565b613ad2606087018261372d565b50613adc81613754565b613ae9608087018261376d565b506004840185830360a0870152613b0083826138dd565b9250506005840185830360c0870152613b198382613a00565b92505060068401549050613b2c8161363c565b613b3960e0870182613655565b5060078401549050613b4a8161363c565b613b58610100870182613655565b50819250505092915050565b5f604082019050613b775f830185612c6a565b8181036020830152613b898184613a5b565b90509392505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b7f546865206469737075746520697320616c7265616479207265736f6c766564005f82015250565b5f613bf3601f83612ad5565b9150613bfe82613bbf565b602082019050919050565b5f6020820190508181035f830152613c2081613be7565b9050919050565b7f596f7520617265206e6f742061737369676e65642061732061206a75726f72205f8201527f666f722074686973206469737075746500000000000000000000000000000000602082015250565b5f613c81603083612ad5565b9150613c8c82613c27565b604082019050919050565b5f6020820190508181035f830152613cae81613c75565b9050919050565b7f596f75206861766520616c726561647920766f746564000000000000000000005f82015250565b5f613ce9601683612ad5565b9150613cf482613cb5565b602082019050919050565b5f6020820190508181035f830152613d1681613cdd565b9050919050565b7f496e73756666696369656e7420746f6b656e2062616c616e636520666f7220625f8201527f61636b696e670000000000000000000000000000000000000000000000000000602082015250565b5f613d77602683612ad5565b9150613d8282613d1d565b604082019050919050565b5f6020820190508181035f830152613da481613d6b565b9050919050565b5f606082019050613dbe5f830186612d41565b613dcb6020830185612c6a565b613dd86040830184612c6a565b949350505050565b7f4e6f7420656e6f756768206a75726f727320746f2073656c65637400000000005f82015250565b5f613e14601b83612ad5565b9150613e1f82613de0565b602082019050919050565b5f6020820190508181035f830152613e4181613e08565b9050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601260045260245ffd5b5f613e7f82612bc6565b9150613e8a83612bc6565b925082613e9a57613e99613e48565b5b828204905092915050565b5f82825260208201905092915050565b5f613ebf8261377c565b613ec98185613ea5565b9350613ed483613796565b805f5b83811015613f035781613eea88826138ba565b9750613ef5836138d1565b925050600181019050613ed7565b5085935050505092915050565b5f6020820190508181035f830152613f288184613eb5565b905092915050565b7f4a75726f727320616c72656164792073656c65637465640000000000000000005f82015250565b5f613f64601783612ad5565b9150613f6f82613f30565b602082019050919050565b5f6020820190508181035f830152613f9181613f58565b9050919050565b7f4e6f7420656e6f756768206a75726f727320617661696c61626c6500000000005f82015250565b5f613fcc601b83612ad5565b9150613fd782613f98565b602082019050919050565b5f6020820190508181035f830152613ff981613fc0565b9050919050565b5f61012083015f8084015490506140168161363c565b6140225f870182613655565b506001840185830360208701526140398382613674565b9250506002840154905061404c81613714565b614059604087018261372d565b506003840154905061406a81613714565b614077606087018261372d565b5061408181613754565b61408e608087018261376d565b506004840185830360a08701526140a583826138dd565b9250506005840185830360c08701526140be8382613a00565b925050600684015490506140d18161363c565b6140de60e0870182613655565b50600784015490506140ef8161363c565b6140fd610100870182613655565b50819250505092915050565b5f6040820190508181035f8301526141218185614000565b905081810360208301526141358184613eb5565b90509392505050565b5f6040820190508181035f8301526141568185613a5b565b90506141656020830184612c6a565b9392505050565b5f61417682612bc6565b915061418183612bc6565b925082820390508181111561419957614198613176565b5b92915050565b5f819050919050565b6141b96141b482612bc6565b61419f565b82525050565b5f6141ca82866141a8565b6020820191506141da82856141a8565b6020820191506141ea82846141a8565b602082019150819050949350505050565b5f61420582612bc6565b915061421083612bc6565b9250826142205761421f613e48565b5b828206905092915050565b5f61423582612bc6565b91505f820361424757614246613176565b5b60018203905091905056fea2646970667358221220d3b8bf0ca5de518e8b531b55766fa309455300b7c034c88bcb01bd70753889ea64736f6c634300081a0033"