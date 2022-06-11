import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const SectionStyled = styled.section`
  text-align: left;
  background-color: rgba(48, 66, 131, 1);
  background-image: url("./img/community/partners/pattern.svg");
  background-position: bottom;
  background-size: cover;
  background-repeat: no-repeat;
  @media ${props => props.theme.screen.desktop} {
    background-size: contain;
  }
`
const SectionCover = styled.div`
  padding-top: 105px;
  background-color: rgba(48, 66, 131, 0.2);
  padding-left: 20px;
  padding-bottom: 66px;

  @media ${props => props.theme.screen.desktop} {
    padding-top: 205px;
    padding-left: 61px;
  }
`
const MainHeader = styled.h1`
  color: #ffffff;
  font-family: "TiemposBold", serif;
  font-size: 1.5rem;
  line-height: 1.8rem;
  text-transform: uppercase;
  margin-bottom: 60px;

  @media ${props => props.theme.screen.desktop} {
    font-size: 5rem;
    line-height: 6rem;
    margin-bottom: 150px;
  }
`
const RedSpan = styled.span`
  color: ${props => props.theme.colors.red};
`
const ParagraphStyled = styled.p`
  color: #ffffff;
  font-size: 1rem;
  line-height: 1rem;
  margin-bottom: 18px;
  @media ${props => props.theme.screen.desktop} {
    font-size: 1.8rem;
    line-height: 2.3rem;
    margin-bottom: 18px;
  }
`
const ButtonStyled = styled(NavLink)`
  display: block;
  text-decoration: none;
  text-transform: uppercase;
  padding: 9px 18px;
  width: 145px;
  box-sizing: border-box;
  background-color: ${props => props.theme.colors.red};
  color: #ffffff;
  margin: 0 auto;
  margin-top: 60px;

  font-size: 11px;
  line-height: 13px;

  &:hover {
    background-color: ${props => props.theme.colors.blue};
  }

  @media ${props => props.theme.screen.desktop} {
    margin-top: 68px;
    width: 250px;
    font-size: 1.2rem;
    line-height: 1.5rem;
    text-align: center;
    padding: 19px 18px;
  }
`
const TopPart = () => {
  return (
        <SectionStyled>
            <SectionCover>
                <MainHeader>PLAY ROLE IN <br/><RedSpan>HEALTH INNOVATION</RedSpan><br/> IN FINLAND!
                </MainHeader>
                <ParagraphStyled>We can only innovate in healthcare when working together. We closely collaborate with
                    organizations
                    that share our vision and values to support health
                    and wellbeing startups. After being founded in 2012,
                    we worked with more than 500 health and wellbeing
                    startups, and we know the drill.
                </ParagraphStyled>
                <ParagraphStyled>Join us on the mission to make Finnish healthcare
                    one of the most innovative in the world!</ParagraphStyled>
                <ButtonStyled to={'/'}>BECOME A PARTNER</ButtonStyled>
            </SectionCover>
        </SectionStyled>
  )
}

export default TopPart
