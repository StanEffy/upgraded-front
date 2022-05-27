import React from 'react'
import styled from 'styled-components'
import TopPartForm from './TopPartForm'

const SectionStyled = styled.section`
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("./img/info-bank/events/events-bg.jpg");
  @media ${props => props.theme.screen.desktop}{
    
  }
`
const InnerCover = styled.div`
  background-color: rgba(255,255,255, 0.7);
  padding: 105px 20px 0;
  @media ${props => props.theme.screen.desktop}{
    padding: 214px 70px 80px;

  }
`
const HeaderStyled = styled.h1`
  font-size: 25px;
  line-height: 32px;
  font-family: "TiemposBold", serif;
  color: ${props => props.theme.colors.red};
  text-transform: uppercase;
  text-align: left;
  
  @media ${props => props.theme.screen.desktop} {
    margin: 0;
    font-size: 104px;
    line-height: 131px;
  }
`

const ParagraphStyled = styled.p`
  color: ${props => props.theme.colors.blue};
  font-size: 14px;
  line-height: 17px;
  font-family: "Avenir", sans-serif;
  text-align: left;
  margin: 30px 0 40px;
  @media ${props => props.theme.screen.desktop} {
    font-size: 34px;
    line-height: 40px;
  }
`
const LinkStyled = styled.a`
  text-decoration: none;
  color: ${props => props.theme.colors.red};
  &:visited {
    color: ${props => props.theme.colors.red};
  }
  &:hover {
    opacity: 0.8;
  }
`
const TopPart = () => {
  return (
        <SectionStyled>
            <InnerCover>
                <HeaderStyled>Events</HeaderStyled>
                <ParagraphStyled>Finnish Health Ecosystem events and the main
                    international health events. Want the events
                    exported to your calendar in iCal format? Just
                    click this link!</ParagraphStyled>
                <TopPartForm />
                <ParagraphStyled>Have we missed an event? Please drop a
                    line to <LinkStyled>info@upgraded.fi</LinkStyled></ParagraphStyled>
                <ParagraphStyled>Want the events updated straight to your
                    calendar? Use this <LinkStyled>iCal link</LinkStyled>!</ParagraphStyled>
            </InnerCover>
        </SectionStyled>
  )
}

export default TopPart
