import axios from 'axios';
import {GET_PRODUCTS } from './types';

export function getProducts(){
    return async function(dispatch){
        const products = await axios.get('http://localhost:3001/products');
        return dispatch({
            type: GET_PRODUCTS,
            payload: products.data
        });
    }
};

export function postProducts(payload) {
    return async function (dispatch) {
        const response = await axios.post('http://localhost:3001/create', payload);
        return response;
    }
};
