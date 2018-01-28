import actionTypes from './ApiActionTypes'

export const fetchNBPData = () => dispatch => {
  fetch('http://localhost:1337/epg').then(
      (response) => {
        return response.json()
      }
  ).then(
      (serverData) => {
        console.log(serverData)

      }
  ).catch(
      (errorFetching) => {
        console.log('failed to fetch: ', errorFetching)
      }
  )
}