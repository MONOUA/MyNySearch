import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Route from './components/Route'
import Links from './components/Links'

function App() {

    const [darkTheme,setDarkTheme] =useState(false);

    return (
        <div className={darkTheme? 'dark' : ''}>
            <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
            <Links />
            <Footer />
        </div>
    )
}

export default App
