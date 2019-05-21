import React, { Component } from 'react'
import { AgGridReact } from 'ag-grid-react'
import { graphql } from 'react-apollo'
import { GET_ALL_COMPANY } from '../../../graphql/company.query'
import StatusRender from './StatusRender'
import AddModal from '../../Modal/AddModal'

class DataList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      columnDefs: [{
        headerName: 'Name', field: 'name', sortable: true, filter: true
      }, {
        headerName: 'Address', field: 'address', sortable: true, filter: true
      }, {
        headerName: 'Phone', field: 'phone', filter: true
      }, {
        headerName: 'Email', field: 'email', filter: true
      }, {
        headerName: 'Skype', field: 'skype', filter: true
      }, {
        headerName: 'Note', field: 'note', filter: true, editable: true
      }, {
        headerName: 'Status', field: 'status', filter: true, cellRenderer: 'statusRenderer'
      }],
      frameworkComponents: {
        statusRenderer: StatusRender
      }
    }
  }
  render () {
    return (
      <div>
        <div style={{ marginBottom: '15px' }}>
          <AddModal />
        </div>
        <div className='ag-theme-balham' style={{ height: '500px', width: '100%' }}>
          <AgGridReact
            columnDefs={this.state.columnDefs}
            rowData={this.props.data.companies}
            frameworkComponents={this.state.frameworkComponents}
            pagination='true'
            floatingFilter='true'
          />
        </div>
      </div>
    )
  }
}
export default graphql(GET_ALL_COMPANY)(DataList)
