import React from 'react'

import {connect} from 'react-redux'
import {fetchNBPData} from '../Redux/Api/ApiActions'
import {addToFavorites, removeFromFavorites} from "../Redux/App/AppActions";
import {FavoritesTable} from "../Components/FavoritesTable/FavoritesTable";
import {NBPTable} from "../Components/NBPTable/NBPTable";

import './Styles/dashboardViewStyles.css'

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

  _addToFavorites = (currency) => {
    this.props.addToFavorites(currency);
  }

  _deleteFromFavorites = (currency) => {
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
          <div className="dashboardViewContainer">
            <h1> Simple Currency App </h1>
            <div className="tableContainer">
              <div className="table">
                <h2> NBP Values </h2>
                <NBPTable
                    data={this.props.currenciesArray}
                    addToFavoritesFunc={this._addToFavorites}
                />
              </div>
              <div className="table">
                <h2> Favourites </h2>
                <FavoritesTable
                    data={this.props.favorites}
                    deleteRowFunc={this._deleteFromFavorites}
                />
              </div>
            </div>
          </div>
      )
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(DashboardView)
