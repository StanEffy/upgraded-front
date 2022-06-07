import React from 'react'
import styled from 'styled-components'
import HistorySlider from './History/HistorySlider'
import historyArray from './History/historyArray'

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


  @media ${props => props.theme.screen.desktop} {
    height: 995px;
    box-sizing: border-box;
    margin-bottom: 265px;
  }
`

const InnerCover = styled.div`
  background-color: rgba(48, 66, 131, 0.8);
  height: 100%;
  padding: 20px;

  @media ${props => props.theme.screen.tablet} {
    padding: 0px 70px 0;
  }

`
const SectionHeader = styled.h1`
  margin: 0;
  font-size: 24px;
  line-height: 29px;
  text-align: left;

  @media ${props => props.theme.screen.desktop} {
    font-size: 48px;
    line-height: 58px;
    padding-top: 110px;
  }
`
const SectionParagraph = styled.p`
  font-family: "Avenir", sans-serif;
  line-height: 11px;
  font-size: 14px;
  color: #ffffff;
  text-align: left;
  @media ${props => props.theme.screen.desktop} {
    line-height: 33px;
    font-size: 21px;
    max-width: 600px;
  }
`
const History = () => {
  return (
        <SectionHistory id={'history'}>
            <InnerCover>
                <SectionHeader>Community history</SectionHeader>
                <SectionParagraph>
                    In a 2012. we realised that a meeting point for the whole
                    health ecosystem was missing. There were generic startup
                    events and traditional health specific events, but nothing
                    focusing on startups and innovations. We felt the need to
                    build an event where both startups and other health
                    industry players could meet, get insights and create the
                    future of health together.
                </SectionParagraph>
                <HistorySlider history={historyArray}/>
            </InnerCover>
        </SectionHistory>
  )
}

export default History
