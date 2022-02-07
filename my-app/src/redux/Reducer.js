import {GET_PRODUCTS, GET_PEDIDOS} from '../redux/types';

const initialState = {
  productos : [],
  allProductos: [],
  pedidos: []
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
    
    default:
      return state;
  }
}

export default rootReducer;