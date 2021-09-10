import React from 'react'
import '../css/Footer.css';
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
    return (
        <div className = 'footer-container'>
            <div className = 'row1'>
                <HiOutlineMail/>
                support@experienceconcerts.co
            </div>
            <div className = 'footer-logo-container'>
                <h2 className = 'footer-logo'>EXP|CON</h2>
                {new Date().getFullYear()}&copy; All Rights Reserved | Speer Technologies Incorporated
            </div>
            
        </div>
    )
}

export default Footer
