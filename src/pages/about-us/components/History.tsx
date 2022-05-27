import React from 'react'
import styled from 'styled-components'
const SectionHistory = styled.section`
  color: #ffffff;
 
//  temporary
  height: 100vw;
  //display: flex;
  //justify-content: center;
  //align-items: center;
//  
  
  background-image: url("./img/about-us/history.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  max-height: 995px;
  
  
  @media ${props => props.theme.screen.desktop}{
    height: 995px;
    box-sizing: border-box;
    margin-bottom: 265px;
  }
`

const InnerCover = styled.div`
  background-color: rgba(48, 66, 131, 0.8);
  height: 100%;
  padding: 20px;
  
  @media ${props => props.theme.screen.tablet}{
    padding: 0px 70px 0;
  }
  
`
const SectionHeader = styled.h1`
  margin: 0;
  font-size: 24px;
  line-height: 29px;
  text-align: left;
  
  @media ${props => props.theme.screen.desktop}{
    font-size:48px;
    line-height: 58px;
   padding-top: 110px;
  }
`
const SectionParagraph = styled.p`

`
const History = () => {
  return (
        <SectionHistory id={'history'}>
            <InnerCover>
            <SectionHeader>Community history</SectionHeader>
            </InnerCover>
        </SectionHistory>
  )
}

export default History
