import React from 'react';
import Hero from '../components/Hero';
import Yellow from '../components/Yellow';
import Review from '../components/Review';
import RED from '../components/RED';
import Perks from '../components/Perks';
import '../css/App.css';


const HomePage = () => {
    return (
        <div>
            <main>
                <Hero/>
                <RED/>
                <Yellow/>
                <Perks/>
                <Review/>
            </main>
        </div>
    )
}

export default HomePage
