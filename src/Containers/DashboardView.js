import React from 'react'
import PropTypes from 'prop-types'

import {connect} from 'react-redux'
import {fetchNBPData} from '../Redux/Api/ApiActions'
import {addToFavorites, removeFromFavorites, flushFavorites} from "../Redux/App/AppActions";
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
  removeFromFavorites: (item) => dispatch(removeFromFavorites(item)),
  flushFavorites: () => dispatch(flushFavorites())
})


class DashboardView extends React.Component {

  static propTypes = {
    fetchNBPData: PropTypes.func.isRequired,
    addToFavorites: PropTypes.func.isRequired,
    removeFromFavorites: PropTypes.func.isRequired,
    flushFavorites: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.fetchNBPData();
  }

  _addToFavorites = (currency) => {
    this.props.addToFavorites(currency);
  }

  _deleteFromFavorites = (currency) => {
    this.props.removeFromFavorites(currency);
  }

  _flushFavorites = () => {
    this.props.flushFavorites();
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
                <h2> NBP Currencies </h2>
                <NBPTable
                    data={this.props.currenciesArray}
                    addToFavoritesFunc={this._addToFavorites}
                />
              </div>
              <div className="table">
                <h2> Favourite Currencies </h2>
                <button className="warning" onClick={this._flushFavorites}> Flush all data </button>
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
