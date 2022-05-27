import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import ecoMaps from '../../../store/ecomapsMock'

const Section = styled.section`
  background-color: #f9f9f9;
`

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  margin-top: 45px;
  padding: 0 20px ;
  @media ${props => props.theme.screen.desktop}{
    margin-top: 120px;
    display: flex;
    flex-wrap: wrap;
    padding: 0 70px ;
    justify-content: space-between;
    gap: 20px;
  }
`
const MapName = styled.h2`
  font-family: "TiemposBold", serif;
  font-size: 24px;
  line-height: 29px;
  color: ${props => props.theme.colors.red};
  margin: 0 auto;
  margin-bottom: 30px;
  @media ${props => props.theme.screen.desktop} {
    font-size: 48px;
    line-height: 57px;
    margin-bottom: 50px;
  }
`
const ListItem = styled.li`
  width: 100%;
  max-width: 574px;
  margin-bottom: 50px;
  @media ${props => props.theme.screen.desktop} {
    margin-bottom: 110px;
  }
`
const MapLink = styled(NavLink)`
  display: block;
  width: 100%;
  max-width: 574px;
  &:hover{
    -webkit-box-shadow: 0px 0px 10px 3px rgba(0,0,0,0.1);
    box-shadow: 0px 0px 10px 3px rgba(0,0,0,0.1);
  }
  
  img {
    width: 100%;
  }
`
const MapsList = () => {
  return (
        <Section>
            <List>
                {ecoMaps.map((city) => {
                  return (
                        <ListItem key={city.cityName}>
                            <MapName>{city.cityName}</MapName>
                            <MapLink to={`/ecomaps/${city.cityName.toLowerCase()}`}>
                                <img src={city.link} alt={`ecohealthmap of ${city.cityName}`}/>
                            </MapLink>
                        </ListItem>
                  )
                })}

            </List>
        </Section>
  )
}

export default MapsList
