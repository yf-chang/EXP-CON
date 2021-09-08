import React, {useState} from 'react';
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs';
import '../css/Hero.css';
import Button from './Button';

const Hero = () => {
    const [slides, setSlides] = useState(['https://images.unsplash.com/photo-1502872364588-894d7d6ddfab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80',
                                          'https://images.unsplash.com/photo-1627283879336-157467772e5e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
                                          'https://images.unsplash.com/photo-1620021372003-b8da5fa30ad6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
                                          'https://images.unsplash.com/photo-1594623930572-300a3011d9ae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
                                          'https://images.unsplash.com/photo-1589900759128-ec089c2cb976?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80']);

    const [slideIndex, setSlideIndex] = useState(1)
    const moveDot = index => {
        setSlideIndex(index)
    }

    return (
        <div className="slider-container">
            {slides.map((slide, index) => {
                return (
                    <div key={index} className={slideIndex === index + 1 ? "slide active-anim" : "slide"}>
                        <div className = 'gradient-overlay'>
                            <img src={slide} />
                        </div>
                        
                    </div>
                )
            })}
            <div className="dots-container">
                {Array.from({length: 5}).map((item, index) => (
                    <div onClick={() => moveDot(index + 1)} className={slideIndex === index + 1 ? "dot active" : "dot"}></div>
                ))}
            </div>
            <div className = 'content-container'>
                <h1 className = 'title'>INTERACTIVE CONCERT EXPERIENCE</h1>
                <p className = 'text'>Experience your favourite artists like never before and from the comfort of your own home</p>
                <div className = 'btn-container'>
                    <Button text='Try It Now' link = '/pricing'/>
                </div>
            </div>
        </div>
    )
}

export default Hero
