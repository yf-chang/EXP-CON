import React from 'react';
import '../css/Perk.css';
import LiquidButton from './LiquidButton';

const Perk = () => {
    return (
        <div className = 'perk-container'>
            <h1>Front Row Seat</h1>
            <p>Experience concerts up close and personal.</p>
            <LiquidButton text = 'See Demo' link = '#'/>
        </div>
    )
}

export default Perk
