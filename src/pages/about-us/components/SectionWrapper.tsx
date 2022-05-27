import React from 'react'
import styled from 'styled-components'
type Props = {
    children: React.ReactNode
}
const SectionStyled = styled.section`

  @media ${props => props.theme.screen.tablet}{
    margin: 0 40px;
    padding-top: 60px;
    padding-bottom: 60px;
  }
  @media ${props => props.theme.screen.desktop}{
    margin: 0 75px;
    padding-top: 100px;
    padding-bottom: 100px;
  }
`
const SectionWrapper:React.FC<Props> = ({ children }) => {
  return (
        <SectionStyled>
            {children}
        </SectionStyled>
  )
}

export default SectionWrapper
