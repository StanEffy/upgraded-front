import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { Header2Styled } from '../../../components/text-headers/text-headers'

const SectionStyled = styled.section`
  background-color: #f9f9f9;
  padding-top: 100px;

  @media ${props => props.theme.screen.desktop} {
    padding: 180px 70px;
    & > h2 {
      margin-bottom: 80px;
    }
  }
`

const ListStyled = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  & > h2 {
    color: ${props => props.theme.colors.blue};
    font-family: "Avenir", sans-serif;
    font-size: 44px;
  }

  @media ${props => props.theme.screen.desktop} {
    display: flex;
    justify-content: space-between;
  }
`
const ListItemStyled = styled.li`
  background-color: #ffffff;
  @media ${props => props.theme.screen.tablet} {
    -webkit-box-shadow: 0px 0px 15px 2px rgba(0, 0, 0, 0.3);
    box-shadow: 0px 0px 15px 2px rgba(0, 0, 0, 0.3);
  }
  @media ${props => props.theme.screen.desktop} {
    width: 30%;
  }
`
const EventCard = styled(NavLink)`
  text-decoration: none;
    // border: 1px solid ${props => props.theme.colors.blue};
  &:hover h2 {
    color: ${props => props.theme.colors.red};
  }
`
const EventPicCover = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  min-height: 200px;

`
const EventLogoStyled = styled.img`
  width: 100%;
  height: 270px;


  background-color: rgba(255, 255, 255, 0.4);
`
const EventName = styled.h2`
  text-transform: uppercase;
  color: ${props => props.theme.colors.blue};
  text-align: center;
  width: 60%;

  margin: 40px auto;

`
const EventCardFooter = styled.table`

  border: none;
  width: 100%;
  text-align: left;
  padding-bottom: 65px;

  thead {
    color: ${props => props.theme.colors.red};
    font-weight: bold;
    text-transform: uppercase;
    font-size: 18px;
    padding-bottom: 10px;

  }

  td, th {
    padding-left: 35px;
  }

  td {
    color: ${props => props.theme.colors.blue};
  }
`
const MoreButton = styled(NavLink)`
  text-decoration: none;
  text-transform: uppercase;
  font-weight: bold;
  font-family: "Avenir", sans-serif;
  color: ${props => props.theme.colors.blue};
  font-size: 22px;
  padding: 20px;
  padding-right: 0;
  margin-top: 55px;
  width: 300px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: auto;
  position: relative;

  &:visited {
    color: ${props => props.theme.colors.blue};
  }

  span {
    position: relative;
    width: 30px;
    height: 30px;
    position: relative;
    overflow: hidden;

    top: -2px;
    padding-left: 20px;

    &:after {
      position: absolute;
      display: block;
      top: -5px;
      right: 10px;
      content: '';

      width: 8px;
      height: 25px;
      background-color: ${props => props.theme.colors.blue};
      transform: rotate(-40deg);
      border-left: none;
      border-bottom: none;
    }

    &:before {
      position: absolute;
      display: block;
      bottom: -5px;
      right: 10px;
      content: '';

      width: 8px;
      height: 25px;
      background-color: ${props => props.theme.colors.blue};
      transform: rotate(40deg);
      border-left: none;
      border-bottom: none;
    }
  }

  &:hover {
    color: ${props => props.theme.colors.red};
  }

  &:hover span::after,
  &:hover span::before {
    background-color: ${props => props.theme.colors.red};
  }
`
const SectionHeader = styled.h2`
  text-align: center;
  font-size: 24px;
  line-height: 29px;
  font-family: "TiemposBold", serif;
  color: ${props => props.theme.colors.blue};
  @media ${props => props.theme.screen.tablet} {
    text-align: left;
    font-size: 48px;
    line-height: 57px;
  }
`
const UpcomingOpportunities = () => {
  return (
        <SectionStyled>
            <SectionHeader>Upcoming opportunities</SectionHeader>
            <ListStyled>
                <ListItemStyled>
                    <EventCard to={'/'}>
                        <EventPicCover>
                            <EventLogoStyled/>
                            <EventName>
                                Intelligent health
                            </EventName>
                        </EventPicCover>
                        <EventCardFooter>
                            <thead>
                            <tr>
                                <th>when</th>
                                <th>where</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>October 12, 2021</td>
                                <td>Amsterdam</td>
                            </tr>
                            </tbody>
                        </EventCardFooter>
                    </EventCard>
                </ListItemStyled>
                <ListItemStyled>
                    <EventCard to={'/'}>
                        <EventPicCover>
                            <EventLogoStyled/>
                            <EventName>
                                Intelligent health
                            </EventName>
                        </EventPicCover>
                        <EventCardFooter>
                            <thead>
                            <tr>
                                <th>when</th>
                                <th>where</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>October 12, 2021</td>
                                <td>Amsterdam</td>
                            </tr>
                            </tbody>
                        </EventCardFooter>
                    </EventCard>
                </ListItemStyled>
                <ListItemStyled>
                    <EventCard to={'/'}>
                        <EventPicCover>
                            <EventLogoStyled/>
                            <EventName>
                                Intelligent health
                            </EventName>
                        </EventPicCover>
                        <EventCardFooter>
                            <thead>
                            <tr>
                                <th>when</th>
                                <th>where</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>October 12, 2021</td>
                                <td>Amsterdam</td>
                            </tr>
                            </tbody>
                        </EventCardFooter>
                    </EventCard>
                </ListItemStyled>
            </ListStyled>
            <MoreButton to={'/eventcalendar'}>More opportunities <span/></MoreButton>
        </SectionStyled>
  )
}

export default UpcomingOpportunities
