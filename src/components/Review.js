import React from 'react';
import { FaStar, FaStarHalf } from "react-icons/fa";
import '../css/Review.css';
import Navbar from './Navbar';
import HoverButton from './HoverButton';


const Review = () => {
    return (
        <div className = 'review-container'> 
            <Navbar/>
            <div className = 'btn-container-1'>
                <HoverButton text = 'TRY IT NOW' link = '/pricing' color = 'lightblue'/>
            </div>
            <div className = 'review-title'>
                <h1>REVIEWS</h1>
            </div>
            <div className = 'review-grid'>
                <div className = 'review-item'>
                    <div className = 'rating'>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                    </div>
                    <h4>ARTIST</h4>
                    <p>"Love it, it's the best. I can't live without it!"</p>
                </div>
                <div className = 'review-item'>
                    <div className = 'rating'>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStarHalf/>
                    </div>
                    <h4>PRODUCER</h4>
                    <p>"Love it, it's the best. I can't live without it!"</p>
                </div>
                <div className = 'review-item'>
                    <div className = 'rating'>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                    </div>
                    <h4>MUSIC FAN</h4>
                    <p>"Love it, it's the best. I can't live without it!"</p>
                </div>
                <div className = 'review-item'>
                    <div className = 'rating'>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                    </div>
                    <h4>FILM MAKER</h4>
                    <p>"Love it, it's the best. I can't live without it!"</p>
                </div>
            </div>
        </div>
    )
}

export default Review
