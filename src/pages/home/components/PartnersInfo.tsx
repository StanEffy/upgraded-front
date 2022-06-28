import React from 'react'
import styled from 'styled-components'
import { Header2Styled } from '../../../components/text-headers/text-headers'
import { NavLink } from 'react-router-dom'

const SectionStyled = styled.section`
  display: flex;
  flex-direction: column;
  text-align: left;
  background-color: #f9f9f9;
  color: ${props => props.theme.colors.blue};
  padding: 0 20px;
  padding-top: 65px;
  @media ${props => props.theme.screen.tablet} {
    padding: 0 70px;
    flex-direction: row;
    padding-bottom: 70px;
    padding-top: 50px;
  }

  h2, h3 {
    color: ${props => props.theme.colors.blue};

  }
`

const SectionInnerCoverStyled = styled.div`
  &:nth-child(2) {
    display: flex;
    margin-top: 40px;
    margin-bottom: 80px;
    flex-direction: column;
    @media ${props => props.theme.screen.tablet} {
      min-width: 50%;
      padding-top: 40px;
    }
    @media ${props => props.theme.screen.desktop} {

    }
  }

  @media ${props => props.theme.screen.tablet} {
    color: ${props => props.theme.colors.blue};
    padding-top: 32px
  }
`
const ParagraphStyled = styled.p`
  color: ${props => props.theme.colors.blue};
  margin-top: 36px;
  font-size: 12px;
  line-height: 14px;
  @media ${props => props.theme.screen.desktop} {
    font-size: 21px;
    line-height: 28px;
  }
`
const InputStyled = styled.input`
  height: 22px;
  width: 100%;
  flex-grow: 2;
  border: none;

  padding-left: 20px;
  padding-top: 10px;
  font-size: 12px;

  &:focus {
    outline: none;
    border-bottom: 3px solid red;
    box-sizing: content-box;
  }

  @media ${props => props.theme.screen.desktop} {
    padding-left: 40px;
    padding-top: 20px;
    font-size: 18px;
    line-height: 22px;
    padding-bottom: 10px
  }

`
const ButtonSubmitStyled = styled.a`
  background-color: ${props => props.theme.colors.blue};
  box-sizing: border-box;
  flex-grow: 1;
  color: #ffffff;
  text-transform: uppercase;
  font-family: "Avenir", sans-serif;
  padding: 10px 20px;
  text-decoration: none;
  font-size: 12px;
  border: 1px solid #ffffff;

  &:hover {
    background-color: ${props => props.theme.colors.red};
  }

  &:visited {
    color: white;
  }

  @media ${props => props.theme.screen.desktop} {
    font-size: 24px;
    line-height: 20px;
    padding: 19px 40px;
  }
`

const NumbersCover = styled(NavLink)`
  color: #ffffff;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: "AvenirBold", sans-serif;
  position: relative;

  &:nth-child(1) {
    align-self: flex-end;
    margin-right: 20px;
  }

  &:nth-child(2) {
    align-self: flex-start;
    margin-right: 20px;
  }

  &:visited {
    color: #ffffff;
  }

  &:hover {
    & p:nth-child(2) {
      color: ${props => props.theme.colors.red};
    }

  }


}

@media ${props => props.theme.screen.tablet} {
  &:nth-child(1) {

    margin-left: auto;
  }

  &:nth-child(2) {

    margin-right: auto;
    margin-left: 180px;
  }
}

@media ${props => props.theme.screen.desktop} {
  //padding: 0 70px;
  margin-bottom: 40px;
  &:after {
    top: -60px;
    left: 50px;
    background-image: url("./img/home-page/swirl.gif");
    background-size: contain;
    width: 230px;
    height: 230px;
  }

  &:nth-child(1) {

    margin-left: auto;
  }

  &:nth-child(2) {

    margin-right: auto;

  }
}

`
const FormStyled = styled.form`

  @media ${props => props.theme.screen.desktop} {
    margin-top: 80px;
    margin-bottom: 130px;
  }

`
const FieldsetStyled = styled.fieldset`
  padding: 0;
  margin: 0;
  border: none;
  display: flex;
  border: 1px solid #97abc9;
`
const NumberStyled = styled.p`
  font-size: 44px;
  background-image: url("./img/home-page/Star.svg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: top;
  width: 260px;
  height: 260px;
  text-align: center;
  box-sizing: border-box;
  padding-top: 98px;
  margin: 0;
  @media ${props => props.theme.screen.tablet} {
    padding-top: 58px;
    width: 180px;
    height: 180px;
  }

  @media ${props => props.theme.screen.desktop} {
    width: 260px;
    height: 260px;
    padding-top: 98px;
    font-size: 54px;
    padding-top: 88px;
  }
`

const NumberCaptionStyled = styled.p`
  margin: 20px 0;
  margin-top: 30px;
  font-size: 38px;
  font-family: "Avenir", sans-serif;
  color: ${props => props.theme.colors.blue};
  text-transform: uppercase;
`
const SubscribeCaption = styled.h3`
  font-size: 14px;
  line-height: 16px;
  margin-top: 40px;
  margin-bottom: 40px;
  @media ${props => props.theme.screen.desktop} {
    font-size: 24px;
    line-height: 28px;
  }
`
const PartnersInfo = () => {
  return (
        <SectionStyled>
            <SectionInnerCoverStyled>
                <Header2Styled textColor={'white'}>Health & wellbeing startups and innovations unite!</Header2Styled>
                <ParagraphStyled>
                    Upgraded is a non-profit association for health & wellbeing
                    startups and innovations in Finland, founded in 2012. We are
                    an active community of over 70 members and dozens of
                    partners and other friends – and we warmly welcome anyone
                    interested in health to join us!
                </ParagraphStyled>
                <ParagraphStyled>
                    Our goal is to make sure that startup innovations have an
                    established role in society as a source of health and wellbeing
                    solutions. No good health innovation should be lost due to the
                    lack of knowledge about it. We build the bridges between the
                    different pieces of startups, corporates, public sector & universities.
                    We believe, that the industry thrives on cooperation and everyone
                    will reach their goals faster and easier when working together.
                </ParagraphStyled>
                <SubscribeCaption>Subscribe to our monthly newsletter to stay tuned of
                    our activities and of the health startup scene in Finland!</SubscribeCaption>
                <FormStyled>
                    <FieldsetStyled>
                        <InputStyled type="email" placeholder={'Email'} required/>
                        <ButtonSubmitStyled
                            target={'_blank'}
                            href={'https://upgraded.us5.list-manage.com/subscribe?u=103e1482ca6ba7daba7272565&id=ca8b9b7d29'}>Subscribe</ButtonSubmitStyled>
                    </FieldsetStyled>
                </FormStyled>
            </SectionInnerCoverStyled>
            <SectionInnerCoverStyled>
                <NumbersCover to={'/members'}>
                    <NumberStyled>
                        80
                    </NumberStyled>
                    <NumberCaptionStyled>
                        Members
                    </NumberCaptionStyled>
                </NumbersCover>
                <NumbersCover to={'/partners'}>
                    <NumberStyled>
                        45
                    </NumberStyled>
                    <NumberCaptionStyled>
                        partners
                    </NumberCaptionStyled>
                </NumbersCover>
            </SectionInnerCoverStyled>
        </SectionStyled>
  )
}

export default PartnersInfo
