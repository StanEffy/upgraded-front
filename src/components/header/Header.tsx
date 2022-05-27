import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import routes from '../../utils/routes'
import { NavLink, useLocation } from 'react-router-dom'

type Props = {
    linkNames: {
        linkName: String,
        route: String
    }[],
    theme?: any,
}
const HeaderStyled = styled.header`
  background-color: ${props => props.theme.colors.blue};
  position: fixed;
  //I know z-index shouldn't be this high, but otherwise arrows on slider mess it all up
  z-index:9999;
  width: 100%;
  max-width: 1920px;
  top: 0;
`
const NavStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  position: relative;
  padding: 0px 20px;
  //padding-top: 15px;
  //
  align-items: center;
  img {
    width: 152px;
    height: 34px;
  }
  @media ${props => props.theme.screen.desktop}{
    padding: 0px 60px;
    img {
    width: 290px;
    height: 65px;
  }
    
  }
`
const ListStyled = styled.ul`
  position: absolute;
  left: 0;
  top: 108px;
  background-color: ${props => props.theme.colors.blue};
  width: 100%;
  margin: 0;
  list-style: none;
  padding: 0;

  @media ${props => props.theme.screen.tablet}{
    position: static;
    background-color: transparent;
    width: auto;
    display: flex;
    flex-direction: row;
    
  }

`
const ListItem = styled.li`
  text-transform: uppercase;
  font-family: "Avenir", sans-serif;
  position: relative;
  box-sizing: border-box;
 
  & ul {
    display: none;
    border: 1px solid ${props => props.theme.colors.red};
  }

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.red};

    &::after {
      position: absolute;
      content: '';
      display: block;
      width: 90%;
      height: 4px;
      background-color: rgb(237 53 86);
      bottom: -4px;
      left: 0;
    }

    & ul {
      display: block;
      border: 1px solid ${props => props.theme.colors.red};

    }
  }
`
const SubRoutesList = styled.ul`
  position: absolute;
  margin: 0;
  list-style: none;
  background-color: rgba(48, 66, 131, 0.7);
  padding: 20px;
  top: 58px;
  & a{
    display: inline-block;
    text-decoration: none;
    color: #ffffff;
    font-weight: bold;
    padding: 10px 20px;
    text-align: left;
    &:visited{
      color: #ffffff;
    }
    &:hover,
    &:focus{
      color: ${props => props.theme.colors.red};
    }
  }
  
  @media ${props => props.theme.screen.tablet}{
  & a {
    min-width: 200px;
  }
} 
  @media (min-width: 1105px){
    top: 84px;
  }
`
const NavCrutch = styled.div`
  width: 40px;
  height: 40px;
  display: none;
  @media ${props => props.theme.screen.tablet}{
    
  }
`
const NavToggle = styled.button`
  width: 40px;
  height: 40px;
  position: relative;
  top: -4px;
  left: 13px;
  box-sizing: border-box;
  background-color: transparent;
  
  margin-top: 10px;
  border: none;
  
  display: flex;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media ${props => props.theme.screen.tablet}{
    display: none;
  }
`

const NavToggleTopLine = styled.div`
  width: 20px;
  height: 3px;
  background-color: #ffffff;
  margin-bottom: 3px;
`
const NavToggleMidLine = styled(NavToggleTopLine)`

`
const NavToggleBottomLine = styled(NavToggleTopLine)`

`
const MobileMenu = styled.ul`
  background-color:${props => props.theme.colors.blue};
  position: absolute;
  width: 100%;
  box-sizing: border-box;
  
  height: 100vh;
  margin: 0;
  padding: 0;
  
  padding-top: 40px;
  left: 0;
  top: 50px;
  list-style: none;
  text-align: left;
  padding-left: 40px;
  a {
    text-align: left;
  }
`
const ListItemMobile = styled.li`
 
  padding-right: 25px;
`
const SubRoutesListMobile = styled.ul`
   list-style: none;
  margin: 0;
  padding: 0;
  text-align: left;
  margin-bottom: 35px;
  a, a:visited{
    color: #ffffff;
    text-decoration: none;
    display: inline-block;
    height: 100%;
    font-size: 16pt;
    width: 100%;
  }
  li{
    padding-top: 6px;
    padding-bottom: 6px;
  }
