import React from 'react'
import styled from 'styled-components'
const MainCaption = styled.h2`
  width: 50%;
  max-width: 552px;

  margin: 0 auto;
  padding-top: 112px;
  padding-bottom: 100px;
  font-size: 24px;
  line-height: 31px;
  font-family: "TiemposBold";
  color: ${props => props.theme.colors.blue};
  span {
    color: ${props => props.theme.colors.red}
  }
  @media ${props => props.theme.screen.desktop}{
    font-size: 60px;
    line-height: 75px;
  }
`
const SectionWhiteBg = styled.div`
  background-color: rgba(255,255,255,0.6);
`
const TopSectionCover = styled.section`
  margin-bottom: 50px;
  background-image: url("./img/about-us/about-us.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  @media ${props => props.theme.screen.tablet}{
   
  }
  @media ${props => props.theme.screen.desktop}{
    margin-bottom: 200px;
  }
`
const SubSectionsList = styled.ul`
  margin: 0 auto;
  padding: 0;
  display: none;
  flex-direction: row;
  list-style: none;
  a, a:visited{
    color: ${props => props.theme.colors.blue};
    text-decoration: none;
    text-transform: uppercase;
    padding: 10px 20px;
  }
  @media ${props => props.theme.screen.desktop}{
    display: flex;
    justify-content: center;
  }
`
const SubSectionLine = styled.div`
  width: 80%;
  background-color: rgba(48, 66, 131, 0.3);
  height: 5px;
  margin: 0 auto;
  display: none;
  @media ${props => props.theme.screen.desktop}{
    display: block;
    margin-top: 10px
  }
`
const TopSection = () => {
  return (
        <TopSectionCover>
            <SectionWhiteBg>
            <MainCaption>No good <span>health
                innovation</span> should be
                lost due to the lack of
                knowledge about it
            </MainCaption>
            <SubSectionsList>
                <li>
                    <a href="#services">Services</a>
                </li>
                <li>
                    <a href="#history">History</a>
                </li>
                <li>
                    <a href="#projects">Projects</a>
                </li>
                <li>
                    <a href="#team">Team</a>
                </li>
            </SubSectionsList>
            <SubSectionLine />
            </SectionWhiteBg>
        </TopSectionCover>
  )
}

export default TopSection
