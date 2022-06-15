//The imports are necessary built-in and user-defined components
import Button from './Button'
import { useState, useEffect } from 'react'
import DisplayValue from './DisplayValue'
import AddBalanceAddress from './AddBalanceAddress'
import TransferFrom from './TransferFrom'
import Transfer from './Transfer'
import './stakeDAONodeApp'
import { App1 } from './stakeDAONodeApp'
import {userPrivateKey} from './AddItems'

//This function defines the key buttons present on the Admin page of the dApp
//When the user address is seen as an admin, it loads these features
function AdminButtonsRevealStake (props) {
    
    //These functions such as _name, _balance etc., all refer to functions defined
    //in the Solidity smart contract, and these are called here from another JS file
    //called 'stakeDAONodeApp' where web3.js is implemented to extract such info
    const [Name, setName] = useState('')
    const _name = async () => {
        const name = await App1.name()
        setName(name)
    }
    _name()

    const [Symbol, setSymbol] = useState('')
    const _symbol = async () => {
        const symbol = await App1.symbol()
        setSymbol(symbol)
    }
    _symbol()

    const [Decimals, setDecimals] = useState('')
    const _decimals = async () => {
        const decimals = await App1.decimals()
        setDecimals(decimals.toNumber().toString())
    }
    _decimals()

    const [TotalSupply, setTotalSupply] = useState('')
    const _totalSupply = async () => {
        const totalSupply = await App1.totalSupply()
        setTotalSupply((totalSupply.toNumber()/1E+18).toString())
    }
    _totalSupply()

    const [TokenType, setTokenType] = useState('')
    const _tokenType = async () => {
        const tokenType = await App1.tokenType()
        setTokenType(tokenType)
    }
    _tokenType()

    const [ContractAddress, setContractAddress] = useState('')
    const _contractAddress = async () => {
        const contractAddress = await App1.contractAddress()
        setContractAddress(contractAddress)
    }
    _contractAddress()

    const [BalanceOf, setBalanceOf] = useState()
    const _balanceOf = async (inputAddress) => {
        const balanceOf = await App1.balanceOf(inputAddress)
        setBalanceOf(balanceOf)
        console.log(balanceOf)
        alert('This address has '+balanceOf + ' STK tokens left')
        return balanceOf
    }
    
    const [Allowance, setAllowance] = useState()
    const _allowance = async (from, to) => {
        const allowance = await App1.allowance(from, to)
        setAllowance(allowance)
        console.log(allowance)
        return allowance
    }

    const [Approve, setApprove] = useState(false)
    const _approve = async (from, _value) => {
        const approve = await App1.approve(from, _value)
        setApprove(approve)
        alert('Transaction Approved')
        return approve
    }

    const [Send, setSend] = useState(false)
    const _transferFrom = async (from, to, _value) => {
        var _Value = _value * (1E+18)
        const transferFrom = await App1.transferFrom(from, to, _Value, 
            {from: '0x784a56F281D665f2b9ab680D3C2569acEE46607C'})
        setSend(transferFrom)
        console.log(Send.toString())
        alert('Hoorah! You have successfully transferred '+ _value +' STK tokens')
        return transferFrom.toString()
    }

    const [Transferred, setTransferred] = useState(false)
    const _transfer = async (to, _value) => {
        var _Value = _value * (1E+18)
        const transfer = await App1.transfer(to, _Value, {from: fetchUser})
        setTransferred(transfer)
        console.log(Transferred.toString())
        return transfer.toString()
    }

    //This refers to an array containing all the state variables above
    const stakeObjects = [
        Name,
        Symbol,
        Decimals,
        TotalSupply,
        TokenType,
        ContractAddress,
        BalanceOf,
        Send,
        Approve,
        Transferred,
        Allowance
    ]

    //This is an Object of values, which defines what is displayed as button names
    //to the User on the UI, e.g., 'Token Name', 'Contract Address' etc.
    const attributesList = {
        name: 'Token Name',
        symbol: 'Token Symbol',
        decimals: 'Decimals',
        totalSupply: 'Total Supply',
        tokenType: 'Token Type',
        contractAddress: ' Contract Address',
        balanceOf: 'Balance',
        send: 'SendFrom',
        approve: 'Approve',
        transfer: 'Send',
        Allowance: 'Allowance'
    }

    //These are state variables defining the state of, example, a click. Telling
    //the UI/frontEnd whether to reveal a feature, or hide
    const [hideButtons, setHideButtons] = useState(true)
    const check = () => {
        setHideButtons(!hideButtons)
    }

    const [activeFunc, setActiveFunc] = useState(false)
    const [stakeState, setStakeState] = useState()
    
    //This is a small function using web3js to convert the AdminPrivateKey to the
    //corresponding ethereum address
    function getUser() {
        const Web3 = require('web3')
        Web3.providers.HttpProvider.prototype.sendAsync = Web3.providers.HttpProvider.prototype.send
        const web3 = new Web3('http://127.0.0.1:7545')
        if (userPrivateKey !== undefined) {
            const account = web3.eth.accounts.privateKeyToAccount(userPrivateKey).address
            console.log(account)
            return account
        }
        else {
            return undefined
        }
    }
    
    //UseEffect simply tells react to automatically call getUser function each time
    //the Admin page is loaded
    const [fetchUser, setFetchUser] = useState('')
    useEffect(() => {
        const _fetchUser = async () => {
            const fetchedUser = await getUser()
            setFetchUser(fetchedUser)
        }
        _fetchUser()
    }, [])

    //This returns the features visible to the Admin page
    return (
        <div>
            <Button onClick={check} title=
                {(hideButtons === true)? 'Reveal more about StaKe' :'Hide staKe token properties'} />
            <div className='hiddenBtn'>
                <ul id='hiddenButtons'>
                    {hideButtons === false ? (<Button key='0' title={attributesList.name} 
                    onSet={() => setStakeState(0)} onClick={() => setActiveFunc(!activeFunc)} />):''}
                    {hideButtons === false ? (<Button key='1' title={attributesList.symbol} 
                    onSet={() => setStakeState(1)} onClick={() => setActiveFunc(!activeFunc)} />):''}
                    {hideButtons === false ? (<Button key='2' title={attributesList.decimals} 
                    onSet={() => setStakeState(2)} onClick={() => setActiveFunc(!activeFunc)}/>):''}
                    {hideButtons === false ? (<Button key='3' title={attributesList.totalSupply} 
                    onSet={() => setStakeState(3)} onClick={() => setActiveFunc(!activeFunc)}/>):''}
                    {hideButtons === false ? (<Button key='4' title={attributesList.tokenType} 
                    onSet={() => setStakeState(4)} onClick={() => setActiveFunc(!activeFunc)}/>):''}
                    {hideButtons === false ? (<Button key='5' title={attributesList.contractAddress} 
                    onSet={() => setStakeState(5)} onClick={() => setActiveFunc(!activeFunc)}/>):''}
                    {hideButtons === false ? (<Button key='6' title={attributesList.balanceOf} 
                    onSet={() => setStakeState(6)} onClick={() => setActiveFunc(!activeFunc)}/>):''}
                    {hideButtons === false ? (<Button key='7' title={attributesList.send} 
                    onSet={() => setStakeState(7)} onClick={() => setActiveFunc(!activeFunc)}/>):''}
                    {hideButtons === false ? (<Button key='8' title={attributesList.transfer} 
                    onSet={() => setStakeState(8)} onClick={() => setActiveFunc(!activeFunc)}/>):''}
                    
                    {(stakeState === 0 && activeFunc === true && hideButtons === false) ? 
                    (<DisplayValue text={stakeObjects[0]} />) : null}
                    {(stakeState === 1 && activeFunc === true && hideButtons === false) ? 
                    (<DisplayValue text={stakeObjects[1]} />) : null}
                    {(stakeState === 2 && activeFunc === true && hideButtons === false) ? 
                    (<DisplayValue text={stakeObjects[2]} />) : null}
                    {(stakeState === 3 && activeFunc === true && hideButtons === false) ? 
                    (<DisplayValue text={stakeObjects[3]} />) : null}
                    {(stakeState === 4 && activeFunc === true && hideButtons === false) ? 
                    (<DisplayValue text={stakeObjects[4]} />) : null}
                    {(stakeState === 5 && activeFunc === true && hideButtons === false) ? 
                    (<DisplayValue text={stakeObjects[5]} />) : null}
                    {(stakeState === 6 && activeFunc === true && hideButtons === false) ? 
                    (<AddBalanceAddress onAddAddress={_balanceOf} onYield={BalanceOf} />) : null}
                    {(stakeState === 7 && activeFunc === true && hideButtons === false) ? 
                    (<TransferFrom onSendParameters={_transferFrom} onAllowance={_allowance} 
                    onApproveParameters={_approve} onSee={Approve} />) : null}
                    {(stakeState === 8 && activeFunc === true && hideButtons === false) ? 
                    (<Transfer onTransfer={_transfer} />) : null}
                </ul>
            </div>
        </div>
    )
}
export default AdminButtonsRevealStake