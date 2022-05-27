import React from 'react'
import styled from 'styled-components'
const SectionStyled = styled.section`
  padding: 105px 20px 0;
  
  @media ${props => props.theme.screen.desktop}{
    padding: 214px 70px 0;
  }
`
const HeaderStyled = styled.h1`
  font-size: 25px;
  line-height: 32px;
  font-family: "TiemposBold", serif;
  color: ${props => props.theme.colors.blue};
  text-transform: uppercase;
  text-align: left;
  @media ${props => props.theme.screen.desktop} {
    margin: 0;
    font-size: 104px;
    line-height: 131px;
  }
`
const RedSpan = styled.span`
  color: ${props => props.theme.colors.red};
`

const TopPart = () => {
  return (
        <SectionStyled>
            <HeaderStyled>Industry <br/>
                <RedSpan>insights</RedSpan>
            </HeaderStyled>
        </SectionStyled>
  )
}

export default TopPart
