import React from 'react';
import Hero from '../components/Hero';
import Perk from '../components/Perk';
import Review from '../components/Review';
import RED from '../components/RED';
import '../css/App.css';


const HomePage = () => {
    return (
        <div>
            <main>
                <Hero/>
                <RED/>
                <Perk/>
                <Review/>
            </main>
        </div>
    )
}

export default HomePage
