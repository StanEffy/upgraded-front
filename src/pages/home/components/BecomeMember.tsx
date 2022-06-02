import React from 'react'
import styled from 'styled-components'
import ButtonBecome from './ButtonBecome'

const SectionStyled = styled.section`
  display: flex;
  width: 100%;
  box-sizing: border-box;
  flex-direction: column;
  padding-left: 20px;
  background-color: rgba(48, 66, 131, 1);
  border-bottom: 1px solid white;
  overflow: hidden;
  position: relative;

  @media ${props => props.theme.screen.tablet} {

  }
  @media ${props => props.theme.screen.desktop} {
    flex-direction: row;
    padding-left: 70px;
    padding-top: 172px;
  }
`
const HeaderCover = styled.div`
  width: 100%;
  @media ${props => props.theme.screen.tablet} {
    width: 50%;
  }

`
const HeaderStyled = styled.h2`
  text-align: left;
  position: relative;
  z-index: 2;
  font-size: 30px;
  line-height: 37px;
  padding-top: 200px;
  margin: 0;
  margin-bottom: 100px;
  max-width: 320px;
  color: #ffffff;
  font-family: "TiemposBold", serif;
  text-shadow: 0px 2px 3px rgba(48, 66, 131, 0.6);

  @media ${props => props.theme.screen.tablet} {
    padding-left: 10px;
    font-size: 40px;
    max-width: none;
    width: 540px;
  }
  @media ${props => props.theme.screen.desktop} {
    font-size: 60px;
    line-height: 70px;
    padding-bottom: 82px;
    padding-left: 0;
    width: 640px;
  }



`

const ButtonCover = styled.div`
  align-self: flex-end;
  margin-left: auto;
  padding-bottom: 70px;

`
const ImageCover = styled.div`
  align-self: flex-end;

  width: 340px;
  height: 328px;


  @media ${props => props.theme.screen.tablet} {
    width: 90vw;
    height: 85vw;
  }
  @media ${props => props.theme.screen.desktop} {
    margin-left: auto;
    width: 640px;
    height: 617px;
  }
`

const ImageStyled = styled.div`
  background-color: transparent;
  border: none !important;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url("./img/home-page/health100.png");
`
const BecomeMember = () => {
  return (
        <SectionStyled>
            <HeaderCover>
                <HeaderStyled>
                    Building bridges in <span style={{ color: 'rgb(237 53 86)' }}>healthtech</span> since 2012
                </HeaderStyled>
                <ButtonBecome/>
            </HeaderCover>
            <ImageCover>
                <ImageStyled/>
            </ImageCover>
        </SectionStyled>
  )
}

export default BecomeMember
