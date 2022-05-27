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
  background-color: rgba(255, 255, 255, 0.3);
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 66px;
  display: flex;
  flex-direction: column;
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
  margin-bottom: 20px;
  
  @media ${props => props.theme.screen.desktop}{
    font-size: 104px;
    line-height: 131px; 
    margin-bottom: 40px;
  }
`
const RedSpan = styled.span`
  color: ${props => props.theme.colors.red};
`
const ParagraphStyled = styled.p`
  color: ${props => props.theme.colors.blue};
  font-size: 14px;
  line-height: 17px;
  margin-bottom: 30px;
  margin-top: 0;
  width: 80%;
  @media ${props => props.theme.screen.desktop}{
    width: auto;
    max-width: 600px;
    font-size: 34px;
    line-height: 41px;
    margin-bottom: 18px;
  }
`
const ButtonStyled = styled(NavLink)`
  
  text-decoration: none;
  text-transform: uppercase;
  padding: 9px 18px;
  width: 145px;
  box-sizing: border-box;
  background-color: ${props => props.theme.colors.red};
  color: #ffffff;
  
  margin-top: 60px;
  
  font-size: 11px;
  line-height: 13px;
  &:hover{
    background-color: ${props => props.theme.colors.blue};
  }
  @media ${props => props.theme.screen.tablet}{
    display: block;
  }
  @media ${props => props.theme.screen.desktop}{
    margin-top: 68px;
    width: 250px;
    font-size: 21px;
    line-height: 25px;
    text-align: center;
    padding: 19px 18px;
  }
`

const ParagraphCover = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media ${props => props.theme.screen.desktop}{
    
  }
`

const TopPart = () => {
  return (
        <SectionStyled>
            <SectionCover>
                <MainHeader>Upgraded<br/>
                    <RedSpan>Newsletter</RedSpan>
                </MainHeader>
                <ParagraphCover>
                    <ParagraphStyled>Subscribe to our newsletter and hear
                        about all the opportunities and events!
                    </ParagraphStyled>
                    <ParagraphStyled>In addition to the Community Newsletter,
                        our members get also the exclusive
                        Member Newsletter!
                    </ParagraphStyled>
                    <ButtonStyled to={'/'}>BECOME A Member</ButtonStyled>
                </ParagraphCover>
            </SectionCover>
        </SectionStyled>
  )
}

export default TopPart
