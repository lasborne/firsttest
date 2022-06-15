//These imports include necessary images, components to be displayed on the Footer
//of the website. The images are clickable and redirects the user. This entire
// Footer component is found at the foot of the webpage
import { useState, useEffect } from 'react'
import AddNewsletter from './AddNewsletter'
import pic_tw from './icons8-twitter-48.png'
import pic_fb from './icons8-facebook-48.png'
import pic_gh from './icons8-github-48.png'
import { Link } from 'react-router-dom'

//This is the function which gives action to various parts of the Footer
const Footer = (props) => {
    //This an Object for which its values are used within the footer to display
    //human-readable info on the UI/frontEnd
    const footerData = {
        copyright: 'Copyright \u00A9 2022',
        newsletter: 'Subscribe for newsletters',
        newsletter_in: 'E-mail'
    }

    // This fetches the emails already available in the API mockup (emails.json)
    const _emails = []
    const [emails, setEmails] = useState(_emails)
    useEffect(() => {
        const getEmails = async () => {
            const fetchedEmails = await fetchEmails()
            setEmails(fetchedEmails)
        }
        getEmails()
    }, [])
    console.log(emails)

    //This is an asynchronous function that is responsible for fetching the stored
    //subscribers' emails stored in the JSON file - 'emails.json'
    const fetchEmails = async () => {
        const res = await fetch('./emails.json', {
            headers: {
                'Content-type': 'application/json',
                'Accept' : 'application/json'
            }
        })
        const data = res.json()
        return data
    }

    // Function for user's entered Email in the newsletter to be stored in the
    // ...API mockup (sort of like a mock database), Hence, the method - POST
    const addEmail = async (email) => {

        const res = await fetch('http://localhost:232/Emails', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(email)
        })
        const data = await res.json()
        setEmails([...emails, data])
    }

    //This is a small function that partially detects when a user has subscribed
    // and automatically switches to false, hence, hiding the Subscribe email part
    const [isAddEmail, setIsAddEmail] = useState(true)
    const showIsAddEmail = () => {
        setIsAddEmail(false)
    }

    return (
        <footer className='footer-list'>
                <ul className='sub-footer-list'>
                    <div>
                        <p id='footer-classe'>{footerData.copyright}</p>
                    </div>
                    <div>
                        <Link to='/contact' className='contact-class'>Contact Us</Link>
                    </div>
                    <div>
                        <Link to='/about' className='about-class'>About</Link>
                    </div>
                    <div>
                        <ul className='image-prop' >
                            <a href='https://twitter.com/mic_lasborne'>
                                <img src={pic_tw} alt='Twitter'/>
                            </a>
                            <a href='https://www.facebook.com'>
                                <img src={pic_fb} alt='Facebook'/>
                            </a>
                            <a href='https://github.com/lasborne'>
                                <img src={pic_gh} alt='Github'/>
                            </a>
                        </ul>
                    </div>
                    <div>
                        {isAddEmail === false && props.onLoad === 'user' ? '': <AddNewsletter className='addEmail' 
                        onSet={showIsAddEmail} onAddEmail={addEmail} 
                        onAddKey={footerData.newsletter} 
                        onAddVal={footerData.newsletter_in} title='Submit' />}
                    </div>
                    
                </ul>
            </footer>
    )
}
export default Footer