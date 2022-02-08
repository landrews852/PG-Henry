import {GET_PRODUCTS, GET_PEDIDOS, FILTER_BY_CATEGORY} from '../redux/types';

const initialState = {
  productos : [],
  allProductos: [],
  pedidos: [],
  category: []
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
        
        /*case FILTER_BY_CATEGORY:
          const allProductos = state.allProductos    
          var categoryFiltered = []
            categoryFiltered = allProductos.filter(el => el.category === type.payload)
         
          return{
              ...state,
              category: categoryFiltered
          }*/
        

    default:
      return state;
  }
}

export default rootReducer;