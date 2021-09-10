import React from 'react';
import '../css/Yellow.css';
import LiquidButton from './LiquidButton';
import Navbar from './Navbar';
import HoverButton from './HoverButton';

const Yellow = () => {
    return (
        <div className = 'yellow-container'>
            <Navbar/>
            <div className = 'btn-container-1'>
                <HoverButton text = 'TRY IT NOW' link = '/pricing' color = 'orange'/>
            </div>

            <h1>Front Row Seat</h1>
            <p>Experience concerts up close and personal.</p>
            <LiquidButton text = 'See Demo' link = '#'/>
        </div>
    )
}

export default Yellow
