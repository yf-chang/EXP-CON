import React from 'react';
import Navbar from './Navbar';
import '../css/GetNow.css';
import LiquidButton from './LiquidButton';

const GetNow = () => {
    return (
        <div className = 'getnow-container'>
            <Navbar/>
            <div className = 'getnow-content-container'>
                <h1 className = 'red-title'>GET EXP|CON NOW</h1>
                <p>Purchase and download the app.</p>
                <div className = 'getnow-btn'>
                    <LiquidButton text = 'TRT IT NOW' link = '/pricing'/>
                </div>
            </div>
        </div>
    )
}

export default GetNow
