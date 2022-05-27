import React, { useEffect, useRef } from 'react'
import './App.css'
import styled, { ThemeProvider } from 'styled-components'
import theme from './utils/theme'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/header/Header'
import routes from './utils/routes'
import adminRoutes from './pages/admin-panel/admin-routes'
import Home from './pages/home/Home'
import Footer from './components/footer/Footer'
import AboutUs from './pages/about-us/AboutUs'
import Partners from './pages/community/partners/Partners'
import Startups from './pages/community/startup/Startups'
import ContactUs from './pages/contact-us/ContactUs'
import Investors from './pages/community/investors/Investors'
import ErrorPage from './pages/error-page/ErrorPage'
import Newsletters from './pages/info-bank/newsletter/Newsletters'
import EcosystemMaps from './pages/info-bank/ecosystem-maps/EcosystemMaps'
import OneMap from './pages/info-bank/ecosystem-maps/OneMap'
import NewsAndStories from './pages/info-bank/news-and-stories/NewsAndStories'
import Insights from './pages/info-bank/Insights/Insights'
import EventCalendar from './pages/info-bank/eventscalendar/EventCalendar'
import ScrollToTop from './components/ScrollToTop'

import HeaderAdmin from './pages/admin-panel/HeaderAdmin'
import PartnersAdmin from './pages/admin-panel/Partners'
import News from './pages/admin-panel/News'
import Events from './pages/admin-panel/Events'
import HomePage from './pages/admin-panel/HomePage'
import Team from './pages/admin-panel/Team'
import Newsletter from './pages/admin-panel/Newsletter'
import EcomapsAdmin from './pages/admin-panel/Ecomaps'
import ImportantLinks from './pages/info-bank/important-links/ImportantLinks'
import SingleEvent from './pages/info-bank/eventscalendar/singleevent/SingleEvent'

// structure of routes file should be refactored
//

function App () {
  return (
    <div className="App" >
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Header linkNames={routes} />
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/partners" element={<Partners />} />
                <Route path="/startup-members" element={<Startups />} />
                <Route path="/investor" element={<Investors />} />
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="/newsletters" element={<Newsletters />} />

                <Route path="/news-and-stories" element={<NewsAndStories />} />
                <Route path="/news-and-stories/:title" element={<NewsAndStories />} />

                <Route path="/insights" element={<Insights />} />

                <Route path="/eventcalendar" element={<EventCalendar />} />
                <Route path="/eventcalendar/:title" element={<SingleEvent />} />

                <Route path="/important-links" element={<ImportantLinks />}/>

                <Route path="/ecomaps" element={<EcosystemMaps/>} />
                <Route path="/ecomaps/:name" element={<OneMap />} />

                <Route path="*" element={<ErrorPage />} />

                    <Route path={adminRoutes.home} element={<HomePage />} />
                    <Route path={adminRoutes.partners} element={<PartnersAdmin />} />
                    <Route path={adminRoutes.news} element={<News />} />
                    <Route path={adminRoutes.events} element={<Events />} />
                    <Route path={adminRoutes.team} element={<Team />} />
                    <Route path={adminRoutes.newsletter} element={<Newsletter />} />
                    <Route path={adminRoutes.ecomaps} element={<EcomapsAdmin />} />

            </Routes>
            <Footer />

        </BrowserRouter>
      </ThemeProvider>
    </div>
  )
}

export default App
