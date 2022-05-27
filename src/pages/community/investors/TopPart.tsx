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
  
  @media ${props => props.theme.screen.desktop}{
    padding-top: 205px;
    padding-left: 61px;
  }
`
const MainHeader = styled.h1`
  color:#ffffff;
  font-family: "TiemposBold", serif;
  font-size: 28px;
  line-height: 35px;
  text-transform: uppercase;
  margin-bottom: 60px;
  
  @media ${props => props.theme.screen.desktop}{
    font-size: 104px;
    line-height: 131px; 
    margin-bottom: 150px;
  }
`
const RedSpan = styled.span`
  color: ${props => props.theme.colors.red};
`
const ParagraphStyled = styled.p`
  color:#ffffff;
  font-size: 14px;
  line-height: 17px;
  margin-bottom: 18px;
  @media ${props => props.theme.screen.desktop}{
    font-size: 34px;
    line-height: 41px;
    margin-bottom: 18px;
    max-width: 970px;
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
  &:hover{
    background-color: ${props => props.theme.colors.blue};
  }
  @media ${props => props.theme.screen.desktop}{
    margin: 0;
    margin-top: 68px;
    width: 250px;
    font-size: 21px;
    line-height: 25px;
    text-align: center;
    padding: 19px 18px;
  }
`

const TopPart = () => {
  return (
        <SectionStyled>
            <SectionCover>
            <MainHeader>GET YOUR RETURN
                <br/>ON <RedSpan>INVESTMENT
                </RedSpan><br/>INTO WHAT MATTERS!
            </MainHeader>
            <ParagraphStyled>Funding of HealthTech and Life Sciences is one of the most
                complicated and challenging areas of investment. According
                to our 2021 research, 80% of health startups who participated
                in the survey are in acute need of funding. Yet, it is health startups
                that make the world a better and healthier place.
                </ParagraphStyled>
                <ParagraphStyled>We want to make sure that no innovation is lost due to the lack
                    of resources. At the same time - that no investment is lost due to
                    the lack of knowledge on the companies and their founders.</ParagraphStyled>
            <ParagraphStyled> With that, we introduce the Investor Membership of Upgraded -
                a community of investors, looking into HealthTech.</ParagraphStyled>
            <ButtonStyled to={'/'}>BECOME A Member</ButtonStyled>
            </SectionCover>
        </SectionStyled>
  )
}

export default TopPart
