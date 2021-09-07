import React from 'react';
import {Link} from 'react-router-dom';
import '../css/Button.css'

const Button = ({text, link}) => {
    return (
        <div className = 'container'>
            <Link to = {`${link}`} className = 'link'>
                <button className = 'btn'>{text}</button>
            </Link>
        </div>
    )
}

export default Button
