/*This is where majority of the webjs (module for communicating Solidity and 
and Javascript) operations are carried out using Truffle framework*/

//The JSON format of the deployed Solidity contract is required (imported)
//Truffle, web3 are required/imported, as well as defined the RPC
const stakeDAO_json = require('./stakeDAO.json')
const TruffleContract = require('truffle-contract')
const Web3 = require('web3')
Web3.providers.HttpProvider.prototype.sendAsync = Web3.providers.HttpProvider.prototype.send
export const web3 = new Web3('http://127.0.0.1:7545')
//These exports are unnecessary but left to show the major accounts we are dealing
//with, 'account' refers to the eth Address that deployed the smart contract
//value simply refers to the total Supply of the StakeDAO tokens
export const account = '0x784a56F281D665f2b9ab680D3C2569acEE46607C'
export const account2 = '0xAA7B5037A4d9451233a746d96F96E3Fb04b70E1D'
export var value = 100000000000000000

//This App1 is the Object exported containing all the Solidity functions in
//Javascript format which is now usable in building the dAPP
export let App1 = {
    loadContract: async () => {
        const StakeDAO = TruffleContract(stakeDAO_json)
        StakeDAO.setProvider(web3.currentProvider)
        const stakeDAO = await StakeDAO.deployed()
        return stakeDAO
    },
    ownerAddress: async () => {
        const StakeDAO = TruffleContract(stakeDAO_json)
        StakeDAO.setProvider(web3.currentProvider)
        const stakeDAO = await StakeDAO.deployed()
        const ownerAddress = await stakeDAO.ownerAddress()
        console.log(ownerAddress)
        return (ownerAddress)
    },
    contractAddress: async () => {
        const StakeDAO = TruffleContract(stakeDAO_json)
        StakeDAO.setProvider(web3.currentProvider)
        const stakeDAO = await StakeDAO.deployed()
        const contractAddress = await stakeDAO.contractAddress()
        //console.log(contractAddress)
        return (contractAddress)
    },
    tokenType: async () => {
        const StakeDAO = TruffleContract(stakeDAO_json)
        StakeDAO.setProvider(web3.currentProvider)
        const stakeDAO = await StakeDAO.deployed()
        const tokenType = await stakeDAO.tokenType()
        //console.log(tokenType)
        return (tokenType)
    },
    name: async () => {
        const contractName = await App1.loadContract()
        const name = await contractName.name()
        return (name)
    },
    symbol: async () => {
        const _symbol = await App1.loadContract()
        const symbol = await _symbol.symbol()
        return symbol
    },
    decimals: async () => {
        const _decimals = await App1.loadContract()
        const decimals = await _decimals.decimals()
        //console.log(decimals.toNumber())
        return decimals
    },
    totalSupply: async () => {
        const _totalSupply = await App1.loadContract()
        const totalSupply = await _totalSupply.totalSupply()
        //console.log(totalSupply.toNumber()/ 1E+18)
        return totalSupply
    },
    balanceOf: async (accountAddress) => {
        const _balanceOf = await App1.loadContract()
        const balanceOf = await _balanceOf.balanceOf(accountAddress)
        //console.log(balanceOf.toNumber()/ 1E+18)
        return (balanceOf.toNumber()/ 1E+18)
    },
    transfer: async (to, _value) => {
        const _transfer = await App1.loadContract()
        const transfer = await _transfer.transfer(
            to,
            _value,
            {
                from: account,
                gas: 6000000
            }
        )
        console.log(transfer)
        return transfer
    },
    transferFrom: async (from, to, _value) => {
        const _transferFrom = await App1.loadContract()
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
        return transferFrom
    },
    approve: async (from, _value) => {
        const _approve = await App1.loadContract()
        const approve = await _approve.approve(
            from,
            _value,
            {
                from: account,
                gas: 6000000
            }
        )
        console.log(approve)
        return approve
    },
    allowance: async (from, to) => {
        const _allowance = await App1.loadContract()
        const allowance = await _allowance.allowance(
            from,
            to,
            {
                from: account,
                gas: 6000000
            }
        )
        console.log(allowance.toNumber()/ 1E+18)
        return (allowance.toNumber()/ 1E+18)
    }  
}