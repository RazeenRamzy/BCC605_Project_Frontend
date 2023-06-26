import React, { Component, Fragment } from 'react'
import Menu from '../components/menu/Menu'
import Footer from '../components/footer/Footer'
import CCode from '../components/fullpackages/CCode'

class CCodePage extends Component {
  render() {
    return (
      <Fragment>
     <Menu />
     <div style={{ marginTop: '70px', position: 'relative' }}>
          <CCode /> 
        </div>

      <Footer />
      </Fragment>

      
    )
  }
}

export default CCodePage;