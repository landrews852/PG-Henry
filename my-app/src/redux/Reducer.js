import { GET_PRODUCTS, GET_PEDIDOS, POST_PRODUCTS } from '../redux/types';

const initialState = {
  productos: [],
  allProductos: [],
  pedidos: []
};

function rootReducer(state = initialState, { type, payload }) {
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

    case POST_PRODUCTS:
      return {
        ...state
      }

    default:
      return state;
  }
}

export default rootReducer;