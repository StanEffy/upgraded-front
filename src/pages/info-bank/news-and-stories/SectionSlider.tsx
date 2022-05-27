import React from 'react'
import styled from 'styled-components'
import { Carousel, CarouselItem } from '../../../components/carousel/CarouselItem'
import ProjectsMockData from './ProjectsMockDate'
import { NavLink } from 'react-router-dom'

const SectionStyled = styled.section`
  height: 115vw;
  max-height: 1200px;
  @media ${props => props.theme.screen.desktop}{
    max-height: 912px
  }
`
const ItemBg = styled.div`
  background-size: 200%;
  height: 115vw;
  max-height: 600px;
  background-position: center;
  background-repeat: no-repeat;
  text-align: left;
  @media ${props => props.theme.screen.desktop}{
      background-size: cover;
      background-position: top;
      max-height: none;
      height: 912px;
      
      width: 100%;
  }
`
const ItemBgCover = styled.div`
 background-color: rgba(48, 66, 131, 0.7);
  width: 100%;
  height: 100%;
  padding: 140px 20px 0;
  @media ${props => props.theme.screen.desktop} {
    padding: 240px 70px;
    width: 100%;
    box-sizing: border-box;
  }
`
const Caption = styled.h2`
  font-family: "TiemposBold", serif;
  font-size: 21px;
  line-height: 25px;
  color: #ffffff;
  margin-bottom: 20px;
  padding-right: 60px;
  @media ${props => props.theme.screen.desktop} {
    width: 670px;
    font-size: 48px;
    line-height: 65px;
  }
`
const MaxWidth = styled.div`

`

const Description = styled.p`
  font-size: 21px;
  line-height: 25px;
  color: #ffffff;
  margin: 0;
  margin-bottom: 30px;
  padding-right: 60px;
  @media ${props => props.theme.screen.desktop} {
    width: 600px;
    font-size: 24px;
    line-height: 29px;
  }
`
const Link = styled(NavLink)`
  display: block;
  text-decoration: none;
  color: #ffffff;
  background-color: ${props => props.theme.colors.red};
  padding: 9px 10px;
  width: 110px;
  text-transform: uppercase;
  text-align: center;
  
  &:visited {
    color: #ffffff;
  }
  &:hover {
    background-color: #ffffff;
    color: ${props => props.theme.colors.blue};
    font-weight: bold;
  }
  
`
const SectionSlider = () => {
  return (
        <SectionStyled>
             <Carousel innerClass={'inner inner-news'} className={'carousel-news'} indicatorsClassname={'news-indicators'} indicator={'news-indicator'}>
                {
                    ProjectsMockData.map((el, i) => {
                      return (
                            <CarouselItem key={i} width={'100%'} className={'news-carousel-item'}>
                                <ItemBg style={{ backgroundImage: "url('./img/mock/slush.jpg')" }}>
                                    <ItemBgCover>
                                        <Caption>{el.header}</Caption>
                                        <Description>{el.description}</Description>

                                        <Link to={el.link}>Read more</Link>
                                    </ItemBgCover>
                                </ItemBg>
                                <MaxWidth />
                            </CarouselItem>
                      )
                    })
                }

             </Carousel>
        </SectionStyled>
  )
}

export default SectionSlider
