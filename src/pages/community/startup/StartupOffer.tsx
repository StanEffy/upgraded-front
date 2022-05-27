import React from 'react'
import styled from 'styled-components'

const OfferArray = [
  {
    name: 'Membership Newsletter',
    text: 'Membership Newsletter including exclusive invitations, offers, opportunities and events in the field!',
    img: './img/community/startups/newsletter.png'
  },
  {
    name: 'Members calls',
    text: 'Monthly members calls, meant to create a better connection to the community and get informational updates.',
    img: './img/community/startups/call.png'
  },
  {
    name: 'Free webinars',
    text: 'Free webinars for our members with expert speakers from different areas of business development..',
    img: './img/community/startups/webinars.png'
  }, {
    name: 'Connection to HealthTech',
    text: 'Connection to HealthTech investors and spreading the news on your open funding rounds.',
    img: './img/community/startups/connection.png'
  }, {
    name: 'Participation in surveys and market research',
    text: 'Participation in surveys and market research of the Association, results of which are being sent to major stakeholders - we want to make your voice heard!.',
    img: './img/community/startups/participation.png'
  }, {
    name: 'Finnish testbeds connection',
    text: 'Connection to the network of Finnish testbeds.',
    img: './img/community/startups/testbeds.png'
  }, {
    name: 'Visibility',
    text: 'Invitations to present your company in events and the right to publish blog posts, job openings, news, etc. through Upgraded channels. Reach to 7000+ people',
    img: './img/community/startups/visibility.png'
  }, {
    name: 'Member discounts',
    text: 'Member discounts on events, sometimes even free tickets!',
    img: './img/community/startups/discount.png'
  }, {
    name: 'Your association, your say!',
    text: 'Right to affect the development and activities of the community – your association, your say!',
    img: './img/community/startups/association.png'
  }, {
    name: 'Membership benefits',
    text: 'Membership benefits from Upgraded’s partners.',
    img: './img/community/startups/membership.png'
  }, {
    name: 'Membership Slack-channel',
    text: 'Peer support and a community, through e.g. our Membership Slack-channel and our Upgraded members monthly calls.',
    img: './img/community/startups/slack.png'
  }, {
    name: 'Your place on our website',
    text: 'Your company logo and link on the Upgraded website in the Members Gallery.',
    img: './img/community/startups/place-to-be.png'
  }
]

const Section = styled.section`
  padding: 40px 20px 70px;
 background-color: #f9f9f9;
`
const SectionHeader = styled.h1`
  font-family: "TiemposBold", serif;
  font-size: 24px;
  line-height: 29px;
  color: ${props => props.theme.colors.blue};
  text-align: center;
  max-width: 360px;
  margin: 0 auto 20px;
`
const OffersList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`
const OffersListItem = styled.li`
  color: ${props => props.theme.colors.blue};
  width: 328px;
  height: 301px;
  box-sizing: border-box;
  padding: 40px 50px;
  justify-content: center;
  align-items: center;
  display: flex;

  background-color: #ffffff;
  margin: 10px;
  flex-direction: column;
  img {
    width: 150px;
    height: 150px;
    margin: 0 auto;
    object-fit: contain;
  }
  h3 {
    font-family: "TiemposRegular", serif;
    font-size: 20px;
    margin: 0;
    margin-top: 20px;
    line-height: 25px;
  }
  p {
    font-family: "Avenir", sans-serif;
    font-size: 20px;
    line-height: 25px;
    display: none;
  }
  &:hover {
    transition: transform 0.4s;
    -webkit-box-shadow: 0px 0px 15px 0px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 0px 0px 15px 0px rgba(34, 60, 80, 0.2);
    box-shadow: 0px 0px 15px 0px rgba(34, 60, 80, 0.2);

    p {
      display: block;
    }
    img{
      display: none;
    }
    h3{
      display: none
    }
  }
`

const StartupOffer = () => {
  return (
        <Section>
          <SectionHeader>What we offer to our members:</SectionHeader>
            <OffersList>
                {OfferArray.map(el => {
                  return (
                        <OffersListItem key={el.name}>
                            <img src={el.img} alt=""/>
                            <h3>{el.name}</h3>
                            <p>{el.text}</p>
                        </OffersListItem>
                  )
                })}
            </OffersList>
        </Section>
  )
}

export default StartupOffer
