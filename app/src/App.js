// The imports below are importing necessary components into the main APP component
import Header from './componentsFolder/Header'
import AddItems from './componentsFolder/AddItems'
import Footer from './componentsFolder/Footer'
import AdminButtonsRevealStake from './componentsFolder/AdminButtonsRevealStake'
import ButtonsRevealStake from './componentsFolder/ButtonsRevealStake'
import UserButtonsRevealStake from './componentsFolder/UserButtonsRevealStake'
import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import { useState, useEffect } from 'react'
import { App1 } from './componentsFolder/stakeDAONodeApp'
import Web3 from 'web3'
import Button from './componentsFolder/Button'

// This is the functional component used to build and return StakeDAO app
function App() {
    // These are state variable used to manage and store values necessary e.g.
    // userAddress below refers to the ethereum address of a user gotten from the frontend
    const _keys = []
    const [keys, setKeys] = useState(_keys)
    const [userAddress, setUserAddress] = useState('')

    //This is used to instantly load the function getKeys and hence fetch private
    //keys entered by a user from the MOCK json-server
    useEffect(() => {
        const getKeys = async () => {
            const keysFromServer = await fetchKeys()
            setKeys(keysFromServer)
        }
        getKeys()
    }, [])

    //This is the exact function to get user private keys from the MOCK server
    const fetchKeys = async () => {
        const keys = await fetch(`http://localhost:231/Keys`)
        const data = keys.json()
        return data
    }

    // This has no apparent use as of developing version 1.0.0
    const fetchKey = async (id) => {
        const key = await fetch(`http://localhost:231/Keys`)
        const data = key.json()
        return data 
    }

    // This function posts/sends the user's private key to the MOCK server
    const addKey = async (privatekey) => {

        const res = await fetch(`http://localhost:231/Keys`, {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(privatekey)
        })

        const data = await res.json()
        setKeys([...keys, data])
        const Web3 = require('web3')
        Web3.providers.HttpProvider.prototype.sendAsync = Web3.providers.HttpProvider.prototype.send
        const web3 = new Web3('http://127.0.0.1:7545')
        const account = web3.eth.accounts.privateKeyToAccount(data.privateKey)
        setUserAddress(account.address)
    }
    console.log(userAddress)

    //This has no apparent use for version 1.0.0
    const deleteKey = async (id) => {

        const res = await fetch(`http://localhost:231/Keys`, {
            method: 'DELETE'
        })

        setKeys(keys.filter((key) => key.id !== id))
    }
    
    //This is a function to get the balance of the user's address derived from the
    //user's private key provided
    const getBalance = async (inputAddress) => {
        const bal = await App1.balanceOf(inputAddress)
        setBalanceOf(bal)
        console.log(bal)
    }
    getBalance(userAddress)
    
    //This is another sort of state variable, where balanceOf is initially nothing
    //but, with setBalanceOf as sort of a function, we can update the balance
    const [BalanceOf, setBalanceOf] = useState()
    
    /*
    if (typeof (window.ethereum) !== 'undefined') {
        console.log('MetaMask wallet is installed')
        if (ethereum.isConnected()) {
            console.log('Metamask is connected')
        }
    }*/

    //This asynchronous function serves to check if user has Metamask installed,
    //if true, Metamask is called and loaded on user's browser and a wallet address is connected
    const connectWallet = async () => {
        if (window.ethereum && window.ethereum.isMetaMask) {
            const accounts = await window.ethereum.request({method: 'eth_requestAccounts'})
            console.log(accounts[0])
            console.log('Working ...1')
            window.web3 = new Web3(window.ethereum)
            try {
                await window.ethereum.request({method : 'eth_requestAccounts'})
                
                //window.ethereum.send('eth_sendTransaction', { from: accounts[3]})
                console.log(window.web3)
                return window.web3
            }
            catch (error) {
                console.log('OOPS! You aren\'t connected, mate!')
                return ('YOU ARE NOT CONNECTED TO METAMASK')
            }
        }
    }

    //This returns whatever that is visible on the frontend of StakeDAO, embodying
    //the entire components to be displayed on different clicks, navigations
    return (
        
        <Router>
        {/*This Router is a built-in component in React-router-dom for specifying
        navigation routes, paths*/}
            <div className='container'>
                {/*Header refers to the part showing the website image, the token
                name, welcome message. These are available on every route*/}
                <Header />
                <Link to='/'></Link>
                <Link to='/user' />
                {/*This Switch is React extension, which allows switching from 
                one page to another since react lacks inbuilt for multiple pages*/}
                <Switch>
                    {/*The Routes here refer to specific paths and what to display
                    if a page has been loaded*/}
                    <Route path='/' exact render={(props) => (
                        <>
                            {/*The components below are shown when loaded, some are
                            developer-defined components such as ButtonsRevealStake*/}
                            <h3 style={{color:'teal'}}>Welcome on board</h3>
                            <p style={{color:'teal'}}>...Your crypto journey is about to begin</p>
                            <Button title='Connect' onSet={connectWallet}/>
                            {keys !== [] && <AddItems onAdd={addKey} />}
                            <ButtonsRevealStake />
                            <Footer onLoad='home'/>
                        </>
                    )} />
                    <Route path='/admin' exact render={(props) => (
                        <>
                            <div className='userAddress'>
                                <p style={{color:'black'}}>ADMIN: {userAddress}</p>
                                <button id='btnOut' onClick={() => {props.history.push('/')}} >Log Out</button>
                            </div>
                            {keys !== [] && <AddItems onAdd={addKey} />}
                            <AdminButtonsRevealStake />
                            <Footer onLoad='admin'/>
                        </>
                    )} />
                    <Route path='/user' exact render={(props) => (
                        <>
                            <div className='userAddress'>
                                <p style={{color:'black'}} >Balance: {BalanceOf} </p>
                                <p style={{color:'black'}}>User: {userAddress}</p>
                                <button id='btnOut' onClick={() => {props.history.push('/')}} >Log Out</button>
                            </div>
                            <h3 style={{color:'teal'}}>Welcome on board</h3>
                            <p style={{color:'teal'}}>...Your crypto journey is about to begin</p>
                            {/*keys !== [] && <AddItems onAdd={addKey} />*/}
                            <UserButtonsRevealStake userAddress={userAddress} />
                            <Footer onLoad='user'/>
                        </>
                    )} />
                    <Route path='/about' exact render={(props) => (
                        <>
                            {/*<h3 style={{color:'teal'}}>Welcome on board</h3>*/}
                            <p style={{color:'black'}}>StakeDAO is a test Blockchain website that
                            allows users to send the native STK tokens from one address to another.
                            <br/> StakeDAO was developed by Lasborne (Okeke Uzochukwu)</p>
                            {/*<Footer onLoad='about'/>*/}
                            <Link to='/' className='about-class'>Go back</Link>
                        </>
                    )} />
                    <Route path='/contact' exact render={(props) => (
                        <>
                            {/*<h3 style={{color:'teal'}}>Welcome on board</h3>*/}
                            <h4 style={{color:'black'}}>Reach out to me on call or Whatsapp using +2348032205968
                            <br/> Email: okeke.michael1995@gmail.com <br/>Twitter: mic_lasborne
                            <br/> Github: github.com/lasborne <br/> Discord username: lasborne#3065
                            <br/> Reach out for your gigs, freelance jobs and assistance (I'll be glad to be of help and add value)
                            </h4>
                            {/*<Footer onLoad='about'/>*/}
                            <Link to='/' className='contact-class'>Go back</Link>
                        </>
                    )} />
                </Switch>
                
            </div>
        </Router>
    )
}
export default App