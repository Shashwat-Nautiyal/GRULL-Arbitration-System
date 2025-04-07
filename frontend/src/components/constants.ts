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
		"inputs": [],
		"name": "triggerJurorSelection",
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

export const contractBytecode = "60806040526064600655600a6008555f600a556004600b556003600c555f600d5534801561002b575f80fd5b50336040518060400160405280600581526020017f4752554c4c0000000000000000000000000000000000000000000000000000008152506040518060400160405280600581526020017f4752554c4c00000000000000000000000000000000000000000000000000000081525081600390816100a8919061071a565b5080600490816100b8919061071a565b5050505f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160361012b575f6040517f1e4fbdf70000000000000000000000000000000000000000000000000000000081526004016101229190610828565b60405180910390fd5b61013a8161017760201b60201c565b506101723061014d61023a60201b60201c565b600a61015991906109a9565b620186a061016791906109f3565b61024260201b60201c565b610ac4565b5f60055f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508160055f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b5f6012905090565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036102b2575f6040517fec442f050000000000000000000000000000000000000000000000000000000081526004016102a99190610828565b60405180910390fd5b6102c35f83836102c760201b60201c565b5050565b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610317578060025f82825461030b9190610a34565b925050819055506103e5565b5f805f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20549050818110156103a0578381836040517fe450d38c00000000000000000000000000000000000000000000000000000000815260040161039793929190610a76565b60405180910390fd5b8181035f808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2081905550505b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361042c578060025f8282540392505081905550610476565b805f808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f82825401925050819055505b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516104d39190610aab565b60405180910390a3505050565b5f81519050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f600282049050600182168061055b57607f821691505b60208210810361056e5761056d610517565b5b50919050565b5f819050815f5260205f209050919050565b5f6020601f8301049050919050565b5f82821b905092915050565b5f600883026105d07fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82610595565b6105da8683610595565b95508019841693508086168417925050509392505050565b5f819050919050565b5f819050919050565b5f61061e610619610614846105f2565b6105fb565b6105f2565b9050919050565b5f819050919050565b61063783610604565b61064b61064382610625565b8484546105a1565b825550505050565b5f90565b61065f610653565b61066a81848461062e565b505050565b5b8181101561068d576106825f82610657565b600181019050610670565b5050565b601f8211156106d2576106a381610574565b6106ac84610586565b810160208510156106bb578190505b6106cf6106c785610586565b83018261066f565b50505b505050565b5f82821c905092915050565b5f6106f25f19846008026106d7565b1980831691505092915050565b5f61070a83836106e3565b9150826002028217905092915050565b610723826104e0565b67ffffffffffffffff81111561073c5761073b6104ea565b5b6107468254610544565b610751828285610691565b5f60209050601f831160018114610782575f8415610770578287015190505b61077a85826106ff565b8655506107e1565b601f19841661079086610574565b5f5b828110156107b757848901518255600182019150602085019450602081019050610792565b868310156107d457848901516107d0601f8916826106e3565b8355505b6001600288020188555050505b505050505050565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f610812826107e9565b9050919050565b61082281610808565b82525050565b5f60208201905061083b5f830184610819565b92915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f8160011c9050919050565b5f808291508390505b60018511156108c35780860481111561089f5761089e610841565b5b60018516156108ae5780820291505b80810290506108bc8561086e565b9450610883565b94509492505050565b5f826108db5760019050610996565b816108e8575f9050610996565b81600181146108fe576002811461090857610937565b6001915050610996565b60ff84111561091a57610919610841565b5b8360020a91508482111561093157610930610841565b5b50610996565b5060208310610133831016604e8410600b841016171561096c5782820a90508381111561096757610966610841565b5b610996565b610979848484600161087a565b925090508184048111156109905761098f610841565b5b81810290505b9392505050565b5f60ff82169050919050565b5f6109b3826105f2565b91506109be8361099d565b92506109eb7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff84846108cc565b905092915050565b5f6109fd826105f2565b9150610a08836105f2565b9250828202610a16816105f2565b91508282048414831517610a2d57610a2c610841565b5b5092915050565b5f610a3e826105f2565b9150610a49836105f2565b9250828201905080821115610a6157610a60610841565b5b92915050565b610a70816105f2565b82525050565b5f606082019050610a895f830186610819565b610a966020830185610a67565b610aa36040830184610a67565b949350505050565b5f602082019050610abe5f830184610a67565b92915050565b6143d880610ad15f395ff3fe6080604052600436106101c1575f3560e01c80638aeb1dc8116100f6578063c638407111610094578063df30e32511610063578063df30e3251461067a578063ef416248146106a2578063f2fde38b146106cc578063fa2ac738146106f4576101c1565b8063c638407114610595578063d9330e48146105bf578063db46e82b14610601578063dd62ed3e1461063e576101c1565b806395e8266c116100d057806395e8266c146104df5780639ac6f2c814610509578063a9059cbb14610531578063c3ac92891461056d576101c1565b80638aeb1dc8146104615780638da5cb5b1461048b57806395d89b41146104b5576101c1565b80633610724e11610163578063715018a61161013d578063715018a6146103b65780637cd38ff8146103cc5780637ff9b5961461040d5780638002620714610437576101c1565b80633610724e14610322578063450efe211461033e57806370a082311461037a576101c1565b806318160ddd1161019f57806318160ddd1461025557806323b872dd1461027f578063313ce567146102bb57806333ca8c98146102e5576101c1565b806306fdde03146101c5578063095ea7b3146101ef578063138e4f261461022b575b5f80fd5b3480156101d0575f80fd5b506101d961070a565b6040516101e69190612bba565b60405180910390f35b3480156101fa575f80fd5b5061021560048036038101906102109190612c78565b61079a565b6040516102229190612cd0565b60405180910390f35b348015610236575f80fd5b5061023f6107bc565b60405161024c9190612cf8565b60405180910390f35b348015610260575f80fd5b506102696107c2565b6040516102769190612cf8565b60405180910390f35b34801561028a575f80fd5b506102a560048036038101906102a09190612d11565b6107cb565b6040516102b29190612cd0565b60405180910390f35b3480156102c6575f80fd5b506102cf6107f9565b6040516102dc9190612d7c565b60405180910390f35b3480156102f0575f80fd5b5061030b60048036038101906103069190612d95565b610801565b604051610319929190612dcf565b60405180910390f35b61033c60048036038101906103379190612d95565b61084f565b005b348015610349575f80fd5b50610364600480360381019061035f9190612df6565b6108f8565b6040516103719190612cf8565b60405180910390f35b348015610385575f80fd5b506103a0600480360381019061039b9190612df6565b610909565b6040516103ad9190612cf8565b60405180910390f35b3480156103c1575f80fd5b506103ca61094e565b005b3480156103d7575f80fd5b506103f260048036038101906103ed9190612d95565b610961565b60405161040496959493929190612e21565b60405180910390f35b348015610418575f80fd5b506104216109ed565b60405161042e9190612cf8565b60405180910390f35b348015610442575f80fd5b5061044b6109f3565b6040516104589190612cf8565b60405180910390f35b34801561046c575f80fd5b506104756109f9565b6040516104829190612cf8565b60405180910390f35b348015610496575f80fd5b5061049f6109ff565b6040516104ac9190612e80565b60405180910390f35b3480156104c0575f80fd5b506104c9610a27565b6040516104d69190612bba565b60405180910390f35b3480156104ea575f80fd5b506104f3610ab7565b6040516105009190612cf8565b60405180910390f35b348015610514575f80fd5b5061052f600480360381019061052a9190612d95565b610abd565b005b34801561053c575f80fd5b5061055760048036038101906105529190612c78565b610c0f565b6040516105649190612cd0565b60405180910390f35b348015610578575f80fd5b50610593600480360381019061058e9190612fc5565b610c31565b005b3480156105a0575f80fd5b506105a9610d95565b6040516105b69190612cf8565b60405180910390f35b3480156105ca575f80fd5b506105e560048036038101906105e09190612d95565b610d9b565b6040516105f89796959493929190613045565b60405180910390f35b34801561060c575f80fd5b5061062760048036038101906106229190612d95565b610eb9565b6040516106359291906130b9565b60405180910390f35b348015610649575f80fd5b50610664600480360381019061065f91906130e0565b610ef4565b6040516106719190612cf8565b60405180910390f35b348015610685575f80fd5b506106a0600480360381019061069b9190613148565b610f76565b005b3480156106ad575f80fd5b506106b66112f0565b6040516106c39190612cf8565b60405180910390f35b3480156106d7575f80fd5b506106f260048036038101906106ed9190612df6565b6112fc565b005b3480156106ff575f80fd5b50610708611380565b005b606060038054610719906131c5565b80601f0160208091040260200160405190810160405280929190818152602001828054610745906131c5565b80156107905780601f1061076757610100808354040283529160200191610790565b820191905f5260205f20905b81548152906001019060200180831161077357829003601f168201915b5050505050905090565b5f806107a46113d3565b90506107b18185856113da565b600191505092915050565b600b5481565b5f600254905090565b5f806107d56113d3565b90506107e28582856113ec565b6107ed85858561147f565b60019150509392505050565b5f6012905090565b60108181548110610810575f80fd5b905f5260205f2090600202015f91509050805f015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010154905082565b60648161085c9190613222565b3414610866575f80fd5b8061087030610909565b10156108b1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108a8906132ad565b60405180910390fd5b6108bc30338361147f565b7f6ebf55d0cee4245affe84127b666e1c5c6614cce8e0de4290cc3210d2b83b63033826040516108ed929190612dcf565b60405180910390a150565b5f61090282610909565b9050919050565b5f805f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20549050919050565b61095661156f565b61095f5f6115f6565b565b600e8181548110610970575f80fd5b905f5260205f2090600402015f91509050805f015490806001015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690806002015490806003015f9054906101000a900460ff16908060030160019054906101000a900460ff16908060030160029054906101000a900460ff16905086565b60065481565b600c5481565b60095481565b5f60055f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b606060048054610a36906131c5565b80601f0160208091040260200160405190810160405280929190818152602001828054610a62906131c5565b8015610aad5780601f10610a8457610100808354040283529160200191610aad565b820191905f5260205f20905b815481529060010190602001808311610a9057829003601f168201915b5050505050905090565b60085481565b6008548111610b01576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610af89061333b565b60405180910390fd5b80610b0b33610909565b1015610b4c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b43906133a3565b60405180910390fd5b5f601060018160018154018082558091505003905f5260205f209060020201905081816001018190555081600a5f828254610b8791906133c1565b9250508190555033815f015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507fcefb8f1d527a7c7f5628a1580ba499be740fb15959fd5c4ae1dfafbe38222f23601080549050604051610c039190612cf8565b60405180910390a15050565b5f80610c196113d3565b9050610c2681858561147f565b600191505092915050565b5f601160018160018154018082558091505003905f5260205f2090600802019050600754815f018190555060075f815480929190610c6e906133f4565b919050555084816002015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555083816003015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555082816001019081610d0891906135d8565b505f8160030160146101000a81548160ff021916908315150217905550610e1082610d339190613222565b42610d3e91906133c1565b81600601819055507fc5dd985576ef3e0b2ba9df51ab1055a642355739126b09f7ed6b7f9b66fa0f95815f015482604051610d7a929190613be3565b60405180910390a1610d8e815f01546116b9565b5050505050565b600d5481565b60118181548110610daa575f80fd5b905f5260205f2090600802015f91509050805f015490806001018054610dcf906131c5565b80601f0160208091040260200160405190810160405280929190818152602001828054610dfb906131c5565b8015610e465780601f10610e1d57610100808354040283529160200191610e46565b820191905f5260205f20905b815481529060010190602001808311610e2957829003601f168201915b505050505090806002015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690806003015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060030160149054906101000a900460ff16908060060154908060070154905087565b600f8181548110610ec8575f80fd5b905f5260205f2090600202015f91509050805f015f9054906101000a900460ff16908060010154905082565b5f60015f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2054905092915050565b6001151560118481548110610f8e57610f8d613c11565b5b905f5260205f20906008020160030160149054906101000a900460ff16151503610fed576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fe490613c88565b60405180910390fd5b600d5f815480929190610fff906133f4565b91905055505f6011848154811061101957611018613c11565b5b905f5260205f20906008020190505f80805f90505b83600401805490508110156110cd573373ffffffffffffffffffffffffffffffffffffffff1684600401828154811061106a57611069613c11565b5b905f5260205f2090600402016001015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16036110c057600192508091506110cd565b808060010191505061102e565b508161110e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161110590613d16565b60405180910390fd5b5f151583600401828154811061112757611126613c11565b5b905f5260205f2090600402016003015f9054906101000a900460ff16151514611185576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161117c90613d7e565b60405180910390fd5b8361118f33610909565b10156111d0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111c790613e0c565b60405180910390fd5b826005016040518060400160405280876111ea575f6111ed565b60015b60ff16815260200186815250908060018154018082558091505060019003905f5260205f2090600202015f909190919091505f820151815f015f6101000a81548160ff021916908360ff160217905550602082015181600101555050600183600401828154811061126157611260613c11565b5b905f5260205f2090600402016003015f6101000a81548160ff0219169083151502179055508483600401828154811061129d5761129c613c11565b5b905f5260205f20906004020160030160016101000a81548160ff0219169083151502179055508260060154421015806112d95750600c54600d54145b156112e8576112e7836119e5565b5b505050505050565b5f601080549050905090565b61130461156f565b5f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603611374575f6040517f1e4fbdf700000000000000000000000000000000000000000000000000000000815260040161136b9190612e80565b60405180910390fd5b61137d816115f6565b50565b600560108054905010156113c9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113c090613e74565b60405180910390fd5b6113d1611ae5565b565b5f33905090565b6113e78383836001611fe5565b505050565b5f6113f78484610ef4565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff811015611479578181101561146a578281836040517ffb8f41b200000000000000000000000000000000000000000000000000000000815260040161146193929190613e92565b60405180910390fd5b61147884848484035f611fe5565b5b50505050565b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036114ef575f6040517f96c6fd1e0000000000000000000000000000000000000000000000000000000081526004016114e69190612e80565b60405180910390fd5b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361155f575f6040517fec442f050000000000000000000000000000000000000000000000000000000081526004016115569190612e80565b60405180910390fd5b61156a8383836121b4565b505050565b6115776113d3565b73ffffffffffffffffffffffffffffffffffffffff166115956109ff565b73ffffffffffffffffffffffffffffffffffffffff16146115f4576115b86113d3565b6040517f118cdaa70000000000000000000000000000000000000000000000000000000081526004016115eb9190612e80565b60405180910390fd5b565b5f60055f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508160055f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b5f601182815481106116ce576116cd613c11565b5b905f5260205f2090600802016004018054905014611721576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161171890613f11565b60405180910390fd5b600c54600e80549050101561176b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161176290613f79565b60405180910390fd5b5f6117746123cd565b90505f5b600c54811015611966576011838154811061179657611795613c11565b5b905f5260205f209060080201600401600e8383815181106117ba576117b9613c11565b5b6020026020010151815481106117d3576117d2613c11565b5b905f5260205f209060040201908060018154018082558091505060019003905f5260205f2090600402015f909190919091505f820154815f0155600182015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16816001015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060028201548160020155600382015f9054906101000a900460ff16816003015f6101000a81548160ff0219169083151502179055506003820160019054906101000a900460ff168160030160016101000a81548160ff0219169083151502179055506003820160029054906101000a900460ff168160030160026101000a81548160ff02191690831515021790555050506001600e83838151811061191a57611919613c11565b5b60200260200101518154811061193357611932613c11565b5b905f5260205f20906004020160030160026101000a81548160ff0219169083151502179055508080600101915050611778565b507f251ac600cba98b129d49b609615adcd7af697b9623b393bafb2131af1a29360a6011838154811061199c5761199b613c11565b5b905f5260205f209060080201601184815481106119bc576119bb613c11565b5b905f5260205f2090600802016004016040516119d992919061410b565b60405180910390a15050565b5f805f5b8360050180549050811015611a62576001846005018281548110611a1057611a0f613c11565b5b905f5260205f2090600202015f015f9054906101000a900460ff1660ff1603611a46578280611a3e906133f4565b935050611a55565b8180611a51906133f4565b9250505b80806001019150506119e9565b50808211611a70575f611a73565b60015b60ff16836007018190555060018360030160146101000a81548160ff0219169083151502179055507fe7826f6c2f59cd010bdfd3c98446ff5aba45ac109497b02358a612b62e45c124838460070154604051611ad0929190614140565b60405180910390a1611ae0612552565b505050565b60056010805490501015611b2e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611b2590613e74565b60405180910390fd5b601080549050600a54611b41919061419b565b6009819055505f60108054905067ffffffffffffffff811115611b6757611b66612ea1565b5b604051908082528060200260200182016040528015611b955781602001602082028036833780820191505090505b5090505f60108054905067ffffffffffffffff811115611bb857611bb7612ea1565b5b604051908082528060200260200182016040528015611be65781602001602082028036833780820191505090505b5090505f5b601080549050811015611c7357611c2760108281548110611c0f57611c0e613c11565b5b905f5260205f209060020201600101546009546128d0565b838281518110611c3a57611c39613c11565b5b60200260200101818152505080828281518110611c5a57611c59613c11565b5b6020026020010181815250508080600101915050611beb565b50611c7e82826128fe565b5f5b600b54811015611e80575f828281518110611c9e57611c9d613c11565b5b602002602001015190505f6040518060c0016040528083815260200160108481548110611cce57611ccd613c11565b5b905f5260205f2090600202015f015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160108481548110611d2b57611d2a613c11565b5b905f5260205f2090600202016001015481526020015f151581526020015f151581526020015f15158152509050600e81908060018154018082558091505060019003905f5260205f2090600402015f909190919091505f820151815f01556020820151816001015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550604082015181600201556060820151816003015f6101000a81548160ff02191690831515021790555060808201518160030160016101000a81548160ff02191690831515021790555060a08201518160030160026101000a81548160ff02191690831515021790555050507fdc05738a00d0cc2a3212b44a679e3e3396738abab34bcb107a0e5ffc89c8c1dc82604051611e699190612cf8565b60405180910390a150508080600101915050611c80565b507e3419f2d97b26d3f931679b32bf68cb2440aedb2763b371d98a66f06a28c770600e604051611eb091906141cb565b60405180910390a1611fcd600e805480602002602001604051908101604052809291908181526020015f905b82821015611fc4578382905f5260205f2090600402016040518060c00160405290815f8201548152602001600182015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160028201548152602001600382015f9054906101000a900460ff161515151581526020016003820160019054906101000a900460ff161515151581526020016003820160029054906101000a900460ff16151515158152505081526020019060010190611edc565b50505050612a94565b60105f611fda9190612ae6565b5f600a819055505050565b5f73ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1603612055575f6040517fe602df0500000000000000000000000000000000000000000000000000000000815260040161204c9190612e80565b60405180910390fd5b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036120c5575f6040517f94280d620000000000000000000000000000000000000000000000000000000081526004016120bc9190612e80565b60405180910390fd5b8160015f8673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f208190555080156121ae578273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040516121a59190612cf8565b60405180910390a35b50505050565b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603612204578060025f8282546121f891906133c1565b925050819055506122d2565b5f805f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205490508181101561228d578381836040517fe450d38c00000000000000000000000000000000000000000000000000000000815260040161228493929190613e92565b60405180910390fd5b8181035f808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2081905550505b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603612319578060025f8282540392505081905550612363565b805f808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f82825401925050819055505b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516123c09190612cf8565b60405180910390a3505050565b60605f600e8054905067ffffffffffffffff8111156123ef576123ee612ea1565b5b60405190808252806020026020018201604052801561241d5781602001602082028036833780820191505090505b5090505f5b600e8054905081101561245c578082828151811061244357612442613c11565b5b6020026020010181815250508080600101915050612422565b505f6001600e8054905061247091906141eb565b90505b5f81111561254a575f60018261248991906133c1565b42448460405160200161249e9392919061423e565b604051602081830303815290604052805190602001205f1c6124c0919061427a565b90508281815181106124d5576124d4613c11565b5b60200260200101518383815181106124f0576124ef613c11565b5b602002602001015184848151811061250b5761250a613c11565b5b6020026020010185848151811061252557612524613c11565b5b6020026020010182815250828152505050508080612542906142aa565b915050612473565b508091505090565b5f805f5b6011600160118054905061256a91906141eb565b8154811061257b5761257a613c11565b5b905f5260205f20906008020160040180549050811015612732575f601160016011805490506125aa91906141eb565b815481106125bb576125ba613c11565b5b905f5260205f20906008020160040182815481106125dc576125db613c11565b5b905f5260205f209060040201905060016011600160118054905061260091906141eb565b8154811061261157612610613c11565b5b905f5260205f209060080201600701541415158160030160019054906101000a900460ff16151514612711576002816002015461264e919061419b565b816002015f82825461266091906141eb565b9250508190555060028160020154612678919061419b565b8461268391906133c1565b93506126a033306002846002015461269b919061419b565b61147f565b7fc7e4341e6746fccb235d3ccb951dfcce955b13b67040b0ea16d188c975157199816001015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600283600201546126f6919061419b565b604051612704929190612dcf565b60405180910390a1612724565b80600201548361272191906133c1565b92505b508080600101915050612556565b505f5b6011600160118054905061274991906141eb565b8154811061275a57612759613c11565b5b905f5260205f209060080201600401805490508110156128cb575f6011600160118054905061278991906141eb565b8154811061279a57612799613c11565b5b905f5260205f20906008020160040182815481106127bb576127ba613c11565b5b905f5260205f20906004020190506001601160016011805490506127df91906141eb565b815481106127f0576127ef613c11565b5b905f5260205f209060080201600701541415158160030160019054906101000a900460ff161515036128bd575f8385836002015461282e9190613222565b612838919061419b565b905080826002015f82825461284d91906133c1565b9250508190555061285f30338361147f565b7fc7e4341e6746fccb235d3ccb951dfcce955b13b67040b0ea16d188c975157199826001015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16826040516128b3929190612dcf565b60405180910390a1505b508080600101915050612735565b505050565b5f8183116128e95782826128e491906141eb565b6128f6565b81836128f591906141eb565b5b905092915050565b5f600190505b8251811015612a8f575f83828151811061292157612920613c11565b5b602002602001015190505f83838151811061293f5761293e613c11565b5b602002602001015190505f60018461295791906142da565b90505b5f811215801561298357508286828151811061297957612978613c11565b5b6020026020010151115b15612a275785818151811061299b5761299a613c11565b5b6020026020010151866001836129b1919061431a565b815181106129c2576129c1613c11565b5b6020026020010181815250508481815181106129e1576129e0613c11565b5b6020026020010151856001836129f7919061431a565b81518110612a0857612a07613c11565b5b6020026020010181815250508080612a1f9061435b565b91505061295a565b8286600183612a36919061431a565b81518110612a4757612a46613c11565b5b6020026020010181815250508185600183612a62919061431a565b81518110612a7357612a72613c11565b5b6020026020010181815250505050508080600101915050612904565b505050565b5f5b600e80549050811015612ae2575f828281518110612ab757612ab6613c11565b5b60200260200101519050612ad4816020015130836040015161147f565b508080600101915050612a96565b5050565b5080545f8255600202905f5260205f2090810190612b049190612b07565b50565b5b80821115612b46575f8082015f6101000a81549073ffffffffffffffffffffffffffffffffffffffff0219169055600182015f905550600201612b08565b5090565b5f81519050919050565b5f82825260208201905092915050565b8281835e5f83830152505050565b5f601f19601f8301169050919050565b5f612b8c82612b4a565b612b968185612b54565b9350612ba6818560208601612b64565b612baf81612b72565b840191505092915050565b5f6020820190508181035f830152612bd28184612b82565b905092915050565b5f604051905090565b5f80fd5b5f80fd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f612c1482612beb565b9050919050565b612c2481612c0a565b8114612c2e575f80fd5b50565b5f81359050612c3f81612c1b565b92915050565b5f819050919050565b612c5781612c45565b8114612c61575f80fd5b50565b5f81359050612c7281612c4e565b92915050565b5f8060408385031215612c8e57612c8d612be3565b5b5f612c9b85828601612c31565b9250506020612cac85828601612c64565b9150509250929050565b5f8115159050919050565b612cca81612cb6565b82525050565b5f602082019050612ce35f830184612cc1565b92915050565b612cf281612c45565b82525050565b5f602082019050612d0b5f830184612ce9565b92915050565b5f805f60608486031215612d2857612d27612be3565b5b5f612d3586828701612c31565b9350506020612d4686828701612c31565b9250506040612d5786828701612c64565b9150509250925092565b5f60ff82169050919050565b612d7681612d61565b82525050565b5f602082019050612d8f5f830184612d6d565b92915050565b5f60208284031215612daa57612da9612be3565b5b5f612db784828501612c64565b91505092915050565b612dc981612c0a565b82525050565b5f604082019050612de25f830185612dc0565b612def6020830184612ce9565b9392505050565b5f60208284031215612e0b57612e0a612be3565b5b5f612e1884828501612c31565b91505092915050565b5f60c082019050612e345f830189612ce9565b612e416020830188612dc0565b612e4e6040830187612ce9565b612e5b6060830186612cc1565b612e686080830185612cc1565b612e7560a0830184612cc1565b979650505050505050565b5f602082019050612e935f830184612dc0565b92915050565b5f80fd5b5f80fd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b612ed782612b72565b810181811067ffffffffffffffff82111715612ef657612ef5612ea1565b5b80604052505050565b5f612f08612bda565b9050612f148282612ece565b919050565b5f67ffffffffffffffff821115612f3357612f32612ea1565b5b612f3c82612b72565b9050602081019050919050565b828183375f83830152505050565b5f612f69612f6484612f19565b612eff565b905082815260208101848484011115612f8557612f84612e9d565b5b612f90848285612f49565b509392505050565b5f82601f830112612fac57612fab612e99565b5b8135612fbc848260208601612f57565b91505092915050565b5f805f8060808587031215612fdd57612fdc612be3565b5b5f612fea87828801612c31565b9450506020612ffb87828801612c31565b935050604085013567ffffffffffffffff81111561301c5761301b612be7565b5b61302887828801612f98565b925050606061303987828801612c64565b91505092959194509250565b5f60e0820190506130585f83018a612ce9565b818103602083015261306a8189612b82565b90506130796040830188612dc0565b6130866060830187612dc0565b6130936080830186612cc1565b6130a060a0830185612ce9565b6130ad60c0830184612ce9565b98975050505050505050565b5f6040820190506130cc5f830185612d6d565b6130d96020830184612ce9565b9392505050565b5f80604083850312156130f6576130f5612be3565b5b5f61310385828601612c31565b925050602061311485828601612c31565b9150509250929050565b61312781612cb6565b8114613131575f80fd5b50565b5f813590506131428161311e565b92915050565b5f805f6060848603121561315f5761315e612be3565b5b5f61316c86828701612c64565b935050602061317d86828701613134565b925050604061318e86828701612c64565b9150509250925092565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f60028204905060018216806131dc57607f821691505b6020821081036131ef576131ee613198565b5b50919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f61322c82612c45565b915061323783612c45565b925082820261324581612c45565b9150828204841483151761325c5761325b6131f5565b5b5092915050565b7f4e6f7420656e6f75676820746f6b656e7320696e20636f6e74726163740000005f82015250565b5f613297601d83612b54565b91506132a282613263565b602082019050919050565b5f6020820190508181035f8301526132c48161328b565b9050919050565b7f20416d6f756e74206c657373207468616e206d696e696d756d20736574206c695f8201527f6d69740000000000000000000000000000000000000000000000000000000000602082015250565b5f613325602383612b54565b9150613330826132cb565b604082019050919050565b5f6020820190508181035f83015261335281613319565b9050919050565b7f20476172656562207361616c65206268616167212100000000000000000000005f82015250565b5f61338d601583612b54565b915061339882613359565b602082019050919050565b5f6020820190508181035f8301526133ba81613381565b9050919050565b5f6133cb82612c45565b91506133d683612c45565b92508282019050808211156133ee576133ed6131f5565b5b92915050565b5f6133fe82612c45565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036134305761342f6131f5565b5b600182019050919050565b5f819050815f5260205f209050919050565b5f6020601f8301049050919050565b5f82821b905092915050565b5f600883026134977fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8261345c565b6134a1868361345c565b95508019841693508086168417925050509392505050565b5f819050919050565b5f6134dc6134d76134d284612c45565b6134b9565b612c45565b9050919050565b5f819050919050565b6134f5836134c2565b613509613501826134e3565b848454613468565b825550505050565b5f90565b61351d613511565b6135288184846134ec565b505050565b5b8181101561354b576135405f82613515565b60018101905061352e565b5050565b601f821115613590576135618161343b565b61356a8461344d565b81016020851015613579578190505b61358d6135858561344d565b83018261352d565b50505b505050565b5f82821c905092915050565b5f6135b05f1984600802613595565b1980831691505092915050565b5f6135c883836135a1565b9150826002028217905092915050565b6135e182612b4a565b67ffffffffffffffff8111156135fa576135f9612ea1565b5b61360482546131c5565b61360f82828561354f565b5f60209050601f831160018114613640575f841561362e578287015190505b61363885826135bd565b86555061369f565b601f19841661364e8661343b565b5f5b8281101561367557848901518255600182019150602085019450602081019050613650565b86831015613692578489015161368e601f8916826135a1565b8355505b6001600288020188555050505b505050505050565b5f815f1c9050919050565b5f819050919050565b5f6136cd6136c8836136a7565b6136b2565b9050919050565b6136dd81612c45565b82525050565b5f82825260208201905092915050565b5f81546136ff816131c5565b61370981866136e3565b9450600182165f811461372357600181146137395761376b565b60ff19831686528115156020028601935061376b565b6137428561343b565b5f5b8381101561376357815481890152600182019150602081019050613744565b808801955050505b50505092915050565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6137a56137a0836136a7565b613774565b9050919050565b6137b581612c0a565b82525050565b5f8160a01c9050919050565b5f60ff82169050919050565b5f6137e56137e0836137bb565b6137c7565b9050919050565b6137f581612cb6565b82525050565b5f81549050919050565b5f82825260208201905092915050565b5f819050815f5260205f209050919050565b5f613839613834836136a7565b6137c7565b9050919050565b5f8160081c9050919050565b5f61385e61385983613840565b6137c7565b9050919050565b5f8160101c9050919050565b5f61388361387e83613865565b6137c7565b9050919050565b60c082015f80830154905061389e816136bb565b6138aa5f8601826136d4565b50600183015490506138bb81613793565b6138c860208601826137ac565b50600283015490506138d9816136bb565b6138e660408601826136d4565b50600383015490506138f781613827565b61390460608601826137ec565b5061390e8161384c565b61391b60808601826137ec565b5061392581613871565b61393260a08601826137ec565b5050505050565b5f613944838361388a565b60c08301905092915050565b5f600482019050919050565b5f613966826137fb565b6139708185613805565b935061397b83613815565b805f5b838110156139aa57816139918882613939565b975061399c83613950565b92505060018101905061397e565b5085935050505092915050565b5f81549050919050565b5f82825260208201905092915050565b5f819050815f5260205f209050919050565b5f60ff82169050919050565b5f613a016139fc836136a7565b6139e3565b9050919050565b613a1181612d61565b82525050565b604082015f808301549050613a2b816139ef565b613a375f860182613a08565b5060018301549050613a48816136bb565b613a5560208601826136d4565b5050505050565b5f613a678383613a17565b60408301905092915050565b5f600282019050919050565b5f613a89826139b7565b613a9381856139c1565b9350613a9e836139d1565b805f5b83811015613acd5781613ab48882613a5c565b9750613abf83613a73565b925050600181019050613aa1565b5085935050505092915050565b5f61012083015f808401549050613af0816136bb565b613afc5f8701826136d4565b50600184018583036020870152613b1383826136f3565b92505060028401549050613b2681613793565b613b3360408701826137ac565b5060038401549050613b4481613793565b613b5160608701826137ac565b50613b5b816137d3565b613b6860808701826137ec565b506004840185830360a0870152613b7f838261395c565b9250506005840185830360c0870152613b988382613a7f565b92505060068401549050613bab816136bb565b613bb860e08701826136d4565b5060078401549050613bc9816136bb565b613bd76101008701826136d4565b50819250505092915050565b5f604082019050613bf65f830185612ce9565b8181036020830152613c088184613ada565b90509392505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b7f546865206469737075746520697320616c7265616479207265736f6c766564005f82015250565b5f613c72601f83612b54565b9150613c7d82613c3e565b602082019050919050565b5f6020820190508181035f830152613c9f81613c66565b9050919050565b7f596f7520617265206e6f742061737369676e65642061732061206a75726f72205f8201527f666f722074686973206469737075746500000000000000000000000000000000602082015250565b5f613d00603083612b54565b9150613d0b82613ca6565b604082019050919050565b5f6020820190508181035f830152613d2d81613cf4565b9050919050565b7f596f75206861766520616c726561647920766f746564000000000000000000005f82015250565b5f613d68601683612b54565b9150613d7382613d34565b602082019050919050565b5f6020820190508181035f830152613d9581613d5c565b9050919050565b7f496e73756666696369656e7420746f6b656e2062616c616e636520666f7220625f8201527f61636b696e670000000000000000000000000000000000000000000000000000602082015250565b5f613df6602683612b54565b9150613e0182613d9c565b604082019050919050565b5f6020820190508181035f830152613e2381613dea565b9050919050565b7f4e6f7420656e6f756768206a75726f727320746f2073656c65637400000000005f82015250565b5f613e5e601b83612b54565b9150613e6982613e2a565b602082019050919050565b5f6020820190508181035f830152613e8b81613e52565b9050919050565b5f606082019050613ea55f830186612dc0565b613eb26020830185612ce9565b613ebf6040830184612ce9565b949350505050565b7f4a75726f727320616c72656164792073656c65637465640000000000000000005f82015250565b5f613efb601783612b54565b9150613f0682613ec7565b602082019050919050565b5f6020820190508181035f830152613f2881613eef565b9050919050565b7f4e6f7420656e6f756768206a75726f727320617661696c61626c6500000000005f82015250565b5f613f63601b83612b54565b9150613f6e82613f2f565b602082019050919050565b5f6020820190508181035f830152613f9081613f57565b9050919050565b5f61012083015f808401549050613fad816136bb565b613fb95f8701826136d4565b50600184018583036020870152613fd083826136f3565b92505060028401549050613fe381613793565b613ff060408701826137ac565b506003840154905061400181613793565b61400e60608701826137ac565b50614018816137d3565b61402560808701826137ec565b506004840185830360a087015261403c838261395c565b9250506005840185830360c08701526140558382613a7f565b92505060068401549050614068816136bb565b61407560e08701826136d4565b5060078401549050614086816136bb565b6140946101008701826136d4565b50819250505092915050565b5f82825260208201905092915050565b5f6140ba826137fb565b6140c481856140a0565b93506140cf83613815565b805f5b838110156140fe57816140e58882613939565b97506140f083613950565b9250506001810190506140d2565b5085935050505092915050565b5f6040820190508181035f8301526141238185613f97565b9050818103602083015261413781846140b0565b90509392505050565b5f6040820190508181035f8301526141588185613ada565b90506141676020830184612ce9565b9392505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601260045260245ffd5b5f6141a582612c45565b91506141b083612c45565b9250826141c0576141bf61416e565b5b828204905092915050565b5f6020820190508181035f8301526141e381846140b0565b905092915050565b5f6141f582612c45565b915061420083612c45565b9250828203905081811115614218576142176131f5565b5b92915050565b5f819050919050565b61423861423382612c45565b61421e565b82525050565b5f6142498286614227565b6020820191506142598285614227565b6020820191506142698284614227565b602082019150819050949350505050565b5f61428482612c45565b915061428f83612c45565b92508261429f5761429e61416e565b5b828206905092915050565b5f6142b482612c45565b91505f82036142c6576142c56131f5565b5b600182039050919050565b5f819050919050565b5f6142e4826142d1565b91506142ef836142d1565b925082820390508181125f8412168282135f851215161715614314576143136131f5565b5b92915050565b5f614324826142d1565b915061432f836142d1565b92508282019050828112155f8312168382125f841215161715614355576143546131f5565b5b92915050565b5f614365826142d1565b91507f80000000000000000000000000000000000000000000000000000000000000008203614397576143966131f5565b5b60018203905091905056fea26469706673582212206bab0e7ddb1545e0acd2301772002face20367ba72b09d0af1a640c381f832c364736f6c634300081a0033"