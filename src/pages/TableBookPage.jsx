import React, { Component, Fragment } from 'react'
import Menu from '../components/menu/Menu'
import Footer from '../components/footer/Footer'
import TableBook from '../components/fullpackages/TableBook'

class TableBookPage extends Component {
  render() {
    return (
      <Fragment>
     <Menu />
     <div style={{ marginTop: '70px', position: 'relative' }}>
          <TableBook /> 
        </div>

      <Footer />
      </Fragment>

      
    )
  }
}

export default TableBookPage;