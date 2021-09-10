import React from 'react';
import '../css/RED.css';
import Navbar from '../components/Navbar';
import HoverButton from './HoverButton';
import Speaker from './Speaker';




const RED = () => {
    return (
       
        <div className = 'red-container'>
            
            <Navbar/>
            <div className = 'btn-container-1'>
                <HoverButton text = 'TRY IT NOW' link = '/pricing' color = 'tomato'/>
            </div>
            <div className = 'red-content-container'>
               <div className = 'red-text-container'>
                    <h1>SUPERIOR SOUND</h1>
                    <p>Experience live versions of your favourite songs.</p>
                    <div className = 'btn-container-2'>
                        <HoverButton text = 'SEE DEMO' link = '#' color = 'tomato'/>
                    </div>
                </div>
                <div className = 'speaker-container'>
                    <Speaker/>
                </div> 
            </div>
        </div>
    )
}

export default RED
