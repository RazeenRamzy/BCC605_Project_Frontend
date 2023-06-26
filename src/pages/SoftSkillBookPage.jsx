import React, { Component, Fragment } from 'react'
import Menu from '../components/menu/Menu'
import Footer from '../components/footer/Footer'
import SoftSkillBook from '../components/fullpackages/SoftSkillBook'

class SoftSkillBookPage extends Component {
  render() {
    return (
      <Fragment>
     <Menu />
     <div style={{ marginTop: '70px', position: 'relative' }}>
          <SoftSkillBook /> 
        </div>

      <Footer />
      </Fragment>

      
    )
  }
}

export default SoftSkillBookPage;