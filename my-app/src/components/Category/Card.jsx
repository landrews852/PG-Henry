import React from 'react';
import "./Card.css"

export function Card({id_product, name, img, category}){
    return(
        <div className='card'>
            <img src={img} alt='imgCard' width='250px' height='125px' />
            <h1>{name}</h1>
            <h3>{category}</h3>
        </div>
    )
};

export default Card;