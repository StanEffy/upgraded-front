import React from 'react'
import styled from 'styled-components'
const descriptionArray = [
  'Brand visibility in all of our channels (newsletter, social media, website, marketing materials),',
  'utreach to 80+ health startups and hundreds of other stakeholders,',
  'Updates on the Finnish Health Startup Ecosystem,',
  'Invitations to networking events,',
  'Opportunity to create branded content for our channels,Brand visibility in all of our channels'
]

const SectionStyled = styled.section`
  background-image: url("./img/community/partners/bottom.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: right;
  @media ${props => props.theme.screen.desktop}{
    text-align: left;
  }
  
`
const SectionCover = styled.div`
  background-color: rgba(48, 66, 131, 0.8);
  color: #ffffff;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 110px;
  
  @media ${props => props.theme.screen.desktop}{
    padding-left: 65px;
    padding-right: 65px;
  }
`
const HeaderStyled = styled.h1`
  font-family: "TiemposBold", serif;
  font-size: 23px;
  line-height: 30px;
  margin: 0;
  padding-top: 52px;
  padding-bottom: 10px;
  @media ${props => props.theme.screen.desktop}{
    padding-top: 140px;
    font-size: 48px;
    line-height: 57px;
    padding-bottom: 20px;
  }
`
const PriceStyled = styled.p`
  font-family: "TiemposRegular", serif;
  margin: 0;
  margin-bottom: 50px;
  @media ${props => props.theme.screen.desktop}{
    margin-bottom: 140px;
    font-size: 24px;
    line-height: 48px;
  }
`
const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  text-align: left;
`
const ListItem = styled.li`
  padding-left: 20px;
  position: relative;
  padding-bottom: 20px;
  &::before{
    display: block;
    position: absolute;
    content: '';
    background-image: url("./img/utils/asterisk.png");
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    width: 15px;
    height: 14px;
    left: 0;
    top: 3px;
  }
  @media ${props => props.theme.screen.desktop}{
    padding-left: 40px;
    font-size: 24px;
    line-height: 29px;
    &::before {
      width: 21px;
      top: 5px;
      height: 20px;
    }
  }

`
const ParagraphInstructions = styled.p`
  display: none;
  @media ${props => props.theme.screen.desktop}{
    display: block;
    color: #ffffff;
    font-family: "TiemposRegular", serif;
    margin-top: 45px;
    font-size: 24px;
    line-height: 48px;
    text-align: left;
   
  }
`
const BottomSection = () => {
  return (
        <SectionStyled>
            <SectionCover>
                <HeaderStyled>Become a Supporting Partner
                </HeaderStyled>
                <PriceStyled>Price: 1000 EUR + VAT</PriceStyled>
                <List>
                    {descriptionArray.map((el, i) => <ListItem key={i}>{el}</ListItem>)}
                </List>
                <ParagraphInstructions>Become a Value Ally now by filling in the form!</ParagraphInstructions>
            </SectionCover>

        </SectionStyled>
  )
}

export default BottomSection
