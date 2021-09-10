import React from 'react';
import {Link} from 'react-router-dom';
import '../css/LiquidButton.css'

const LiquidButton = ({text, link}) => {
    return (
        <div className = 'liquid-container'>
            <Link to = {`${link}`} className = 'link'>
                <button className = 'liquid-button'>{text}</button>
            </Link>
        </div>
    )
}

export default LiquidButton
