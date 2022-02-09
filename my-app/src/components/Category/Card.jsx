import React from 'react';
import { Link } from 'react-router-dom';

export function Card({id_product, name, img}){
    const id = id_product
    return(
        <Link to="/${id_product}" className="card">
        <div>
            <h1>{name}</h1>
            <img src={img} alt='imageCard' width='250px' height='125px' />
        </div>
        </Link>
    )
};

export default Card;