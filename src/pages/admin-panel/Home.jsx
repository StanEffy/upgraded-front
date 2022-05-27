import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import styled from 'styled-components'
import HeaderAdmin from './HeaderAdmin'
import routes from '../routes/routes'
import Partners from './Partners'
import News from './News'
import Events from './Events'
import HomePage from './HomePage'
import Team from './Team'
import Newsletter from './Newsletter'
import Ecomaps from './Ecomaps'

const HomeCoverStyled = styled.div`
  padding: 0px 40px;
`
const Home = function () {
  return (
    <HomeCoverStyled>
      <BrowserRouter>
        <HeaderAdmin />
        <Routes>
          <Route path={routes.home} exact element={<HomePage />} />
          <Route path={routes.partners} element={<Partners />} />
          <Route path={routes.news} element={<News />} />
          <Route path={routes.events} element={<Events />} />
          <Route path={routes.team} element={<Team />} />
          <Route path={routes.newsletter} element={<Newsletter />} />
          <Route path={routes.ecomaps} element={<Ecomaps />} />
        </Routes>
      </BrowserRouter>
    </HomeCoverStyled>
  )
}

export default Home
