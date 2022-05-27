import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import routes from './admin-routes'

const NavStyled = styled.nav`
  display: flex;
  a {
    color: darkblue;
    display: inline-block;
    box-sizing: border-box;
    text-decoration: none;

    text-transform: uppercase;
    padding: 10px 20px;
    &:visited {
      color: darkblue;
    }
  }
`

const HeaderAdmin = function () {
  return (
    <header>
      <NavStyled>

        <NavLink to={routes.home} activeClassName="selected">
          Home
        </NavLink>
        <NavLink to={routes.events} activeClassName="selected">
          Events
        </NavLink>
        <NavLink to={routes.news} activeClassName="selected">
          News
        </NavLink>
        <NavLink to={routes.partners} activeClassName="selected">
          Partners
        </NavLink>
        <NavLink to={routes.team} activeClassName="selected">
          Team
        </NavLink>
        <NavLink to={routes.newsletter} activeClassName="selected">
          Newsletter
        </NavLink>
        <NavLink to={routes.ecomaps} activeClassName="selected">
          Ecomaps
        </NavLink>
      </NavStyled>
    </header>
  )
}

export default HeaderAdmin
