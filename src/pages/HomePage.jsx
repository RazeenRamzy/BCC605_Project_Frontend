import React, { Component, Fragment } from 'react'
import Slider from '../components/home/Slider'
import Menu from '../components/menu/Menu'
import Main from '../components/home/Main'
import Footer from '../components/footer/Footer'
import HowItsWork from '../components/home/HowItsWork'
import WhyMlibrarian from '../components/home/WhyMlibrarian'
import BlogPost from '../components/home/BlogPost'
import MLRecommendation from '../components/home/MLRecommendation'

class HomePage extends Component {
  render() {
    return (
      <Fragment>

        <Menu />
        <Slider />
        <Main />

      <HowItsWork />

      <div id="blog">
          <BlogPost />
        </div>

<MLRecommendation />
      <WhyMlibrarian />

        <Footer />
      </Fragment>
    )
  }
}

export default HomePage
