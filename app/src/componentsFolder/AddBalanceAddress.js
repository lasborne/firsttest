import Button from './Button'
import { useState } from 'react'

// This function takes the user input ethereum address and does checks to know if
// it is a valid Ethereum address before returning to the App
function AddBalanceAddress (props) {
    const [ethAddress, setEthAddress] = useState('')
    const onSubmit = (e) => {
        e.preventDefault()
        const ethAddressGood = checkEthAddress(ethAddress)
        if (ethAddressGood !== 'Invalid Ethereum Address') {
            props.onAddAddress(ethAddressGood)
            setEthAddress(ethAddressGood)
        }
        else {
            alert('Invalid Ethereum Address')
            return
        }
        return ethAddress
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
        if (ethAddress === '') {
            return '0x784a56F281D665f2b9ab680D3C2569acEE46607C'
        }
        else if (ethAddress.startsWith('0x')) {
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

    const [balButtonClicked, setBalButtonClicked] = useState(false)
    async function balButtonClick () {
        setBalButtonClicked(!balButtonClicked)
    }

    return (
            <form className='add-form' onSubmit={onSubmit}>
                <div className='private-key'>
                    <label>Address: </label>
                    <input className='private-key-form' type='text' 
                        placeholder='Enter an Ethereum address' value={ethAddress}
                        onChange={(e) => {setEthAddress(e.target.value)}} /><br/>
                    <Button type='submit' title=' Check Balance' onSet={balButtonClick} />
                    {balButtonClicked === true ? <p>{props.onYield}</p> : null}
                </div>
            </form>        
    )
}
AddBalanceAddress.defaultProps = {
    onAddKey: 'Key: ',
    onAddVal: 'Enter your Private key'
}
export default AddBalanceAddress