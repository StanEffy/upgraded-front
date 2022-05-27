import React from 'react'
import BecomeMember from './components/BecomeMember'
import PartnersInfo from './components/PartnersInfo'
import JoinCommunity from './components/JoinCommunity'
import UpcomingOpportunities from './components/UpcomingOpportunities'
import NewsStories from './components/NewsStories'
import ParnersMembers from './components/ParnersMembers'

const Home = () => {
  return (
      <>
        <BecomeMember />
        <PartnersInfo />
        <JoinCommunity />
        <ParnersMembers />
        <UpcomingOpportunities />
        <NewsStories />
      </>

  )
}

export default Home
