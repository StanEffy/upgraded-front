import React from 'react'
import styled from 'styled-components'

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
  background-color: rgba(48, 66, 131, 0.3);
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 86px;
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
  color: #ffffff;
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

const TopPart = () => {
  return (
        <SectionStyled>
            <SectionCover>
                <MainHeader>HEALTH<br/>
                    <RedSpan>ECOSYSTEM</RedSpan><br/>
                    MAPS
                </MainHeader>
                <ParagraphStyled>The Health Ecosystem Mapping project is created
                    and developed by Upgraded, powered by
                    Helsinki-Uusimaa Regional Council.
                </ParagraphStyled>
            </SectionCover>
        </SectionStyled>
  )
}

export default TopPart
