import Button from './Button'
import { useState } from 'react'
import { Link } from 'react-router-dom'

//This is a function present in the Users' 'SendFrom' button to enable the user
//to send Stake tokens to any another ethereum address
function UserTransfer (props) {
    const [ethAddressTo, setEthAddressTo] = useState('')
    const [value, setValue] = useState(0)
    
    const onSubmit = (e) => {
        if (approveButtonClicked === true) {
            e.preventDefault()
            const ethAddressToGood = checkEthAddressTo(ethAddressTo)
            if ((ethAddressToGood !== 'Invalid Ethereum Address') && 
            (value >= 0)) {
                props.onAllowance(ethAddressTo)
                props.onApproveParameters(value)
                if (sendButtonClicked === true) {
                    props.onSendParameters(ethAddressToGood, value)
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
export default UserTransfer