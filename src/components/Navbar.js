import React from 'react';
import Menu from './Menu';
import Logo from './Logo';
import '../css/Navbar.css'

const Navbar = () => {
    
    return (
        <div className = 'navbar'>
            <Menu/>
            <Logo/>
        </div>
    )
}

export default Navbar
