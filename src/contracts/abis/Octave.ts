export default [
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "monetizeId",
                "type": "uint256"
            }
        ],
        "name": "TokenClosedForMonetize",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "monetizeId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "contractAddress",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "metaDataUri",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "platform",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "chainId",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "platformTokenId",
                "type": "string"
            }
        ],
        "name": "TokenOpenForMonetize",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "closedForMonetize",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "contractAddress",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "metaDataUri",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "platform",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "chainId",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "platformTokenId",
                "type": "string"
            }
        ],
        "name": "openForMonetize",
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
        "name": "tokenIdToMusic",
        "outputs": [
            {
                "internalType": "address",
                "name": "contractAddress",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "metaDataUri",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "platform",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "chainId",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "platformTokenId",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
] as const