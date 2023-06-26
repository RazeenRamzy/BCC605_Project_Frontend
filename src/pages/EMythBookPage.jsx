import React, { Component, Fragment } from 'react'
import Menu from '../components/menu/Menu'
import Footer from '../components/footer/Footer'
import EMythBook from '../components/fullpackages/EMythBook'

class EMythBookPage extends Component {
  render() {
    return (
      <Fragment>
     <Menu />
     <div style={{ marginTop: '70px', position: 'relative' }}>
          <EMythBook /> 
        </div>

      <Footer />
      </Fragment>

      
    )
  }
}

export default EMythBookPage;