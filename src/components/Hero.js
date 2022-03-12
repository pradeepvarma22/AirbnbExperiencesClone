import React from 'react';
import ReactDOM from 'react-dom';
import Imagegrid from '../images/image-grid.png'
import './Hero.css'



export default function Hero() {
    return (
        <section>
            <p className='p-img'><img className='image-grid' src={Imagegrid} /></p>
            <h1 className='hero-header'>Online Experiences</h1>
            <p className="hero--text">Join unique interactive activities led by
                one-of-a-kind hosts—all without leaving home.</p>
        </section>
    );
}