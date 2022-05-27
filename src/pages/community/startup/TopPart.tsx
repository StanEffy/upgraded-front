import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
const SectionStyled = styled.section`
  text-align: left;
  background-color: rgba(48, 66, 131, 1);
  background-image: url("./img/community/partners/pattern.svg");
  background-position: bottom;
  background-size: cover;
  background-repeat: no-repeat;
  @media ${props => props.theme.screen.desktop} {
    background-size: contain;
  }
`
const SectionCover = styled.div`
  padding-top: 105px;
  background-color: rgba(48, 66, 131, 0.2);
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 66px;
  
  @media ${props => props.theme.screen.desktop}{
    padding-top: 205px;
    padding-left: 61px;
  }
`
const MainHeader = styled.h1`
  color:#ffffff;
  font-family: "TiemposBold", serif;
  font-size: 28px;
  line-height: 35px;
  text-transform: uppercase;
  margin-bottom: 60px;
  
  @media ${props => props.theme.screen.desktop}{
    font-size: 104px;
    line-height: 131px; 
    margin-bottom: 150px;
  }
`
const RedSpan = styled.span`
  color: ${props => props.theme.colors.red};
`
const ParagraphStyled = styled.p`
  color:#ffffff;
  font-size: 14px;
  line-height: 17px;
  margin-bottom: 30px;
  margin-top: 0;
  width: 80%;
  @media ${props => props.theme.screen.desktop}{
    width: auto;
    font-size: 34px;
    line-height: 41px;
    margin-bottom: 18px;
  }
`
const ButtonStyled = styled(NavLink)`
  display: none;
  text-decoration: none;
  text-transform: uppercase;
  padding: 9px 18px;
  width: 145px;
  box-sizing: border-box;
  background-color: ${props => props.theme.colors.red};
  color: #ffffff;
  
  margin-top: 60px;
  
  font-size: 11px;
  line-height: 13px;
  &:hover{
    background-color: ${props => props.theme.colors.blue};
  }
  @media ${props => props.theme.screen.tablet}{
    display: block;
  }
  @media ${props => props.theme.screen.desktop}{
    margin-top: 68px;
    width: 250px;
    font-size: 21px;
    line-height: 25px;
    text-align: center;
    padding: 19px 18px;
  }
`
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`
const ListItem = styled.li`
  position: relative;
  color: #ffffff;
  margin-bottom: 29px;
  font-size: 14px;
  
  padding-left: 45px;
  &:before {
    display: block;
    content: '';
    position: absolute;
    left: 0px;
    top: -3px;
    width: 27px;
    height: 27px;
    background-image: url("./img/community/startups/cross.png");
    background-repeat: no-repeat;
    background-size: contain;
  }
  @media ${props => props.theme.screen.desktop} {
    font-size: 22px;
    &:before {
      top: 0;
    }
  }
`
const ButtonStyledMobile = styled(ButtonStyled)`
  display: block;
  font-size: 12px;
  line-height: 14px;
  width: 165px;
  text-align: center;
  margin: 0 auto;
  @media ${props => props.theme.screen.tablet}{
    display: none;
  }
`
const ParagraphCover = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media ${props => props.theme.screen.desktop}{
    flex-direction: row;
  }
`
const FirstInnerCover = styled.div`
  max-width: 600px;
`
const SecondInnerCover = styled.div`
  max-width: 500px;
`
const ListArray = ['Not knowing who to contact', 'Having no direct contact to investors and other \n' +
'important stakeholders', 'Not knowing what other solutions are on the market/in development', 'Having limited resources that could have been shared with your peers,', 'Having no basis for validation,', 'Having limited' +
' marketing outreach,', 'Not knowing what\'s going on in the ecosystem.']

const TopPart = () => {
  return (
        <SectionStyled>
            <SectionCover>
            <MainHeader>BE PART OF<br/>
                <RedSpan>THE RISING HEALTH
                STARTUP COMMUNITY<br/></RedSpan>
                IN FINLAND!
            </MainHeader>
                <ParagraphCover>
                    <FirstInnerCover>
                        <ParagraphStyled>Being a lonely warrior in the field of
                        health entrepreneurship is tough.
                        Become our members and make your
                        entrepreneurial journey smoother! We
                        offer you not to have the usual hurdles,
                        such as
                        </ParagraphStyled>
                        <ButtonStyled to={'/'}>BECOME A Member</ButtonStyled>
                    </FirstInnerCover>
                    <SecondInnerCover>
                        <List>
                            {ListArray.map((el, i) => <ListItem key={i}>{el}</ListItem>)}
                        </List>
                        <ButtonStyledMobile to={'/'}>Become a member</ButtonStyledMobile>
                    </SecondInnerCover>
                </ParagraphCover>
            </SectionCover>
        </SectionStyled>
  )
}

export default TopPart
