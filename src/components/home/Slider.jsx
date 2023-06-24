import React, { Component, Fragment } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import imagefirst from '../../asset/images/Slide1.jpeg'
import imagesecond from '../../asset/images/Slide2.jpeg'
import imagethird from '../../asset/images/Slide3.jpeg'
import '../../asset/css/custom-styles.css';


class Slider extends Component {
  render() {
    return (
   <Fragment>
    
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imagefirst} 
          alt="Slide1"
          style={{ height: '700px' }}
        />
        <Carousel.Caption>
          <h3 style={{ color: 'white' }}>Reading is the key that unlocks the doors of imagination, and the BCAS MLibrarian holds the treasure trove.</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imagesecond}
          alt="Slide2"
          style={{ height: '700px' }}

        />

        <Carousel.Caption>
          <h3 style={{ color: 'white' }}>Reading is a passport to endless adventures, and the MLibrarian is your trusted guide in this remarkable journey.</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imagethird}
          alt="Slide3"
          style={{ height: '700px' }}
        />

        <Carousel.Caption>
          <h3 style={{ color: 'white' }}>Reading with the aid of MLibrarian, where technology meets literature, creates a harmonious symphony of learning and innovation.</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

   </Fragment>
    )
  }
}

export default Slider



//<p style={{ color: 'white' }} >Nulla vitae elit libero, a pharetra augue mollis interdum.</p>