`
const MobileNavLink = styled(NavLink)`
  display: inline-block;
  width: 50%;
  padding-top: 5px;
`
const MobileArrowMenu = styled.div`
  width: 50%;
  height: 40px;
  
  box-sizing: border-box;

  
`
const Arrow = styled.div`
  height: 40px;
  width: 40px;
  
  box-sizing: border-box;
  background-image: url("./img/home-page/arrow.png");
  margin-left: auto;
  background-repeat: no-repeat;
  background-position: right;
`
const MobileNavLinkCover = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 35px;
`
const Header:React.FC<Props> = ({ linkNames, theme }) => {
  const [isMenuOpened, toggleMenuOpened] = useState(false)
  const [menuName, setMenuName] = useState(null)

  const location = useLocation()

  let activeClassName = ''
  let logoColor = 'white'

  if (location.pathname === '/eventcalendar') {
    activeClassName = 'header-transparent'
    logoColor = 'blue'
  } else if (location.pathname === '/contact-us' || location.pathname === '/insights') {
    activeClassName = 'header-grey'
    logoColor = 'blue'
  }

  const clickArrowHandler = (activeMenuName:any) => {
    if (activeMenuName === menuName) setMenuName(null)
    else {
      setMenuName(activeMenuName)
    }
  }
  const closeMenu = () => {
    toggleMenuOpened(false)
  }

  return (
        <HeaderStyled className={activeClassName}>
            <NavStyled>
                <NavCrutch />
                <NavLink className={'main-nav-link main-nav-link--logo'} to={'/'}>
                    <img className={'main-nav--logo'} src={`./img/logo/logo_${logoColor}.png`} width={'290'} height={'65'}/>
                </NavLink>
                <ListStyled className={'mobileMenuHidden'}>
                    {routes.map(route => <ListItem key={route.linkName} className={`${route.linkName}` }>
                        <NavLink className={'main-nav-link'} onClick={() => toggleMenuOpened(false)} to={route.route}>{route.linkName}</NavLink>
                            {route.subRoutes
                              ? <SubRoutesList className={route.linkName}>
                                {route.subRoutes.map(sub => {
                                  return <li key={`sub-${route.linkName}`}>
                                      <NavLink to={sub[1]} onClick={() => console.log('CLICKED')}>{sub[0]}</NavLink>
                                    </li>
                                })}
                                </SubRoutesList>
                              : null

                                 }
                    </ListItem>
                    )}
                </ListStyled>
                <MobileMenu className={isMenuOpened ? 'mobileMenu' : 'mobileMenuHidden'}>
                    {routes.map(route => <ListItemMobile key={route.linkName} className={`${route.linkName}`}>
                            <MobileNavLinkCover>
                                <MobileNavLink className={'main-nav-link--mobile'} to={route.route}>{route.linkName}</MobileNavLink>
                                <MobileArrowMenu className={(menuName === route.linkName) ? 'mobile-menu--arrow-down' : ''} onClick={() => clickArrowHandler(route.linkName)}>
                                    <Arrow />
                                </MobileArrowMenu>
                            </MobileNavLinkCover>
                            {route.subRoutes
                              ? <SubRoutesListMobile className={(menuName === route.linkName) ? '' : 'mobile--sub-menu__hidden'}>
                                    {route.subRoutes.map(sub => {
                                      return <li key={`sub-${route.linkName}`}>
                                            <NavLink onClick={() => closeMenu()} to={sub[1]}>{sub[0]}</NavLink>
                                        </li>
                                    })}
                                </SubRoutesListMobile>
                              : null

                            }
                        </ListItemMobile>
                    )}
                </MobileMenu>
                <NavToggle className={isMenuOpened ? 'buttonCross' : ''} onClick={() => toggleMenuOpened(!isMenuOpened)}><NavToggleTopLine /> <NavToggleMidLine /> <NavToggleBottomLine /></NavToggle>
            </NavStyled>
        </HeaderStyled>
  )
}

export default Header
