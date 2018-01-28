import React from 'react'
import Select from 'react-select'

import {connect} from 'react-redux'
import {fetchNBPData} from '../Redux/Api/ApiActions'
import {addToFavorites, removeFromFavorites} from "../Redux/App/AppActions";

const mapStateToProps = state => ({
  currenciesArray: state.api.currencies,
  favorites: state.app.favorites,
})

const mapDispatchToProps = dispatch => ({
  fetchNBPData: () => dispatch(fetchNBPData()),
  addToFavorites: (item) => dispatch(addToFavorites(item)),
  removeFromFavorites: (item) => dispatch(removeFromFavorites(item))
})


class DashboardView extends React.Component {

  componentDidMount() {
    this.props.fetchNBPData();
  }

  _addToFavorites = (currency) =>{
    console.log('selected, ' + currency);
    this.props.addToFavorites(currency);
  }

  _deletrFromFavorites = (currency) =>{
    this.props.removeFromFavorites(currency);
  }

  render() {
    if (this.props.currenciesArray === null) {
      return (
          <div>
            <h1>loading</h1>
          </div>
      )
    } else {
      console.log(this.props.currenciesArray);
      return (
          <div>
            <ul>
              {this.props.currenciesArray.map(currency => {
                return (
                    <li key={currency.code} onClick={() => this._addToFavorites(currency)}>{currency.currency}</li>
                )
              })}
            </ul>
            <ul>
              {this.props.favorites.map(currency => {
                return (
                    <li key={currency.code} onClick={() => this._deletrFromFavorites(currency.code)}>{currency.currency}</li>
                )
              })}
            </ul>
          </div>
      )
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(DashboardView)
