import React from 'react'
import PropTypes from 'prop-types'
import ReactTable from 'react-table'
import styles from 'react-table/react-table.css'



export const FavoritesTable = (props) => {

  const columns = [{
    Header: 'name',
    accessor: 'currency',
  }, {
    Header: 'code',
    accessor: 'code'
  }, {
    Header: 'mid',
    accessor: 'mid'
  }, {
    Header: 'delete',
    accessor: null,
  }]


  return (
      <ReactTable
          data={props.data}
          columns={columns}
      />
  )
}

FavoritesTable.propTypes = {
  data: PropTypes.arrayOf(
      PropTypes.shape({
        currency: PropTypes.string,
        code: PropTypes.string,
        mid: PropTypes.number
      })
  ).isRequired
}

FavoritesTable.defaultProps = {
  data: [{
    currency: 'name',
    code: 'NM',
    mid: 0.33
  }]
}