import React, { Component, Fragment } from 'react';
import Slider from "react-slick";
import { Container, Row } from 'react-bootstrap';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import invaluable from '../../asset/images/invaluable.jpeg';
import depBook from '../../asset/images/depBook.jpeg';
import educated from '../../asset/images/educated.jpeg';
import TMbook from '../../asset/images/TMbook.jpeg';
import eduBook from '../../asset/images/eduBook.jpeg';
import mathBook from '../../asset/images/mathBook.jpeg';
import lawyerBook from '../../asset/images/lawyerBook.jpeg';
import mindBook from '../../asset/images/mindBook.jpeg';
import schooBook from '../../asset/images/schooBook.jpeg';
import '../../asset/css/custom-styles.css'

class Countries extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 7, 
            slidesToScroll: 1,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 2000,
            cssEase: "linear"
        }; 
        return (
            <Fragment>
                <div style={{ marginBottom: '20px' }}>
                    <hr className="line" />
                    <h2 className="text-center custom-heading"><span> MLibrarian</span> Recommendation</h2>

                    <Container fluid={true}>
                        <Row>
                            <Slider {...settings}>
                                <div>
                                    <img src={invaluable} alt="invaluable" style={{ width: '180px', height: '250px' }}></img>
                                </div>
                                <div>
                                    <img src={depBook} alt="depBook" style={{ width: '180px', height: '250px' }}></img>
                                </div>
                                <div>
                                    <img src={TMbook} alt="TMbook" style={{ width: '180px', height: '250px' }}></img>
                                </div>
                                <div>
                                    <img src={eduBook} alt="eduBook" style={{ width: '180px', height: '250px' }}></img>
                                </div>
                                <div>
                                    <img src={mathBook} alt="mathBook" style={{ width: '180px', height: '250px' }}></img>
                                </div>
                                <div>
                                    <img src={educated} alt="educated" style={{ width: '180px', height: '250px' }}></img>
                                </div>
                                <div>
                                    <img src={lawyerBook} alt="lawyerBook" style={{ width: '180px', height: '250px' }}></img>
                                </div>
                                <div>
                                    <img src={mindBook} alt="mindBook" style={{ width: '180px', height: '250px' }} />
                                </div>
                                
                                <div>
                                    <img src={schooBook} alt="schooBook" style={{ width: '180px', height: '250px' }} />
                                </div>
                            </Slider>
                        </Row>
                    </Container>
                </div>
            </Fragment>
        );
    }
}

export default Countries;
