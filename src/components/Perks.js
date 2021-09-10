import React from 'react';
import LiquidButton from './LiquidButton';
import Navbar from './Navbar';
import '../css/Perks.css';


const Perks = () => {
    return (
        <div className = 'perk-container'>
            <Navbar/>
            <div className = 'perk-btn'>
                <LiquidButton text = 'TRY IT NOW' link = '/pricing'/>
            </div>

            
            <div className = 'perk-content-container'>
                <h1 className = 'perk-title'>Perks</h1>
            
                <div className = 'grid-container'>
                    <div className = 'grid-item-1'>
                        <div className = 'line background-1'></div>
                        <h2>Subscription</h2>
                        <h2>Payment</h2>
                        <h2>Model</h2>
                        <p className = 'description'>No commitment, cancel anytime. Never worry about forgetting a payment again!</p>
                    </div>

                    <div className = 'grid-item-2'>
                        <div className = 'line background-2'></div>
                        <h2>No Fee</h2>
                        <h2>Cancelation</h2>
                        <h2>Policy</h2>
                        <p className = 'description'>No commitment, cancel anytime. Never worry about forgetting a payment again!</p>
                    </div>

                    <div className = 'grid-item-3'>
                        <div className = 'line background-3'></div>
                        <h2>Subscription</h2>
                        <h2>Payment</h2>
                        <h2>Model</h2>
                        <p className = 'description'>No commitment, cancel anytime. Never worry about forgetting a payment again!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Perks
