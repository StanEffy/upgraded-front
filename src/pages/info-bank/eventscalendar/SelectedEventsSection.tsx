import React from 'react'
import styled from 'styled-components'

const SectionStyled = styled.section`
  padding: 60px 20px;
  @media ${props => props.theme.screen.desktop} {
    padding: 100px 70px;
  }
`

const CardEvent = styled.div`
  background-color: #ffffff;
  padding-top: 44px;
  @media ${props => props.theme.screen.desktop} {
    padding: 0;
    width: 410px;
    &:hover {
      -webkit-box-shadow: 0px 0px 12px 2px rgba(0, 0, 0, 0.2);
      box-shadow: 0px 0px 12px 2px rgba(0, 0, 0, 0.2);
    }
  }
`

const CardImage = styled.img`
  width: 100%;
  height: 20vw;

  margin: 0 auto;
  max-width: 400px;
  max-height: 200px;
  @media ${props => props.theme.screen.desktop} {
    max-width: none;
    max-height: none;
    padding: 0;
    width: 410px;
    height: 290px;
  }
`

const CardTextContainer = styled.div`
  padding: 44px;
`
const ParagraphStyled = styled.p`
  color: ${props => props.theme.colors.blue};
  font-size: 14px;
  line-height: 17px;
  font-family: "Avenir", sans-serif;
  text-align: left;
  margin: 30px 0 40px;
  @media ${props => props.theme.screen.desktop} {
    font-size: 28px;
    line-height: 34px;
  }
`
const DateTable = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${props => props.theme.colors.blue};
`

const DateTableHeader = styled.p`
  margin: 0;
  text-transform: uppercase;
  color: ${props => props.theme.colors.red};
  font-size: 16px;
  line-height: 11px;
  font-family: "Avenir", sans-serif;
`

const DateLeft = styled.div`
  text-align: left;
`

const DateRight = styled.div`
  text-align: right;
`
const Date = styled.p`

`

const Location = styled.p`
  img {
    padding-right: 10px
  }
`

const SelectedEventsSection = () => {
  return (
        <SectionStyled>
            <CardEvent>
                <CardImage src={'./img/mock/story.jpg'} alt='alt mock info'/>
                <CardTextContainer>
                    <ParagraphStyled>EEX Journey Development
                        program for entrepreneurial
                        leadership</ParagraphStyled>
                    <DateTable>
                        <DateLeft>
                            <DateTableHeader>WHEN</DateTableHeader>
                            <Date>August 1, 2021 </Date>
                        </DateLeft>
                        <DateRight>
                            <DateTableHeader>WHERE</DateTableHeader>
                            <Location>
                                <img src="https://flagcdn.com/16x12/fi.png"/>
                                Finland</Location>
                        </DateRight>
                    </DateTable>
                </CardTextContainer>
            </CardEvent>
        </SectionStyled>
  )
}

export default SelectedEventsSection
