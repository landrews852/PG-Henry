import {GET_PRODUCTS, GET_PEDIDOS, GET_CATEGORIES} from '../redux/types';

const initialState = {
  productos : [],
  allProductos: [],
  pedidos: [],
  categories: [],
};

function rootReducer(state = initialState, {type, payload}) {
  switch (type) {
    case GET_PEDIDOS:
      return {
        ...state,
        pedidos: payload
      };

    case GET_PRODUCTS:
      return {
        ...state,
        productos: payload,
        allProductos: payload
      };
    
    case GET_CATEGORIES:
    // console.log('GET_CATEGORIES', action.payload);
      const categories = action.payload.map(e => e.category).flat()
      const categoriesUnique = [...new Set(categories)]
        return {
          ...state,
          categories: categoriesUnique,
        };
    
    default:
      return state;
  }
}

export default rootReducer;