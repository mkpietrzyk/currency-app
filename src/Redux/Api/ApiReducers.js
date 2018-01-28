import * as actionTypes from './ApiActionTypes';

const initialState = {
  currencies: null
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case actionTypes.GET_NBP_CURRENCIES_SUCCESS:
      return {
        ...state,
        currencies: action.currencies
      }


    default:
      return state
  }
}