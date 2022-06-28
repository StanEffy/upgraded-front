import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const NavlinkStyled = styled(NavLink)`
  position: relative;
  z-index: 2;
  text-decoration: none;
  color: #ffffff;
  display: block;
  font-weight: bold;
  text-transform: uppercase;
  background-color: ${props => props.theme.colors.red};
  padding: 20px 24px;
  max-width: 210px;
  font-size: 12px;

  margin-bottom: 50px;

  &:hover {
    background-color: #ffffff;
    color: ${props => props.theme.colors.blue};
  }

  @media ${props => props.theme.screen.tablet} {
    font-size: 1rem;
  }
  @media ${props => props.theme.screen.desktop} {
    max-width: 290px;
    font-size: 1.25rem;
  }
`
const ButtonBecome = () => {
  return (
        <NavlinkStyled to={'/become-a-member'}>Become a member
        </NavlinkStyled>
  )
}

export default ButtonBecome
