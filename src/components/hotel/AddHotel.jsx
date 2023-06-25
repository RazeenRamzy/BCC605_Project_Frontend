import React, { Component, Fragment } from 'react'
import Menu from '../components/menu/Menu'
import Footer from '../components/footer/Footer'


export class AddHotel extends Component {
  render() {
    return (
      <Fragment>
        
        <Menu />

          <div style={{ marginTop: '70px', position: 'relative' }}>
          <HotelsPage />
          </div>
          <Footer />
          </Fragment>
)
}
}
        
     


export default AddHotel
