import React, { Component, Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'
import HomePage from '../pages/HomePage'
import Contact from '../components/contact/Contact'
import IoTbookPage from '../pages/IoTbookPage'
import CCodePage from '../pages/CCodePage'
import HistoriesPage from '../pages/HistoriesPage'
import SubscriberPage from '../pages/SubscriberPage'
import FaqPage from '../pages/FaqPage'
import AllBookingDetailsPage from '../pages/AllBookingDetailsPage'
import ContactPage from '../pages/ContactPage'
import AboutUsPage from '../pages/AboutUsPage'
import HowToPurchasePage from '../pages/HowToPurchasePage'
import PrivacyPolicyPage from '../pages/PrivacyPolicyPage'
import RefundPolicyPage from '../pages/RefundPolicyPage'
import BookingDetailsEditPage from '../pages/BookingDetailsEditPage'
import BadSciPage from '../pages/BadSciPage'
import HoneymoonTourPage from '../pages/HoneymoonTourPage'
import JaffnaTourPage from '../pages/JaffnaTourPage'
import ColomboTourPage from '../pages/ColomboTourPage'
import KandyTourPage from '../pages/KandyTourPage'
import BlogPopularPage from '../pages/BlogPopularPage'
import BlogBeachPage from '../pages/BlogBeachPage'
import BlogEllaPage from '../pages/BlogEllaPage'
import BlogGalleFortPage from '../pages/BlogGalleFortPage'
import HotelsPage from '../pages/HotelsPage'


class AppRoute extends Component {
  render() {
    return (
      <Fragment>

        <Routes>
          <Route exact path="/" element={<HomePage />} />
        <Route exact path="/" element={<LoginPage />} />
            

            <Route exact path="/contact" element={<ContactPage />} />
            {/* <Route exact path="/tourpackages" element={< TourPage/>} /> */}

            <Route exact path="/contact" element={< Contact/>} />
            <Route exact path="/SafariTour" element={< IoTbookPage/>} />

            <Route exact path="/login" element={< LoginPage/>} />
            <Route exact path="/subscriber" element={< SubscriberPage/>} />
            <Route exact path="/faq" element={< FaqPage/>} />
            <Route exact path="/admin/bookingdetails" element={<AllBookingDetailsPage/>} />
            <Route exact path="/about-us" element={<AboutUsPage/>} />
            <Route exact path="/HowToPurchase" element={<HowToPurchasePage/>} />
            <Route exact path="/PrivacyPolicy" element={<PrivacyPolicyPage/>} />
            <Route exact path="/RefundPolicy" element={<RefundPolicyPage/>} />

            <Route exact path='/editbooking/:id' element={<BookingDetailsEditPage/>} />

            <Route exact path="/hotels" element={<HotelsPage/>} />










            <Route exact path="/Popular" element={< CCodePage/>} />
            <Route exact path="/FamilyTrip" element={< BadSciPage/>} />
            <Route exact path="/Discover" element={< HistoriesPage/>} />
            <Route exact path="/Honeymoon" element={< HoneymoonTourPage/>} />
            <Route exact path="/JaffnaTour" element={< JaffnaTourPage/>} />
            <Route exact path="/ColomboTour" element={< ColomboTourPage/>} />
            <Route exact path="/KandyTour" element={< KandyTourPage/>} />

            <Route exact path="/BlogPopular" element={< BlogPopularPage/>} />
            <Route exact path="/BlogBeach" element={< BlogBeachPage/>} />
            <Route exact path="/BlogElla" element={< BlogEllaPage/>} />
            <Route exact path="/BlogGalleFort" element={< BlogGalleFortPage/>} />
        </Routes>

      </Fragment>
    )
  }
}

export default AppRoute
