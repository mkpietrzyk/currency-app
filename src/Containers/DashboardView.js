import React from 'react'
import Select from 'react-select'

import {connect} from 'react-redux'
import {fetchNBPData, fetchNBPDataB} from '../Redux/Api/ApiActions'

const mapStateToProps = state => ({
  currenciesArray: state.api.currencies
})

const mapDispatchToProps = dispatch => ({
  fetchNBPData: () => dispatch(fetchNBPData()),
})


class DashboardView extends React.Component {

  componentDidMount() {
    this.props.fetchNBPData();
  }

  _handleSelect = (item) =>{
    console.log('selected, ' + item);
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
            <h2>lelele</h2>
            <ul>
              {this.props.currenciesArray.map(currency => {
                return (
                    <li key={currency.code} onClick={() => this._handleSelect(currency)}>{currency.currency}</li>
                )
              })}
            </ul>
          </div>
      )
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(DashboardView)
