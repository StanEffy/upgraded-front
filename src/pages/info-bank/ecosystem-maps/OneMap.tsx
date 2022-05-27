import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import ecomapsMock from '../../../store/ecomapsMock'

const Section = styled.section`
 padding: 107px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
`
const Header = styled.h1`
  color: ${props => props.theme.colors.blue};
  font-family: "TiemposBold", serif;
  font-size: 24px;
  line-height: 29px;

  margin: 0 auto;
  margin-bottom: 40px;
  @media ${props => props.theme.screen.desktop}{
    font-size: 48px;
    line-height: 57px;
    margin-bottom: 70px;
  }
`

const Paragraph = styled.p`
  color: ${props => props.theme.colors.blue};
  font-family: "Avenir", sans-serif;
  font-size: 14px;
  line-height: 17px;
  max-width: 270px;
  margin: 0 auto;
  margin-bottom: 60px;
  @media ${props => props.theme.screen.desktop}{
    font-size: 34px;
    line-height: 41px;
    max-width: 650px;
  }
`
const ParagraphDescription = styled(Paragraph)`
  text-align: left;
  margin-top: 30px;
  @media ${props => props.theme.screen.desktop}{
    font-size: 34px;
    line-height: 41px;
    max-width: 950px;
  }
`

const ImageStyled = styled.img`
  width: 100%;
  margin-bottom: 70px;
`

const Button = styled(NavLink)`
  background-color: ${props => props.theme.colors.blue};
  color: #ffffff;
  width: 156px;
  padding: 8px 10px;
  text-transform: uppercase;
  text-decoration: none;
  &:hover {
    background-color: ${props => props.theme.colors.red};
   
  } 
  @media ${props => props.theme.screen.desktop} {
    width: 200px;
    font-size: 21px;
    line-height: 25px;
    padding: 12px 20px;
  }
`
const OneMap = () => {
  return (
        <Section>
            <Header>Oulu region</Header>
            <Paragraph>The Health Ecosystem Mapping is a project
                created and developed by Upgraded. The
                map of Oulu is created in collaboration with
                Business Oulu.</Paragraph>
            <div style={{
              position: 'relative',
              paddingBottom: '83%',
              paddingTop: 0,
              height: 0,
              width: '100%',
              maxWidth: '1300px',

              margin: '0 auto'
            }}><iframe style={{
              position: 'absolute',
              top: '0',
              left: '0',
              width: '100%',
              borderWidth: '0px',
              maxWidth: '100%',
              overflow: 'hidden'
            }} width="100%" height="100%" src="https://interactive-img.com/view?id=23316&iframe=true" /></div>
            <Button to={'/ecomaps'}>Back to maps</Button>
            <ParagraphDescription>{ecomapsMock[0].description}</ParagraphDescription>
        </Section>
  )
}

export default OneMap
