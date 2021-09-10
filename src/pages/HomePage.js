import React from 'react';
import Hero from '../components/Hero';
import Yellow from '../components/Yellow';
import Review from '../components/Review';
import RED from '../components/RED';
import '../css/App.css';


const HomePage = () => {
    return (
        <div>
            <main>
                <Hero/>
                <RED/>
                <Yellow/>
                <Review/>
            </main>
        </div>
    )
}

export default HomePage
