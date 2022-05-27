import React from 'react'
import styled from 'styled-components'
import TopPart from './TopPart'
import Benefits from './Benefits'
import BottomSection from './BottomSection'

const SectionStyled = styled.section`
`

const Partners = () => {
  return (
        <SectionStyled>
            <TopPart />
            <Benefits />
            <BottomSection />
        </SectionStyled>
  )
}

export default Partners
