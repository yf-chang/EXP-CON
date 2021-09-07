import React from 'react';
import Hero from '../components/Hero';
import Perk from '../components/Perk';
import Review from '../components/Review';


const HomePage = () => {
    return (
        <div>
            <main>
                <Hero/>
                <Perk/>
                <Review/>
            </main>
        </div>
    )
}

export default HomePage
