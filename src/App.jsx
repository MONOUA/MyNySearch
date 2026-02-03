import { useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Links from './components/Links'

function App() {

    const [darkTheme, setDarkTheme] = useState(true);
    const location = useLocation();
    const isHome = location.pathname === '/';

    return (
        <div className={darkTheme? 'dark' : ''}>
            <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 h-screen flex flex-col overflow-hidden">
                <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
                <div className="flex-grow overflow-y-auto">
                    {!isHome && <Links />}
                    <Outlet />
                    {isHome && <Links />}
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default App
