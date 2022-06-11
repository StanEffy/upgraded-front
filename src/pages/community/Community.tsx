import React from 'react'
import styled from 'styled-components'

const SectionStyled = styled.section`
  padding-top: 112px;
  padding-bottom: 100px;
`

const MainCaption = styled.h2`
  width: 50%;
  max-width: 552px;

  margin: 0 auto;

  font-size: 24px;
  line-height: 31px;
  font-family: "TiemposBold";
  color: ${props => props.theme.colors.blue};

  @media ${props => props.theme.screen.desktop} {
    font-size: 60px;
    line-height: 75px;
  }
`
const ListStyled = styled.ul`
`
const Community = () => {
  return (
        <SectionStyled>
            <MainCaption>Community page</MainCaption>
        </SectionStyled>
  )
}

export default Community
