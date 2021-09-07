import React, {useState} from 'react';
import {FaBars} from 'react-icons/fa';
import {AiOutlineClose} from 'react-icons/ai';
import {Link} from 'react-router-dom';

const Menu = () => {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    return (
        <>
            <div>
                <Link to='#' className = 'menu-bars'>
                    <FaBars onClick={showSidebar}/>
                </Link>
            </div>
            <nav className = {sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className = 'nav-menu-items' onClick={showSidebar}>
                    <li className = 'navbar-toggle'>
                        <Link to='#' className='menu-close'>
                            <AiOutlineClose className = 'close-button'/>
                        </Link>
                    </li>
                    <li className = 'nav-text'>
                        <Link to="/about">WHAT IS IT</Link>
                    </li>
                    <li className = 'nav-text'>
                        <Link to="/perks">PERKS</Link>
                    </li>
                    <li className = 'nav-text'>
                        <Link to="/pricing">PRICING</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Menu;
