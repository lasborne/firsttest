import { useState } from 'react'
import Button from './Button'

//This function is for adding a subscriber's email to the minidatabase email.json
//It creates the input UI, receives and checks the email, and sends to the App
function AddNewsletter (props) {
    const [email, setEmail] = useState('')

    function onSubmit(e) {
        e.preventDefault()
        if(!email) {
            alert('Please enter an Email')
            return
        }

        // The Email validity checking function is called to the submit button
        const emailGood = checkEmail(email)
        if (emailGood !== 'Enter a valid Email') {
            props.onAddEmail({email})
            setEmail('')
            alert(
                'Thanks for subscribing to our newsletter!' + 
                '\n You will be receiving newsletters from StakeDAO'
            )
            props.onSet()
        }
        else {
            alert('Enter a valid Email address')
            setEmail('')
            return
        }
        setEmail('')
    }

    // This Function checks if an email is valid by checking for '@' and '.'
    const checkEmail = (email) => {
        var newEmail = ''
        // this 'if' statement checks if the email is valid by seeking for '@.'
        if (email.includes('@') && email.includes('.')) {
            const emailData = email
            newEmail = emailData
        }
        else {
            const emailData = 'Enter a valid Email'
            newEmail = emailData
        }
        return newEmail
    }

    return (
        <>
            <form className='addEmail' onSubmit={onSubmit}>
                <div className='addEmailSubclass'>
                    <label>{props.onAddKey}</label>
                    <input className='addEmailForm' type='text' 
                        placeholder={props.onAddVal} value={email}
                        onChange={(e) => {setEmail(e.target.value)}} />
                    <Button type='submit' title={props.title}></Button>
                </div>
            </form>
            
        </>
    )
}
AddNewsletter.defaultProps = {
    onAddKey: 'Key:',
    onAddVal: 'Enter your Private key'
}
export default AddNewsletter