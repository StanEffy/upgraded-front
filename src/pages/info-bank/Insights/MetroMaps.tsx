import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const SectionStyled = styled.section`
  padding: 70px 20px;
  
  @media ${props => props.theme.screen.desktop} {
    padding: 110px 70px;
  }
`

const HeaderStyled = styled.h2`
  font-size: 25px;
  line-height: 35px;
  font-family: "TiemposBold", serif;
  text-transform: uppercase;
  text-align: center;
  color: ${props => props.theme.colors.blue};
  margin-bottom: 40px;
  @media ${props => props.theme.screen.desktop} {
    margin-bottom: 80px;
    font-size: 48px;
    line-height: 58px;
  }
`
const ParagraphStyled = styled.p`
  font-size: 25px;
  line-height: 35px;
  font-family: "Avenir", sans-serif;
  color: ${props => props.theme.colors.blue};
  max-width: 900px;
  margin-bottom: 80px;
  
  @media ${props => props.theme.screen.desktop} {
    margin: 0 auto;
    margin-bottom: 120px;
    font-size: 34px;
    line-height: 40px;
  }
`

const MapsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 60px 0 0;
`
const MapCard = styled.div`
margin-bottom: 60px;
  background-color: #ffffff;
  width: 100%;
  @media ${props => props.theme.screen.desktop} {
    max-width: 570px;
  }
`
const MapHeader = styled.h3`
 color: ${props => props.theme.colors.red};
  font-size: 18px;
  line-height: 21px;
  font-family: "TiemposBold", serif;
  margin-bottom: 50px;
`
const MapLink = styled(NavLink)`
  display: block;
  max-width: 150px;
  text-decoration: none;
  margin: 50px auto;
  background-color: ${props => props.theme.colors.blue};
  color: #ffffff;
  text-transform: uppercase;
  padding: 9px 14px;
  
`

const MapImg = styled.img`
  width: 100%;
`
const MetroMaps = () => {
  return (
        <SectionStyled>
            <HeaderStyled>HEALTH ECOSYSTEM <br/> METRO MAPS
            </HeaderStyled>
            <ParagraphStyled>The health startup industry is exceptionally diverse – and so
                are the supporting, regulatory, funding etc. entities – the core
                objective of this metro map is to gather the most important
                players of the industry, who provide support for startups
                specifically focusing on the health and wellness sector.</ParagraphStyled>
            <MapsContainer>
                <MapCard>
                    <MapHeader>
                        HEALTH ECOSYSTEM MAP FOR <br/>
                        STARTUPS – HELSINKI REGION
                    </MapHeader>
                    <MapImg src={'./img/info-bank/ecomaps/MapExample.png'}/>
                    <MapLink to={'/ecomaps/helsinki'}>Read more</MapLink>
                </MapCard>
                <MapCard>
                    <MapHeader>
                        HEALTH ECOSYSTEM MAP FOR <br/>
                        STARTUPS – HELSINKI REGION
                    </MapHeader>
                    <MapImg src={'./img/info-bank/ecomaps/MapExample.png'}/>
                    <MapLink to={'/ecomaps/helsinki'}>Read more</MapLink>
                </MapCard>
            </MapsContainer>
        </SectionStyled>
  )
}

export default MetroMaps
