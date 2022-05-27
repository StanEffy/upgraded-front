import styled from 'styled-components'
import React from 'react'

type Props = {
    textColor?: String,
    children: React.ReactNode | String;
}

const HeaderStyled2 = styled.h2`
  text-align: left;
  font-family: "TiemposBold", serif;
  margin: 0;
  padding-left: 20px;
  font-size: ${props => props.theme.fontsSize.caption.small};
  @media ${props => props.theme.screen.tablet}{
    font-size: ${props => props.theme.fontsSize.caption.medium};
  }
  @media ${props => props.theme.screen.desktop}{
    font-size: 44px;
    padding-left:  0px;
    line-height: 58px;
  }
  
  
`
export const Header2Styled:React.FC<Props> = ({ textColor, children }) => {
  return <HeaderStyled2>{children}</HeaderStyled2>
}
