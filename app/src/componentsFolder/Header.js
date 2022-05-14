// This imports the website Stake symbol into this Header component
import pic_in from './icons8-infinity-48.png'

// This function handles the header image (even giving it a URL to home page) and
//the name
function Header () {
    return (
        <header className='header'>
            <ul className='header-list'>
                <a href='http://localhost:3000'>
                    <img src={pic_in} alt='stakeDAO'/>
                </a>
                <h1 id='header-name'>staKe</h1>
            </ul>
        </header>
    )
}
export default Header