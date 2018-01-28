import React from 'react'
import {connect} from 'react-redux'
import {fetchNBPData,fetchNBPDataB} from '../Redux/Api/ApiActions'

const mapStateToProps = state => ({
  apiData: state.api
})

const mapDispatchToProps = dispatch => ({
  fetchNBPData: () => dispatch(fetchNBPData()),
})


class DashboardView extends React.Component {

  componentDidMount() {
    this.props.fetchNBPData();
  }

  render() {
    if (this.props.apiData === null) {
      return (
          <div>
            <h1>loading</h1>
          </div>
      )
    }

    return (
        <div>
          <h2>lelele</h2>
          <button>lelele</button>
        </div>
    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(DashboardView)
