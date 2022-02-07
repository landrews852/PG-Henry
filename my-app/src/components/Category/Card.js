import React from 'react';

export function Card({name, img}){
    return(
        <div>
            <h1>{name}</h1>
            <img src={img} alt='imageCard' width='250px' height='125px' />
        </div>
    )
};

export default Card;