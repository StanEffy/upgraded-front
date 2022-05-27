import React from 'react'
import styled from 'styled-components'

export type PartnerBenefit = {
    img: string,
    header: string,
    description: string
}

const CardStyled = styled.div`
  padding-left: 40px;
  padding-top: 37px;
  background-color: #ffffff;
  color: ${props => props.theme.colors.blue};
  min-height: 300px;
  margin-right: 20px;
//  temporary after this line
  margin-bottom: 20px;
  text-align: left;
  @media ${props => props.theme.screen.desktop} {
    padding: 0;
    min-height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 277px;
    height: 254px;
    margin-bottom: 40px;
    &:hover{
      h2, img{
        display: none;
      }
      p{
        display: block;
      }
      -webkit-box-shadow: 0px 0px 12px 5px rgba(0,0,0,0.1);
      box-shadow: 0px 0px 12px 5px rgba(0,0,0,0.1);
    }
  }
`
const CardImage = styled.img`
  margin-bottom: 30px;
  width: 85px;
  height: 64px;
  object-fit: contain;
  @media ${props => props.theme.screen.desktop} {
    flex-grow: 2;
    width: auto;
    height: auto;
    max-width: 40%;
    max-height: 40%;
    
  }
`
const CardHeader = styled.h2`
  font-size: 18px;
  line-height: 21px;
  width: 100px;
  font-family: "TiemposRegular", Serif;
  margin: 0;
  margin-bottom: 12px;
  @media ${props => props.theme.screen.desktop} {
    width: 170px;
    text-align: center;
    
  }
`
const CardDescription = styled.p`
  margin: 0;
  font-size: 14px;
  line-height: 16px;
  width: 200px;
  @media ${props => props.theme.screen.desktop}{
    display: none;
    font-size: 16px;
    line-height: 19px;
  }
`

const BenefitsSliderItem:React.FC<PartnerBenefit> = ({ img, header, description }) => {
  return (
        <CardStyled>
            <CardImage src={img}/>
            <CardHeader>{header}</CardHeader>
            <CardDescription>{description}</CardDescription>
        </CardStyled>
  )
}

export default BenefitsSliderItem
