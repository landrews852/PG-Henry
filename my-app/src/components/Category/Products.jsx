import React from 'react';
import Card from './Card';
import { useSelector} from 'react-redux';
import { Link } from 'react-router-dom';


export function Products(){
    const products = useSelector((state) => state.productos);
    console.log('products: ',products)

    return(
        <div>
            <h2>Under construction</h2>
            <Link to="/"><button>Back</button></Link>
           {
               products?.map(e => {
                return (
                
                <Card name={e.name} img={e.img} key={e.id_product} />
                
                )
            })
           }
        </div>
    )
};

export default Products;