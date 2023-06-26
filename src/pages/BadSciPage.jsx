import React, { Component, Fragment } from 'react'
import Menu from '../components/menu/Menu'
import Footer from '../components/footer/Footer'
import BadSci from '../components/fullpackages/BadSci'

class BadSciPage extends Component {
  render() {
    return (
      <Fragment>
     <Menu />
     <div style={{ marginTop: '70px', position: 'relative' }}>
          <BadSci /> 
        </div>

      <Footer />
      </Fragment>

      
    )
  }
}

export default BadSciPage;