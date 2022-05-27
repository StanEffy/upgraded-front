import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { Carousel, CarouselItem } from '../../../components/carousel/CarouselItem'
import { insightsMockData } from './InsightsMockData'

const SectionStyled = styled.section`
  
  
  height: 660px;
  @media ${props => props.theme.screen.desktop} {
    padding: 110px 70px;
  }
`
const Card = styled.div`
  max-width: 381px;
`
const CardBluePart = styled.div`
  background-color: ${props => props.theme.colors.blue};
  padding: 20px;
`
const CardHeader = styled.h2`
  font-size: 21px;
  line-height: 25px;
  color: #ffffff;
  margin-bottom: 40px;
  text-align: center;
  padding-left: 30px;
  padding-right: 30px;
  font-family: "TiemposBold", serif;
  text-transform: uppercase;

  @media ${props => props.theme.screen.desktop}{
    font-size: 30px;
    line-height: 36px;
  }
`

const CardParagraph = styled.p`
  font-size: 14px;
  line-height: 17px;
  font-family: "Avenir", sans-serif;
  padding-bottom: 40px;
  text-align: left;
  color: #ffffff;
  @media ${props => props.theme.screen.desktop}{
    font-size: 16px;
    line-height: 20px;
    max-height: 260px;
    overflow-y: hidden;
  }
`
const CardLink = styled(NavLink)`
  display: block;
  max-width: 150px;
  text-decoration: none;
  margin: 0 auto;
  background-color: ${props => props.theme.colors.red};
  color: #ffffff;
  padding: 9px 14px;
  margin-bottom: 80px;
`

const CardImage = styled.img`
  width: 100%;
  margin: 0 10px -40px;
  height: 150px;
  max-width: 290px;
  position: relative;
  top: -60px;
  @media ${props => props.theme.screen.desktop}{
    max-width: 270px;
  }
`
const CardsDesktopContainer = styled.div`
display: none;
  @media ${props => props.theme.screen.desktop} {
    display: flex;
    justify-content: space-between;
    gap: 20px
  }
`
const InsightsSlider = () => {
  return (
        <SectionStyled>
            <Carousel>
                {
                    insightsMockData.map((el) => {
                      return (<CarouselItem key={el.header}>
                            <Card>
                                <CardBluePart>
                                    <CardHeader>{el.header}</CardHeader>
                                    <CardParagraph>{el.description}</CardParagraph>
                                    <CardLink to={el.link}>READ MORE</CardLink>
                                </CardBluePart>
                                <CardImage src={el.picture}/>
                            </Card>
                        </CarouselItem>)
                    })
                }
            </Carousel>
            <CardsDesktopContainer>
                {
                    insightsMockData.map((el) => {
                      return (
                            <Card key={el.header + 'desktop'}>
                                <CardBluePart>
                                    <CardHeader>{el.header}</CardHeader>
                                    <CardParagraph>{el.description}</CardParagraph>
                                    <CardLink to={el.link}>READ MORE</CardLink>
                                </CardBluePart>
                                <CardImage src={el.picture}/>
                            </Card>
                      )
                    })
                }
            </CardsDesktopContainer>
        </SectionStyled>
  )
}

export default InsightsSlider
