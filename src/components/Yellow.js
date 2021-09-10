import React from 'react';
import '../css/Yellow.css';
import LiquidButton from './LiquidButton';
import Navbar from './Navbar';
import HoverButton from './HoverButton';

const Yellow = () => {
    return (
        <div className = 'yellow-container'>
            <Navbar/>
            <div className = 'btn-container1'>
                <HoverButton text = 'TRY IT NOW' link = '/pricing' color = 'orange'/>
            </div>

            <h1>Front Row Seat</h1>
            <p>Experience concerts up close and personal.</p>
            <div className = 'btn-container2'>
                <LiquidButton text = 'See Demo' link = '#'/>
            </div>
        </div>
    )
}

export default Yellow
