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
    id: 'delete',
    Header: 'delete',
    accessor: prop => prop,
    Cell: prop => <span onClick={() => props.deleteRowFunc(prop)}>delete</span>
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
          getTdProps={(state, rowInfo, column) => {
            return {
              onClick: () => {
                if (column.Header === 'delete') {
                  props.deleteRowFunc(rowInfo.original);
                }
              }
            }
          }}
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
  ).isRequired,
  deleteRowFunc: PropTypes.func.isRequired
}

FavoritesTable.defaultProps = {
  data: [{
    currency: 'name',
    code: 'NM',
    mid: 0.33
  }]
}