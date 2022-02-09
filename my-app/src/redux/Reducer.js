import {GET_PRODUCTS, GET_PEDIDOS, GET_CATEGORIES, FILTER_BY_CATEGORIES} from '../redux/types';

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
      console.log('GET_PRODUCTS', payload);
      return {
        ...state,
        productos: payload,
        allProductos: payload
      };
    
    case GET_CATEGORIES:
    // console.log('GET_CATEGORIES', action.payload);
      const categories = payload.map(e => e.category).flat()
      const categoriesUnique = [...new Set(categories)]

      return {
        ...state,
        categories: categoriesUnique,
      };
    
    case FILTER_BY_CATEGORIES:
      const filtered = state.allProductos
      // const allProductos = state.productos;
      const categoriesFilter =
        payload === "All"
          ? filtered
          : filtered.filter( 
              (fl) =>
              // products.category === payload
              fl.category.includes(payload)
              );
        console.log(categoriesFilter)
              
      return {
        ...state,
        productos: categoriesFilter,
      };

    default:
      return state;
  }
}

export default rootReducer;