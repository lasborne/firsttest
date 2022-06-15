export const stakeDAO_contractAddress = '0xE5FaCD4e6d34794f8B4887ffc88B4154C4543764'

export const stakeDAO_ABI = [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "_owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "_spender",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_value",
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
          "name": "_from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "_to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "_allowances",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "_approve",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "_balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "addressList",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "contractAddress",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "ownerAddress",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "tokenType",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
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
      "stateMutability": "pure",
      "type": "function",
      "constant": true
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
      "stateMutability": "pure",
      "type": "function",
      "constant": true
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
      "stateMutability": "pure",
      "type": "function",
      "constant": true
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
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "balance",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "internalType": "bool",
          "name": "success",
          "type": "bool"
        }
      ],
      "stateMutability": "payable",
      "type": "function",
      "payable": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "internalType": "bool",
          "name": "success",
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
          "name": "_spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "internalType": "bool",
          "name": "success",
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
          "name": "_owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_spender",
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
      "type": "function",
      "constant": true
    }
  ]

export const stakeDAO_json = {
    "contractName": "stakeDAO",
    "abi": [
      {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "_owner",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "_spender",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "_value",
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
            "name": "_from",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "_to",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "_value",
            "type": "uint256"
          }
        ],
        "name": "Transfer",
        "type": "event"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "name": "_allowances",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "name": "_approve",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "name": "_balanceOf",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "addressList",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [],
        "name": "contractAddress",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [],
        "name": "ownerAddress",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [],
        "name": "tokenType",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
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
        "stateMutability": "pure",
        "type": "function",
        "constant": true
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
        "stateMutability": "pure",
        "type": "function",
        "constant": true
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
        "stateMutability": "pure",
        "type": "function",
        "constant": true
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
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_owner",
            "type": "address"
          }
        ],
        "name": "balanceOf",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "balance",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "_value",
            "type": "uint256"
          }
        ],
        "name": "transfer",
        "outputs": [
          {
            "internalType": "bool",
            "name": "success",
            "type": "bool"
          }
        ],
        "stateMutability": "payable",
        "type": "function",
        "payable": true
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_from",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "_to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "_value",
            "type": "uint256"
          }
        ],
        "name": "transferFrom",
        "outputs": [
          {
            "internalType": "bool",
            "name": "success",
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
            "name": "_spender",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "_value",
            "type": "uint256"
          }
        ],
        "name": "approve",
        "outputs": [
          {
            "internalType": "bool",
            "name": "success",
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
            "name": "_owner",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "_spender",
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
        "type": "function",
        "constant": true
      }
    ],
    "metadata": "{\"compiler\":{\"version\":\"0.8.0+commit.c7dfd78e\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"_owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"_spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"_from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"_to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"_allowances\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"_approve\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"_balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"addressList\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"success\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_owner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"balance\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"contractAddress\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"ownerAddress\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"tokenType\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"success\",\"type\":\"bool\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"success\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"project:/contracts/StakeDAO.sol\":\"stakeDAO\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"project:/contracts/SafeMath.sol\":{\"keccak256\":\"0x65a193b322e11ec0b30f400b8e9e937b36ffd2abbf5b8501c385ca263f96878f\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://1e08b1c62d0a8ca5b353d133be493adabeef599582088c766e3afad17aebccc5\",\"dweb:/ipfs/QmYiseomCR1caJqigZN8BAy9PiCCGS73GZTEMKoSyLq4h6\"]},\"project:/contracts/StakeDAO.sol\":{\"keccak256\":\"0x01c02ee7295e878b59fbf8e45f18788c8a6d11774261b7499ac7952aa85225c8\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://e4c7b560355be2d47812aada3df58c6390c5cc38f0e2bf8a17d51b4e00ad833f\",\"dweb:/ipfs/QmQMAauS3GiJ1vdduVunFUfoDHrm131utYT2fFWd98EkRs\"]}},\"version\":1}",
    "bytecode": "0x608060405230600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506040518060400160405280600681526020017f4552432d3230000000000000000000000000000000000000000000000000000081525060029080519060200190620000929291906200015d565b5069d3c21bcecceda1000000600355348015620000ae57600080fd5b5060035460046000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555062000272565b8280546200016b906200020d565b90600052602060002090601f0160209004810192826200018f5760008555620001db565b82601f10620001aa57805160ff1916838001178555620001db565b82800160010185558215620001db579182015b82811115620001da578251825591602001919060010190620001bd565b5b509050620001ea9190620001ee565b5090565b5b8082111562000209576000816000905550600101620001ef565b5090565b600060028204905060018216806200022657607f821691505b602082108114156200023d576200023c62000243565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6111cd80620002826000396000f3fe6080604052600436106100f35760003560e01c806370a082311161008a578063b810fb4311610059578063b810fb431461035b578063cca3e83214610398578063dd62ed3e146103d5578063f6b4dfb414610412576100f3565b806370a08231146102985780638f84aa09146102d557806395d89b4114610300578063a9059cbb1461032b576100f3565b806323b872dd116100c657806323b872dd146101c857806330fa738c14610205578063313ce567146102305780634b9322741461025b576100f3565b8063024c2ddd146100f857806306fdde0314610135578063095ea7b31461016057806318160ddd1461019d575b600080fd5b34801561010457600080fd5b5061011f600480360381019061011a9190610da7565b61043d565b60405161012c9190610f64565b60405180910390f35b34801561014157600080fd5b5061014a610462565b6040516101579190610f42565b60405180910390f35b34801561016c57600080fd5b5061018760048036038101906101829190610e32565b61049f565b6040516101949190610f27565b60405180910390f35b3480156101a957600080fd5b506101b2610591565b6040516101bf9190610f64565b60405180910390f35b3480156101d457600080fd5b506101ef60048036038101906101ea9190610de3565b61059b565b6040516101fc9190610f27565b60405180910390f35b34801561021157600080fd5b5061021a6107dd565b6040516102279190610f42565b60405180910390f35b34801561023c57600080fd5b5061024561086b565b6040516102529190610f7f565b60405180910390f35b34801561026757600080fd5b50610282600480360381019061027d9190610da7565b610874565b60405161028f9190610f64565b60405180910390f35b3480156102a457600080fd5b506102bf60048036038101906102ba9190610d7e565b610899565b6040516102cc9190610f64565b60405180910390f35b3480156102e157600080fd5b506102ea6108e2565b6040516102f79190610f0c565b60405180910390f35b34801561030c57600080fd5b50610315610906565b6040516103229190610f42565b60405180910390f35b61034560048036038101906103409190610e32565b610943565b6040516103529190610f27565b60405180910390f35b34801561036757600080fd5b50610382600480360381019061037d9190610e6e565b610c24565b60405161038f9190610f0c565b60405180910390f35b3480156103a457600080fd5b506103bf60048036038101906103ba9190610d7e565b610c63565b6040516103cc9190610f64565b60405180910390f35b3480156103e157600080fd5b506103fc60048036038101906103f79190610da7565b610c7b565b6040516104099190610f64565b60405180910390f35b34801561041e57600080fd5b50610427610d02565b6040516104349190610f0c565b60405180910390f35b6005602052816000526040600020602052806000526040600020600091509150505481565b60606040518060400160405280600881526020017f5374616b6544414f000000000000000000000000000000000000000000000000815250905090565b600081600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258460405161057f9190610f64565b60405180910390a36001905092915050565b6000600354905090565b6000836000600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054116105ea57600080fd5b6105f4858461049f565b156107d457600460008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054831161076a5761069183600460008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610d2890919063ffffffff16565b600460008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061072683600460008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610d3e90919063ffffffff16565b600460008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b8373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef856040516107c79190610f64565b60405180910390a36107d5565b5b509392505050565b600280546107ea906110c8565b80601f0160208091040260200160405190810160405280929190818152602001828054610816906110c8565b80156108635780601f1061083857610100808354040283529160200191610863565b820191906000526020600020905b81548152906001019060200180831161084657829003601f168201915b505050505081565b60006012905090565b6006602052816000526040600020602052806000526040600020600091509150505481565b6000600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60606040518060400160405280600381526020017f53544b0000000000000000000000000000000000000000000000000000000000815250905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461099e57600080fd5b60046000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548211610b7557610a7a8260046000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610d2890919063ffffffff16565b60046000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610b3182600460008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610d3e90919063ffffffff16565b600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546007819055506009839080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555092915050565b60098181548110610c3457600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60046020528060005260406000206000915090505481565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008183610d36919061100c565b905092915050565b60008183610d4c9190610fb6565b905092915050565b600081359050610d6381611169565b92915050565b600081359050610d7881611180565b92915050565b600060208284031215610d9057600080fd5b6000610d9e84828501610d54565b91505092915050565b60008060408385031215610dba57600080fd5b6000610dc885828601610d54565b9250506020610dd985828601610d54565b9150509250929050565b600080600060608486031215610df857600080fd5b6000610e0686828701610d54565b9350506020610e1786828701610d54565b9250506040610e2886828701610d69565b9150509250925092565b60008060408385031215610e4557600080fd5b6000610e5385828601610d54565b9250506020610e6485828601610d69565b9150509250929050565b600060208284031215610e8057600080fd5b6000610e8e84828501610d69565b91505092915050565b610ea081611040565b82525050565b610eaf81611052565b82525050565b6000610ec082610f9a565b610eca8185610fa5565b9350610eda818560208601611095565b610ee381611158565b840191505092915050565b610ef78161107e565b82525050565b610f0681611088565b82525050565b6000602082019050610f216000830184610e97565b92915050565b6000602082019050610f3c6000830184610ea6565b92915050565b60006020820190508181036000830152610f5c8184610eb5565b905092915050565b6000602082019050610f796000830184610eee565b92915050565b6000602082019050610f946000830184610efd565b92915050565b600081519050919050565b600082825260208201905092915050565b6000610fc18261107e565b9150610fcc8361107e565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611001576110006110fa565b5b828201905092915050565b60006110178261107e565b91506110228361107e565b925082821015611035576110346110fa565b5b828203905092915050565b600061104b8261105e565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60005b838110156110b3578082015181840152602081019050611098565b838111156110c2576000848401525b50505050565b600060028204905060018216806110e057607f821691505b602082108114156110f4576110f3611129565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000601f19601f8301169050919050565b61117281611040565b811461117d57600080fd5b50565b6111898161107e565b811461119457600080fd5b5056fea26469706673582212201b5dbb3939b22fd264172125f908cd9f365de476509f6f7db04f81e12bb0bd1b64736f6c63430008000033",
    "deployedBytecode": "0x6080604052600436106100f35760003560e01c806370a082311161008a578063b810fb4311610059578063b810fb431461035b578063cca3e83214610398578063dd62ed3e146103d5578063f6b4dfb414610412576100f3565b806370a08231146102985780638f84aa09146102d557806395d89b4114610300578063a9059cbb1461032b576100f3565b806323b872dd116100c657806323b872dd146101c857806330fa738c14610205578063313ce567146102305780634b9322741461025b576100f3565b8063024c2ddd146100f857806306fdde0314610135578063095ea7b31461016057806318160ddd1461019d575b600080fd5b34801561010457600080fd5b5061011f600480360381019061011a9190610da7565b61043d565b60405161012c9190610f64565b60405180910390f35b34801561014157600080fd5b5061014a610462565b6040516101579190610f42565b60405180910390f35b34801561016c57600080fd5b5061018760048036038101906101829190610e32565b61049f565b6040516101949190610f27565b60405180910390f35b3480156101a957600080fd5b506101b2610591565b6040516101bf9190610f64565b60405180910390f35b3480156101d457600080fd5b506101ef60048036038101906101ea9190610de3565b61059b565b6040516101fc9190610f27565b60405180910390f35b34801561021157600080fd5b5061021a6107dd565b6040516102279190610f42565b60405180910390f35b34801561023c57600080fd5b5061024561086b565b6040516102529190610f7f565b60405180910390f35b34801561026757600080fd5b50610282600480360381019061027d9190610da7565b610874565b60405161028f9190610f64565b60405180910390f35b3480156102a457600080fd5b506102bf60048036038101906102ba9190610d7e565b610899565b6040516102cc9190610f64565b60405180910390f35b3480156102e157600080fd5b506102ea6108e2565b6040516102f79190610f0c565b60405180910390f35b34801561030c57600080fd5b50610315610906565b6040516103229190610f42565b60405180910390f35b61034560048036038101906103409190610e32565b610943565b6040516103529190610f27565b60405180910390f35b34801561036757600080fd5b50610382600480360381019061037d9190610e6e565b610c24565b60405161038f9190610f0c565b60405180910390f35b3480156103a457600080fd5b506103bf60048036038101906103ba9190610d7e565b610c63565b6040516103cc9190610f64565b60405180910390f35b3480156103e157600080fd5b506103fc60048036038101906103f79190610da7565b610c7b565b6040516104099190610f64565b60405180910390f35b34801561041e57600080fd5b50610427610d02565b6040516104349190610f0c565b60405180910390f35b6005602052816000526040600020602052806000526040600020600091509150505481565b60606040518060400160405280600881526020017f5374616b6544414f000000000000000000000000000000000000000000000000815250905090565b600081600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258460405161057f9190610f64565b60405180910390a36001905092915050565b6000600354905090565b6000836000600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054116105ea57600080fd5b6105f4858461049f565b156107d457600460008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054831161076a5761069183600460008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610d2890919063ffffffff16565b600460008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061072683600460008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610d3e90919063ffffffff16565b600460008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b8373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef856040516107c79190610f64565b60405180910390a36107d5565b5b509392505050565b600280546107ea906110c8565b80601f0160208091040260200160405190810160405280929190818152602001828054610816906110c8565b80156108635780601f1061083857610100808354040283529160200191610863565b820191906000526020600020905b81548152906001019060200180831161084657829003601f168201915b505050505081565b60006012905090565b6006602052816000526040600020602052806000526040600020600091509150505481565b6000600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60606040518060400160405280600381526020017f53544b0000000000000000000000000000000000000000000000000000000000815250905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461099e57600080fd5b60046000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548211610b7557610a7a8260046000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610d2890919063ffffffff16565b60046000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610b3182600460008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610d3e90919063ffffffff16565b600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546007819055506009839080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555092915050565b60098181548110610c3457600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60046020528060005260406000206000915090505481565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008183610d36919061100c565b905092915050565b60008183610d4c9190610fb6565b905092915050565b600081359050610d6381611169565b92915050565b600081359050610d7881611180565b92915050565b600060208284031215610d9057600080fd5b6000610d9e84828501610d54565b91505092915050565b60008060408385031215610dba57600080fd5b6000610dc885828601610d54565b9250506020610dd985828601610d54565b9150509250929050565b600080600060608486031215610df857600080fd5b6000610e0686828701610d54565b9350506020610e1786828701610d54565b9250506040610e2886828701610d69565b9150509250925092565b60008060408385031215610e4557600080fd5b6000610e5385828601610d54565b9250506020610e6485828601610d69565b9150509250929050565b600060208284031215610e8057600080fd5b6000610e8e84828501610d69565b91505092915050565b610ea081611040565b82525050565b610eaf81611052565b82525050565b6000610ec082610f9a565b610eca8185610fa5565b9350610eda818560208601611095565b610ee381611158565b840191505092915050565b610ef78161107e565b82525050565b610f0681611088565b82525050565b6000602082019050610f216000830184610e97565b92915050565b6000602082019050610f3c6000830184610ea6565b92915050565b60006020820190508181036000830152610f5c8184610eb5565b905092915050565b6000602082019050610f796000830184610eee565b92915050565b6000602082019050610f946000830184610efd565b92915050565b600081519050919050565b600082825260208201905092915050565b6000610fc18261107e565b9150610fcc8361107e565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611001576110006110fa565b5b828201905092915050565b60006110178261107e565b91506110228361107e565b925082821015611035576110346110fa565b5b828203905092915050565b600061104b8261105e565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60005b838110156110b3578082015181840152602081019050611098565b838111156110c2576000848401525b50505050565b600060028204905060018216806110e057607f821691505b602082108114156110f4576110f3611129565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000601f19601f8301169050919050565b61117281611040565b811461117d57600080fd5b50565b6111898161107e565b811461119457600080fd5b5056fea26469706673582212201b5dbb3939b22fd264172125f908cd9f365de476509f6f7db04f81e12bb0bd1b64736f6c63430008000033",
    "immutableReferences": {},
    "generatedSources": [
      {
        "ast": {
          "nodeType": "YulBlock",
          "src": "0:516:3",
          "statements": [
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "58:269:3",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "68:22:3",
                    "value": {
                      "arguments": [
                        {
                          "name": "data",
                          "nodeType": "YulIdentifier",
                          "src": "82:4:3"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "88:1:3",
                          "type": "",
                          "value": "2"
                        }
                      ],
                      "functionName": {
                        "name": "div",
                        "nodeType": "YulIdentifier",
                        "src": "78:3:3"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "78:12:3"
                    },
                    "variableNames": [
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "68:6:3"
                      }
                    ]
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "99:38:3",
                    "value": {
                      "arguments": [
                        {
                          "name": "data",
                          "nodeType": "YulIdentifier",
                          "src": "129:4:3"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "135:1:3",
                          "type": "",
                          "value": "1"
                        }
                      ],
                      "functionName": {
                        "name": "and",
                        "nodeType": "YulIdentifier",
                        "src": "125:3:3"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "125:12:3"
                    },
                    "variables": [
                      {
                        "name": "outOfPlaceEncoding",
                        "nodeType": "YulTypedName",
                        "src": "103:18:3",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "176:51:3",
                      "statements": [
                        {
                          "nodeType": "YulAssignment",
                          "src": "190:27:3",
                          "value": {
                            "arguments": [
                              {
                                "name": "length",
                                "nodeType": "YulIdentifier",
                                "src": "204:6:3"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "212:4:3",
                                "type": "",
                                "value": "0x7f"
                              }
                            ],
                            "functionName": {
                              "name": "and",
                              "nodeType": "YulIdentifier",
                              "src": "200:3:3"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "200:17:3"
                          },
                          "variableNames": [
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "190:6:3"
                            }
                          ]
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "outOfPlaceEncoding",
                          "nodeType": "YulIdentifier",
                          "src": "156:18:3"
                        }
                      ],
                      "functionName": {
                        "name": "iszero",
                        "nodeType": "YulIdentifier",
                        "src": "149:6:3"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "149:26:3"
                    },
                    "nodeType": "YulIf",
                    "src": "146:2:3"
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "279:42:3",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "panic_error_0x22",
                              "nodeType": "YulIdentifier",
                              "src": "293:16:3"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "293:18:3"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "293:18:3"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "outOfPlaceEncoding",
                          "nodeType": "YulIdentifier",
                          "src": "243:18:3"
                        },
                        {
                          "arguments": [
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "266:6:3"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "274:2:3",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "lt",
                            "nodeType": "YulIdentifier",
                            "src": "263:2:3"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "263:14:3"
                        }
                      ],
                      "functionName": {
                        "name": "eq",
                        "nodeType": "YulIdentifier",
                        "src": "240:2:3"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "240:38:3"
                    },
                    "nodeType": "YulIf",
                    "src": "237:2:3"
                  }
                ]
              },
              "name": "extract_byte_array_length",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "data",
                  "nodeType": "YulTypedName",
                  "src": "42:4:3",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "length",
                  "nodeType": "YulTypedName",
                  "src": "51:6:3",
                  "type": ""
                }
              ],
              "src": "7:320:3"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "361:152:3",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "378:1:3",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "381:77:3",
                          "type": "",
                          "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "371:6:3"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "371:88:3"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "371:88:3"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "475:1:3",
                          "type": "",
                          "value": "4"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "478:4:3",
                          "type": "",
                          "value": "0x22"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "468:6:3"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "468:15:3"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "468:15:3"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "499:1:3",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "502:4:3",
                          "type": "",
                          "value": "0x24"
                        }
                      ],
                      "functionName": {
                        "name": "revert",
                        "nodeType": "YulIdentifier",
                        "src": "492:6:3"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "492:15:3"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "492:15:3"
                  }
                ]
              },
              "name": "panic_error_0x22",
              "nodeType": "YulFunctionDefinition",
              "src": "333:180:3"
            }
          ]
        },
        "contents": "{\n\n    function extract_byte_array_length(data) -> length {\n        length := div(data, 2)\n        let outOfPlaceEncoding := and(data, 1)\n        if iszero(outOfPlaceEncoding) {\n            length := and(length, 0x7f)\n        }\n\n        if eq(outOfPlaceEncoding, lt(length, 32)) {\n            panic_error_0x22()\n        }\n    }\n\n    function panic_error_0x22() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x22)\n        revert(0, 0x24)\n    }\n\n}\n",
        "id": 3,
        "language": "Yul",
        "name": "#utility.yul"
      }
    ],
    "deployedGeneratedSources": [
      {
        "ast": {
          "nodeType": "YulBlock",
          "src": "0:6944:3",
          "statements": [
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "59:87:3",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "69:29:3",
                    "value": {
                      "arguments": [
                        {
                          "name": "offset",
                          "nodeType": "YulIdentifier",
                          "src": "91:6:3"
                        }
                      ],
                      "functionName": {
                        "name": "calldataload",
                        "nodeType": "YulIdentifier",
                        "src": "78:12:3"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "78:20:3"
                    },
                    "variableNames": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "69:5:3"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "134:5:3"
                        }
                      ],
                      "functionName": {
                        "name": "validator_revert_t_address",
                        "nodeType": "YulIdentifier",
                        "src": "107:26:3"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "107:33:3"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "107:33:3"
                  }
                ]
              },
              "name": "abi_decode_t_address",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "offset",
                  "nodeType": "YulTypedName",
                  "src": "37:6:3",
                  "type": ""
                },
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "45:3:3",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "53:5:3",
                  "type": ""
                }
              ],
              "src": "7:139:3"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "204:87:3",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "214:29:3",
                    "value": {
                      "arguments": [
                        {
                          "name": "offset",
                          "nodeType": "YulIdentifier",
                          "src": "236:6:3"
                        }
                      ],
                      "functionName": {
                        "name": "calldataload",
                        "nodeType": "YulIdentifier",
                        "src": "223:12:3"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "223:20:3"
                    },
                    "variableNames": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "214:5:3"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "279:5:3"
                        }
                      ],
                      "functionName": {
                        "name": "validator_revert_t_uint256",
                        "nodeType": "YulIdentifier",
                        "src": "252:26:3"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "252:33:3"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "252:33:3"
                  }
                ]
              },
              "name": "abi_decode_t_uint256",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "offset",
                  "nodeType": "YulTypedName",
                  "src": "182:6:3",
                  "type": ""
                },
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "190:3:3",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "198:5:3",
                  "type": ""
                }
              ],
              "src": "152:139:3"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "363:196:3",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "409:16:3",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "418:1:3",
                                "type": "",
                                "value": "0"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "421:1:3",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "revert",
                              "nodeType": "YulIdentifier",
                              "src": "411:6:3"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "411:12:3"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "411:12:3"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "384:7:3"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "393:9:3"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "380:3:3"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "380:23:3"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "405:2:3",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "slt",
                        "nodeType": "YulIdentifier",
                        "src": "376:3:3"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "376:32:3"
                    },
                    "nodeType": "YulIf",
                    "src": "373:2:3"
                  },
                  {
                    "nodeType": "YulBlock",
                    "src": "435:117:3",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "450:15:3",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "464:1:3",
                          "type": "",
                          "value": "0"
                        },
                        "variables": [
                          {
                            "name": "offset",
                            "nodeType": "YulTypedName",
                            "src": "454:6:3",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "479:63:3",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "514:9:3"
                                },
                                {
                                  "name": "offset",
                                  "nodeType": "YulIdentifier",
                                  "src": "525:6:3"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "510:3:3"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "510:22:3"
                            },
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "534:7:3"
                            }
                          ],
                          "functionName": {
                            "name": "abi_decode_t_address",
                            "nodeType": "YulIdentifier",
                            "src": "489:20:3"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "489:53:3"
                        },
                        "variableNames": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "479:6:3"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              "name": "abi_decode_tuple_t_address",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "333:9:3",
                  "type": ""
                },
                {
                  "name": "dataEnd",
                  "nodeType": "YulTypedName",
                  "src": "344:7:3",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "356:6:3",
                  "type": ""
                }
              ],
              "src": "297:262:3"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "648:324:3",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "694:16:3",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "703:1:3",
                                "type": "",
                                "value": "0"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "706:1:3",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "revert",
                              "nodeType": "YulIdentifier",
                              "src": "696:6:3"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "696:12:3"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "696:12:3"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "669:7:3"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "678:9:3"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "665:3:3"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "665:23:3"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "690:2:3",
                          "type": "",
                          "value": "64"
                        }
                      ],
                      "functionName": {
                        "name": "slt",
                        "nodeType": "YulIdentifier",
                        "src": "661:3:3"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "661:32:3"
                    },
                    "nodeType": "YulIf",
                    "src": "658:2:3"
                  },
                  {
                    "nodeType": "YulBlock",
                    "src": "720:117:3",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "735:15:3",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "749:1:3",
                          "type": "",
                          "value": "0"
                        },
                        "variables": [
                          {
                            "name": "offset",
                            "nodeType": "YulTypedName",
                            "src": "739:6:3",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "764:63:3",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "799:9:3"
                                },
                                {
                                  "name": "offset",
                                  "nodeType": "YulIdentifier",
                                  "src": "810:6:3"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "795:3:3"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "795:22:3"
                            },
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "819:7:3"
                            }
                          ],
                          "functionName": {
                            "name": "abi_decode_t_address",
                            "nodeType": "YulIdentifier",
                            "src": "774:20:3"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "774:53:3"
                        },
                        "variableNames": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "764:6:3"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "nodeType": "YulBlock",
                    "src": "847:118:3",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "862:16:3",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "876:2:3",
                          "type": "",
                          "value": "32"
                        },
                        "variables": [
                          {
                            "name": "offset",
                            "nodeType": "YulTypedName",
                            "src": "866:6:3",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "892:63:3",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "927:9:3"
                                },
                                {
                                  "name": "offset",
                                  "nodeType": "YulIdentifier",
                                  "src": "938:6:3"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "923:3:3"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "923:22:3"
                            },
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "947:7:3"
                            }
                          ],
                          "functionName": {
                            "name": "abi_decode_t_address",
                            "nodeType": "YulIdentifier",
                            "src": "902:20:3"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "902:53:3"
                        },
                        "variableNames": [
                          {
                            "name": "value1",
                            "nodeType": "YulIdentifier",
                            "src": "892:6:3"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              "name": "abi_decode_tuple_t_addresst_address",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "610:9:3",
                  "type": ""
                },
                {
                  "name": "dataEnd",
                  "nodeType": "YulTypedName",
                  "src": "621:7:3",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "633:6:3",
                  "type": ""
                },
                {
                  "name": "value1",
                  "nodeType": "YulTypedName",
                  "src": "641:6:3",
                  "type": ""
                }
              ],
              "src": "565:407:3"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "1078:452:3",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "1124:16:3",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "1133:1:3",
                                "type": "",
                                "value": "0"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "1136:1:3",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "revert",
                              "nodeType": "YulIdentifier",
                              "src": "1126:6:3"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1126:12:3"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "1126:12:3"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "1099:7:3"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "1108:9:3"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "1095:3:3"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1095:23:3"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "1120:2:3",
                          "type": "",
                          "value": "96"
                        }
                      ],
                      "functionName": {
                        "name": "slt",
                        "nodeType": "YulIdentifier",
                        "src": "1091:3:3"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1091:32:3"
                    },
                    "nodeType": "YulIf",
                    "src": "1088:2:3"
                  },
                  {
                    "nodeType": "YulBlock",
                    "src": "1150:117:3",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "1165:15:3",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "1179:1:3",
                          "type": "",
                          "value": "0"
                        },
                        "variables": [
                          {
                            "name": "offset",
                            "nodeType": "YulTypedName",
                            "src": "1169:6:3",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "1194:63:3",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "1229:9:3"
                                },
                                {
                                  "name": "offset",
                                  "nodeType": "YulIdentifier",
                                  "src": "1240:6:3"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "1225:3:3"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1225:22:3"
                            },
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "1249:7:3"
                            }
                          ],
                          "functionName": {
                            "name": "abi_decode_t_address",
                            "nodeType": "YulIdentifier",
                            "src": "1204:20:3"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1204:53:3"
                        },
                        "variableNames": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "1194:6:3"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "nodeType": "YulBlock",
                    "src": "1277:118:3",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "1292:16:3",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "1306:2:3",
                          "type": "",
                          "value": "32"
                        },
                        "variables": [
                          {
                            "name": "offset",
                            "nodeType": "YulTypedName",
                            "src": "1296:6:3",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "1322:63:3",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "1357:9:3"
                                },
                                {
                                  "name": "offset",
                                  "nodeType": "YulIdentifier",
                                  "src": "1368:6:3"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "1353:3:3"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1353:22:3"
                            },
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "1377:7:3"
                            }
                          ],
                          "functionName": {
                            "name": "abi_decode_t_address",
                            "nodeType": "YulIdentifier",
                            "src": "1332:20:3"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1332:53:3"
                        },
                        "variableNames": [
                          {
                            "name": "value1",
                            "nodeType": "YulIdentifier",
                            "src": "1322:6:3"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "nodeType": "YulBlock",
                    "src": "1405:118:3",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "1420:16:3",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "1434:2:3",
                          "type": "",
                          "value": "64"
                        },
                        "variables": [
                          {
                            "name": "offset",
                            "nodeType": "YulTypedName",
                            "src": "1424:6:3",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "1450:63:3",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "1485:9:3"
                                },
                                {
                                  "name": "offset",
                                  "nodeType": "YulIdentifier",
                                  "src": "1496:6:3"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "1481:3:3"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1481:22:3"
                            },
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "1505:7:3"
                            }
                          ],
                          "functionName": {
                            "name": "abi_decode_t_uint256",
                            "nodeType": "YulIdentifier",
                            "src": "1460:20:3"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1460:53:3"
                        },
                        "variableNames": [
                          {
                            "name": "value2",
                            "nodeType": "YulIdentifier",
                            "src": "1450:6:3"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              "name": "abi_decode_tuple_t_addresst_addresst_uint256",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "1032:9:3",
                  "type": ""
                },
                {
                  "name": "dataEnd",
                  "nodeType": "YulTypedName",
                  "src": "1043:7:3",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "1055:6:3",
                  "type": ""
                },
                {
                  "name": "value1",
                  "nodeType": "YulTypedName",
                  "src": "1063:6:3",
                  "type": ""
                },
                {
                  "name": "value2",
                  "nodeType": "YulTypedName",
                  "src": "1071:6:3",
                  "type": ""
                }
              ],
              "src": "978:552:3"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "1619:324:3",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "1665:16:3",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "1674:1:3",
                                "type": "",
                                "value": "0"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "1677:1:3",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "revert",
                              "nodeType": "YulIdentifier",
                              "src": "1667:6:3"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1667:12:3"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "1667:12:3"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "1640:7:3"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "1649:9:3"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "1636:3:3"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1636:23:3"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "1661:2:3",
                          "type": "",
                          "value": "64"
                        }
                      ],
                      "functionName": {
                        "name": "slt",
                        "nodeType": "YulIdentifier",
                        "src": "1632:3:3"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1632:32:3"
                    },
                    "nodeType": "YulIf",
                    "src": "1629:2:3"
                  },
                  {
                    "nodeType": "YulBlock",
                    "src": "1691:117:3",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "1706:15:3",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "1720:1:3",
                          "type": "",
                          "value": "0"
                        },
                        "variables": [
                          {
                            "name": "offset",
                            "nodeType": "YulTypedName",
                            "src": "1710:6:3",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "1735:63:3",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "1770:9:3"
                                },
                                {
                                  "name": "offset",
                                  "nodeType": "YulIdentifier",
                                  "src": "1781:6:3"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "1766:3:3"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1766:22:3"
                            },
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "1790:7:3"
                            }
                          ],
                          "functionName": {
                            "name": "abi_decode_t_address",
                            "nodeType": "YulIdentifier",
                            "src": "1745:20:3"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1745:53:3"
                        },
                        "variableNames": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "1735:6:3"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "nodeType": "YulBlock",
                    "src": "1818:118:3",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "1833:16:3",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "1847:2:3",
                          "type": "",
                          "value": "32"
                        },
                        "variables": [
                          {
                            "name": "offset",
                            "nodeType": "YulTypedName",
                            "src": "1837:6:3",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "1863:63:3",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "1898:9:3"
                                },
                                {
                                  "name": "offset",
                                  "nodeType": "YulIdentifier",
                                  "src": "1909:6:3"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "1894:3:3"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1894:22:3"
                            },
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "1918:7:3"
                            }
                          ],
                          "functionName": {
                            "name": "abi_decode_t_uint256",
                            "nodeType": "YulIdentifier",
                            "src": "1873:20:3"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1873:53:3"
                        },
                        "variableNames": [
                          {
                            "name": "value1",
                            "nodeType": "YulIdentifier",
                            "src": "1863:6:3"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              "name": "abi_decode_tuple_t_addresst_uint256",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "1581:9:3",
                  "type": ""
                },
                {
                  "name": "dataEnd",
                  "nodeType": "YulTypedName",
                  "src": "1592:7:3",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "1604:6:3",
                  "type": ""
                },
                {
                  "name": "value1",
                  "nodeType": "YulTypedName",
                  "src": "1612:6:3",
                  "type": ""
                }
              ],
              "src": "1536:407:3"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "2015:196:3",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "2061:16:3",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "2070:1:3",
                                "type": "",
                                "value": "0"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "2073:1:3",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "revert",
                              "nodeType": "YulIdentifier",
                              "src": "2063:6:3"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "2063:12:3"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "2063:12:3"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "2036:7:3"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "2045:9:3"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "2032:3:3"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2032:23:3"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "2057:2:3",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "slt",
                        "nodeType": "YulIdentifier",
                        "src": "2028:3:3"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2028:32:3"
                    },
                    "nodeType": "YulIf",
                    "src": "2025:2:3"
                  },
                  {
                    "nodeType": "YulBlock",
                    "src": "2087:117:3",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "2102:15:3",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "2116:1:3",
                          "type": "",
                          "value": "0"
                        },
                        "variables": [
                          {
                            "name": "offset",
                            "nodeType": "YulTypedName",
                            "src": "2106:6:3",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "2131:63:3",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "2166:9:3"
                                },
                                {
                                  "name": "offset",
                                  "nodeType": "YulIdentifier",
                                  "src": "2177:6:3"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "2162:3:3"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2162:22:3"
                            },
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "2186:7:3"
                            }
                          ],
                          "functionName": {
                            "name": "abi_decode_t_uint256",
                            "nodeType": "YulIdentifier",
                            "src": "2141:20:3"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2141:53:3"
                        },
                        "variableNames": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "2131:6:3"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              "name": "abi_decode_tuple_t_uint256",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "1985:9:3",
                  "type": ""
                },
                {
                  "name": "dataEnd",
                  "nodeType": "YulTypedName",
                  "src": "1996:7:3",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "2008:6:3",
                  "type": ""
                }
              ],
              "src": "1949:262:3"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "2282:53:3",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "2299:3:3"
                        },
                        {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "2322:5:3"
                            }
                          ],
                          "functionName": {
                            "name": "cleanup_t_address",
                            "nodeType": "YulIdentifier",
                            "src": "2304:17:3"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2304:24:3"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "2292:6:3"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2292:37:3"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "2292:37:3"
                  }
                ]
              },
              "name": "abi_encode_t_address_to_t_address_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "2270:5:3",
                  "type": ""
                },
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "2277:3:3",
                  "type": ""
                }
              ],
              "src": "2217:118:3"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "2400:50:3",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "2417:3:3"
                        },
                        {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "2437:5:3"
                            }
                          ],
                          "functionName": {
                            "name": "cleanup_t_bool",
                            "nodeType": "YulIdentifier",
                            "src": "2422:14:3"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2422:21:3"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "2410:6:3"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2410:34:3"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "2410:34:3"
                  }
                ]
              },
              "name": "abi_encode_t_bool_to_t_bool_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "2388:5:3",
                  "type": ""
                },
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "2395:3:3",
                  "type": ""
                }
              ],
              "src": "2341:109:3"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "2548:272:3",
                "statements": [
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "2558:53:3",
                    "value": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "2605:5:3"
                        }
                      ],
                      "functionName": {
                        "name": "array_length_t_string_memory_ptr",
                        "nodeType": "YulIdentifier",
                        "src": "2572:32:3"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2572:39:3"
                    },
                    "variables": [
                      {
                        "name": "length",
                        "nodeType": "YulTypedName",
                        "src": "2562:6:3",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "2620:78:3",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "2686:3:3"
                        },
                        {
                          "name": "length",
                          "nodeType": "YulIdentifier",
                          "src": "2691:6:3"
                        }
                      ],
                      "functionName": {
                        "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "2627:58:3"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2627:71:3"
                    },
                    "variableNames": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "2620:3:3"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "2733:5:3"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2740:4:3",
                              "type": "",
                              "value": "0x20"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "2729:3:3"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2729:16:3"
                        },
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "2747:3:3"
                        },
                        {
                          "name": "length",
                          "nodeType": "YulIdentifier",
                          "src": "2752:6:3"
                        }
                      ],
                      "functionName": {
                        "name": "copy_memory_to_memory",
                        "nodeType": "YulIdentifier",
                        "src": "2707:21:3"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2707:52:3"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "2707:52:3"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "2768:46:3",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "2779:3:3"
                        },
                        {
                          "arguments": [
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "2806:6:3"
                            }
                          ],
                          "functionName": {
                            "name": "round_up_to_mul_of_32",
                            "nodeType": "YulIdentifier",
                            "src": "2784:21:3"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2784:29:3"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "2775:3:3"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2775:39:3"
                    },
                    "variableNames": [
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "2768:3:3"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "2529:5:3",
                  "type": ""
                },
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "2536:3:3",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "2544:3:3",
                  "type": ""
                }
              ],
              "src": "2456:364:3"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "2891:53:3",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "2908:3:3"
                        },
                        {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "2931:5:3"
                            }
                          ],
                          "functionName": {
                            "name": "cleanup_t_uint256",
                            "nodeType": "YulIdentifier",
                            "src": "2913:17:3"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2913:24:3"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "2901:6:3"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2901:37:3"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "2901:37:3"
                  }
                ]
              },
              "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "2879:5:3",
                  "type": ""
                },
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "2886:3:3",
                  "type": ""
                }
              ],
              "src": "2826:118:3"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "3011:51:3",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "3028:3:3"
                        },
                        {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "3049:5:3"
                            }
                          ],
                          "functionName": {
                            "name": "cleanup_t_uint8",
                            "nodeType": "YulIdentifier",
                            "src": "3033:15:3"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3033:22:3"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "3021:6:3"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3021:35:3"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "3021:35:3"
                  }
                ]
              },
              "name": "abi_encode_t_uint8_to_t_uint8_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "2999:5:3",
                  "type": ""
                },
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "3006:3:3",
                  "type": ""
                }
              ],
              "src": "2950:112:3"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "3166:124:3",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "3176:26:3",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "3188:9:3"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "3199:2:3",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "3184:3:3"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3184:18:3"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "3176:4:3"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "3256:6:3"
                        },
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "3269:9:3"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3280:1:3",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "3265:3:3"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3265:17:3"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_address_to_t_address_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "3212:43:3"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3212:71:3"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "3212:71:3"
                  }
                ]
              },
              "name": "abi_encode_tuple_t_address__to_t_address__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "3138:9:3",
                  "type": ""
                },
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "3150:6:3",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "3161:4:3",
                  "type": ""
                }
              ],
              "src": "3068:222:3"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "3388:118:3",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "3398:26:3",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "3410:9:3"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "3421:2:3",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "3406:3:3"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3406:18:3"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "3398:4:3"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "3472:6:3"
                        },
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "3485:9:3"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3496:1:3",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "3481:3:3"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3481:17:3"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_bool_to_t_bool_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "3434:37:3"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3434:65:3"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "3434:65:3"
                  }
                ]
              },
              "name": "abi_encode_tuple_t_bool__to_t_bool__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "3360:9:3",
                  "type": ""
                },
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "3372:6:3",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "3383:4:3",
                  "type": ""
                }
              ],
              "src": "3296:210:3"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "3630:195:3",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "3640:26:3",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "3652:9:3"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "3663:2:3",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "3648:3:3"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3648:18:3"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "3640:4:3"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "3687:9:3"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3698:1:3",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "3683:3:3"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3683:17:3"
                        },
                        {
                          "arguments": [
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "3706:4:3"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "3712:9:3"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "3702:3:3"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3702:20:3"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "3676:6:3"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3676:47:3"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "3676:47:3"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "3732:86:3",
                    "value": {
                      "arguments": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "3804:6:3"
                        },
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "3813:4:3"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "3740:63:3"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3740:78:3"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "3732:4:3"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_tuple_t_string_memory_ptr__to_t_string_memory_ptr__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "3602:9:3",
                  "type": ""
                },
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "3614:6:3",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "3625:4:3",
                  "type": ""
                }
              ],
              "src": "3512:313:3"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "3929:124:3",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "3939:26:3",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "3951:9:3"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "3962:2:3",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "3947:3:3"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3947:18:3"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "3939:4:3"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "4019:6:3"
                        },
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "4032:9:3"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4043:1:3",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "4028:3:3"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4028:17:3"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "3975:43:3"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3975:71:3"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "3975:71:3"
                  }
                ]
              },
              "name": "abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "3901:9:3",
                  "type": ""
                },
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "3913:6:3",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "3924:4:3",
                  "type": ""
                }
              ],
              "src": "3831:222:3"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "4153:120:3",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "4163:26:3",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "4175:9:3"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "4186:2:3",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "4171:3:3"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4171:18:3"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "4163:4:3"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "4239:6:3"
                        },
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "4252:9:3"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4263:1:3",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "4248:3:3"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4248:17:3"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_uint8_to_t_uint8_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "4199:39:3"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4199:67:3"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "4199:67:3"
                  }
                ]
              },
              "name": "abi_encode_tuple_t_uint8__to_t_uint8__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "4125:9:3",
                  "type": ""
                },
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "4137:6:3",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "4148:4:3",
                  "type": ""
                }
              ],
              "src": "4059:214:3"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "4338:40:3",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "4349:22:3",
                    "value": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "4365:5:3"
                        }
                      ],
                      "functionName": {
                        "name": "mload",
                        "nodeType": "YulIdentifier",
                        "src": "4359:5:3"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4359:12:3"
                    },
                    "variableNames": [
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "4349:6:3"
                      }
                    ]
                  }
                ]
              },
              "name": "array_length_t_string_memory_ptr",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "4321:5:3",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "length",
                  "nodeType": "YulTypedName",
                  "src": "4331:6:3",
                  "type": ""
                }
              ],
              "src": "4279:99:3"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "4480:73:3",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "4497:3:3"
                        },
                        {
                          "name": "length",
                          "nodeType": "YulIdentifier",
                          "src": "4502:6:3"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "4490:6:3"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4490:19:3"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "4490:19:3"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "4518:29:3",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "4537:3:3"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "4542:4:3",
                          "type": "",
                          "value": "0x20"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "4533:3:3"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4533:14:3"
                    },
                    "variableNames": [
                      {
                        "name": "updated_pos",
                        "nodeType": "YulIdentifier",
                        "src": "4518:11:3"
                      }
                    ]
                  }
                ]
              },
              "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "4452:3:3",
                  "type": ""
                },
                {
                  "name": "length",
                  "nodeType": "YulTypedName",
                  "src": "4457:6:3",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "updated_pos",
                  "nodeType": "YulTypedName",
                  "src": "4468:11:3",
                  "type": ""
                }
              ],
              "src": "4384:169:3"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "4603:261:3",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "4613:25:3",
                    "value": {
                      "arguments": [
                        {
                          "name": "x",
                          "nodeType": "YulIdentifier",
                          "src": "4636:1:3"
                        }
                      ],
                      "functionName": {
                        "name": "cleanup_t_uint256",
                        "nodeType": "YulIdentifier",
                        "src": "4618:17:3"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4618:20:3"
                    },
                    "variableNames": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "4613:1:3"
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "4647:25:3",
                    "value": {
                      "arguments": [
                        {
                          "name": "y",
                          "nodeType": "YulIdentifier",
                          "src": "4670:1:3"
                        }
                      ],
                      "functionName": {
                        "name": "cleanup_t_uint256",
                        "nodeType": "YulIdentifier",
                        "src": "4652:17:3"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4652:20:3"
                    },
                    "variableNames": [
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "4647:1:3"
                      }
                    ]
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "4810:22:3",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "panic_error_0x11",
                              "nodeType": "YulIdentifier",
                              "src": "4812:16:3"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "4812:18:3"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "4812:18:3"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "x",
                          "nodeType": "YulIdentifier",
                          "src": "4731:1:3"
                        },
                        {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4738:66:3",
                              "type": "",
                              "value": "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
                            },
                            {
                              "name": "y",
                              "nodeType": "YulIdentifier",
                              "src": "4806:1:3"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "4734:3:3"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4734:74:3"
                        }
                      ],
                      "functionName": {
                        "name": "gt",
                        "nodeType": "YulIdentifier",
                        "src": "4728:2:3"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4728:81:3"
                    },
                    "nodeType": "YulIf",
                    "src": "4725:2:3"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "4842:16:3",
                    "value": {
                      "arguments": [
                        {
                          "name": "x",
                          "nodeType": "YulIdentifier",
                          "src": "4853:1:3"
                        },
                        {
                          "name": "y",
                          "nodeType": "YulIdentifier",
                          "src": "4856:1:3"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "4849:3:3"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4849:9:3"
                    },
                    "variableNames": [
                      {
                        "name": "sum",
                        "nodeType": "YulIdentifier",
                        "src": "4842:3:3"
                      }
                    ]
                  }
                ]
              },
              "name": "checked_add_t_uint256",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "x",
                  "nodeType": "YulTypedName",
                  "src": "4590:1:3",
                  "type": ""
                },
                {
                  "name": "y",
                  "nodeType": "YulTypedName",
                  "src": "4593:1:3",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "sum",
                  "nodeType": "YulTypedName",
                  "src": "4599:3:3",
                  "type": ""
                }
              ],
              "src": "4559:305:3"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "4915:146:3",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "4925:25:3",
                    "value": {
                      "arguments": [
                        {
                          "name": "x",
                          "nodeType": "YulIdentifier",
                          "src": "4948:1:3"
                        }
                      ],
                      "functionName": {
                        "name": "cleanup_t_uint256",
                        "nodeType": "YulIdentifier",
                        "src": "4930:17:3"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4930:20:3"
                    },
                    "variableNames": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "4925:1:3"
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "4959:25:3",
                    "value": {
                      "arguments": [
                        {
                          "name": "y",
                          "nodeType": "YulIdentifier",
                          "src": "4982:1:3"
                        }
                      ],
                      "functionName": {
                        "name": "cleanup_t_uint256",
                        "nodeType": "YulIdentifier",
                        "src": "4964:17:3"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4964:20:3"
                    },
                    "variableNames": [
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "4959:1:3"
                      }
                    ]
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "5006:22:3",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "panic_error_0x11",
                              "nodeType": "YulIdentifier",
                              "src": "5008:16:3"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "5008:18:3"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "5008:18:3"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "x",
                          "nodeType": "YulIdentifier",
                          "src": "5000:1:3"
                        },
                        {
                          "name": "y",
                          "nodeType": "YulIdentifier",
                          "src": "5003:1:3"
                        }
                      ],
                      "functionName": {
                        "name": "lt",
                        "nodeType": "YulIdentifier",
                        "src": "4997:2:3"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4997:8:3"
                    },
                    "nodeType": "YulIf",
                    "src": "4994:2:3"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "5038:17:3",
                    "value": {
                      "arguments": [
                        {
                          "name": "x",
                          "nodeType": "YulIdentifier",
                          "src": "5050:1:3"
                        },
                        {
                          "name": "y",
                          "nodeType": "YulIdentifier",
                          "src": "5053:1:3"
                        }
                      ],
                      "functionName": {
                        "name": "sub",
                        "nodeType": "YulIdentifier",
                        "src": "5046:3:3"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "5046:9:3"
                    },
                    "variableNames": [
                      {
                        "name": "diff",
                        "nodeType": "YulIdentifier",
                        "src": "5038:4:3"
                      }
                    ]
                  }
                ]
              },
              "name": "checked_sub_t_uint256",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "x",
                  "nodeType": "YulTypedName",
                  "src": "4901:1:3",
                  "type": ""
                },
                {
                  "name": "y",
                  "nodeType": "YulTypedName",
                  "src": "4904:1:3",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "diff",
                  "nodeType": "YulTypedName",
                  "src": "4910:4:3",
                  "type": ""
                }
              ],
              "src": "4870:191:3"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "5112:51:3",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "5122:35:3",
                    "value": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "5151:5:3"
                        }
                      ],
                      "functionName": {
                        "name": "cleanup_t_uint160",
                        "nodeType": "YulIdentifier",
                        "src": "5133:17:3"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "5133:24:3"
                    },
                    "variableNames": [
                      {
                        "name": "cleaned",
                        "nodeType": "YulIdentifier",
                        "src": "5122:7:3"
                      }
                    ]
                  }
                ]
              },
              "name": "cleanup_t_address",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "5094:5:3",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "cleaned",
                  "nodeType": "YulTypedName",
                  "src": "5104:7:3",
                  "type": ""
                }
              ],
              "src": "5067:96:3"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "5211:48:3",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "5221:32:3",
                    "value": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "5246:5:3"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nodeType": "YulIdentifier",
                            "src": "5239:6:3"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5239:13:3"
                        }
                      ],
                      "functionName": {
                        "name": "iszero",
                        "nodeType": "YulIdentifier",
                        "src": "5232:6:3"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "5232:21:3"
                    },
                    "variableNames": [
                      {
                        "name": "cleaned",
                        "nodeType": "YulIdentifier",
                        "src": "5221:7:3"
                      }
                    ]
                  }
                ]
              },
              "name": "cleanup_t_bool",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "5193:5:3",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "cleaned",
                  "nodeType": "YulTypedName",
                  "src": "5203:7:3",
                  "type": ""
                }
              ],
              "src": "5169:90:3"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "5310:81:3",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "5320:65:3",
                    "value": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "5335:5:3"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "5342:42:3",
                          "type": "",
                          "value": "0xffffffffffffffffffffffffffffffffffffffff"
                        }
                      ],
                      "functionName": {
                        "name": "and",
                        "nodeType": "YulIdentifier",
                        "src": "5331:3:3"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "5331:54:3"
                    },
                    "variableNames": [
                      {
                        "name": "cleaned",
                        "nodeType": "YulIdentifier",
                        "src": "5320:7:3"
                      }
                    ]
                  }
                ]
              },
              "name": "cleanup_t_uint160",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "5292:5:3",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "cleaned",
                  "nodeType": "YulTypedName",
                  "src": "5302:7:3",
                  "type": ""
                }
              ],
              "src": "5265:126:3"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "5442:32:3",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "5452:16:3",
                    "value": {
                      "name": "value",
                      "nodeType": "YulIdentifier",
                      "src": "5463:5:3"
                    },
                    "variableNames": [
                      {
                        "name": "cleaned",
                        "nodeType": "YulIdentifier",
                        "src": "5452:7:3"
                      }
                    ]
                  }
                ]
              },
              "name": "cleanup_t_uint256",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "5424:5:3",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "cleaned",
                  "nodeType": "YulTypedName",
                  "src": "5434:7:3",
                  "type": ""
                }
              ],
              "src": "5397:77:3"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "5523:43:3",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "5533:27:3",
                    "value": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "5548:5:3"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "5555:4:3",
                          "type": "",
                          "value": "0xff"
                        }
                      ],
                      "functionName": {
                        "name": "and",
                        "nodeType": "YulIdentifier",
                        "src": "5544:3:3"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "5544:16:3"
                    },
                    "variableNames": [
                      {
                        "name": "cleaned",
                        "nodeType": "YulIdentifier",
                        "src": "5533:7:3"
                      }
                    ]
                  }
                ]
              },
              "name": "cleanup_t_uint8",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "5505:5:3",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "cleaned",
                  "nodeType": "YulTypedName",
                  "src": "5515:7:3",
                  "type": ""
                }
              ],
              "src": "5480:86:3"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "5621:258:3",
                "statements": [
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "5631:10:3",
                    "value": {
                      "kind": "number",
                      "nodeType": "YulLiteral",
                      "src": "5640:1:3",
                      "type": "",
                      "value": "0"
                    },
                    "variables": [
                      {
                        "name": "i",
                        "nodeType": "YulTypedName",
                        "src": "5635:1:3",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "5700:63:3",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "name": "dst",
                                    "nodeType": "YulIdentifier",
                                    "src": "5725:3:3"
                                  },
                                  {
                                    "name": "i",
                                    "nodeType": "YulIdentifier",
                                    "src": "5730:1:3"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nodeType": "YulIdentifier",
                                  "src": "5721:3:3"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "5721:11:3"
                              },
                              {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "name": "src",
                                        "nodeType": "YulIdentifier",
                                        "src": "5744:3:3"
                                      },
                                      {
                                        "name": "i",
                                        "nodeType": "YulIdentifier",
                                        "src": "5749:1:3"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "add",
                                      "nodeType": "YulIdentifier",
                                      "src": "5740:3:3"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "5740:11:3"
                                  }
                                ],
                                "functionName": {
                                  "name": "mload",
                                  "nodeType": "YulIdentifier",
                                  "src": "5734:5:3"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "5734:18:3"
                              }
                            ],
                            "functionName": {
                              "name": "mstore",
                              "nodeType": "YulIdentifier",
                              "src": "5714:6:3"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "5714:39:3"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "5714:39:3"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "i",
                          "nodeType": "YulIdentifier",
                          "src": "5661:1:3"
                        },
                        {
                          "name": "length",
                          "nodeType": "YulIdentifier",
                          "src": "5664:6:3"
                        }
                      ],
                      "functionName": {
                        "name": "lt",
                        "nodeType": "YulIdentifier",
                        "src": "5658:2:3"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "5658:13:3"
                    },
                    "nodeType": "YulForLoop",
                    "post": {
                      "nodeType": "YulBlock",
                      "src": "5672:19:3",
                      "statements": [
                        {
                          "nodeType": "YulAssignment",
                          "src": "5674:15:3",
                          "value": {
                            "arguments": [
                              {
                                "name": "i",
                                "nodeType": "YulIdentifier",
                                "src": "5683:1:3"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "5686:2:3",
                                "type": "",
                                "value": "32"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "5679:3:3"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "5679:10:3"
                          },
                          "variableNames": [
                            {
                              "name": "i",
                              "nodeType": "YulIdentifier",
                              "src": "5674:1:3"
                            }
                          ]
                        }
                      ]
                    },
                    "pre": {
                      "nodeType": "YulBlock",
                      "src": "5654:3:3",
                      "statements": []
                    },
                    "src": "5650:113:3"
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "5797:76:3",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "name": "dst",
                                    "nodeType": "YulIdentifier",
                                    "src": "5847:3:3"
                                  },
                                  {
                                    "name": "length",
                                    "nodeType": "YulIdentifier",
                                    "src": "5852:6:3"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nodeType": "YulIdentifier",
                                  "src": "5843:3:3"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "5843:16:3"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "5861:1:3",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "mstore",
                              "nodeType": "YulIdentifier",
                              "src": "5836:6:3"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "5836:27:3"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "5836:27:3"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "i",
                          "nodeType": "YulIdentifier",
                          "src": "5778:1:3"
                        },
                        {
                          "name": "length",
                          "nodeType": "YulIdentifier",
                          "src": "5781:6:3"
                        }
                      ],
                      "functionName": {
                        "name": "gt",
                        "nodeType": "YulIdentifier",
                        "src": "5775:2:3"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "5775:13:3"
                    },
                    "nodeType": "YulIf",
                    "src": "5772:2:3"
                  }
                ]
              },
              "name": "copy_memory_to_memory",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "src",
                  "nodeType": "YulTypedName",
                  "src": "5603:3:3",
                  "type": ""
                },
                {
                  "name": "dst",
                  "nodeType": "YulTypedName",
                  "src": "5608:3:3",
                  "type": ""
                },
                {
                  "name": "length",
                  "nodeType": "YulTypedName",
                  "src": "5613:6:3",
                  "type": ""
                }
              ],
              "src": "5572:307:3"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "5936:269:3",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "5946:22:3",
                    "value": {
                      "arguments": [
                        {
                          "name": "data",
                          "nodeType": "YulIdentifier",
                          "src": "5960:4:3"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "5966:1:3",
                          "type": "",
                          "value": "2"
                        }
                      ],
                      "functionName": {
                        "name": "div",
                        "nodeType": "YulIdentifier",
                        "src": "5956:3:3"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "5956:12:3"
                    },
                    "variableNames": [
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "5946:6:3"
                      }
                    ]
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "5977:38:3",
                    "value": {
                      "arguments": [
                        {
                          "name": "data",
                          "nodeType": "YulIdentifier",
                          "src": "6007:4:3"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "6013:1:3",
                          "type": "",
                          "value": "1"
                        }
                      ],
                      "functionName": {
                        "name": "and",
                        "nodeType": "YulIdentifier",
                        "src": "6003:3:3"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "6003:12:3"
                    },
                    "variables": [
                      {
                        "name": "outOfPlaceEncoding",
                        "nodeType": "YulTypedName",
                        "src": "5981:18:3",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "6054:51:3",
                      "statements": [
                        {
                          "nodeType": "YulAssignment",
                          "src": "6068:27:3",
                          "value": {
                            "arguments": [
                              {
                                "name": "length",
                                "nodeType": "YulIdentifier",
                                "src": "6082:6:3"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "6090:4:3",
                                "type": "",
                                "value": "0x7f"
                              }
                            ],
                            "functionName": {
                              "name": "and",
                              "nodeType": "YulIdentifier",
                              "src": "6078:3:3"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "6078:17:3"
                          },
                          "variableNames": [
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "6068:6:3"
                            }
                          ]
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "outOfPlaceEncoding",
                          "nodeType": "YulIdentifier",
                          "src": "6034:18:3"
                        }
                      ],
                      "functionName": {
                        "name": "iszero",
                        "nodeType": "YulIdentifier",
                        "src": "6027:6:3"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "6027:26:3"
                    },
                    "nodeType": "YulIf",
                    "src": "6024:2:3"
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "6157:42:3",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "panic_error_0x22",
                              "nodeType": "YulIdentifier",
                              "src": "6171:16:3"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "6171:18:3"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "6171:18:3"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "outOfPlaceEncoding",
                          "nodeType": "YulIdentifier",
                          "src": "6121:18:3"
                        },
                        {
                          "arguments": [
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "6144:6:3"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "6152:2:3",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "lt",
                            "nodeType": "YulIdentifier",
                            "src": "6141:2:3"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6141:14:3"
                        }
                      ],
                      "functionName": {
                        "name": "eq",
                        "nodeType": "YulIdentifier",
                        "src": "6118:2:3"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "6118:38:3"
                    },
                    "nodeType": "YulIf",
                    "src": "6115:2:3"
                  }
                ]
              },
              "name": "extract_byte_array_length",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "data",
                  "nodeType": "YulTypedName",
                  "src": "5920:4:3",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "length",
                  "nodeType": "YulTypedName",
                  "src": "5929:6:3",
                  "type": ""
                }
              ],
              "src": "5885:320:3"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "6239:152:3",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "6256:1:3",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "6259:77:3",
                          "type": "",
                          "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "6249:6:3"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "6249:88:3"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "6249:88:3"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "6353:1:3",
                          "type": "",
                          "value": "4"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "6356:4:3",
                          "type": "",
                          "value": "0x11"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "6346:6:3"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "6346:15:3"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "6346:15:3"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "6377:1:3",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "6380:4:3",
                          "type": "",
                          "value": "0x24"
                        }
                      ],
                      "functionName": {
                        "name": "revert",
                        "nodeType": "YulIdentifier",
                        "src": "6370:6:3"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "6370:15:3"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "6370:15:3"
                  }
                ]
              },
              "name": "panic_error_0x11",
              "nodeType": "YulFunctionDefinition",
              "src": "6211:180:3"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "6425:152:3",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "6442:1:3",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "6445:77:3",
                          "type": "",
                          "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "6435:6:3"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "6435:88:3"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "6435:88:3"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "6539:1:3",
                          "type": "",
                          "value": "4"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "6542:4:3",
                          "type": "",
                          "value": "0x22"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "6532:6:3"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "6532:15:3"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "6532:15:3"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "6563:1:3",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "6566:4:3",
                          "type": "",
                          "value": "0x24"
                        }
                      ],
                      "functionName": {
                        "name": "revert",
                        "nodeType": "YulIdentifier",
                        "src": "6556:6:3"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "6556:15:3"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "6556:15:3"
                  }
                ]
              },
              "name": "panic_error_0x22",
              "nodeType": "YulFunctionDefinition",
              "src": "6397:180:3"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "6631:54:3",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "6641:38:3",
                    "value": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "6659:5:3"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "6666:2:3",
                              "type": "",
                              "value": "31"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "6655:3:3"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6655:14:3"
                        },
                        {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "6675:2:3",
                              "type": "",
                              "value": "31"
                            }
                          ],
                          "functionName": {
                            "name": "not",
                            "nodeType": "YulIdentifier",
                            "src": "6671:3:3"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6671:7:3"
                        }
                      ],
                      "functionName": {
                        "name": "and",
                        "nodeType": "YulIdentifier",
                        "src": "6651:3:3"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "6651:28:3"
                    },
                    "variableNames": [
                      {
                        "name": "result",
                        "nodeType": "YulIdentifier",
                        "src": "6641:6:3"
                      }
                    ]
                  }
                ]
              },
              "name": "round_up_to_mul_of_32",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "6614:5:3",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "result",
                  "nodeType": "YulTypedName",
                  "src": "6624:6:3",
                  "type": ""
                }
              ],
              "src": "6583:102:3"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "6734:79:3",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "6791:16:3",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "6800:1:3",
                                "type": "",
                                "value": "0"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "6803:1:3",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "revert",
                              "nodeType": "YulIdentifier",
                              "src": "6793:6:3"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "6793:12:3"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "6793:12:3"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "6757:5:3"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "value",
                                  "nodeType": "YulIdentifier",
                                  "src": "6782:5:3"
                                }
                              ],
                              "functionName": {
                                "name": "cleanup_t_address",
                                "nodeType": "YulIdentifier",
                                "src": "6764:17:3"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "6764:24:3"
                            }
                          ],
                          "functionName": {
                            "name": "eq",
                            "nodeType": "YulIdentifier",
                            "src": "6754:2:3"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6754:35:3"
                        }
                      ],
                      "functionName": {
                        "name": "iszero",
                        "nodeType": "YulIdentifier",
                        "src": "6747:6:3"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "6747:43:3"
                    },
                    "nodeType": "YulIf",
                    "src": "6744:2:3"
                  }
                ]
              },
              "name": "validator_revert_t_address",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "6727:5:3",
                  "type": ""
                }
              ],
              "src": "6691:122:3"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "6862:79:3",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "6919:16:3",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "6928:1:3",
                                "type": "",
                                "value": "0"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "6931:1:3",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "revert",
                              "nodeType": "YulIdentifier",
                              "src": "6921:6:3"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "6921:12:3"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "6921:12:3"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "6885:5:3"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "value",
                                  "nodeType": "YulIdentifier",
                                  "src": "6910:5:3"
                                }
                              ],
                              "functionName": {
                                "name": "cleanup_t_uint256",
                                "nodeType": "YulIdentifier",
                                "src": "6892:17:3"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "6892:24:3"
                            }
                          ],
                          "functionName": {
                            "name": "eq",
                            "nodeType": "YulIdentifier",
                            "src": "6882:2:3"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6882:35:3"
                        }
                      ],
                      "functionName": {
                        "name": "iszero",
                        "nodeType": "YulIdentifier",
                        "src": "6875:6:3"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "6875:43:3"
                    },
                    "nodeType": "YulIf",
                    "src": "6872:2:3"
                  }
                ]
              },
              "name": "validator_revert_t_uint256",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "6855:5:3",
                  "type": ""
                }
              ],
              "src": "6819:122:3"
            }
          ]
        },
        "contents": "{\n\n    function abi_decode_t_address(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_address(value)\n    }\n\n    function abi_decode_t_uint256(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_uint256(value)\n    }\n\n    function abi_decode_tuple_t_address(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert(0, 0) }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_decode_tuple_t_addresst_address(headStart, dataEnd) -> value0, value1 {\n        if slt(sub(dataEnd, headStart), 64) { revert(0, 0) }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 32\n\n            value1 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_decode_tuple_t_addresst_addresst_uint256(headStart, dataEnd) -> value0, value1, value2 {\n        if slt(sub(dataEnd, headStart), 96) { revert(0, 0) }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 32\n\n            value1 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 64\n\n            value2 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_decode_tuple_t_addresst_uint256(headStart, dataEnd) -> value0, value1 {\n        if slt(sub(dataEnd, headStart), 64) { revert(0, 0) }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 32\n\n            value1 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_decode_tuple_t_uint256(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert(0, 0) }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_encode_t_address_to_t_address_fromStack(value, pos) {\n        mstore(pos, cleanup_t_address(value))\n    }\n\n    function abi_encode_t_bool_to_t_bool_fromStack(value, pos) {\n        mstore(pos, cleanup_t_bool(value))\n    }\n\n    function abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack(value, pos) -> end {\n        let length := array_length_t_string_memory_ptr(value)\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, length)\n        copy_memory_to_memory(add(value, 0x20), pos, length)\n        end := add(pos, round_up_to_mul_of_32(length))\n    }\n\n    function abi_encode_t_uint256_to_t_uint256_fromStack(value, pos) {\n        mstore(pos, cleanup_t_uint256(value))\n    }\n\n    function abi_encode_t_uint8_to_t_uint8_fromStack(value, pos) {\n        mstore(pos, cleanup_t_uint8(value))\n    }\n\n    function abi_encode_tuple_t_address__to_t_address__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_address_to_t_address_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function abi_encode_tuple_t_bool__to_t_bool__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_bool_to_t_bool_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function abi_encode_tuple_t_string_memory_ptr__to_t_string_memory_ptr__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack(value0,  tail)\n\n    }\n\n    function abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function abi_encode_tuple_t_uint8__to_t_uint8__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_uint8_to_t_uint8_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function array_length_t_string_memory_ptr(value) -> length {\n\n        length := mload(value)\n\n    }\n\n    function array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, length) -> updated_pos {\n        mstore(pos, length)\n        updated_pos := add(pos, 0x20)\n    }\n\n    function checked_add_t_uint256(x, y) -> sum {\n        x := cleanup_t_uint256(x)\n        y := cleanup_t_uint256(y)\n\n        // overflow, if x > (maxValue - y)\n        if gt(x, sub(0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff, y)) { panic_error_0x11() }\n\n        sum := add(x, y)\n    }\n\n    function checked_sub_t_uint256(x, y) -> diff {\n        x := cleanup_t_uint256(x)\n        y := cleanup_t_uint256(y)\n\n        if lt(x, y) { panic_error_0x11() }\n\n        diff := sub(x, y)\n    }\n\n    function cleanup_t_address(value) -> cleaned {\n        cleaned := cleanup_t_uint160(value)\n    }\n\n    function cleanup_t_bool(value) -> cleaned {\n        cleaned := iszero(iszero(value))\n    }\n\n    function cleanup_t_uint160(value) -> cleaned {\n        cleaned := and(value, 0xffffffffffffffffffffffffffffffffffffffff)\n    }\n\n    function cleanup_t_uint256(value) -> cleaned {\n        cleaned := value\n    }\n\n    function cleanup_t_uint8(value) -> cleaned {\n        cleaned := and(value, 0xff)\n    }\n\n    function copy_memory_to_memory(src, dst, length) {\n        let i := 0\n        for { } lt(i, length) { i := add(i, 32) }\n        {\n            mstore(add(dst, i), mload(add(src, i)))\n        }\n        if gt(i, length)\n        {\n            // clear end\n            mstore(add(dst, length), 0)\n        }\n    }\n\n    function extract_byte_array_length(data) -> length {\n        length := div(data, 2)\n        let outOfPlaceEncoding := and(data, 1)\n        if iszero(outOfPlaceEncoding) {\n            length := and(length, 0x7f)\n        }\n\n        if eq(outOfPlaceEncoding, lt(length, 32)) {\n            panic_error_0x22()\n        }\n    }\n\n    function panic_error_0x11() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x11)\n        revert(0, 0x24)\n    }\n\n    function panic_error_0x22() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x22)\n        revert(0, 0x24)\n    }\n\n    function round_up_to_mul_of_32(value) -> result {\n        result := and(add(value, 31), not(31))\n    }\n\n    function validator_revert_t_address(value) {\n        if iszero(eq(value, cleanup_t_address(value))) { revert(0, 0) }\n    }\n\n    function validator_revert_t_uint256(value) {\n        if iszero(eq(value, cleanup_t_uint256(value))) { revert(0, 0) }\n    }\n\n}\n",
        "id": 3,
        "language": "Yul",
        "name": "#utility.yul"
      }
    ],
    "sourceMap": "184:2749:2:-:0;;;319:4;278:46;;;;;;;;;;;;;;;;;;;;331:34;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;397:25;374:48;;723:120;;;;;;;;;;787:12;;757:10;:27;768:15;;;;;;;;;;;757:27;;;;;;;;;;;;;;;:42;;;;825:10;810:12;;:25;;;;;;;;;;;;;;;;;;184:2749;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;:::o;7:320:3:-;;88:1;82:4;78:12;68:22;;135:1;129:4;125:12;156:18;146:2;;212:4;204:6;200:17;190:27;;146:2;274;266:6;263:14;243:18;240:38;237:2;;;293:18;;:::i;:::-;237:2;58:269;;;;:::o;333:180::-;381:77;378:1;371:88;478:4;475:1;468:15;502:4;499:1;492:15;184:2749:2;;;;;;;",
    "deployedSourceMap": "184:2749:2:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;478:68;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1218:88;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2567:215;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1485:91;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2115:446;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;331:34;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1403:76;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;553:65;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1582:117;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;244:27;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1312:85;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1707:402;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;686:28;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;429:42;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2790:138;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;278:46;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;478:68;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;1218:88::-;1255:13;1281:17;;;;;;;;;;;;;;;;;;;1218:88;:::o;2567:215::-;2634:12;2692:6;2659:8;:20;2668:10;2659:20;;;;;;;;;;;;;;;:30;2680:8;2659:30;;;;;;;;;;;;;;;:39;;;;2735:8;2714:38;;2723:10;2714:38;;;2745:6;2714:38;;;;;;:::i;:::-;;;;;;;;2770:4;2763:11;;2567:215;;;;:::o;1485:91::-;1529:7;1556:12;;1549:19;;1485:91;:::o;2115:446::-;2219:12;2203:5;1022:1;1002:10;:17;1013:5;1002:17;;;;;;;;;;;;;;;;:21;994:30;;;;;;2247:22:::1;2255:5;2262:6;2247:7;:22::i;:::-;2244:310;;;2299:10;:17;2310:5;2299:17;;;;;;;;;;;;;;;;2289:6;:27;2286:180;;2357:29;2379:6;2357:10;:17;2368:5;2357:17;;;;;;;;;;;;;;;;:21;;:29;;;;:::i;:::-;2337:10;:17;2348:5;2337:17;;;;;;;;;;;;;;;:49;;;;2423:27;2443:6;2423:10;:15;2434:3;2423:15;;;;;;;;;;;;;;;;:19;;:27;;;;:::i;:::-;2405:10;:15;2416:3;2405:15;;;;;;;;;;;;;;;:45;;;;2286:180;2501:3;2485:28;;2494:5;2485:28;;;2506:6;2485:28;;;;;;:::i;:::-;;;;;;;;2528:14;;2244:310;1035:1;2115:446:::0;;;;;;:::o;331:34::-;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;1403:76::-;1444:5;1469:2;1462:9;;1403:76;:::o;553:65::-;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;1582:117::-;1638:15;1673:10;:18;1684:6;1673:18;;;;;;;;;;;;;;;;1666:25;;1582:117;;;:::o;244:27::-;;;;;;;;;;;;:::o;1312:85::-;1351:13;1377:12;;;;;;;;;;;;;;;;;;;1312:85;:::o;1707:402::-;1788:12;905;;;;;;;;;;;891:26;;:10;:26;;;883:35;;;;;;1826:10:::1;:27;1837:15;;;;;;;;;;;1826:27;;;;;;;;;;;;;;;;1816:6;:37;1813:198;;1900:39;1932:6;1900:10;:27;1911:15;;;;;;;;;;;1900:27;;;;;;;;;;;;;;;;:31;;:39;;;;:::i;:::-;1870:10;:27;1881:15;;;;;;;;;;;1870:27;;;;;;;;;;;;;;;:69;;;;1972:27;1992:6;1972:10;:15;1983:3;1972:15;;;;;;;;;;;;;;;;:19;;:27;;;;:::i;:::-;1954:10;:15;1965:3;1954:15;;;;;;;;;;;;;;;:45;;;;1813:198;2029:10;:15;2040:3;2029:15;;;;;;;;;;;;;;;;2021:5;:23;;;;2055:11;2072:3;2055:21;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1707:402:::0;;;;:::o;686:28::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;429:42::-;;;;;;;;;;;;;;;;;:::o;2790:138::-;2864:7;2891:11;:19;2903:6;2891:19;;;;;;;;;;;;;;;:29;2911:8;2891:29;;;;;;;;;;;;;;;;2884:36;;2790:138;;;;:::o;278:46::-;;;;;;;;;;;;;:::o;2992:98:1:-;3050:7;3081:1;3077;:5;;;;:::i;:::-;3070:12;;2992:98;;;;:::o;2611:::-;2669:7;2700:1;2696;:5;;;;:::i;:::-;2689:12;;2611:98;;;;:::o;7:139:3:-;;91:6;78:20;69:29;;107:33;134:5;107:33;:::i;:::-;59:87;;;;:::o;152:139::-;;236:6;223:20;214:29;;252:33;279:5;252:33;:::i;:::-;204:87;;;;:::o;297:262::-;;405:2;393:9;384:7;380:23;376:32;373:2;;;421:1;418;411:12;373:2;464:1;489:53;534:7;525:6;514:9;510:22;489:53;:::i;:::-;479:63;;435:117;363:196;;;;:::o;565:407::-;;;690:2;678:9;669:7;665:23;661:32;658:2;;;706:1;703;696:12;658:2;749:1;774:53;819:7;810:6;799:9;795:22;774:53;:::i;:::-;764:63;;720:117;876:2;902:53;947:7;938:6;927:9;923:22;902:53;:::i;:::-;892:63;;847:118;648:324;;;;;:::o;978:552::-;;;;1120:2;1108:9;1099:7;1095:23;1091:32;1088:2;;;1136:1;1133;1126:12;1088:2;1179:1;1204:53;1249:7;1240:6;1229:9;1225:22;1204:53;:::i;:::-;1194:63;;1150:117;1306:2;1332:53;1377:7;1368:6;1357:9;1353:22;1332:53;:::i;:::-;1322:63;;1277:118;1434:2;1460:53;1505:7;1496:6;1485:9;1481:22;1460:53;:::i;:::-;1450:63;;1405:118;1078:452;;;;;:::o;1536:407::-;;;1661:2;1649:9;1640:7;1636:23;1632:32;1629:2;;;1677:1;1674;1667:12;1629:2;1720:1;1745:53;1790:7;1781:6;1770:9;1766:22;1745:53;:::i;:::-;1735:63;;1691:117;1847:2;1873:53;1918:7;1909:6;1898:9;1894:22;1873:53;:::i;:::-;1863:63;;1818:118;1619:324;;;;;:::o;1949:262::-;;2057:2;2045:9;2036:7;2032:23;2028:32;2025:2;;;2073:1;2070;2063:12;2025:2;2116:1;2141:53;2186:7;2177:6;2166:9;2162:22;2141:53;:::i;:::-;2131:63;;2087:117;2015:196;;;;:::o;2217:118::-;2304:24;2322:5;2304:24;:::i;:::-;2299:3;2292:37;2282:53;;:::o;2341:109::-;2422:21;2437:5;2422:21;:::i;:::-;2417:3;2410:34;2400:50;;:::o;2456:364::-;;2572:39;2605:5;2572:39;:::i;:::-;2627:71;2691:6;2686:3;2627:71;:::i;:::-;2620:78;;2707:52;2752:6;2747:3;2740:4;2733:5;2729:16;2707:52;:::i;:::-;2784:29;2806:6;2784:29;:::i;:::-;2779:3;2775:39;2768:46;;2548:272;;;;;:::o;2826:118::-;2913:24;2931:5;2913:24;:::i;:::-;2908:3;2901:37;2891:53;;:::o;2950:112::-;3033:22;3049:5;3033:22;:::i;:::-;3028:3;3021:35;3011:51;;:::o;3068:222::-;;3199:2;3188:9;3184:18;3176:26;;3212:71;3280:1;3269:9;3265:17;3256:6;3212:71;:::i;:::-;3166:124;;;;:::o;3296:210::-;;3421:2;3410:9;3406:18;3398:26;;3434:65;3496:1;3485:9;3481:17;3472:6;3434:65;:::i;:::-;3388:118;;;;:::o;3512:313::-;;3663:2;3652:9;3648:18;3640:26;;3712:9;3706:4;3702:20;3698:1;3687:9;3683:17;3676:47;3740:78;3813:4;3804:6;3740:78;:::i;:::-;3732:86;;3630:195;;;;:::o;3831:222::-;;3962:2;3951:9;3947:18;3939:26;;3975:71;4043:1;4032:9;4028:17;4019:6;3975:71;:::i;:::-;3929:124;;;;:::o;4059:214::-;;4186:2;4175:9;4171:18;4163:26;;4199:67;4263:1;4252:9;4248:17;4239:6;4199:67;:::i;:::-;4153:120;;;;:::o;4279:99::-;;4365:5;4359:12;4349:22;;4338:40;;;:::o;4384:169::-;;4502:6;4497:3;4490:19;4542:4;4537:3;4533:14;4518:29;;4480:73;;;;:::o;4559:305::-;;4618:20;4636:1;4618:20;:::i;:::-;4613:25;;4652:20;4670:1;4652:20;:::i;:::-;4647:25;;4806:1;4738:66;4734:74;4731:1;4728:81;4725:2;;;4812:18;;:::i;:::-;4725:2;4856:1;4853;4849:9;4842:16;;4603:261;;;;:::o;4870:191::-;;4930:20;4948:1;4930:20;:::i;:::-;4925:25;;4964:20;4982:1;4964:20;:::i;:::-;4959:25;;5003:1;5000;4997:8;4994:2;;;5008:18;;:::i;:::-;4994:2;5053:1;5050;5046:9;5038:17;;4915:146;;;;:::o;5067:96::-;;5133:24;5151:5;5133:24;:::i;:::-;5122:35;;5112:51;;;:::o;5169:90::-;;5246:5;5239:13;5232:21;5221:32;;5211:48;;;:::o;5265:126::-;;5342:42;5335:5;5331:54;5320:65;;5310:81;;;:::o;5397:77::-;;5463:5;5452:16;;5442:32;;;:::o;5480:86::-;;5555:4;5548:5;5544:16;5533:27;;5523:43;;;:::o;5572:307::-;5640:1;5650:113;5664:6;5661:1;5658:13;5650:113;;;5749:1;5744:3;5740:11;5734:18;5730:1;5725:3;5721:11;5714:39;5686:2;5683:1;5679:10;5674:15;;5650:113;;;5781:6;5778:1;5775:13;5772:2;;;5861:1;5852:6;5847:3;5843:16;5836:27;5772:2;5621:258;;;;:::o;5885:320::-;;5966:1;5960:4;5956:12;5946:22;;6013:1;6007:4;6003:12;6034:18;6024:2;;6090:4;6082:6;6078:17;6068:27;;6024:2;6152;6144:6;6141:14;6121:18;6118:38;6115:2;;;6171:18;;:::i;:::-;6115:2;5936:269;;;;:::o;6211:180::-;6259:77;6256:1;6249:88;6356:4;6353:1;6346:15;6380:4;6377:1;6370:15;6397:180;6445:77;6442:1;6435:88;6542:4;6539:1;6532:15;6566:4;6563:1;6556:15;6583:102;;6675:2;6671:7;6666:2;6659:5;6655:14;6651:28;6641:38;;6631:54;;;:::o;6691:122::-;6764:24;6782:5;6764:24;:::i;:::-;6757:5;6754:35;6744:2;;6803:1;6800;6793:12;6744:2;6734:79;:::o;6819:122::-;6892:24;6910:5;6892:24;:::i;:::-;6885:5;6882:35;6872:2;;6931:1;6928;6921:12;6872:2;6862:79;:::o",
    "source": "// SPDX-License-Identifier: MIT\r\n\r\npragma solidity ^0.8.0;\r\nimport \"./SafeMath.sol\";\r\n//import \"@OpenZeppelin/openzeppelin-contracts/blob/master/contracts/utils/math/SafeMath.sol\";\r\n\r\ncontract stakeDAO {\r\n    using SafeMath for uint256;\r\n\r\n    address public ownerAddress;\r\n    address public contractAddress = address(this);\r\n    string public tokenType = \"ERC-20\";\r\n\r\n    uint256 _totalSupply = 1000000000000000000000000;\r\n    mapping(address => uint) public _balanceOf;\r\n    mapping (address => mapping (address => uint256)) public _allowances;\r\n    mapping (address => mapping (address => uint256)) public _approve;\r\n    uint256 internal value;\r\n    uint256 internal _balance;\r\n    address[] public addressList;\r\n\r\n    constructor() public {\r\n\r\n        _balanceOf[contractAddress] = _totalSupply;\r\n        ownerAddress = msg.sender;\r\n    }\r\n\r\n    modifier onlyOwner() {\r\n        require(msg.sender == ownerAddress);\r\n        _;\r\n    }\r\n    modifier nonZeroBalance(address _from) {\r\n        require(_balanceOf[_from] > 0);\r\n        _;\r\n    }\r\n    event Transfer(address indexed _from, address indexed _to, uint256 _value);\r\n    event Approval(address indexed _owner, address indexed _spender, uint256 _value);\r\n    function name() public pure returns (string memory) {\r\n        return \"StakeDAO\";\r\n    }\r\n    function symbol() public pure returns (string memory) {\r\n        return \"STK\";\r\n    }\r\n    function decimals() public pure returns (uint8) {\r\n        return 18;\r\n    }\r\n    function totalSupply() public view returns (uint256) {\r\n        return _totalSupply;\r\n    }\r\n    function balanceOf(address _owner) public view returns (uint256 balance) {\r\n        return _balanceOf[_owner];\r\n    }\r\n\r\n    function transfer(address _to, uint256 _value) public onlyOwner payable returns (bool success) {\r\n        if(_value <= _balanceOf[contractAddress]) {\r\n            _balanceOf[contractAddress] = _balanceOf[contractAddress].sub(_value);\r\n            _balanceOf[_to] = _balanceOf[_to].add(_value);\r\n        }\r\n        value = _balanceOf[_to];\r\n        addressList.push(_to);\r\n        return success;\r\n    }\r\n    function transferFrom(address _from, address _to, uint256 _value) public nonZeroBalance(_from) returns (bool success) {\r\n        if(approve(_from, _value)) {\r\n            if(_value <= _balanceOf[_from]) {\r\n                _balanceOf[_from] = _balanceOf[_from].sub(_value);\r\n                _balanceOf[_to] = _balanceOf[_to].add(_value);\r\n            }\r\n            emit Transfer(_from, _to, _value);\r\n            return success;\r\n        }\r\n    }\r\n    function approve(address _spender, uint256 _value) public returns (bool success) {\r\n        _approve[msg.sender][_spender] = _value;\r\n        emit Approval(msg.sender, _spender, _value);\r\n        return true;\r\n    }\r\n\r\n    function allowance(address _owner, address _spender) public view returns (uint256) {\r\n        return _allowances[_owner][_spender];\r\n    }\r\n\r\n}",
    "sourcePath": "C:\\Users\\UZOR\\PycharmProjects\\untitled\\venv\\stakeDAO_project\\contracts\\StakeDAO.sol",
    "ast": {
      "absolutePath": "project:/contracts/StakeDAO.sol",
      "exportedSymbols": {
        "SafeMath": [
          336
        ],
        "stakeDAO": [
          637
        ]
      },
      "id": 638,
      "license": "MIT",
      "nodeType": "SourceUnit",
      "nodes": [
        {
          "id": 338,
          "literals": [
            "solidity",
            "^",
            "0.8",
            ".0"
          ],
          "nodeType": "PragmaDirective",
          "src": "35:23:2"
        },
        {
          "absolutePath": "project:/contracts/SafeMath.sol",
          "file": "./SafeMath.sol",
          "id": 339,
          "nodeType": "ImportDirective",
          "scope": 638,
          "sourceUnit": 337,
          "src": "60:24:2",
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "abstract": false,
          "baseContracts": [],
          "contractDependencies": [],
          "contractKind": "contract",
          "fullyImplemented": true,
          "id": 637,
          "linearizedBaseContracts": [
            637
          ],
          "name": "stakeDAO",
          "nodeType": "ContractDefinition",
          "nodes": [
            {
              "id": 342,
              "libraryName": {
                "id": 340,
                "name": "SafeMath",
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 336,
                "src": "215:8:2"
              },
              "nodeType": "UsingForDirective",
              "src": "209:27:2",
              "typeName": {
                "id": 341,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "228:7:2",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              }
            },
            {
              "constant": false,
              "functionSelector": "8f84aa09",
              "id": 344,
              "mutability": "mutable",
              "name": "ownerAddress",
              "nodeType": "VariableDeclaration",
              "scope": 637,
              "src": "244:27:2",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              },
              "typeName": {
                "id": 343,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "244:7:2",
                "stateMutability": "nonpayable",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "visibility": "public"
            },
            {
              "constant": false,
              "functionSelector": "f6b4dfb4",
              "id": 350,
              "mutability": "mutable",
              "name": "contractAddress",
              "nodeType": "VariableDeclaration",
              "scope": 637,
              "src": "278:46:2",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              },
              "typeName": {
                "id": 345,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "278:7:2",
                "stateMutability": "nonpayable",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "value": {
                "arguments": [
                  {
                    "id": 348,
                    "name": "this",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 4294967268,
                    "src": "319:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_stakeDAO_$637",
                      "typeString": "contract stakeDAO"
                    }
                  }
                ],
                "expression": {
                  "argumentTypes": [
                    {
                      "typeIdentifier": "t_contract$_stakeDAO_$637",
                      "typeString": "contract stakeDAO"
                    }
                  ],
                  "id": 347,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "lValueRequested": false,
                  "nodeType": "ElementaryTypeNameExpression",
                  "src": "311:7:2",
                  "typeDescriptions": {
                    "typeIdentifier": "t_type$_t_address_$",
                    "typeString": "type(address)"
                  },
                  "typeName": {
                    "id": 346,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "311:7:2",
                    "typeDescriptions": {}
                  }
                },
                "id": 349,
                "isConstant": false,
                "isLValue": false,
                "isPure": false,
                "kind": "typeConversion",
                "lValueRequested": false,
                "names": [],
                "nodeType": "FunctionCall",
                "src": "311:13:2",
                "tryCall": false,
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "visibility": "public"
            },
            {
              "constant": false,
              "functionSelector": "30fa738c",
              "id": 353,
              "mutability": "mutable",
              "name": "tokenType",
              "nodeType": "VariableDeclaration",
              "scope": 637,
              "src": "331:34:2",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage",
                "typeString": "string"
              },
              "typeName": {
                "id": 351,
                "name": "string",
                "nodeType": "ElementaryTypeName",
                "src": "331:6:2",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                }
              },
              "value": {
                "hexValue": "4552432d3230",
                "id": 352,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "string",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "357:8:2",
                "typeDescriptions": {
                  "typeIdentifier": "t_stringliteral_b7fbcb1a03fc61c2644a2146a8d83480606c2954646783d0aaf972707823e26d",
                  "typeString": "literal_string \"ERC-20\""
                },
                "value": "ERC-20"
              },
              "visibility": "public"
            },
            {
              "constant": false,
              "id": 356,
              "mutability": "mutable",
              "name": "_totalSupply",
              "nodeType": "VariableDeclaration",
              "scope": 637,
              "src": "374:48:2",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              },
              "typeName": {
                "id": 354,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "374:7:2",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "value": {
                "hexValue": "31303030303030303030303030303030303030303030303030",
                "id": 355,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "397:25:2",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1000000000000000000000000_by_1",
                  "typeString": "int_const 1000000000000000000000000"
                },
                "value": "1000000000000000000000000"
              },
              "visibility": "internal"
            },
            {
              "constant": false,
              "functionSelector": "cca3e832",
              "id": 360,
              "mutability": "mutable",
              "name": "_balanceOf",
              "nodeType": "VariableDeclaration",
              "scope": 637,
              "src": "429:42:2",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                "typeString": "mapping(address => uint256)"
              },
              "typeName": {
                "id": 359,
                "keyType": {
                  "id": 357,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "437:7:2",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "nodeType": "Mapping",
                "src": "429:24:2",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                  "typeString": "mapping(address => uint256)"
                },
                "valueType": {
                  "id": 358,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "448:4:2",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                }
              },
              "visibility": "public"
            },
            {
              "constant": false,
              "functionSelector": "024c2ddd",
              "id": 366,
              "mutability": "mutable",
              "name": "_allowances",
              "nodeType": "VariableDeclaration",
              "scope": 637,
              "src": "478:68:2",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                "typeString": "mapping(address => mapping(address => uint256))"
              },
              "typeName": {
                "id": 365,
                "keyType": {
                  "id": 361,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "487:7:2",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "nodeType": "Mapping",
                "src": "478:49:2",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                  "typeString": "mapping(address => mapping(address => uint256))"
                },
                "valueType": {
                  "id": 364,
                  "keyType": {
                    "id": 362,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "507:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "Mapping",
                  "src": "498:28:2",
                  "typeDescriptions": {
                    "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                    "typeString": "mapping(address => uint256)"
                  },
                  "valueType": {
                    "id": 363,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "518:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  }
                }
              },
              "visibility": "public"
            },
            {
              "constant": false,
              "functionSelector": "4b932274",
              "id": 372,
              "mutability": "mutable",
              "name": "_approve",
              "nodeType": "VariableDeclaration",
              "scope": 637,
              "src": "553:65:2",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                "typeString": "mapping(address => mapping(address => uint256))"
              },
              "typeName": {
                "id": 371,
                "keyType": {
                  "id": 367,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "562:7:2",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "nodeType": "Mapping",
                "src": "553:49:2",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                  "typeString": "mapping(address => mapping(address => uint256))"
                },
                "valueType": {
                  "id": 370,
                  "keyType": {
                    "id": 368,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "582:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "Mapping",
                  "src": "573:28:2",
                  "typeDescriptions": {
                    "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                    "typeString": "mapping(address => uint256)"
                  },
                  "valueType": {
                    "id": 369,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "593:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  }
                }
              },
              "visibility": "public"
            },
            {
              "constant": false,
              "id": 374,
              "mutability": "mutable",
              "name": "value",
              "nodeType": "VariableDeclaration",
              "scope": 637,
              "src": "625:22:2",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              },
              "typeName": {
                "id": 373,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "625:7:2",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "visibility": "internal"
            },
            {
              "constant": false,
              "id": 376,
              "mutability": "mutable",
              "name": "_balance",
              "nodeType": "VariableDeclaration",
              "scope": 637,
              "src": "654:25:2",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              },
              "typeName": {
                "id": 375,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "654:7:2",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "visibility": "internal"
            },
            {
              "constant": false,
              "functionSelector": "b810fb43",
              "id": 379,
              "mutability": "mutable",
              "name": "addressList",
              "nodeType": "VariableDeclaration",
              "scope": 637,
              "src": "686:28:2",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_address_$dyn_storage",
                "typeString": "address[]"
              },
              "typeName": {
                "baseType": {
                  "id": 377,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "686:7:2",
                  "stateMutability": "nonpayable",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "id": 378,
                "nodeType": "ArrayTypeName",
                "src": "686:9:2",
                "typeDescriptions": {
                  "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                  "typeString": "address[]"
                }
              },
              "visibility": "public"
            },
            {
              "body": {
                "id": 393,
                "nodeType": "Block",
                "src": "744:99:2",
                "statements": [
                  {
                    "expression": {
                      "id": 386,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "baseExpression": {
                          "id": 382,
                          "name": "_balanceOf",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 360,
                          "src": "757:10:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                            "typeString": "mapping(address => uint256)"
                          }
                        },
                        "id": 384,
                        "indexExpression": {
                          "id": 383,
                          "name": "contractAddress",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 350,
                          "src": "768:15:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "757:27:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "id": 385,
                        "name": "_totalSupply",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 356,
                        "src": "787:12:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "757:42:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 387,
                    "nodeType": "ExpressionStatement",
                    "src": "757:42:2"
                  },
                  {
                    "expression": {
                      "id": 391,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "id": 388,
                        "name": "ownerAddress",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 344,
                        "src": "810:12:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "expression": {
                          "id": 389,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "825:3:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 390,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "825:10:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "src": "810:25:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 392,
                    "nodeType": "ExpressionStatement",
                    "src": "810:25:2"
                  }
                ]
              },
              "id": 394,
              "implemented": true,
              "kind": "constructor",
              "modifiers": [],
              "name": "",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 380,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "734:2:2"
              },
              "returnParameters": {
                "id": 381,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "744:0:2"
              },
              "scope": 637,
              "src": "723:120:2",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            },
            {
              "body": {
                "id": 404,
                "nodeType": "Block",
                "src": "872:66:2",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "id": 400,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "expression": {
                              "id": 397,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4294967281,
                              "src": "891:3:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 398,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "src": "891:10:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "id": 399,
                            "name": "ownerAddress",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 344,
                            "src": "905:12:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "891:26:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        ],
                        "id": 396,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          4294967278,
                          4294967278
                        ],
                        "referencedDeclaration": 4294967278,
                        "src": "883:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                          "typeString": "function (bool) pure"
                        }
                      },
                      "id": 401,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "883:35:2",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 402,
                    "nodeType": "ExpressionStatement",
                    "src": "883:35:2"
                  },
                  {
                    "id": 403,
                    "nodeType": "PlaceholderStatement",
                    "src": "929:1:2"
                  }
                ]
              },
              "id": 405,
              "name": "onlyOwner",
              "nodeType": "ModifierDefinition",
              "parameters": {
                "id": 395,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "869:2:2"
              },
              "src": "851:87:2",
              "virtual": false,
              "visibility": "internal"
            },
            {
              "body": {
                "id": 418,
                "nodeType": "Block",
                "src": "983:61:2",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 414,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "baseExpression": {
                              "id": 410,
                              "name": "_balanceOf",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 360,
                              "src": "1002:10:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                "typeString": "mapping(address => uint256)"
                              }
                            },
                            "id": 412,
                            "indexExpression": {
                              "id": 411,
                              "name": "_from",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 407,
                              "src": "1013:5:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "1002:17:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">",
                          "rightExpression": {
                            "hexValue": "30",
                            "id": 413,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1022:1:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "1002:21:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        ],
                        "id": 409,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          4294967278,
                          4294967278
                        ],
                        "referencedDeclaration": 4294967278,
                        "src": "994:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                          "typeString": "function (bool) pure"
                        }
                      },
                      "id": 415,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "994:30:2",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 416,
                    "nodeType": "ExpressionStatement",
                    "src": "994:30:2"
                  },
                  {
                    "id": 417,
                    "nodeType": "PlaceholderStatement",
                    "src": "1035:1:2"
                  }
                ]
              },
              "id": 419,
              "name": "nonZeroBalance",
              "nodeType": "ModifierDefinition",
              "parameters": {
                "id": 408,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 407,
                    "mutability": "mutable",
                    "name": "_from",
                    "nodeType": "VariableDeclaration",
                    "scope": 419,
                    "src": "968:13:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 406,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "968:7:2",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "967:15:2"
              },
              "src": "944:100:2",
              "virtual": false,
              "visibility": "internal"
            },
            {
              "anonymous": false,
              "id": 427,
              "name": "Transfer",
              "nodeType": "EventDefinition",
              "parameters": {
                "id": 426,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 421,
                    "indexed": true,
                    "mutability": "mutable",
                    "name": "_from",
                    "nodeType": "VariableDeclaration",
                    "scope": 427,
                    "src": "1065:21:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 420,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1065:7:2",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 423,
                    "indexed": true,
                    "mutability": "mutable",
                    "name": "_to",
                    "nodeType": "VariableDeclaration",
                    "scope": 427,
                    "src": "1088:19:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 422,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1088:7:2",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 425,
                    "indexed": false,
                    "mutability": "mutable",
                    "name": "_value",
                    "nodeType": "VariableDeclaration",
                    "scope": 427,
                    "src": "1109:14:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 424,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "1109:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "1064:60:2"
              },
              "src": "1050:75:2"
            },
            {
              "anonymous": false,
              "id": 435,
              "name": "Approval",
              "nodeType": "EventDefinition",
              "parameters": {
                "id": 434,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 429,
                    "indexed": true,
                    "mutability": "mutable",
                    "name": "_owner",
                    "nodeType": "VariableDeclaration",
                    "scope": 435,
                    "src": "1146:22:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 428,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1146:7:2",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 431,
                    "indexed": true,
                    "mutability": "mutable",
                    "name": "_spender",
                    "nodeType": "VariableDeclaration",
                    "scope": 435,
                    "src": "1170:24:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 430,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1170:7:2",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 433,
                    "indexed": false,
                    "mutability": "mutable",
                    "name": "_value",
                    "nodeType": "VariableDeclaration",
                    "scope": 435,
                    "src": "1196:14:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 432,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "1196:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "1145:66:2"
              },
              "src": "1131:81:2"
            },
            {
              "body": {
                "id": 442,
                "nodeType": "Block",
                "src": "1270:36:2",
                "statements": [
                  {
                    "expression": {
                      "hexValue": "5374616b6544414f",
                      "id": 440,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "string",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1288:10:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_stringliteral_1159275281bc8027f30dbc8f921a13ebb7c3c1bd20808a7b7b735742cdf1b622",
                        "typeString": "literal_string \"StakeDAO\""
                      },
                      "value": "StakeDAO"
                    },
                    "functionReturnParameters": 439,
                    "id": 441,
                    "nodeType": "Return",
                    "src": "1281:17:2"
                  }
                ]
              },
              "functionSelector": "06fdde03",
              "id": 443,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "name",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 436,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "1231:2:2"
              },
              "returnParameters": {
                "id": 439,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 438,
                    "mutability": "mutable",
                    "name": "",
                    "nodeType": "VariableDeclaration",
                    "scope": 443,
                    "src": "1255:13:2",
                    "stateVariable": false,
                    "storageLocation": "memory",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string"
                    },
                    "typeName": {
                      "id": 437,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "1255:6:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "1254:15:2"
              },
              "scope": 637,
              "src": "1218:88:2",
              "stateMutability": "pure",
              "virtual": false,
              "visibility": "public"
            },
            {
              "body": {
                "id": 450,
                "nodeType": "Block",
                "src": "1366:31:2",
                "statements": [
                  {
                    "expression": {
                      "hexValue": "53544b",
                      "id": 448,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "string",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1384:5:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_stringliteral_ddd63dcd5916e2715f93ae4bf1497005f4f308cec81ea856ac13c63c6bc50072",
                        "typeString": "literal_string \"STK\""
                      },
                      "value": "STK"
                    },
                    "functionReturnParameters": 447,
                    "id": 449,
                    "nodeType": "Return",
                    "src": "1377:12:2"
                  }
                ]
              },
              "functionSelector": "95d89b41",
              "id": 451,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "symbol",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 444,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "1327:2:2"
              },
              "returnParameters": {
                "id": 447,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 446,
                    "mutability": "mutable",
                    "name": "",
                    "nodeType": "VariableDeclaration",
                    "scope": 451,
                    "src": "1351:13:2",
                    "stateVariable": false,
                    "storageLocation": "memory",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string"
                    },
                    "typeName": {
                      "id": 445,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "1351:6:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "1350:15:2"
              },
              "scope": 637,
              "src": "1312:85:2",
              "stateMutability": "pure",
              "virtual": false,
              "visibility": "public"
            },
            {
              "body": {
                "id": 458,
                "nodeType": "Block",
                "src": "1451:28:2",
                "statements": [
                  {
                    "expression": {
                      "hexValue": "3138",
                      "id": 456,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1469:2:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_18_by_1",
                        "typeString": "int_const 18"
                      },
                      "value": "18"
                    },
                    "functionReturnParameters": 455,
                    "id": 457,
                    "nodeType": "Return",
                    "src": "1462:9:2"
                  }
                ]
              },
              "functionSelector": "313ce567",
              "id": 459,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "decimals",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 452,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "1420:2:2"
              },
              "returnParameters": {
                "id": 455,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 454,
                    "mutability": "mutable",
                    "name": "",
                    "nodeType": "VariableDeclaration",
                    "scope": 459,
                    "src": "1444:5:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    },
                    "typeName": {
                      "id": 453,
                      "name": "uint8",
                      "nodeType": "ElementaryTypeName",
                      "src": "1444:5:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint8",
                        "typeString": "uint8"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "1443:7:2"
              },
              "scope": 637,
              "src": "1403:76:2",
              "stateMutability": "pure",
              "virtual": false,
              "visibility": "public"
            },
            {
              "body": {
                "id": 466,
                "nodeType": "Block",
                "src": "1538:38:2",
                "statements": [
                  {
                    "expression": {
                      "id": 464,
                      "name": "_totalSupply",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 356,
                      "src": "1556:12:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "functionReturnParameters": 463,
                    "id": 465,
                    "nodeType": "Return",
                    "src": "1549:19:2"
                  }
                ]
              },
              "functionSelector": "18160ddd",
              "id": 467,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "totalSupply",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 460,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "1505:2:2"
              },
              "returnParameters": {
                "id": 463,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 462,
                    "mutability": "mutable",
                    "name": "",
                    "nodeType": "VariableDeclaration",
                    "scope": 467,
                    "src": "1529:7:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 461,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "1529:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "1528:9:2"
              },
              "scope": 637,
              "src": "1485:91:2",
              "stateMutability": "view",
              "virtual": false,
              "visibility": "public"
            },
            {
              "body": {
                "id": 478,
                "nodeType": "Block",
                "src": "1655:44:2",
                "statements": [
                  {
                    "expression": {
                      "baseExpression": {
                        "id": 474,
                        "name": "_balanceOf",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 360,
                        "src": "1673:10:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 476,
                      "indexExpression": {
                        "id": 475,
                        "name": "_owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 469,
                        "src": "1684:6:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "1673:18:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "functionReturnParameters": 473,
                    "id": 477,
                    "nodeType": "Return",
                    "src": "1666:25:2"
                  }
                ]
              },
              "functionSelector": "70a08231",
              "id": 479,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "balanceOf",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 470,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 469,
                    "mutability": "mutable",
                    "name": "_owner",
                    "nodeType": "VariableDeclaration",
                    "scope": 479,
                    "src": "1601:14:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 468,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1601:7:2",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "1600:16:2"
              },
              "returnParameters": {
                "id": 473,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 472,
                    "mutability": "mutable",
                    "name": "balance",
                    "nodeType": "VariableDeclaration",
                    "scope": 479,
                    "src": "1638:15:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 471,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "1638:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "1637:17:2"
              },
              "scope": 637,
              "src": "1582:117:2",
              "stateMutability": "view",
              "virtual": false,
              "visibility": "public"
            },
            {
              "body": {
                "id": 533,
                "nodeType": "Block",
                "src": "1802:307:2",
                "statements": [
                  {
                    "condition": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 494,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 490,
                        "name": "_value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 483,
                        "src": "1816:6:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "<=",
                      "rightExpression": {
                        "baseExpression": {
                          "id": 491,
                          "name": "_balanceOf",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 360,
                          "src": "1826:10:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                            "typeString": "mapping(address => uint256)"
                          }
                        },
                        "id": 493,
                        "indexExpression": {
                          "id": 492,
                          "name": "contractAddress",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 350,
                          "src": "1837:15:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "1826:27:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "1816:37:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 518,
                    "nodeType": "IfStatement",
                    "src": "1813:198:2",
                    "trueBody": {
                      "id": 517,
                      "nodeType": "Block",
                      "src": "1855:156:2",
                      "statements": [
                        {
                          "expression": {
                            "id": 504,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftHandSide": {
                              "baseExpression": {
                                "id": 495,
                                "name": "_balanceOf",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 360,
                                "src": "1870:10:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                  "typeString": "mapping(address => uint256)"
                                }
                              },
                              "id": 497,
                              "indexExpression": {
                                "id": 496,
                                "name": "contractAddress",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 350,
                                "src": "1881:15:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "nodeType": "IndexAccess",
                              "src": "1870:27:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "Assignment",
                            "operator": "=",
                            "rightHandSide": {
                              "arguments": [
                                {
                                  "id": 502,
                                  "name": "_value",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 483,
                                  "src": "1932:6:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                ],
                                "expression": {
                                  "baseExpression": {
                                    "id": 498,
                                    "name": "_balanceOf",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 360,
                                    "src": "1900:10:2",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                      "typeString": "mapping(address => uint256)"
                                    }
                                  },
                                  "id": 500,
                                  "indexExpression": {
                                    "id": 499,
                                    "name": "contractAddress",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 350,
                                    "src": "1911:15:2",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  },
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "IndexAccess",
                                  "src": "1900:27:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "id": 501,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "sub",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 218,
                                "src": "1900:31:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                  "typeString": "function (uint256,uint256) pure returns (uint256)"
                                }
                              },
                              "id": 503,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "1900:39:2",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "1870:69:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 505,
                          "nodeType": "ExpressionStatement",
                          "src": "1870:69:2"
                        },
                        {
                          "expression": {
                            "id": 515,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftHandSide": {
                              "baseExpression": {
                                "id": 506,
                                "name": "_balanceOf",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 360,
                                "src": "1954:10:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                  "typeString": "mapping(address => uint256)"
                                }
                              },
                              "id": 508,
                              "indexExpression": {
                                "id": 507,
                                "name": "_to",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 481,
                                "src": "1965:3:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "nodeType": "IndexAccess",
                              "src": "1954:15:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "Assignment",
                            "operator": "=",
                            "rightHandSide": {
                              "arguments": [
                                {
                                  "id": 513,
                                  "name": "_value",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 483,
                                  "src": "1992:6:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                ],
                                "expression": {
                                  "baseExpression": {
                                    "id": 509,
                                    "name": "_balanceOf",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 360,
                                    "src": "1972:10:2",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                      "typeString": "mapping(address => uint256)"
                                    }
                                  },
                                  "id": 511,
                                  "indexExpression": {
                                    "id": 510,
                                    "name": "_to",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 481,
                                    "src": "1983:3:2",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  },
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "IndexAccess",
                                  "src": "1972:15:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "id": 512,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "add",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 203,
                                "src": "1972:19:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                  "typeString": "function (uint256,uint256) pure returns (uint256)"
                                }
                              },
                              "id": 514,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "1972:27:2",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "1954:45:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 516,
                          "nodeType": "ExpressionStatement",
                          "src": "1954:45:2"
                        }
                      ]
                    }
                  },
                  {
                    "expression": {
                      "id": 523,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "id": 519,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 374,
                        "src": "2021:5:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "baseExpression": {
                          "id": 520,
                          "name": "_balanceOf",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 360,
                          "src": "2029:10:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                            "typeString": "mapping(address => uint256)"
                          }
                        },
                        "id": 522,
                        "indexExpression": {
                          "id": 521,
                          "name": "_to",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 481,
                          "src": "2040:3:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "2029:15:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "2021:23:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 524,
                    "nodeType": "ExpressionStatement",
                    "src": "2021:23:2"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "id": 528,
                          "name": "_to",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 481,
                          "src": "2072:3:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        ],
                        "expression": {
                          "id": 525,
                          "name": "addressList",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 379,
                          "src": "2055:11:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_address_$dyn_storage",
                            "typeString": "address[] storage ref"
                          }
                        },
                        "id": 527,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "push",
                        "nodeType": "MemberAccess",
                        "src": "2055:16:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_arraypush_nonpayable$_t_address_$returns$__$",
                          "typeString": "function (address)"
                        }
                      },
                      "id": 529,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2055:21:2",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 530,
                    "nodeType": "ExpressionStatement",
                    "src": "2055:21:2"
                  },
                  {
                    "expression": {
                      "id": 531,
                      "name": "success",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 488,
                      "src": "2094:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "functionReturnParameters": 489,
                    "id": 532,
                    "nodeType": "Return",
                    "src": "2087:14:2"
                  }
                ]
              },
              "functionSelector": "a9059cbb",
              "id": 534,
              "implemented": true,
              "kind": "function",
              "modifiers": [
                {
                  "id": 486,
                  "modifierName": {
                    "id": 485,
                    "name": "onlyOwner",
                    "nodeType": "IdentifierPath",
                    "referencedDeclaration": 405,
                    "src": "1761:9:2"
                  },
                  "nodeType": "ModifierInvocation",
                  "src": "1761:9:2"
                }
              ],
              "name": "transfer",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 484,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 481,
                    "mutability": "mutable",
                    "name": "_to",
                    "nodeType": "VariableDeclaration",
                    "scope": 534,
                    "src": "1725:11:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 480,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1725:7:2",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 483,
                    "mutability": "mutable",
                    "name": "_value",
                    "nodeType": "VariableDeclaration",
                    "scope": 534,
                    "src": "1738:14:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 482,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "1738:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "1724:29:2"
              },
              "returnParameters": {
                "id": 489,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 488,
                    "mutability": "mutable",
                    "name": "success",
                    "nodeType": "VariableDeclaration",
                    "scope": 534,
                    "src": "1788:12:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "typeName": {
                      "id": 487,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "1788:4:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "1787:14:2"
              },
              "scope": 637,
              "src": "1707:402:2",
              "stateMutability": "payable",
              "virtual": false,
              "visibility": "public"
            },
            {
              "body": {
                "id": 591,
                "nodeType": "Block",
                "src": "2233:328:2",
                "statements": [
                  {
                    "condition": {
                      "arguments": [
                        {
                          "id": 549,
                          "name": "_from",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 536,
                          "src": "2255:5:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "id": 550,
                          "name": "_value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 540,
                          "src": "2262:6:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "id": 548,
                        "name": "approve",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 620,
                        "src": "2247:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                          "typeString": "function (address,uint256) returns (bool)"
                        }
                      },
                      "id": 551,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2247:22:2",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 590,
                    "nodeType": "IfStatement",
                    "src": "2244:310:2",
                    "trueBody": {
                      "id": 589,
                      "nodeType": "Block",
                      "src": "2271:283:2",
                      "statements": [
                        {
                          "condition": {
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 556,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 552,
                              "name": "_value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 540,
                              "src": "2289:6:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "<=",
                            "rightExpression": {
                              "baseExpression": {
                                "id": 553,
                                "name": "_balanceOf",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 360,
                                "src": "2299:10:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                  "typeString": "mapping(address => uint256)"
                                }
                              },
                              "id": 555,
                              "indexExpression": {
                                "id": 554,
                                "name": "_from",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 536,
                                "src": "2310:5:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "2299:17:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "2289:27:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "id": 580,
                          "nodeType": "IfStatement",
                          "src": "2286:180:2",
                          "trueBody": {
                            "id": 579,
                            "nodeType": "Block",
                            "src": "2318:148:2",
                            "statements": [
                              {
                                "expression": {
                                  "id": 566,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftHandSide": {
                                    "baseExpression": {
                                      "id": 557,
                                      "name": "_balanceOf",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 360,
                                      "src": "2337:10:2",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                        "typeString": "mapping(address => uint256)"
                                      }
                                    },
                                    "id": 559,
                                    "indexExpression": {
                                      "id": 558,
                                      "name": "_from",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 536,
                                      "src": "2348:5:2",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      }
                                    },
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": true,
                                    "nodeType": "IndexAccess",
                                    "src": "2337:17:2",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "nodeType": "Assignment",
                                  "operator": "=",
                                  "rightHandSide": {
                                    "arguments": [
                                      {
                                        "id": 564,
                                        "name": "_value",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 540,
                                        "src": "2379:6:2",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      }
                                    ],
                                    "expression": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      ],
                                      "expression": {
                                        "baseExpression": {
                                          "id": 560,
                                          "name": "_balanceOf",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 360,
                                          "src": "2357:10:2",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                            "typeString": "mapping(address => uint256)"
                                          }
                                        },
                                        "id": 562,
                                        "indexExpression": {
                                          "id": 561,
                                          "name": "_from",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 536,
                                          "src": "2368:5:2",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                          }
                                        },
                                        "isConstant": false,
                                        "isLValue": true,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "IndexAccess",
                                        "src": "2357:17:2",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      },
                                      "id": 563,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "memberName": "sub",
                                      "nodeType": "MemberAccess",
                                      "referencedDeclaration": 218,
                                      "src": "2357:21:2",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                                      }
                                    },
                                    "id": 565,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "kind": "functionCall",
                                    "lValueRequested": false,
                                    "names": [],
                                    "nodeType": "FunctionCall",
                                    "src": "2357:29:2",
                                    "tryCall": false,
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "src": "2337:49:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "id": 567,
                                "nodeType": "ExpressionStatement",
                                "src": "2337:49:2"
                              },
                              {
                                "expression": {
                                  "id": 577,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftHandSide": {
                                    "baseExpression": {
                                      "id": 568,
                                      "name": "_balanceOf",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 360,
                                      "src": "2405:10:2",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                        "typeString": "mapping(address => uint256)"
                                      }
                                    },
                                    "id": 570,
                                    "indexExpression": {
                                      "id": 569,
                                      "name": "_to",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 538,
                                      "src": "2416:3:2",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      }
                                    },
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": true,
                                    "nodeType": "IndexAccess",
                                    "src": "2405:15:2",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "nodeType": "Assignment",
                                  "operator": "=",
                                  "rightHandSide": {
                                    "arguments": [
                                      {
                                        "id": 575,
                                        "name": "_value",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 540,
                                        "src": "2443:6:2",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      }
                                    ],
                                    "expression": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      ],
                                      "expression": {
                                        "baseExpression": {
                                          "id": 571,
                                          "name": "_balanceOf",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 360,
                                          "src": "2423:10:2",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                            "typeString": "mapping(address => uint256)"
                                          }
                                        },
                                        "id": 573,
                                        "indexExpression": {
                                          "id": 572,
                                          "name": "_to",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 538,
                                          "src": "2434:3:2",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                          }
                                        },
                                        "isConstant": false,
                                        "isLValue": true,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "IndexAccess",
                                        "src": "2423:15:2",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      },
                                      "id": 574,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "memberName": "add",
                                      "nodeType": "MemberAccess",
                                      "referencedDeclaration": 203,
                                      "src": "2423:19:2",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                                      }
                                    },
                                    "id": 576,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "kind": "functionCall",
                                    "lValueRequested": false,
                                    "names": [],
                                    "nodeType": "FunctionCall",
                                    "src": "2423:27:2",
                                    "tryCall": false,
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "src": "2405:45:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "id": 578,
                                "nodeType": "ExpressionStatement",
                                "src": "2405:45:2"
                              }
                            ]
                          }
                        },
                        {
                          "eventCall": {
                            "arguments": [
                              {
                                "id": 582,
                                "name": "_from",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 536,
                                "src": "2494:5:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              {
                                "id": 583,
                                "name": "_to",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 538,
                                "src": "2501:3:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              {
                                "id": 584,
                                "name": "_value",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 540,
                                "src": "2506:6:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "id": 581,
                              "name": "Transfer",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 427,
                              "src": "2485:8:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                                "typeString": "function (address,address,uint256)"
                              }
                            },
                            "id": 585,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2485:28:2",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_tuple$__$",
                              "typeString": "tuple()"
                            }
                          },
                          "id": 586,
                          "nodeType": "EmitStatement",
                          "src": "2480:33:2"
                        },
                        {
                          "expression": {
                            "id": 587,
                            "name": "success",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 546,
                            "src": "2535:7:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "functionReturnParameters": 547,
                          "id": 588,
                          "nodeType": "Return",
                          "src": "2528:14:2"
                        }
                      ]
                    }
                  }
                ]
              },
              "functionSelector": "23b872dd",
              "id": 592,
              "implemented": true,
              "kind": "function",
              "modifiers": [
                {
                  "arguments": [
                    {
                      "id": 543,
                      "name": "_from",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 536,
                      "src": "2203:5:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    }
                  ],
                  "id": 544,
                  "modifierName": {
                    "id": 542,
                    "name": "nonZeroBalance",
                    "nodeType": "IdentifierPath",
                    "referencedDeclaration": 419,
                    "src": "2188:14:2"
                  },
                  "nodeType": "ModifierInvocation",
                  "src": "2188:21:2"
                }
              ],
              "name": "transferFrom",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 541,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 536,
                    "mutability": "mutable",
                    "name": "_from",
                    "nodeType": "VariableDeclaration",
                    "scope": 592,
                    "src": "2137:13:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 535,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2137:7:2",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 538,
                    "mutability": "mutable",
                    "name": "_to",
                    "nodeType": "VariableDeclaration",
                    "scope": 592,
                    "src": "2152:11:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 537,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2152:7:2",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 540,
                    "mutability": "mutable",
                    "name": "_value",
                    "nodeType": "VariableDeclaration",
                    "scope": 592,
                    "src": "2165:14:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 539,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "2165:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "2136:44:2"
              },
              "returnParameters": {
                "id": 547,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 546,
                    "mutability": "mutable",
                    "name": "success",
                    "nodeType": "VariableDeclaration",
                    "scope": 592,
                    "src": "2219:12:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "typeName": {
                      "id": 545,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "2219:4:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "2218:14:2"
              },
              "scope": 637,
              "src": "2115:446:2",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            },
            {
              "body": {
                "id": 619,
                "nodeType": "Block",
                "src": "2648:134:2",
                "statements": [
                  {
                    "expression": {
                      "id": 608,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "baseExpression": {
                          "baseExpression": {
                            "id": 601,
                            "name": "_approve",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 372,
                            "src": "2659:8:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                              "typeString": "mapping(address => mapping(address => uint256))"
                            }
                          },
                          "id": 605,
                          "indexExpression": {
                            "expression": {
                              "id": 602,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4294967281,
                              "src": "2668:3:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 603,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "src": "2668:10:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "2659:20:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                            "typeString": "mapping(address => uint256)"
                          }
                        },
                        "id": 606,
                        "indexExpression": {
                          "id": 604,
                          "name": "_spender",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 594,
                          "src": "2680:8:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "2659:30:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "id": 607,
                        "name": "_value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 596,
                        "src": "2692:6:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "2659:39:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 609,
                    "nodeType": "ExpressionStatement",
                    "src": "2659:39:2"
                  },
                  {
                    "eventCall": {
                      "arguments": [
                        {
                          "expression": {
                            "id": 611,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4294967281,
                            "src": "2723:3:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 612,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "src": "2723:10:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "id": 613,
                          "name": "_spender",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 594,
                          "src": "2735:8:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "id": 614,
                          "name": "_value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 596,
                          "src": "2745:6:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "id": 610,
                        "name": "Approval",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 435,
                        "src": "2714:8:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                          "typeString": "function (address,address,uint256)"
                        }
                      },
                      "id": 615,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2714:38:2",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 616,
                    "nodeType": "EmitStatement",
                    "src": "2709:43:2"
                  },
                  {
                    "expression": {
                      "hexValue": "74727565",
                      "id": 617,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2770:4:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "functionReturnParameters": 600,
                    "id": 618,
                    "nodeType": "Return",
                    "src": "2763:11:2"
                  }
                ]
              },
              "functionSelector": "095ea7b3",
              "id": 620,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "approve",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 597,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 594,
                    "mutability": "mutable",
                    "name": "_spender",
                    "nodeType": "VariableDeclaration",
                    "scope": 620,
                    "src": "2584:16:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 593,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2584:7:2",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 596,
                    "mutability": "mutable",
                    "name": "_value",
                    "nodeType": "VariableDeclaration",
                    "scope": 620,
                    "src": "2602:14:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 595,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "2602:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "2583:34:2"
              },
              "returnParameters": {
                "id": 600,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 599,
                    "mutability": "mutable",
                    "name": "success",
                    "nodeType": "VariableDeclaration",
                    "scope": 620,
                    "src": "2634:12:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "typeName": {
                      "id": 598,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "2634:4:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "2633:14:2"
              },
              "scope": 637,
              "src": "2567:215:2",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            },
            {
              "body": {
                "id": 635,
                "nodeType": "Block",
                "src": "2873:55:2",
                "statements": [
                  {
                    "expression": {
                      "baseExpression": {
                        "baseExpression": {
                          "id": 629,
                          "name": "_allowances",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 366,
                          "src": "2891:11:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                            "typeString": "mapping(address => mapping(address => uint256))"
                          }
                        },
                        "id": 631,
                        "indexExpression": {
                          "id": 630,
                          "name": "_owner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 622,
                          "src": "2903:6:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "2891:19:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 633,
                      "indexExpression": {
                        "id": 632,
                        "name": "_spender",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 624,
                        "src": "2911:8:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "2891:29:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "functionReturnParameters": 628,
                    "id": 634,
                    "nodeType": "Return",
                    "src": "2884:36:2"
                  }
                ]
              },
              "functionSelector": "dd62ed3e",
              "id": 636,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "allowance",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 625,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 622,
                    "mutability": "mutable",
                    "name": "_owner",
                    "nodeType": "VariableDeclaration",
                    "scope": 636,
                    "src": "2809:14:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 621,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2809:7:2",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 624,
                    "mutability": "mutable",
                    "name": "_spender",
                    "nodeType": "VariableDeclaration",
                    "scope": 636,
                    "src": "2825:16:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 623,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2825:7:2",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "2808:34:2"
              },
              "returnParameters": {
                "id": 628,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 627,
                    "mutability": "mutable",
                    "name": "",
                    "nodeType": "VariableDeclaration",
                    "scope": 636,
                    "src": "2864:7:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 626,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "2864:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "2863:9:2"
              },
              "scope": 637,
              "src": "2790:138:2",
              "stateMutability": "view",
              "virtual": false,
              "visibility": "public"
            }
          ],
          "scope": 638,
          "src": "184:2749:2"
        }
      ],
      "src": "35:2898:2"
    },
    "legacyAST": {
      "absolutePath": "project:/contracts/StakeDAO.sol",
      "exportedSymbols": {
        "SafeMath": [
          336
        ],
        "stakeDAO": [
          637
        ]
      },
      "id": 638,
      "license": "MIT",
      "nodeType": "SourceUnit",
      "nodes": [
        {
          "id": 338,
          "literals": [
            "solidity",
            "^",
            "0.8",
            ".0"
          ],
          "nodeType": "PragmaDirective",
          "src": "35:23:2"
        },
        {
          "absolutePath": "project:/contracts/SafeMath.sol",
          "file": "./SafeMath.sol",
          "id": 339,
          "nodeType": "ImportDirective",
          "scope": 638,
          "sourceUnit": 337,
          "src": "60:24:2",
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "abstract": false,
          "baseContracts": [],
          "contractDependencies": [],
          "contractKind": "contract",
          "fullyImplemented": true,
          "id": 637,
          "linearizedBaseContracts": [
            637
          ],
          "name": "stakeDAO",
          "nodeType": "ContractDefinition",
          "nodes": [
            {
              "id": 342,
              "libraryName": {
                "id": 340,
                "name": "SafeMath",
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 336,
                "src": "215:8:2"
              },
              "nodeType": "UsingForDirective",
              "src": "209:27:2",
              "typeName": {
                "id": 341,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "228:7:2",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              }
            },
            {
              "constant": false,
              "functionSelector": "8f84aa09",
              "id": 344,
              "mutability": "mutable",
              "name": "ownerAddress",
              "nodeType": "VariableDeclaration",
              "scope": 637,
              "src": "244:27:2",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              },
              "typeName": {
                "id": 343,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "244:7:2",
                "stateMutability": "nonpayable",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "visibility": "public"
            },
            {
              "constant": false,
              "functionSelector": "f6b4dfb4",
              "id": 350,
              "mutability": "mutable",
              "name": "contractAddress",
              "nodeType": "VariableDeclaration",
              "scope": 637,
              "src": "278:46:2",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              },
              "typeName": {
                "id": 345,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "278:7:2",
                "stateMutability": "nonpayable",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "value": {
                "arguments": [
                  {
                    "id": 348,
                    "name": "this",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 4294967268,
                    "src": "319:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_stakeDAO_$637",
                      "typeString": "contract stakeDAO"
                    }
                  }
                ],
                "expression": {
                  "argumentTypes": [
                    {
                      "typeIdentifier": "t_contract$_stakeDAO_$637",
                      "typeString": "contract stakeDAO"
                    }
                  ],
                  "id": 347,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "lValueRequested": false,
                  "nodeType": "ElementaryTypeNameExpression",
                  "src": "311:7:2",
                  "typeDescriptions": {
                    "typeIdentifier": "t_type$_t_address_$",
                    "typeString": "type(address)"
                  },
                  "typeName": {
                    "id": 346,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "311:7:2",
                    "typeDescriptions": {}
                  }
                },
                "id": 349,
                "isConstant": false,
                "isLValue": false,
                "isPure": false,
                "kind": "typeConversion",
                "lValueRequested": false,
                "names": [],
                "nodeType": "FunctionCall",
                "src": "311:13:2",
                "tryCall": false,
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "visibility": "public"
            },
            {
              "constant": false,
              "functionSelector": "30fa738c",
              "id": 353,
              "mutability": "mutable",
              "name": "tokenType",
              "nodeType": "VariableDeclaration",
              "scope": 637,
              "src": "331:34:2",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage",
                "typeString": "string"
              },
              "typeName": {
                "id": 351,
                "name": "string",
                "nodeType": "ElementaryTypeName",
                "src": "331:6:2",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                }
              },
              "value": {
                "hexValue": "4552432d3230",
                "id": 352,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "string",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "357:8:2",
                "typeDescriptions": {
                  "typeIdentifier": "t_stringliteral_b7fbcb1a03fc61c2644a2146a8d83480606c2954646783d0aaf972707823e26d",
                  "typeString": "literal_string \"ERC-20\""
                },
                "value": "ERC-20"
              },
              "visibility": "public"
            },
            {
              "constant": false,
              "id": 356,
              "mutability": "mutable",
              "name": "_totalSupply",
              "nodeType": "VariableDeclaration",
              "scope": 637,
              "src": "374:48:2",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              },
              "typeName": {
                "id": 354,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "374:7:2",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "value": {
                "hexValue": "31303030303030303030303030303030303030303030303030",
                "id": 355,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "397:25:2",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1000000000000000000000000_by_1",
                  "typeString": "int_const 1000000000000000000000000"
                },
                "value": "1000000000000000000000000"
              },
              "visibility": "internal"
            },
            {
              "constant": false,
              "functionSelector": "cca3e832",
              "id": 360,
              "mutability": "mutable",
              "name": "_balanceOf",
              "nodeType": "VariableDeclaration",
              "scope": 637,
              "src": "429:42:2",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                "typeString": "mapping(address => uint256)"
              },
              "typeName": {
                "id": 359,
                "keyType": {
                  "id": 357,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "437:7:2",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "nodeType": "Mapping",
                "src": "429:24:2",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                  "typeString": "mapping(address => uint256)"
                },
                "valueType": {
                  "id": 358,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "448:4:2",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                }
              },
              "visibility": "public"
            },
            {
              "constant": false,
              "functionSelector": "024c2ddd",
              "id": 366,
              "mutability": "mutable",
              "name": "_allowances",
              "nodeType": "VariableDeclaration",
              "scope": 637,
              "src": "478:68:2",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                "typeString": "mapping(address => mapping(address => uint256))"
              },
              "typeName": {
                "id": 365,
                "keyType": {
                  "id": 361,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "487:7:2",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "nodeType": "Mapping",
                "src": "478:49:2",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                  "typeString": "mapping(address => mapping(address => uint256))"
                },
                "valueType": {
                  "id": 364,
                  "keyType": {
                    "id": 362,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "507:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "Mapping",
                  "src": "498:28:2",
                  "typeDescriptions": {
                    "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                    "typeString": "mapping(address => uint256)"
                  },
                  "valueType": {
                    "id": 363,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "518:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  }
                }
              },
              "visibility": "public"
            },
            {
              "constant": false,
              "functionSelector": "4b932274",
              "id": 372,
              "mutability": "mutable",
              "name": "_approve",
              "nodeType": "VariableDeclaration",
              "scope": 637,
              "src": "553:65:2",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                "typeString": "mapping(address => mapping(address => uint256))"
              },
              "typeName": {
                "id": 371,
                "keyType": {
                  "id": 367,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "562:7:2",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "nodeType": "Mapping",
                "src": "553:49:2",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                  "typeString": "mapping(address => mapping(address => uint256))"
                },
                "valueType": {
                  "id": 370,
                  "keyType": {
                    "id": 368,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "582:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "Mapping",
                  "src": "573:28:2",
                  "typeDescriptions": {
                    "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                    "typeString": "mapping(address => uint256)"
                  },
                  "valueType": {
                    "id": 369,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "593:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  }
                }
              },
              "visibility": "public"
            },
            {
              "constant": false,
              "id": 374,
              "mutability": "mutable",
              "name": "value",
              "nodeType": "VariableDeclaration",
              "scope": 637,
              "src": "625:22:2",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              },
              "typeName": {
                "id": 373,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "625:7:2",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "visibility": "internal"
            },
            {
              "constant": false,
              "id": 376,
              "mutability": "mutable",
              "name": "_balance",
              "nodeType": "VariableDeclaration",
              "scope": 637,
              "src": "654:25:2",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              },
              "typeName": {
                "id": 375,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "654:7:2",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "visibility": "internal"
            },
            {
              "constant": false,
              "functionSelector": "b810fb43",
              "id": 379,
              "mutability": "mutable",
              "name": "addressList",
              "nodeType": "VariableDeclaration",
              "scope": 637,
              "src": "686:28:2",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_address_$dyn_storage",
                "typeString": "address[]"
              },
              "typeName": {
                "baseType": {
                  "id": 377,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "686:7:2",
                  "stateMutability": "nonpayable",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "id": 378,
                "nodeType": "ArrayTypeName",
                "src": "686:9:2",
                "typeDescriptions": {
                  "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                  "typeString": "address[]"
                }
              },
              "visibility": "public"
            },
            {
              "body": {
                "id": 393,
                "nodeType": "Block",
                "src": "744:99:2",
                "statements": [
                  {
                    "expression": {
                      "id": 386,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "baseExpression": {
                          "id": 382,
                          "name": "_balanceOf",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 360,
                          "src": "757:10:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                            "typeString": "mapping(address => uint256)"
                          }
                        },
                        "id": 384,
                        "indexExpression": {
                          "id": 383,
                          "name": "contractAddress",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 350,
                          "src": "768:15:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "757:27:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "id": 385,
                        "name": "_totalSupply",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 356,
                        "src": "787:12:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "757:42:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 387,
                    "nodeType": "ExpressionStatement",
                    "src": "757:42:2"
                  },
                  {
                    "expression": {
                      "id": 391,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "id": 388,
                        "name": "ownerAddress",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 344,
                        "src": "810:12:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "expression": {
                          "id": 389,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "825:3:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 390,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "825:10:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "src": "810:25:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 392,
                    "nodeType": "ExpressionStatement",
                    "src": "810:25:2"
                  }
                ]
              },
              "id": 394,
              "implemented": true,
              "kind": "constructor",
              "modifiers": [],
              "name": "",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 380,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "734:2:2"
              },
              "returnParameters": {
                "id": 381,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "744:0:2"
              },
              "scope": 637,
              "src": "723:120:2",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            },
            {
              "body": {
                "id": 404,
                "nodeType": "Block",
                "src": "872:66:2",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "id": 400,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "expression": {
                              "id": 397,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4294967281,
                              "src": "891:3:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 398,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "src": "891:10:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "id": 399,
                            "name": "ownerAddress",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 344,
                            "src": "905:12:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "891:26:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        ],
                        "id": 396,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          4294967278,
                          4294967278
                        ],
                        "referencedDeclaration": 4294967278,
                        "src": "883:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                          "typeString": "function (bool) pure"
                        }
                      },
                      "id": 401,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "883:35:2",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 402,
                    "nodeType": "ExpressionStatement",
                    "src": "883:35:2"
                  },
                  {
                    "id": 403,
                    "nodeType": "PlaceholderStatement",
                    "src": "929:1:2"
                  }
                ]
              },
              "id": 405,
              "name": "onlyOwner",
              "nodeType": "ModifierDefinition",
              "parameters": {
                "id": 395,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "869:2:2"
              },
              "src": "851:87:2",
              "virtual": false,
              "visibility": "internal"
            },
            {
              "body": {
                "id": 418,
                "nodeType": "Block",
                "src": "983:61:2",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 414,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "baseExpression": {
                              "id": 410,
                              "name": "_balanceOf",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 360,
                              "src": "1002:10:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                "typeString": "mapping(address => uint256)"
                              }
                            },
                            "id": 412,
                            "indexExpression": {
                              "id": 411,
                              "name": "_from",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 407,
                              "src": "1013:5:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "1002:17:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">",
                          "rightExpression": {
                            "hexValue": "30",
                            "id": 413,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1022:1:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "1002:21:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        ],
                        "id": 409,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          4294967278,
                          4294967278
                        ],
                        "referencedDeclaration": 4294967278,
                        "src": "994:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                          "typeString": "function (bool) pure"
                        }
                      },
                      "id": 415,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "994:30:2",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 416,
                    "nodeType": "ExpressionStatement",
                    "src": "994:30:2"
                  },
                  {
                    "id": 417,
                    "nodeType": "PlaceholderStatement",
                    "src": "1035:1:2"
                  }
                ]
              },
              "id": 419,
              "name": "nonZeroBalance",
              "nodeType": "ModifierDefinition",
              "parameters": {
                "id": 408,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 407,
                    "mutability": "mutable",
                    "name": "_from",
                    "nodeType": "VariableDeclaration",
                    "scope": 419,
                    "src": "968:13:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 406,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "968:7:2",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "967:15:2"
              },
              "src": "944:100:2",
              "virtual": false,
              "visibility": "internal"
            },
            {
              "anonymous": false,
              "id": 427,
              "name": "Transfer",
              "nodeType": "EventDefinition",
              "parameters": {
                "id": 426,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 421,
                    "indexed": true,
                    "mutability": "mutable",
                    "name": "_from",
                    "nodeType": "VariableDeclaration",
                    "scope": 427,
                    "src": "1065:21:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 420,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1065:7:2",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 423,
                    "indexed": true,
                    "mutability": "mutable",
                    "name": "_to",
                    "nodeType": "VariableDeclaration",
                    "scope": 427,
                    "src": "1088:19:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 422,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1088:7:2",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 425,
                    "indexed": false,
                    "mutability": "mutable",
                    "name": "_value",
                    "nodeType": "VariableDeclaration",
                    "scope": 427,
                    "src": "1109:14:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 424,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "1109:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "1064:60:2"
              },
              "src": "1050:75:2"
            },
            {
              "anonymous": false,
              "id": 435,
              "name": "Approval",
              "nodeType": "EventDefinition",
              "parameters": {
                "id": 434,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 429,
                    "indexed": true,
                    "mutability": "mutable",
                    "name": "_owner",
                    "nodeType": "VariableDeclaration",
                    "scope": 435,
                    "src": "1146:22:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 428,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1146:7:2",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 431,
                    "indexed": true,
                    "mutability": "mutable",
                    "name": "_spender",
                    "nodeType": "VariableDeclaration",
                    "scope": 435,
                    "src": "1170:24:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 430,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1170:7:2",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 433,
                    "indexed": false,
                    "mutability": "mutable",
                    "name": "_value",
                    "nodeType": "VariableDeclaration",
                    "scope": 435,
                    "src": "1196:14:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 432,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "1196:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "1145:66:2"
              },
              "src": "1131:81:2"
            },
            {
              "body": {
                "id": 442,
                "nodeType": "Block",
                "src": "1270:36:2",
                "statements": [
                  {
                    "expression": {
                      "hexValue": "5374616b6544414f",
                      "id": 440,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "string",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1288:10:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_stringliteral_1159275281bc8027f30dbc8f921a13ebb7c3c1bd20808a7b7b735742cdf1b622",
                        "typeString": "literal_string \"StakeDAO\""
                      },
                      "value": "StakeDAO"
                    },
                    "functionReturnParameters": 439,
                    "id": 441,
                    "nodeType": "Return",
                    "src": "1281:17:2"
                  }
                ]
              },
              "functionSelector": "06fdde03",
              "id": 443,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "name",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 436,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "1231:2:2"
              },
              "returnParameters": {
                "id": 439,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 438,
                    "mutability": "mutable",
                    "name": "",
                    "nodeType": "VariableDeclaration",
                    "scope": 443,
                    "src": "1255:13:2",
                    "stateVariable": false,
                    "storageLocation": "memory",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string"
                    },
                    "typeName": {
                      "id": 437,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "1255:6:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "1254:15:2"
              },
              "scope": 637,
              "src": "1218:88:2",
              "stateMutability": "pure",
              "virtual": false,
              "visibility": "public"
            },
            {
              "body": {
                "id": 450,
                "nodeType": "Block",
                "src": "1366:31:2",
                "statements": [
                  {
                    "expression": {
                      "hexValue": "53544b",
                      "id": 448,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "string",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1384:5:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_stringliteral_ddd63dcd5916e2715f93ae4bf1497005f4f308cec81ea856ac13c63c6bc50072",
                        "typeString": "literal_string \"STK\""
                      },
                      "value": "STK"
                    },
                    "functionReturnParameters": 447,
                    "id": 449,
                    "nodeType": "Return",
                    "src": "1377:12:2"
                  }
                ]
              },
              "functionSelector": "95d89b41",
              "id": 451,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "symbol",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 444,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "1327:2:2"
              },
              "returnParameters": {
                "id": 447,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 446,
                    "mutability": "mutable",
                    "name": "",
                    "nodeType": "VariableDeclaration",
                    "scope": 451,
                    "src": "1351:13:2",
                    "stateVariable": false,
                    "storageLocation": "memory",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string"
                    },
                    "typeName": {
                      "id": 445,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "1351:6:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "1350:15:2"
              },
              "scope": 637,
              "src": "1312:85:2",
              "stateMutability": "pure",
              "virtual": false,
              "visibility": "public"
            },
            {
              "body": {
                "id": 458,
                "nodeType": "Block",
                "src": "1451:28:2",
                "statements": [
                  {
                    "expression": {
                      "hexValue": "3138",
                      "id": 456,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1469:2:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_18_by_1",
                        "typeString": "int_const 18"
                      },
                      "value": "18"
                    },
                    "functionReturnParameters": 455,
                    "id": 457,
                    "nodeType": "Return",
                    "src": "1462:9:2"
                  }
                ]
              },
              "functionSelector": "313ce567",
              "id": 459,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "decimals",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 452,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "1420:2:2"
              },
              "returnParameters": {
                "id": 455,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 454,
                    "mutability": "mutable",
                    "name": "",
                    "nodeType": "VariableDeclaration",
                    "scope": 459,
                    "src": "1444:5:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    },
                    "typeName": {
                      "id": 453,
                      "name": "uint8",
                      "nodeType": "ElementaryTypeName",
                      "src": "1444:5:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint8",
                        "typeString": "uint8"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "1443:7:2"
              },
              "scope": 637,
              "src": "1403:76:2",
              "stateMutability": "pure",
              "virtual": false,
              "visibility": "public"
            },
            {
              "body": {
                "id": 466,
                "nodeType": "Block",
                "src": "1538:38:2",
                "statements": [
                  {
                    "expression": {
                      "id": 464,
                      "name": "_totalSupply",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 356,
                      "src": "1556:12:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "functionReturnParameters": 463,
                    "id": 465,
                    "nodeType": "Return",
                    "src": "1549:19:2"
                  }
                ]
              },
              "functionSelector": "18160ddd",
              "id": 467,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "totalSupply",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 460,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "1505:2:2"
              },
              "returnParameters": {
                "id": 463,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 462,
                    "mutability": "mutable",
                    "name": "",
                    "nodeType": "VariableDeclaration",
                    "scope": 467,
                    "src": "1529:7:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 461,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "1529:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "1528:9:2"
              },
              "scope": 637,
              "src": "1485:91:2",
              "stateMutability": "view",
              "virtual": false,
              "visibility": "public"
            },
            {
              "body": {
                "id": 478,
                "nodeType": "Block",
                "src": "1655:44:2",
                "statements": [
                  {
                    "expression": {
                      "baseExpression": {
                        "id": 474,
                        "name": "_balanceOf",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 360,
                        "src": "1673:10:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 476,
                      "indexExpression": {
                        "id": 475,
                        "name": "_owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 469,
                        "src": "1684:6:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "1673:18:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "functionReturnParameters": 473,
                    "id": 477,
                    "nodeType": "Return",
                    "src": "1666:25:2"
                  }
                ]
              },
              "functionSelector": "70a08231",
              "id": 479,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "balanceOf",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 470,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 469,
                    "mutability": "mutable",
                    "name": "_owner",
                    "nodeType": "VariableDeclaration",
                    "scope": 479,
                    "src": "1601:14:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 468,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1601:7:2",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "1600:16:2"
              },
              "returnParameters": {
                "id": 473,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 472,
                    "mutability": "mutable",
                    "name": "balance",
                    "nodeType": "VariableDeclaration",
                    "scope": 479,
                    "src": "1638:15:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 471,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "1638:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "1637:17:2"
              },
              "scope": 637,
              "src": "1582:117:2",
              "stateMutability": "view",
              "virtual": false,
              "visibility": "public"
            },
            {
              "body": {
                "id": 533,
                "nodeType": "Block",
                "src": "1802:307:2",
                "statements": [
                  {
                    "condition": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 494,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 490,
                        "name": "_value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 483,
                        "src": "1816:6:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "<=",
                      "rightExpression": {
                        "baseExpression": {
                          "id": 491,
                          "name": "_balanceOf",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 360,
                          "src": "1826:10:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                            "typeString": "mapping(address => uint256)"
                          }
                        },
                        "id": 493,
                        "indexExpression": {
                          "id": 492,
                          "name": "contractAddress",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 350,
                          "src": "1837:15:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "1826:27:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "1816:37:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 518,
                    "nodeType": "IfStatement",
                    "src": "1813:198:2",
                    "trueBody": {
                      "id": 517,
                      "nodeType": "Block",
                      "src": "1855:156:2",
                      "statements": [
                        {
                          "expression": {
                            "id": 504,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftHandSide": {
                              "baseExpression": {
                                "id": 495,
                                "name": "_balanceOf",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 360,
                                "src": "1870:10:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                  "typeString": "mapping(address => uint256)"
                                }
                              },
                              "id": 497,
                              "indexExpression": {
                                "id": 496,
                                "name": "contractAddress",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 350,
                                "src": "1881:15:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "nodeType": "IndexAccess",
                              "src": "1870:27:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "Assignment",
                            "operator": "=",
                            "rightHandSide": {
                              "arguments": [
                                {
                                  "id": 502,
                                  "name": "_value",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 483,
                                  "src": "1932:6:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                ],
                                "expression": {
                                  "baseExpression": {
                                    "id": 498,
                                    "name": "_balanceOf",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 360,
                                    "src": "1900:10:2",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                      "typeString": "mapping(address => uint256)"
                                    }
                                  },
                                  "id": 500,
                                  "indexExpression": {
                                    "id": 499,
                                    "name": "contractAddress",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 350,
                                    "src": "1911:15:2",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  },
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "IndexAccess",
                                  "src": "1900:27:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "id": 501,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "sub",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 218,
                                "src": "1900:31:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                  "typeString": "function (uint256,uint256) pure returns (uint256)"
                                }
                              },
                              "id": 503,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "1900:39:2",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "1870:69:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 505,
                          "nodeType": "ExpressionStatement",
                          "src": "1870:69:2"
                        },
                        {
                          "expression": {
                            "id": 515,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftHandSide": {
                              "baseExpression": {
                                "id": 506,
                                "name": "_balanceOf",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 360,
                                "src": "1954:10:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                  "typeString": "mapping(address => uint256)"
                                }
                              },
                              "id": 508,
                              "indexExpression": {
                                "id": 507,
                                "name": "_to",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 481,
                                "src": "1965:3:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "nodeType": "IndexAccess",
                              "src": "1954:15:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "Assignment",
                            "operator": "=",
                            "rightHandSide": {
                              "arguments": [
                                {
                                  "id": 513,
                                  "name": "_value",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 483,
                                  "src": "1992:6:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                ],
                                "expression": {
                                  "baseExpression": {
                                    "id": 509,
                                    "name": "_balanceOf",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 360,
                                    "src": "1972:10:2",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                      "typeString": "mapping(address => uint256)"
                                    }
                                  },
                                  "id": 511,
                                  "indexExpression": {
                                    "id": 510,
                                    "name": "_to",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 481,
                                    "src": "1983:3:2",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  },
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "IndexAccess",
                                  "src": "1972:15:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "id": 512,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "add",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 203,
                                "src": "1972:19:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                  "typeString": "function (uint256,uint256) pure returns (uint256)"
                                }
                              },
                              "id": 514,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "1972:27:2",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "1954:45:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 516,
                          "nodeType": "ExpressionStatement",
                          "src": "1954:45:2"
                        }
                      ]
                    }
                  },
                  {
                    "expression": {
                      "id": 523,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "id": 519,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 374,
                        "src": "2021:5:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "baseExpression": {
                          "id": 520,
                          "name": "_balanceOf",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 360,
                          "src": "2029:10:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                            "typeString": "mapping(address => uint256)"
                          }
                        },
                        "id": 522,
                        "indexExpression": {
                          "id": 521,
                          "name": "_to",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 481,
                          "src": "2040:3:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "2029:15:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "2021:23:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 524,
                    "nodeType": "ExpressionStatement",
                    "src": "2021:23:2"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "id": 528,
                          "name": "_to",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 481,
                          "src": "2072:3:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        ],
                        "expression": {
                          "id": 525,
                          "name": "addressList",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 379,
                          "src": "2055:11:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_address_$dyn_storage",
                            "typeString": "address[] storage ref"
                          }
                        },
                        "id": 527,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "push",
                        "nodeType": "MemberAccess",
                        "src": "2055:16:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_arraypush_nonpayable$_t_address_$returns$__$",
                          "typeString": "function (address)"
                        }
                      },
                      "id": 529,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2055:21:2",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 530,
                    "nodeType": "ExpressionStatement",
                    "src": "2055:21:2"
                  },
                  {
                    "expression": {
                      "id": 531,
                      "name": "success",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 488,
                      "src": "2094:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "functionReturnParameters": 489,
                    "id": 532,
                    "nodeType": "Return",
                    "src": "2087:14:2"
                  }
                ]
              },
              "functionSelector": "a9059cbb",
              "id": 534,
              "implemented": true,
              "kind": "function",
              "modifiers": [
                {
                  "id": 486,
                  "modifierName": {
                    "id": 485,
                    "name": "onlyOwner",
                    "nodeType": "IdentifierPath",
                    "referencedDeclaration": 405,
                    "src": "1761:9:2"
                  },
                  "nodeType": "ModifierInvocation",
                  "src": "1761:9:2"
                }
              ],
              "name": "transfer",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 484,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 481,
                    "mutability": "mutable",
                    "name": "_to",
                    "nodeType": "VariableDeclaration",
                    "scope": 534,
                    "src": "1725:11:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 480,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1725:7:2",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 483,
                    "mutability": "mutable",
                    "name": "_value",
                    "nodeType": "VariableDeclaration",
                    "scope": 534,
                    "src": "1738:14:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 482,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "1738:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "1724:29:2"
              },
              "returnParameters": {
                "id": 489,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 488,
                    "mutability": "mutable",
                    "name": "success",
                    "nodeType": "VariableDeclaration",
                    "scope": 534,
                    "src": "1788:12:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "typeName": {
                      "id": 487,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "1788:4:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "1787:14:2"
              },
              "scope": 637,
              "src": "1707:402:2",
              "stateMutability": "payable",
              "virtual": false,
              "visibility": "public"
            },
            {
              "body": {
                "id": 591,
                "nodeType": "Block",
                "src": "2233:328:2",
                "statements": [
                  {
                    "condition": {
                      "arguments": [
                        {
                          "id": 549,
                          "name": "_from",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 536,
                          "src": "2255:5:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "id": 550,
                          "name": "_value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 540,
                          "src": "2262:6:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "id": 548,
                        "name": "approve",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 620,
                        "src": "2247:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                          "typeString": "function (address,uint256) returns (bool)"
                        }
                      },
                      "id": 551,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2247:22:2",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 590,
                    "nodeType": "IfStatement",
                    "src": "2244:310:2",
                    "trueBody": {
                      "id": 589,
                      "nodeType": "Block",
                      "src": "2271:283:2",
                      "statements": [
                        {
                          "condition": {
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 556,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 552,
                              "name": "_value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 540,
                              "src": "2289:6:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "<=",
                            "rightExpression": {
                              "baseExpression": {
                                "id": 553,
                                "name": "_balanceOf",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 360,
                                "src": "2299:10:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                  "typeString": "mapping(address => uint256)"
                                }
                              },
                              "id": 555,
                              "indexExpression": {
                                "id": 554,
                                "name": "_from",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 536,
                                "src": "2310:5:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "2299:17:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "2289:27:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "id": 580,
                          "nodeType": "IfStatement",
                          "src": "2286:180:2",
                          "trueBody": {
                            "id": 579,
                            "nodeType": "Block",
                            "src": "2318:148:2",
                            "statements": [
                              {
                                "expression": {
                                  "id": 566,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftHandSide": {
                                    "baseExpression": {
                                      "id": 557,
                                      "name": "_balanceOf",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 360,
                                      "src": "2337:10:2",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                        "typeString": "mapping(address => uint256)"
                                      }
                                    },
                                    "id": 559,
                                    "indexExpression": {
                                      "id": 558,
                                      "name": "_from",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 536,
                                      "src": "2348:5:2",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      }
                                    },
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": true,
                                    "nodeType": "IndexAccess",
                                    "src": "2337:17:2",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "nodeType": "Assignment",
                                  "operator": "=",
                                  "rightHandSide": {
                                    "arguments": [
                                      {
                                        "id": 564,
                                        "name": "_value",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 540,
                                        "src": "2379:6:2",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      }
                                    ],
                                    "expression": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      ],
                                      "expression": {
                                        "baseExpression": {
                                          "id": 560,
                                          "name": "_balanceOf",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 360,
                                          "src": "2357:10:2",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                            "typeString": "mapping(address => uint256)"
                                          }
                                        },
                                        "id": 562,
                                        "indexExpression": {
                                          "id": 561,
                                          "name": "_from",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 536,
                                          "src": "2368:5:2",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                          }
                                        },
                                        "isConstant": false,
                                        "isLValue": true,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "IndexAccess",
                                        "src": "2357:17:2",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      },
                                      "id": 563,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "memberName": "sub",
                                      "nodeType": "MemberAccess",
                                      "referencedDeclaration": 218,
                                      "src": "2357:21:2",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                                      }
                                    },
                                    "id": 565,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "kind": "functionCall",
                                    "lValueRequested": false,
                                    "names": [],
                                    "nodeType": "FunctionCall",
                                    "src": "2357:29:2",
                                    "tryCall": false,
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "src": "2337:49:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "id": 567,
                                "nodeType": "ExpressionStatement",
                                "src": "2337:49:2"
                              },
                              {
                                "expression": {
                                  "id": 577,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftHandSide": {
                                    "baseExpression": {
                                      "id": 568,
                                      "name": "_balanceOf",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 360,
                                      "src": "2405:10:2",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                        "typeString": "mapping(address => uint256)"
                                      }
                                    },
                                    "id": 570,
                                    "indexExpression": {
                                      "id": 569,
                                      "name": "_to",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 538,
                                      "src": "2416:3:2",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      }
                                    },
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": true,
                                    "nodeType": "IndexAccess",
                                    "src": "2405:15:2",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "nodeType": "Assignment",
                                  "operator": "=",
                                  "rightHandSide": {
                                    "arguments": [
                                      {
                                        "id": 575,
                                        "name": "_value",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 540,
                                        "src": "2443:6:2",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      }
                                    ],
                                    "expression": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      ],
                                      "expression": {
                                        "baseExpression": {
                                          "id": 571,
                                          "name": "_balanceOf",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 360,
                                          "src": "2423:10:2",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                            "typeString": "mapping(address => uint256)"
                                          }
                                        },
                                        "id": 573,
                                        "indexExpression": {
                                          "id": 572,
                                          "name": "_to",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 538,
                                          "src": "2434:3:2",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                          }
                                        },
                                        "isConstant": false,
                                        "isLValue": true,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "IndexAccess",
                                        "src": "2423:15:2",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      },
                                      "id": 574,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "memberName": "add",
                                      "nodeType": "MemberAccess",
                                      "referencedDeclaration": 203,
                                      "src": "2423:19:2",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                                      }
                                    },
                                    "id": 576,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "kind": "functionCall",
                                    "lValueRequested": false,
                                    "names": [],
                                    "nodeType": "FunctionCall",
                                    "src": "2423:27:2",
                                    "tryCall": false,
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "src": "2405:45:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "id": 578,
                                "nodeType": "ExpressionStatement",
                                "src": "2405:45:2"
                              }
                            ]
                          }
                        },
                        {
                          "eventCall": {
                            "arguments": [
                              {
                                "id": 582,
                                "name": "_from",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 536,
                                "src": "2494:5:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              {
                                "id": 583,
                                "name": "_to",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 538,
                                "src": "2501:3:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              {
                                "id": 584,
                                "name": "_value",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 540,
                                "src": "2506:6:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "id": 581,
                              "name": "Transfer",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 427,
                              "src": "2485:8:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                                "typeString": "function (address,address,uint256)"
                              }
                            },
                            "id": 585,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2485:28:2",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_tuple$__$",
                              "typeString": "tuple()"
                            }
                          },
                          "id": 586,
                          "nodeType": "EmitStatement",
                          "src": "2480:33:2"
                        },
                        {
                          "expression": {
                            "id": 587,
                            "name": "success",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 546,
                            "src": "2535:7:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "functionReturnParameters": 547,
                          "id": 588,
                          "nodeType": "Return",
                          "src": "2528:14:2"
                        }
                      ]
                    }
                  }
                ]
              },
              "functionSelector": "23b872dd",
              "id": 592,
              "implemented": true,
              "kind": "function",
              "modifiers": [
                {
                  "arguments": [
                    {
                      "id": 543,
                      "name": "_from",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 536,
                      "src": "2203:5:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    }
                  ],
                  "id": 544,
                  "modifierName": {
                    "id": 542,
                    "name": "nonZeroBalance",
                    "nodeType": "IdentifierPath",
                    "referencedDeclaration": 419,
                    "src": "2188:14:2"
                  },
                  "nodeType": "ModifierInvocation",
                  "src": "2188:21:2"
                }
              ],
              "name": "transferFrom",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 541,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 536,
                    "mutability": "mutable",
                    "name": "_from",
                    "nodeType": "VariableDeclaration",
                    "scope": 592,
                    "src": "2137:13:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 535,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2137:7:2",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 538,
                    "mutability": "mutable",
                    "name": "_to",
                    "nodeType": "VariableDeclaration",
                    "scope": 592,
                    "src": "2152:11:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 537,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2152:7:2",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 540,
                    "mutability": "mutable",
                    "name": "_value",
                    "nodeType": "VariableDeclaration",
                    "scope": 592,
                    "src": "2165:14:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 539,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "2165:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "2136:44:2"
              },
              "returnParameters": {
                "id": 547,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 546,
                    "mutability": "mutable",
                    "name": "success",
                    "nodeType": "VariableDeclaration",
                    "scope": 592,
                    "src": "2219:12:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "typeName": {
                      "id": 545,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "2219:4:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "2218:14:2"
              },
              "scope": 637,
              "src": "2115:446:2",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            },
            {
              "body": {
                "id": 619,
                "nodeType": "Block",
                "src": "2648:134:2",
                "statements": [
                  {
                    "expression": {
                      "id": 608,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "baseExpression": {
                          "baseExpression": {
                            "id": 601,
                            "name": "_approve",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 372,
                            "src": "2659:8:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                              "typeString": "mapping(address => mapping(address => uint256))"
                            }
                          },
                          "id": 605,
                          "indexExpression": {
                            "expression": {
                              "id": 602,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4294967281,
                              "src": "2668:3:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 603,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "src": "2668:10:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "2659:20:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                            "typeString": "mapping(address => uint256)"
                          }
                        },
                        "id": 606,
                        "indexExpression": {
                          "id": 604,
                          "name": "_spender",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 594,
                          "src": "2680:8:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "2659:30:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "id": 607,
                        "name": "_value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 596,
                        "src": "2692:6:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "2659:39:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 609,
                    "nodeType": "ExpressionStatement",
                    "src": "2659:39:2"
                  },
                  {
                    "eventCall": {
                      "arguments": [
                        {
                          "expression": {
                            "id": 611,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4294967281,
                            "src": "2723:3:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 612,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "src": "2723:10:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "id": 613,
                          "name": "_spender",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 594,
                          "src": "2735:8:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "id": 614,
                          "name": "_value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 596,
                          "src": "2745:6:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "id": 610,
                        "name": "Approval",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 435,
                        "src": "2714:8:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                          "typeString": "function (address,address,uint256)"
                        }
                      },
                      "id": 615,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2714:38:2",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 616,
                    "nodeType": "EmitStatement",
                    "src": "2709:43:2"
                  },
                  {
                    "expression": {
                      "hexValue": "74727565",
                      "id": 617,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2770:4:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "functionReturnParameters": 600,
                    "id": 618,
                    "nodeType": "Return",
                    "src": "2763:11:2"
                  }
                ]
              },
              "functionSelector": "095ea7b3",
              "id": 620,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "approve",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 597,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 594,
                    "mutability": "mutable",
                    "name": "_spender",
                    "nodeType": "VariableDeclaration",
                    "scope": 620,
                    "src": "2584:16:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 593,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2584:7:2",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 596,
                    "mutability": "mutable",
                    "name": "_value",
                    "nodeType": "VariableDeclaration",
                    "scope": 620,
                    "src": "2602:14:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 595,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "2602:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "2583:34:2"
              },
              "returnParameters": {
                "id": 600,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 599,
                    "mutability": "mutable",
                    "name": "success",
                    "nodeType": "VariableDeclaration",
                    "scope": 620,
                    "src": "2634:12:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "typeName": {
                      "id": 598,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "2634:4:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "2633:14:2"
              },
              "scope": 637,
              "src": "2567:215:2",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            },
            {
              "body": {
                "id": 635,
                "nodeType": "Block",
                "src": "2873:55:2",
                "statements": [
                  {
                    "expression": {
                      "baseExpression": {
                        "baseExpression": {
                          "id": 629,
                          "name": "_allowances",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 366,
                          "src": "2891:11:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                            "typeString": "mapping(address => mapping(address => uint256))"
                          }
                        },
                        "id": 631,
                        "indexExpression": {
                          "id": 630,
                          "name": "_owner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 622,
                          "src": "2903:6:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "2891:19:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 633,
                      "indexExpression": {
                        "id": 632,
                        "name": "_spender",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 624,
                        "src": "2911:8:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "2891:29:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "functionReturnParameters": 628,
                    "id": 634,
                    "nodeType": "Return",
                    "src": "2884:36:2"
                  }
                ]
              },
              "functionSelector": "dd62ed3e",
              "id": 636,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "allowance",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 625,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 622,
                    "mutability": "mutable",
                    "name": "_owner",
                    "nodeType": "VariableDeclaration",
                    "scope": 636,
                    "src": "2809:14:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 621,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2809:7:2",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 624,
                    "mutability": "mutable",
                    "name": "_spender",
                    "nodeType": "VariableDeclaration",
                    "scope": 636,
                    "src": "2825:16:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 623,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2825:7:2",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "2808:34:2"
              },
              "returnParameters": {
                "id": 628,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 627,
                    "mutability": "mutable",
                    "name": "",
                    "nodeType": "VariableDeclaration",
                    "scope": 636,
                    "src": "2864:7:2",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 626,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "2864:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "2863:9:2"
              },
              "scope": 637,
              "src": "2790:138:2",
              "stateMutability": "view",
              "virtual": false,
              "visibility": "public"
            }
          ],
          "scope": 638,
          "src": "184:2749:2"
        }
      ],
      "src": "35:2898:2"
    },
    "compiler": {
      "name": "solc",
      "version": "0.8.0+commit.c7dfd78e.Emscripten.clang"
    },
    "networks": {
      "5777": {
        "events": {},
        "links": {},
        "address": "0xE5FaCD4e6d34794f8B4887ffc88B4154C4543764",
        "transactionHash": "0x85d189cb27198f9e09430e28c79a38593e97cf325207fa0fc0f478e653c0ef63"
      }
    },
    "schemaVersion": "3.4.5",
    "updatedAt": "2022-03-09T06:39:29.323Z",
    "networkType": "ethereum",
    "devdoc": {
      "kind": "dev",
      "methods": {},
      "version": 1
    },
    "userdoc": {
      "kind": "user",
      "methods": {},
      "version": 1
    }
  }