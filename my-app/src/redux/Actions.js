import axios from 'axios';
import {GET_PRODUCTS, FILTER_BY_CATEGORY} from './types';

export function getProducts(){
    return async function(dispatch){
        const products = await axios.get('http://localhost:3001/products');
        return dispatch({
            type: GET_PRODUCTS,
            payload: products.data
        });
    }
};
/*
export function filterCakesByCategory(payload){
    console.log(payload)
    return {
        type: FILTER_BY_CATEGORY,
        payload
    }
}*/