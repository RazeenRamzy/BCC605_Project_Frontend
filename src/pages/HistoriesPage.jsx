import React, { Component, Fragment } from 'react'
import Menu from '../components/menu/Menu'
import Footer from '../components/footer/Footer'
import HistoriesBook from '../components/fullpackages/HistoriesBook'

class HistoriesPage extends Component {
  render() {
    return (
      <Fragment>
     <Menu />
     <div style={{ marginTop: '70px', position: 'relative' }}>
          <HistoriesBook /> 
        </div>

      <Footer />
      </Fragment>

      
    )
  }
}

export default HistoriesPage;