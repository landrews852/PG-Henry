import axios from 'axios';
import {GET_PRODUCTS, GET_CATEGORIES, FILTER_BY_CATEGORIES} from './types';

export function getProducts(){
    return async function(dispatch){
        const products = await axios.get('http://localhost:3001/products');
        return dispatch({
            type: GET_PRODUCTS,
            payload: products.data
        });
    }
};

export function getCategories() {
  return async function (dispatch) {
    var json = await axios.get('http://localhost:3001/products');

    dispatch({
      type: GET_CATEGORIES,
      payload: json.data,
    });
  };
}

export function filterByCategories(payload) {
  return {
    type: FILTER_BY_CATEGORIES,
    payload,
  };
}