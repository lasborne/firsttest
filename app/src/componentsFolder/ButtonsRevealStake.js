//The imports are necessary built-in and user-defined components
import Button from './Button'
import { useState } from 'react'
import DisplayValue from './DisplayValue'
import './stakeDAONodeApp'
import { App1 } from './stakeDAONodeApp'

//This function defines the key buttons present on the Home page of the dApp
//These are features loaded when the website is opened
function ButtonsRevealStake (props) {
    
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

    //This refers to an array containing all the state variables above
    const stakeObjects = [
        Name,
        Symbol,
        Decimals,
        TotalSupply,
        TokenType,
        ContractAddress
    ]

    //This is an Object of values, which defines what is displayed as button names
    //to the User on the UI of the Homepage, e.g., 'Token Name', 'Contrcat Address' etc.
    const attributesList = {
        name: 'Token Name',
        symbol: 'Token Symbol',
        decimals: 'Decimals',
        totalSupply: 'Total Supply',
        tokenType: 'Token Type',
        contractAddress: ' Contract Address'
    }

    //These are state variables defining the state of, example, a click. Telling
    //the UI/frontEnd whether to reveal a feature, or hide
    const [hideButtons, setHideButtons] = useState(true)
    const check = () => {
        setHideButtons(!hideButtons)
    }

    const [activeFunc, setActiveFunc] = useState(false)
    const [stakeState, setStakeState] = useState()
     
    //This returns the features visible to the Home page
    return (
        <div>
            <Button onClick={check} title=
                {(hideButtons === true)? 'Reveal more about StaKe' : 'Hide staKe token properties'} />
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
                </ul>
            </div>
        </div>
    )
}
export default ButtonsRevealStake