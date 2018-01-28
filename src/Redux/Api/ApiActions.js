import * as actionTypes from './ApiActionTypes'

export const fetchNBPData = () => dispatch => {
  fetch('http://api.nbp.pl/api/exchangerates/tables/a/?format=json').then(
      (response) => {
        dispatch({type: actionTypes.GET_NBP_CURRENCIES_BEGIN})
        return response.json()
      }
  ).then(
      (currenciesData) => {
        dispatch({type: actionTypes.GET_NBP_CURRENCIES_SUCCESS, currencies: currenciesData})
      }
  ).catch(
      (errorFetching) => {
        dispatch({type: actionTypes.GET_NBP_CURRENCIES_FAILURE})
        console.log('failed to fetch: ', errorFetching)
      }
  )
}
