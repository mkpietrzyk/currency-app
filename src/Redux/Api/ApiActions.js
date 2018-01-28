import actionTypes from './ApiActionTypes'

export const fetchNBPData = () => dispatch => {
  fetch('http://localhost:1337/epg').then(
      (response) => {
        return response.json()
      }
  ).then(
      (serverData) => {
        dispatch({type: GET_EPG_DATA_BEGIN})
        dispatch({type: GET_EPG_DATA, epgChannelsData: serverData})
        dispatch({type: GET_EPG_DATA_END})
      }
  ).catch(
      (errorFetching) => {
        console.log('failed to fetch: ', errorFetching)
      }
  )
}