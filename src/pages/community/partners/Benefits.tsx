import React from 'react'
import styled from 'styled-components'
import BenefitsSlider from './BenefitsSlider'
const SectionStyled = styled.section`
  background-color: #f9f9f9;
  padding-top: 60px;
  @media ${props => props.theme.screen.desktop} {
    padding-top: 106px;
    padding-bottom: 148px;
  }
`
const HeaderSecondary = styled.h2`
  color: ${props => props.theme.colors.red};
  font-size: 24px;
  line-height: 29px;
  max-width: 270px;
  margin: 0 auto;
  margin-bottom: 75px;
  font-family: "TiemposBold", serif;  
  @media ${props => props.theme.screen.desktop}{
    font-size: 48px;
    line-height: 58px;
    max-width: 530px; 
    margin-bottom: 140px;
  }
  
`
const HeaderMain = styled.h1`
  font-family: "TiemposRegular", serif;
  font-size: 23px;
  line-height: 30px;
  color: ${props => props.theme.colors.blue};
  max-width: 270px;
  margin: 0 auto;
  font-weight: normal;
  @media ${props => props.theme.screen.desktop} {
    margin: 0;
    text-align: left;
    max-width: 530px;
    font-size: 48px;
    line-height: 58px;
    padding-left: 65px;
  }
`
const PriceParagraph = styled.p`
  font-family: "TiemposRegular", serif;
  font-size: 16px;
  line-height: 30px;
  color: ${props => props.theme.colors.blue};
  max-width: 270px;
  margin: 0 auto;
  @media ${props => props.theme.screen.desktop}{
    margin: 0;
    text-align: left;
    max-width: 530px;
    font-size: 24px;
    line-height: 48px;
    padding-left: 65px;
  }
`
const ParagraphInstructions = styled.p`
  display: none;
  @media ${props => props.theme.screen.desktop}{
    display: block;
    color: ${props => props.theme.colors.blue};
    font-family: "TiemposRegular", serif;
    padding-left: 65px;
    font-size: 24px;
    line-height: 48px;
    text-align: left;
   
  }
`
const Benefits = () => {
  return (
        <SectionStyled>
            <HeaderSecondary>What do you get when
                becoming a partner?</HeaderSecondary>
            <HeaderMain>Become a Value Ally</HeaderMain>
            <PriceParagraph>Price: depending on the complexity
                of the project.</PriceParagraph>
            <BenefitsSlider />
            <ParagraphInstructions>Become a Value Ally now by filling in the form!</ParagraphInstructions>
        </SectionStyled>
  )
}

export default Benefits
