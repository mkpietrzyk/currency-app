import * as actionTypes from './AppActionTypes';

const initialState = {
  selectedCurrency: {},
  currencyToRemove: {},
  favorites: [],
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case actionTypes.ADD_CURRENCY_TO_FAVORITES:
      return {
        ...state,
        selectedCurrency: action.selectedCurrency,
        favorites: state.favorites.concat(action.selectedCurrency)
      }
    case actionTypes.DELETE_CURRENCY_FROM_FAVORITES:
      return {
          ...state,
        currencyToRemove: action.currencyToRemove,
        favorites: state.favorites.filter(item => item !== action.currencyToRemove)
      }

    case actionTypes.FLUSH_FAVORITES:
      return {
        ...state,
        favorites: []
      }


    default:
      return state
  }
}
