import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const ErrorSection = styled.section`
  background-image: url("./img/utils/error.jpg");
  background-size: cover;
  background-position: center;
`
const ErrorBackground = styled.div`
  padding: 140px 20px;
  text-align: left;
  background-color: rgba(255, 255, 255, 0.7);
  @media ${props => props.theme.screen.desktop}{
    padding: 235px 120px;
    display: flex;
    justify-content: space-between;
  }
`
const ErrorNumber = styled.p`
  font-size: 72px;
  line-height: 86px;
  margin: 0;
  margin-bottom: 20px;
  font-family: "TiemposBold", serif;
  color: ${props => props.theme.colors.blue};
  @media ${props => props.theme.screen.desktop}{
    font-size: 260px;
    line-height: 316px;
  }
`
const ErrorCover = styled.div`
   
  
`
const ErrorRed = styled.p`
  font-family: "TiemposBold", serif;
 color: ${props => props.theme.colors.red};
  margin: 0;
  margin-bottom: 30px;
  font-size: 24px;
  line-height: 27px;
  @media ${props => props.theme.screen.desktop}{
    font-size: 48px;
    line-height:57px;
  }
`
const ErrorParagraph = styled.p`
  font-size: 12px;
  line-height: 14px;
  color: ${props => props.theme.colors.blue};
  margin-bottom: 45px;
  @media ${props => props.theme.screen.desktop}{
    font-size: 20px;
    line-height: 24px;
  }
`

const ErrorBack = styled(NavLink)`
  display: block;
  width: 170px;
  padding: 10px 19px;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  background-color: ${props => props.theme.colors.blue};
  color: #ffffff;
  font-family: "Avenir", sans-serif;
  &:visited{
    color: #ffffff;
  }
  &:hover{
    background-color: ${props => props.theme.colors.red};
  }
  @media ${props => props.theme.screen.desktop}{
    
  }
`
const ErrorPage = () => {
  return (
        <ErrorSection>
            <ErrorBackground>
                <ErrorNumber>404</ErrorNumber>
                <ErrorCover>
                    <ErrorRed>Oops! That Page <br/> Can’t Be Found.</ErrorRed>
                    <ErrorParagraph>The page requested couldn't be found. This could <br/>be a spelling error in the URL or a removed page.</ErrorParagraph>
                    <ErrorBack to={'/'}>Back to home</ErrorBack>
                </ErrorCover>
            </ErrorBackground>
        </ErrorSection>
  )
}

export default ErrorPage
