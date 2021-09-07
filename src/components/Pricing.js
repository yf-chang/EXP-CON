import React from 'react';
import '../css/Pricing.css';
import {Link} from 'react-router-dom';

const Pricing = () => {
    return (
        <div>
            <h1>Pricing</h1>
            <p>Test out our app today! Choose from three subscription.</p>
            <p>Based payment models</p>
            <div className = 'grid-container'>
                <div className = 'grid-item-1'>
                    <h2>BASIC</h2>
                    <div className = 'line background-1'></div>
                    <h2>MONTHLY</h2>
                    <h3>$9</h3>
                    <ul>
                        <li>Very good</li>
                        <li>Amazing</li>
                        <li>Perfect job</li>
                        <li>Love this</li>
                        <li>It's so good</li>
                        <li>Features</li>
                    </ul>
                    <Link to="/payment"> 
                        <button className = 'background-1 button'>
                            <span>Select</span>
                        </button>
                    </Link>
                </div>

                <div className = 'grid-item-2'>
                    <h2>ADVANCED</h2>
                    <div className = 'line background-2'></div>
                    <h2>YEARLY</h2>
                    <h3>$99</h3>
                    <ul>
                        <li>Very very good</li>
                        <li>Even amazing</li>
                        <li>Perfect job</li>
                        <li>Love this more</li>
                        <li>It's so so good</li>
                        <li>More features</li>
                    </ul>
                    <Link to="/payment"> 
                        <button className = 'background-2 button'>
                            <span>Select</span>
                        </button>
                    </Link>
                </div>

                <div className = 'grid-item-3'>
                    <h2>PRO</h2>
                    <div className = 'line background-3'></div>
                    <h2>YEARLY</h2>
                    <h3>$120</h3>
                    <ul>
                        <li>Very very good</li>
                        <li>Even amazing</li>
                        <li>Perfect job</li>
                        <li>Love this more</li>
                        <li>It's so so good</li>
                        <li>More features</li>
                    </ul>
                    <Link to="/payment"> 
                        <button className = 'background-3 button'>
                            <span>Select</span>
                        </button>
                    </Link>
                    
                </div>

            </div>
        </div>
    )
}

export default Pricing
