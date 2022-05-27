import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
const ButtonStyled = styled.button`
  
`

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
  width: 129px;
  font-size: 12px;
  
  margin-bottom: 50px;
  &:hover{
    background-color: #ffffff;
    color: ${props => props.theme.colors.blue};
  }
`
const ButtonBecome = () => {
  return (
        <NavlinkStyled to={'/become-a-member'}>Become a member
        </NavlinkStyled>
  )
}

export default ButtonBecome
