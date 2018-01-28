import React from 'react'
import PropTypes from 'prop-types'
import ReactTable from 'react-table'
import 'react-table/react-table.css'


export const NBPTable = (props) => {

  const columns = [{
    Header: 'name',
    accessor: 'currency',
  }, {
    Header: 'code',
    accessor: 'code'
  }, {
    Header: 'mid',
    accessor: 'mid'
  }]


  return (
      <ReactTable
          data={props.data}
          columns={columns}
          showPagination={false}
          sortable={false}
          multiSort={false}
          resizable={false}
          filterable={false}
          getTdProps={(state, rowInfo) => {
            return {
              onClick: () => {
                  props.addToFavoritesFunc(rowInfo.original);
              }
            }
          }}
      />
  )
}

NBPTable.propTypes = {
  data: PropTypes.arrayOf(
      PropTypes.shape({
        currency: PropTypes.string,
        code: PropTypes.string,
        mid: PropTypes.number
      })
  ).isRequired,
  addToFavoritesFunc: PropTypes.func.isRequired
}

NBPTable.defaultProps = {
  data: [{
    currency: 'name',
    code: 'NM',
    mid: 0.33
  }]
}