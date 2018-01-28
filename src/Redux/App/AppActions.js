import * as actionTypes from './AppActionTypes'

export const addToFavorites = (item) => dispatch => {
  dispatch({type: actionTypes.ADD_CURRENCY_TO_FAVORITES, selectedCurrency: item})
}

export const removeFromFavorites = (item) => dispatch => {
  dispatch({type: actionTypes.DELETE_CURRENCY_FROM_FAVORITES, currencyToRemove: item})
}

export const flushFavorited = () => dispatch => {
  dispatch({type: actionTypes.FLUSH_FAVORITES})
}


