import React from 'react';
import '../css/Payment.css';
import LiquidButton from '../components/LiquidButton';

const Payment = () => {
    return (
        <div className = 'container'>
            <h1>Payment</h1>
            <div className = 'content'>
                <form autocomplete='off' disabled>
                    <div className = "plan-details">
                        <input type = "radio" name = "plan" id = "dot-1"/>
                        <input type = "radio" name = "plan" id = "dot-2"/>
                        <input type = "radio" name = "plan" id = "dot-3"/>
                        <p>1. Select Your Plan</p>
                        <div class = "category">
                            <label for = "dot-1">
                                <span className = "dot one"></span>
                                <span className = "plan one">BASIC</span>
                            </label>
                            <label for = "dot-2">
                                <span className = "dot two"></span>
                                <span className = "plan two">ADVANCED</span>
                            </label>
                            <label for = "dot-3">
                                <span className = "dot three"></span>
                                <span className = "plan three">PRO</span>
                            </label>
                        </div>
                    </div>

                    <br />
                    <div className = 'user-details'>
                        <div className = 'grid'>
                            <p>2. Billing Information</p>
                            <div className = 'inputs'>
                                <div className = 'input-box'>
                                    <label>FULL NAME</label>
                                    <input type="text" name = 'name'/>
                                </div>
                                <div className = 'input-box'>
                                    <label>BILLING ADRESS</label>
                                    <input type="text" name = 'address'/>
                                </div>
                                <div className = 'input-box'>
                                    <label>CITY</label>
                                    <input type="text" name = 'city'/>
                                </div>
                                <div className = 'input-box'>
                                    <label>POSTAL CODE</label>
                                    <input type="text" name = 'postcode'/>
                                </div>
                                <div className = 'input-box'>
                                    <label>COUNTRY</label>
                                    <select name="country">
                                        <option value="" selected hidden></option>
                                        <option value="Canada">Canada</option>
                                        <option value="USA">United State</option>
                                        <option value="UK">United Kingdom</option>
                                        <option value="Australia">Australia</option>
                                    </select>
                                </div>
                            </div>  
                        </div>

                        <div className = 'grid'>
                            <p>3. Credit Card Information</p>
                            <div className = 'inputs'>
                                <div className = 'input-box'>
                                    <label>CARDHOLDER'S NAME</label>
                                    <input type="text" name = 'card-name'/>
                                </div>
                                <div className = 'input-box'>
                                    <label>CARD NUMBER</label>
                                    <input type="text" name = 'card-number'/>
                                </div>
                                <div className = 'input-box'>
                                    <label>EXPIRY MONTH</label>
                                    <select name="month">
                                        <option value="" selected hidden></option>
                                        <option value="January">January</option>
                                        <option value="February">February</option>
                                        <option value="March">March</option>
                                        <option value="April">April</option>
                                        <option value="May">May</option>
                                        <option value="June">June</option>
                                        <option value="July">July</option>
                                        <option value="August">August</option>
                                        <option value="September">September</option>
                                        <option value="October">October</option>
                                        <option value="November">November</option>
                                        <option value="December">December</option>
                                    </select>
                                </div>
                                <div className = 'input-box'>
                                    <label>EXPIRY YEAR</label>
                                    <select name="year">
                                        <option value="" selected hidden></option>
                                        <option value="2021">2021</option>
                                        <option value="2022">2022</option>
                                        <option value="2023">2023</option>
                                        <option value="2024">2024</option>
                                        <option value="2025">2025</option>
                                        <option value="2026">2026</option>
                                        <option value="2027">2027</option>
                                        <option value="2028">2028</option>
                                        <option value="2029">2029</option>
                                        <option value="2030">2030</option>
                                    </select>
                                </div>
                                <div className = 'input-box'>
                                    <label>CVV</label>
                                    <input type="text" name = 'cvv'/>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <br />
                    
                    <div>
                        <p>By continuing, I acknowledge that I've read and agree to the <a> Terms of Service </a> & <a> Privacy Policy </a>.</p>
                    </div>

                    <div>
                        <LiquidButton type = 'submit' text = 'DOWNLOAD' link = '#'/>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default Payment
