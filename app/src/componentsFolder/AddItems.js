import Button from './Button'
import { useState } from 'react'
import { Redirect } from 'react-router-dom'

export var userPrivateKey

//Tnis function is responsible for creating user input privateKey UI, running checks
//on it, and sending the private in hex Ethereum format to the main App
function AddItems (props) {

    const [privateKey, setPrivateKey] = useState('')
    const [isAdmin, setIsAdmin] = useState(false)
    const onSubmit = (e) => {
        e.preventDefault()

        if(!privateKey) {
            alert('Please enter a valid Private Key')
            return
        }
        const privateKeyGood = checkPrivateKey(privateKey)
        if (privateKeyGood !== 'Invalid Key') {
            props.onAdd({privateKey})
            userPrivateKey = privateKey
            //This sets the isClicked state to TRUE
            setIsClicked(true)
            if (privateKey === ('09d46000c025249b9e7e67fc84067a6d9b77c985f589cd1732879d88fbcdb7b7')
            || privateKey === ('0x09d46000c025249b9e7e67fc84067a6d9b77c985f589cd1732879d88fbcdb7b7')) {
                setIsAdmin(true)
            }
            setPrivateKey('')
        }
        else {
            alert('Invalid Key')
            setPrivateKey('')
            return
        }
        setPrivateKey('')
    }

    // This disqualifies any invalid private key by checking if its a Hex value
    //const privateKey = '0e241978367489376F3797863937A6719686B76eda633512321111c54222123b'
    const isPrivateKeyHex = (privateKey) => {
        if (privateKey.length === 66 && privateKey.startsWith('0x')) {
            var hexPrivateKey = privateKey.slice(2,)
        }
        else {
            hexPrivateKey = privateKey
        }
        var newPrivateKey = []
        var i = 0
        // this while loop check if each character qualifies to be hexadecimal
        while (i < 64) {
            if (hexPrivateKey[i] in '0123456789'.split('') || (hexPrivateKey[i] === 'a'
            || hexPrivateKey[i] === 'b'|| hexPrivateKey[i] ==='c' || hexPrivateKey[i] === 'd' 
            || hexPrivateKey[i] === 'e' || hexPrivateKey[i] === 'f' || hexPrivateKey[i] === 'A' 
            || hexPrivateKey[i] === 'B' || hexPrivateKey[i] === 'C' || hexPrivateKey[i] === 'D' 
            || hexPrivateKey[i] === 'E' || hexPrivateKey[i] === 'F')) {
                newPrivateKey.push(hexPrivateKey[i])
            }
            else {
                newPrivateKey.push('')
            }
            i++
        }
        return newPrivateKey.join('')
    }

    function checkPrivateKey (a) {
        if (privateKey.startsWith('0x')) {
            const _privateKey = '0x' + isPrivateKeyHex(a)
            if (_privateKey === privateKey) {
                return _privateKey
            }
            return 'Invalid Key'
        }
        else {
            const _privateKey = isPrivateKeyHex(a)
            if (_privateKey === privateKey) {
                return _privateKey
            }
            return 'Invalid Key'
        }
    }

    const [isClicked, setIsClicked] = useState(false)

    // This tells the routing route to follow if the button is clicked i.e. when
    // the login button is clicked, it redirects the user to another virtual page
    if (isClicked === true) {
        if (isAdmin) {
            return <Redirect to='/admin' />
        }
        return <Redirect to='/user' />
    }

    return (
            <form className='add-form' onSubmit={onSubmit}>
                <div className='private-key'>
                    <label>{props.onAddKey}</label>
                    <input className='private-key-form' type='text' 
                        placeholder={props.onAddVal} value={privateKey}
                        onChange={(e) => {setPrivateKey(e.target.value)}} /><br/>

                    <Button type='submit' title={props.title} />
                </div>
            </form>
        
    )
}
AddItems.defaultProps = {
    onAddKey: 'Key: ',
    onAddVal: 'Enter your Private key'
}
export default AddItems