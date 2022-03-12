import React from 'react';
import ReactDOM from 'react-dom';
import './card.css'

export default function Card(prop) {

    return (
        <div className='card'>
            <img src={`./images/${prop.coverImg}`} className='user-image' />
            <p className='card-title'><spam>{prop.title}</spam></p>
            <p className='all-items'>
                ⭐
                <spam>  ({prop.stats.reviewCount}). &nbsp; </spam>
                <spam>{prop.location}</spam>
            </p>
            <p className='card-tt'>From ${prop.price} / person</p>
        </div >
    );

}