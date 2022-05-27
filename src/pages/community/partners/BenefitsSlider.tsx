import React from 'react'

import BenefitsSliderItem, { PartnerBenefit } from './BenefitsSliderItem'
import styled from 'styled-components'
const benefits = [
  {
    img: './img/community/partners-slider/dialog.png',
    header: 'Brand visibility',
    description: 'Brand visibility in all of our channels (newsletter, social media, website, marketing materials)'
  },
  {
    img: './img/community/partners-slider/eye.png',
    header: 'Outreach to 80 health startups',
    description: 'Outreach to 80+ health startups and hundreds of other stakeholders'
  },
  {
    img: './img/community/partners-slider/desk.png',
    header: 'Event for members of Upgraded',
    description: 'Event for members of Upgraded, dedicated to partner´s topic of interest (20-50 ppl)'
  }, {
    img: './img/community/partners-slider/leaf.png',
    header: 'Ecosystem',
    description: 'Updates on the Finnish Health Startup Ecosystem'
  }, {
    img: './img/community/partners-slider/search.png',
    header: 'Survey or equivalent project ',
    description: 'Survey or equivalent project to help in connecting to startup'
  }, {
    img: './img/community/partners-slider/network.png',
    header: 'Networking Events',
    description: 'Invitations to networking events'
  }, {
    img: './img/community/partners-slider/sun-idolatry.png',
    header: 'Option to collaborate',
    description: 'Option to collaborate on a joint project during 2022'
  }, {
    img: './img/community/partners-slider/document.png',
    header: 'Brand Content',
    description: 'Opportunity to create branded content for our channels,'
  }
]

type BenefitsArray = {
    benefits: [PartnerBenefit]
}
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
 
  @media ${props => props.theme.screen.desktop}{
    display: flex;
    flex-wrap: wrap; 
    padding-left: 65px;
    padding-right: 65px;
    padding-top: 70px;
    justify-content: space-between;
  }
`
const BenefitsSlider = () => {
  return (
        <List>
            {benefits.map(benefit => {
              return <BenefitsSliderItem key={benefit.header} img={benefit.img} header={benefit.header} description={benefit.description}/>
            })}
        </List>
  )
}

export default BenefitsSlider
