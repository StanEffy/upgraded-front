import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const BenefitsSection = styled.section`
  padding: 60px 20px 100px 20px;
  background-color: #F9F9F9;
  @media ${props => props.theme.screen.desktop} {
    padding: 100px 70px;
  }
`
const BenefitsHeader = styled.h2`
  color: ${props => props.theme.colors.blue};
  text-align: center;
  font-family: "TiemposBold", serif;
  font-size: 24px;
  line-height: 29px;
  margin: 0 auto;
  margin-bottom: 70px;
  width: 290px;
  @media ${props => props.theme.screen.desktop}{
    width: 570px;
    font-size: 48px;
    line-height: 57px;
  }
`
const DesktopBenefits = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`
const DesktopBenefitsItem = styled.li`
  width: 328px;
  height: 301px;
  box-sizing: border-box;
  padding: 40px 50px;
  justify-content: center;
  align-items: center;
  display: flex;
  
  background-color: #ffffff;
  margin: 20px;
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
const InvestorFormLink = styled(NavLink)`
  display: none;
  
  @media ${props => props.theme.screen.desktop}{
    color: ${props => props.theme.colors.blue};
    display: block;
    text-decoration: none;
    font-size: 36px;
    line-height: 48px;
  }
  :visited{
    color: ${props => props.theme.colors.blue};
  }
`
const BenefitsArray = [
  {
    header: 'Connection with members',
    text: 'Connect to our 80+members',
    img: './img/community/investors/connection.png'
  },
  {
    header: 'Outreach to 80+ health startups',
    text: 'Outreach to 80+ health startups and hundreds of other stakeholders',
    img: './img/community/investors/outreach.png'
  },
  {
    header: 'The News',
    text: 'Get updates on the news of Finnish  HealthTech and open funding rounds',
    img: './img/community/investors/news.png'
  },
  {
    header: 'Visibility of your fund',
    text: 'Visibility of your Fund to the Finnish HealthTech community',
    img: './img/community/investors/visibility.png'
  },
  {
    header: 'Connection with other investors',
    text: 'Connected to other investors looking into HealthTech',
    img: './img/community/investors/other_investors.png'
  }
]
const InvestorBenefits = () => {
  return (
        <BenefitsSection>
            <BenefitsHeader>As our Investor Member, you will get:</BenefitsHeader>
            <DesktopBenefits>
                {BenefitsArray.map(el => {
                  return (
                        <DesktopBenefitsItem key={el.header}>
                            <img src={el.img} alt=""/>
                            <h3>{el.header}</h3>
                            <p>{el.text}</p>
                        </DesktopBenefitsItem>
                  )
                })}
            </DesktopBenefits>
          <InvestorFormLink to={'/'}>Become an Investor Member now by filling in the form!</InvestorFormLink>
        </BenefitsSection>
  )
}

export default InvestorBenefits
