
const stakeDAO_json = require('./stakeDAO.json')
require('dotenv').config()
var TruffleContract = require('truffle-contract')
const Web3 = require('web3')
Web3.providers.HttpProvider.prototype.sendAsync = Web3.providers.HttpProvider.prototype.send
const web3 = new Web3('http://127.0.0.1:7545')
const stakeDAO_bytecode = stakeDAO_json.bytecode
const account = '0x784a56F281D665f2b9ab680D3C2569acEE46607C'
const account2 = '0xAA7B5037A4d9451233a746d96F96E3Fb04b70E1D'
var value = 100000000000000000
const contractAddress = '0xE5FaCD4e6d34794f8B4887ffc88B4154C4543764'
//const lastTxHash = '0x85d189cb27198f9e09430e28c79a38593e97cf325207fa0fc0f478e653c0ef63'

App = {
    loadContract: async () => {
        const StakeDAO = TruffleContract(stakeDAO_json)
        StakeDAO.setProvider(web3.currentProvider)
        const stakeDAO = await StakeDAO.deployed()
        return stakeDAO
    },
    load: async () => {
        await App.ownerAddress()
        await App.contractAddress()
        await App.tokenType()
        await App.name()
        await App.symbol()
        await App.decimals()
        await App.totalSupply()
        await App.balanceOf(account2)
        await App.approve(account2, value)
        await App.allowance(account, account2)
        await App.transfer(account2, value)
        await App.transferFrom(contractAddress, account2, value)
        
    },
    ownerAddress: async () => {
        const StakeDAO = TruffleContract(stakeDAO_json)
        StakeDAO.setProvider(web3.currentProvider)
        const stakeDAO = await StakeDAO.deployed()
        const ownerAddress = await stakeDAO.ownerAddress()
        console.log(ownerAddress)
    },
    contractAddress: async () => {
        const StakeDAO = TruffleContract(stakeDAO_json)
        StakeDAO.setProvider(web3.currentProvider)
        const stakeDAO = await StakeDAO.deployed()
        const contractAddress = await stakeDAO.contractAddress()
        console.log(contractAddress)
    },
    tokenType: async () => {
        const StakeDAO = TruffleContract(stakeDAO_json)
        StakeDAO.setProvider(web3.currentProvider)
        const stakeDAO = await StakeDAO.deployed()
        const tokenType = await stakeDAO.tokenType()
        console.log(tokenType)
    },
    name: async () => {
        const contractName = await App.loadContract()
        const name = await contractName.name()
        console.log(name)
    },
    symbol: async () => {
        const _symbol = await App.loadContract()
        const symbol = await _symbol.symbol()
        console.log(symbol)
    },
    decimals: async () => {
        const _decimals = await App.loadContract()
        const decimals = await _decimals.decimals()
        console.log(decimals.toNumber())
    },
    totalSupply: async () => {
        const _totalSupply = await App.loadContract()
        const totalSupply = await _totalSupply.totalSupply()
        console.log(totalSupply.toNumber()/ 1E+18)
    },
    balanceOf: async (accountAddress) => {
        const _balanceOf = await App.loadContract()
        const balanceOf = await _balanceOf.balanceOf(accountAddress)
        console.log(balanceOf.toNumber()/ 1E+18)
    },
    transfer: async (to, _value) => {
        const _transfer = await App.loadContract()
        const transfer = await _transfer.transfer(
            to,
            _value,
            {
                from: account,
                gas: 6000000
            }
        )
        console.log(transfer)
    },
    transferFrom: async (from, to, _value) => {
        const _transferFrom = await App.loadContract()
        const transferFrom = await _transferFrom.transferFrom(
            from,
            to,
            _value,
            {
                from: account,
                gas: 6000000
            }
        )
        console.log(transferFrom)
    },
    approve: async (to, _value) => {
        const _approve = await App.loadContract()
        const approve = await _approve.approve(
            to,
            _value,
            {
                from: account,
                gas: 6000000
            }
        )
        console.log(approve)
    },
    allowance: async (from, to) => {
        const _allowance = await App.loadContract()
        const allowance = await _allowance.allowance(
            from,
            to,
            {
                from: account,
                gas: 6000000
            }
        )
        console.log(allowance.toNumber()/ 1E+18)
    }
    
}
App.load()
/*
const blue = async() => {
    await App.balanceOf(account2)
}
blue()*/