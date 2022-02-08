import React from 'react';
import Card from './Card';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


export function Products() {
    const products = useSelector((state) => state.productos);
    console.log('products: ', products)

    return (
        <div>
            <h2>Under construction</h2>

            <div className='creacion'>
                <Link to='/create'><button>Create Products-Admin-</button></Link>
            </div>

            {
                products?.map(e => {
                    return (

                        <Card name={e.name} img={e.img} key={e.id_product} />

                    )
                })
            }

            <Link to="/"><button>Back</button></Link>
            
        </div>
    )
};

export default Products;