import Button from './Button'
import { useState } from 'react'

//This a function built only for the Admin Transfer button
function Transfer (props) {
    const [ethAddress, setEthAddress] = useState('')
    const [value, setValue] = useState(0)
    
    const onSubmit = (e) => {
        e.preventDefault()
        const ethAddressGood = checkEthAddress(ethAddress)
        if ((ethAddressGood !== 'Invalid Ethereum Address') && 
        (ethAddressGood !== 'Invalid Ethereum Address') && (value >= 0)) {
            props.onTransfer(ethAddressGood, value)
            setEthAddress(ethAddressGood)
            setValue(value)
        }
        else {
            alert('Invalid Ethereum Address or Zero value')
            return
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

    function checkEthAddress (a) {
        if (ethAddress.startsWith('0x')) {
            const _ethAddress = '0x' + isEthAddressHex(a)
            if (_ethAddress === ethAddress) {
                return _ethAddress
            }
            return 'Invalid Ethereum Address'
        }
        else {
            return 'Invalid Ethereum Address'
        }
    }

    const [sendButtonClicked, setSendButtonClicked] = useState(false)
    function sendButtonClick () {
        setSendButtonClicked(!sendButtonClicked)
    }

    return (
        <div className='add-form'>
            <form onSubmit={onSubmit}>
                <div className='transfer-to'>
                    <label>Transfer to: </label>
                    <input className='transfer-to-form' type='text' 
                        placeholder='Enter an Ethereum address' value={ethAddress}
                        onChange={(e) => {setEthAddress(e.target.value)}} /><br/>
                </div>
                <div className='value'>
                    <label>Value: </label>
                    <input className='value-form' type='text' 
                        placeholder='Enter the amount to send' value={value}
                        onChange={(e) => {setValue(e.target.value)}} /><br/>
                </div>
                <div id='transfer-btns'>
                    <Button type='submit' title=' Send' onSet={sendButtonClick} />
                </div>
            </form>
        </div>
    )
}
export default Transfer