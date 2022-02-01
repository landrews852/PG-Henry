const initialState = {
  pedidos: []
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_PEDIDOS':
      return {
        ...state,
        pedidos: action.payload
      };
    
    default:
      return state;
  }
}

export default rootReducer;