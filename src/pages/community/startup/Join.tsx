import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
const JoinArray = [
  {
    text: 'Medical devices and non-regulated (e.g. wellness)',
    img: './img/community/startups/devices.png'
  },
  {
    text: 'Life science, biotech',
    img: './img/community/startups/biotech.png'
  }, {
    text: 'Occupational health and rehabilitation',
    img: './img/community/startups/shield.png'
  }, {
    text: 'Mental health & wellbeing',
    img: './img/community/startups/mental.png'
  }, {
    text: 'Ageing tech',
    img: './img/community/startups/age.png'
  }, {
    text: 'Sports, fitness, nutrition',
    img: './img/community/startups/kung-fu.png'
  }, {
    text: 'Sustainability (in health)',
    img: './img/community/startups/sustainability.png'
  }
]
const Section = styled.section`
  padding: 60px 20px;
`
const SectionHeader = styled.h2`
  font-size: 24px;
  line-height: 29px;
  color: ${props => props.theme.colors.blue};
  font-family: "TiemposBold", serif;
  text-align: center;
  text-transform: uppercase;
  @media ${props => props.theme.screen.desktop} {
    font-size: 48px;
    line-height: 58px;
  }
`

const SectionParagraph = styled.p`
  font-family: "Avenir", sans-serif;
  color: ${props => props.theme.colors.blue};
  font-size: 12px;
  line-height: 21px;
  text-align: left;
  margin-bottom: 12px;
  @media ${props => props.theme.screen.desktop} {
    font-size: 30px;
    line-height: 48px;
    text-align: center;
    margin: 0 auto 10px;
    max-width: 60%;
  }
`
const RedSpan = styled.span`
  color: ${props => props.theme.colors.red};
  
`

const JoinList = styled.ul`
  margin: 0 auto;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
  margin-top: 100px;
  max-width: 1050px;
`
const JoinListItem = styled.li`
 display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 150px;
  img{
    width: 80px;
    height: 100px;
    object-fit: contain;
    margin-bottom: 15px;
  }
  p {
    color: ${props => props.theme.colors.blue};
    font-size: 11px;
    line-height: 13px;
    font-family: "Avenir", sans-serif;
    margin-bottom: 15px;
  }
  @media ${props => props.theme.screen.desktop} {
    width: 248px;
    p{
      font-size: 21px;
      line-height: 25px;
      
    }
   
  }
`
const BecomeButton = styled(NavLink)`
  display: block;
  background-color: ${props => props.theme.colors.red};
  color: #ffffff;
  width: 160px;
  padding: 9px 34px;
  text-align: center;
  text-decoration: none;
  margin: 80px auto;
  text-transform: uppercase;
  &:hover{
    background-color: ${props => props.theme.colors.blue};
  }
  @media ${props => props.theme.screen.desktop}{
    font-size: 24px;
    width: 240px;
  }
  
`

const Join = () => {
  return (
        <Section>
            <SectionHeader>How to join?</SectionHeader>
            <SectionParagraph>Fill in the membership form <RedSpan>online</RedSpan> – it only takes a minute!
            </SectionParagraph>
            <SectionParagraph>The membership fee is currently 190€ for 12 months.
            </SectionParagraph>
            <SectionParagraph>We welcome startups and innovations with a health-related purpose in the fields of
            </SectionParagraph>
            <JoinList>
                {JoinArray.map(el => {
                  return (
                        <JoinListItem key={el.text}>
                            <img src={el.img} alt=""/>
                            <p>{el.text}</p>
                        </JoinListItem>
                  )
                })}
            </JoinList>
            <BecomeButton to={'/'}>Become a member</BecomeButton>
        </Section>
  )
}

export default Join
