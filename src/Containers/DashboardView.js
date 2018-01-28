import React from 'react'

import {connect} from 'react-redux'
import {fetchNBPData} from '../Redux/Api/ApiActions'
import {addToFavorites, removeFromFavorites} from "../Redux/App/AppActions";
import {FavoritesTable} from "../Components/FavoritesTable/FavoritesTable";

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
      return (
          <div>
            <ul>
              {this.props.currenciesArray.map(currency => {
                return (
                    <li key={currency.code} onClick={() => this._addToFavorites(currency)}>{currency.currency} {currency.code} {currency.mid}</li>
                )
              })}
            </ul>
            <ul>
              {this.props.favorites.map(currency => {
                return (
                    <li key={currency.code} onClick={() => this._deletrFromFavorites(currency)}>{currency.currency} {currency.code} {currency.mid}</li>
                )
              })}
            </ul>
            <FavoritesTable data={this.props.favorites}/>
          </div>
      )
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(DashboardView)
