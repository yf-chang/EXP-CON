import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import '../css/HoverButton.css'

const HoverButton = ({text, link, color}) => {
    // document.querySelector('.hover-button').onmousemove = function (e) {
    //     var x = e.pageX - e.target.offsetLeft;
    //     var y = e.pageY - e.target.offsetTop;
    //     e.target.style.setProperty('--x', x + 'px');
    //     e.target.style.setProperty('--y', y + 'px');
    //   };
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    let maskStyle = {};

    const MouseMove = (e) => {
        setX(e.pageX - e.target.offsetLeft);
        setY(e.pageY - e.target.offsetTop);
        // e.target.style.setProperty('--x', x + 'px');
        // e.target.style.setProperty('--y', y + 'px');
        maskStyle= {
        'hover-button':{
            '&::before':{
                'left':x+ 'px',
                'top':y+ 'px',
                'width':'400px',
                'height':'400px'
        }
        }
    }
    }

    

    return (
        <div className = 'hover-container'>
            <Link to = {`${link}`} className = 'hover-link'>
                <button className = 'hover-button' onMouseMove = {MouseMove} style = {maskStyle}>
                    <span style = {{color: `${color}`}}>{text}</span>
                </button>
            </Link>
        </div>
    )
}

export default HoverButton
