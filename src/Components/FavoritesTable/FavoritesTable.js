import React from 'react'
import PropTypes from 'prop-types'
import ReactTable from 'react-table'
import 'react-table/react-table.css'


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
    Header: 'action',
    accessor: null,
    Cell: <span>delete</span>
  }]


  return (
      <ReactTable
          data={props.data}
          columns={columns}
          minRows={0}
          showPagination={false}
          sortable={false}
          multiSort={false}
          resizable={false}
          filterable={false}
          getTdProps={(state, rowInfo, column) => {
            return {
              onClick: () => {
                if (column.id === 'delete') {
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