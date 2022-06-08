import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const ServicesSection = styled.section`

`
const SectionHeader = styled.h2`
  color: ${props => props.theme.colors.blue};
  font-size: 24px;
  line-height: 29px;
  margin-bottom: 30px;
  @media ${props => props.theme.screen.desktop} {
    font-size: 48px;
    line-height: 57px;
    margin-bottom: 30px;
  }
`
const SectionSubheader = styled.p`
  text-transform: uppercase;
  text-align: center;
  font-size: 10px;
  line-height: 12px;
  color: ${props => props.theme.colors.red};
  width: 171px;
  margin: 0 auto;
  @media ${props => props.theme.screen.desktop} {
    width: 480px;
    margin: 0 auto;
    font-size: 28px;
    line-height: 34px;

  }
`
const CardsCover = styled.div`
  margin-top: 65px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 120px;
  @media ${props => props.theme.screen.desktop} {
    flex-direction: row;
    justify-content: center;
    margin-bottom: 260px;
  }
`
const SectionCard = styled.article`
  color: ${props => props.theme.colors.blue};

  @media ${props => props.theme.screen.tablet} {
    max-width: 496px;
    padding: 0 30px;
    padding-bottom: 55px;
    &:hover {
      -webkit-box-shadow: 0px 0px 12px 2px rgba(0, 0, 0, 0.23);
      box-shadow: 0px 0px 12px 2px rgba(0, 0, 0, 0.23);
      background-color: #ffffff;
    }
  }
  @media ${props => props.theme.screen.desktop} {

    &:first-child {
      margin-right: 60px;
    }
  }
`
const CardImage = styled.img`
  width: 112px;
  height: 94px;
  margin-bottom: 30px;
  margin-top: 30px;
  @media ${props => props.theme.screen.desktop} {
    width: 150px;
    height: 126px;
  }
`
const CardHeader = styled.h2`
  font-family: "TiemposBold";
  font-size: 19px;
  @media ${props => props.theme.screen.tablet} {
    font-size: 36px;
  }
  @media ${props => props.theme.screen.desktop} {
    font-size: 48px;
    line-height: 58px;
  }
`
const CardParagraph = styled.p`
  font-size: 14px;
  line-height: 16px;
  width: 210px;
  margin: 0 auto;
  margin-bottom: 60px;
  @media ${props => props.theme.screen.tablet} {
    width: auto;
  }
  @media ${props => props.theme.screen.desktop} {
    font-size: 21px;
    line-height: 30px;
    min-height: 120px;

  }
`

const CardButton = styled(NavLink)`
  display: inline-block;
  background-color: ${props => props.theme.colors.blue};
  text-transform: uppercase;
  padding: 10px 22px;
  font-size: 12px;
  line-height: 14px;
  color: #ffffff;
  text-decoration: none;

  &:visited {
    color: #ffffff;
  }

  &:hover {
    background-color: ${props => props.theme.colors.red};
  }

  @media ${props => props.theme.screen.desktop} {
    padding: 18px 47px;
    font-size: 21px;
    line-height: 26px;

  }
`
const Services = () => {
  return (
        <ServicesSection id={'services'}>
            <SectionHeader>Our services</SectionHeader>
            <SectionSubheader>BE PART OF THE RISING HEALTH STARTUP COMMUNITY IN FINLAND!</SectionSubheader>
            <CardsCover>
                <SectionCard>
                    <CardImage src={'./img/home-page/members.svg'}/>
                    <CardHeader>
                        FOR STARTUPS
                    </CardHeader>
                    <CardParagraph>
                        Join us, and we will do our share in
                        smoothening the sometimes rocky startup
                        path for you and build a strong community
                        among health startups.
                    </CardParagraph>
                    <CardButton to={'/'}>Read more</CardButton>
                </SectionCard>
                <SectionCard>
                    <CardImage src={'./img/home-page/partners.svg'}/>
                    <CardHeader>
                        FOR PARTNERS
                    </CardHeader>
                    <CardParagraph>
                        Ally with us, and we will introduce you to the world of health innovation, and co-create
                        projects together, whether it´s events, research, or scouting for solutions
                    </CardParagraph>
                    <CardButton to={'/'}>Read more</CardButton>
                </SectionCard>
            </CardsCover>
        </ServicesSection>
  )
}

export default Services
