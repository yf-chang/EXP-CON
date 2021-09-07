import React from 'react';
import Button from '../components/Button';
import '../css/Perk.css';

const PerksPage = () => {
    return (
        <div className = 'perk-container'>
            <h1>Front Row Seat</h1>
            <p>Experience concerts up close and personal.</p>
            <Button text = 'See Demo' link = '#'/>
        </div>
    )
}

export default PerksPage
