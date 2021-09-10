import React from 'react';
import LiquidButton from '../components/LiquidButton';
import '../css/Perk.css';

const PerksPage = () => {
    return (
        <div className = 'perk-container'>
            <h1>Front Row Seat</h1>
            <p>Experience concerts up close and personal.</p>
            <LiquidButton text = 'See Demo' link = '#'/>
        </div>
    )
}

export default PerksPage
