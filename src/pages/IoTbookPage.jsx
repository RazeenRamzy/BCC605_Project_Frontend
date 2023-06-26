import React, { Component, Fragment } from 'react'
import Menu from '../components/menu/Menu'
import Footer from '../components/footer/Footer'
import IoTDataAnalyticsBook from '../components/fullpackages/IoTDataAnalyticsBook'

                                                       /* This is the Tour Page for Safari Tour */

class IoTbookPage extends Component {
  render() {
    return (
      <Fragment>
     <Menu />
     <div style={{ marginTop: '70px', position: 'relative' }}>
          <IoTDataAnalyticsBook /> 
        </div>

      <Footer />
      </Fragment>

      
    )
  }
}

export default IoTbookPage;
