import Button from './Button'
import { useState } from 'react'
import { Link } from 'react-router-dom'

//This is a function present only in the Admin TransferFrom button demonstrating
//the bad centralized power that the Admin has to send Stake tokens from any address
//that has Stake tokens left in it to any address. Admin here is the contract
//deployer i.e. 0x784a56F281D665f2b9ab680D3C2569acEE46607C
function TransferFrom (props) {
    const [ethAddressFrom, setEthAddressFrom] = useState('')
    const [ethAddressTo, setEthAddressTo] = useState('')
    const [value, setValue] = useState(0)
    
    const onSubmit = (e) => {
        if (approveButtonClicked === true) {
            e.preventDefault()
            const ethAddressFromGood = checkEthAddressFrom(ethAddressFrom)
            const ethAddressToGood = checkEthAddressTo(ethAddressTo)
            if ((ethAddressFromGood !== 'Invalid Ethereum Address') && 
            (ethAddressToGood !== 'Invalid Ethereum Address') && (value >= 0)) {
                props.onAllowance(ethAddressFrom, ethAddressTo)
                props.onApproveParameters(ethAddressFrom, value)
                if (sendButtonClicked === true) {
                    props.onSendParameters(ethAddressFromGood, ethAddressToGood, value)
                }
            }
        }
        else {
            alert('No Approval')
            return <Link to='/admin' />
        }
    }

    // This disqualifies any invalid private key by checking if its a Hex value
    //const ethAddress = '0e241978367489376F3797863937A6719686B76eda633512321111c54222123b'
    const isEthAddressHex = (ethAddress) => {
        if (ethAddress.length === 42 && ethAddress.startsWith('0x')) {
            var hexethAddress = ethAddress.slice(2,)
        }
        var newEthAddress = []
        var i = 0
        // this while loop check if each character qualifies to be hexadecimal
        while (i < 40) {
            if (hexethAddress[i] in '0123456789'.split('') || (hexethAddress[i] === 'a'
            || hexethAddress[i] === 'b'|| hexethAddress[i] ==='c' || hexethAddress[i] === 'd' 
            || hexethAddress[i] === 'e' || hexethAddress[i] === 'f' || hexethAddress[i] === 'A' 
            || hexethAddress[i] === 'B' || hexethAddress[i] === 'C' || hexethAddress[i] === 'D' 
            || hexethAddress[i] === 'E' || hexethAddress[i] === 'F')) {
                newEthAddress.push(hexethAddress[i])
            }
            else {
                newEthAddress.push('')
            }
            i++
        }
        return newEthAddress.join('')
    }

    function checkEthAddressFrom (a) {
        if (ethAddressFrom.startsWith('0x')) {
            const _ethAddressFrom = '0x' + isEthAddressHex(a)
            if (_ethAddressFrom === ethAddressFrom) {
                return _ethAddressFrom
            }
            return 'Invalid Ethereum Address'
        }
        else {
            return 'Invalid Ethereum Address'
        }
    }

    function checkEthAddressTo (b) {
        if (ethAddressTo.startsWith('0x')) {
            const _ethAddressTo = '0x' + isEthAddressHex(b)
            if (_ethAddressTo === ethAddressTo) {
                return _ethAddressTo
            }
            return 'Invalid Ethereum Address'
        }
        else {
            return 'Invalid Ethereum Address'
        }
    }

    const [sendButtonClicked, setSendButtonClicked] = useState(false)
    function sendButtonClick () {
        setSendButtonClicked(true)
    }

    const [approveButtonClicked, setApproveButtonClicked] = useState(false)
    function approveButtonClick () {
        setApproveButtonClicked(true)
    }

    const [allowanceButtonClicked, setAllowanceButtonClicked] = useState(false)
    function allowanceButtonClick () {
        setAllowanceButtonClicked(true)
    }

    return (
        <div className='add-form'>
            <form onSubmit={onSubmit}>
                <div className='transfer-from'>
                    <label>Transfer from: </label>
                    <input className='transfer-from-form' type='text' 
                        placeholder='Enter an Ethereum address' value={ethAddressFrom}
                        onChange={(e) => {setEthAddressFrom(e.target.value)}} /><br/>
                </div>
                <div className='transfer-to'>
                    <label>Transfer to: </label>
                    <input className='transfer-to-form' type='text' 
                        placeholder='Enter an Ethereum address' value={ethAddressTo}
                        onChange={(e) => {setEthAddressTo(e.target.value)}} /><br/>
                </div>
                <div className='value'>
                    <label>Value: </label>
                    <input className='value-form' type='text' 
                        placeholder='Enter the amount to send' value={value}
                        onChange={(e) => {setValue(e.target.value)}} /><br/>
                </div>
                <div>
                    <ul id='transfer-btns'>
                        <Button type='submit' title=' Transfer' onSet={sendButtonClick} />
                        <Button type='submit' title= ' Approve' onSet={approveButtonClick} />
                        <Button type='submit' title= ' Allowance' onSet={allowanceButtonClick} />
                        {sendButtonClicked === true ? <p>{props.onYield}</p> : null}
                    </ul>
                </div>
            </form>
        </div>
    )
}
export default TransferFrom