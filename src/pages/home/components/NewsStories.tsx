import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
const SectionStyled = styled.section`
  background-color: #f9f9f9;
  &>h2 {
    color: ${props => props.theme.colors.blue};
    font-family: "Avenir", sans-serif;
    font-size: 44px;
    margin: 0;
    text-align: left;
  }
  @media ${props => props.theme.screen.desktop} {
    padding: 0px 70px;
    padding-top: 70px;
    &>h2 {
      margin-bottom: 80px;
    }
    margin-bottom: 70px;
  }
`
const ListStyled = styled.ul`
 list-style: none;
  margin: 0;
  padding: 0;
  @media ${props => props.theme.screen.desktop} {
    display: flex;
    justify-content: space-between;
  }
`
const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  border:2px solid ${props => props.theme.colors.red};
  background-color: #ffffff;
  @media ${props => props.theme.screen.tablet}{
    -webkit-box-shadow: 0px 0px 12px 2px rgba(0,0,0,0.2);
    box-shadow: 0px 0px 12px 2px rgba(0,0,0,0.2);
  }
  @media ${props => props.theme.screen.desktop} {
    width: 30%;
   
  }
`
const NewsDateWho = styled.p`
  color: #7b7b7b;
  font-size: 10px;
  margin-bottom: 30px;
`
const ArticleImage = styled.img`
  width: 100%;
  height: 270px;
  object-fit: contain;
  padding: 5px 20px;
  box-sizing: border-box;
`
const ArticleStyled = styled.article`
  background-color: #ffffff;
  padding: 5px 20px;
  text-align: left;
  
`
const NewsHeader = styled(NavLink)`
  color: ${props => props.theme.colors.red};
  text-decoration: none;
  font-size: 26px;
  padding-right: 60px;
`

const ParagraphStyled = styled.p`
  font-size: 12px;
  color: #000000;
`
const MoreButton = styled(NavLink)`
  text-decoration: none;
  text-transform: uppercase;
  font-weight: bold;
  font-family: "Avenir", sans-serif;
  color: ${props => props.theme.colors.blue};
  font-size: 22px;
  padding: 20px;
  padding-right: 0;
  margin-top: 55px;
  width: 300px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-left: auto;
  position: relative;
  &:visited{
    color: ${props => props.theme.colors.blue};
  }
  span {
    position: relative;
    width: 30px;
    height: 30px;
    position: relative;
    overflow: hidden;
    
    top: -2px;
    padding-left: 20px;
    &:after{
      position: absolute;
      display: block;
      top: -5px;
      right: 10px;
      content: '';
      
      width: 8px;
      height: 25px;
      background-color: ${props => props.theme.colors.blue};
      transform: rotate(-40deg);
      border-left: none;
      border-bottom: none;
    }
    &:before{
      position: absolute;
      display: block;
      bottom: -5px;
      right: 10px;
      content: '';

      width: 8px;
      height: 25px;
      background-color: ${props => props.theme.colors.blue};
      transform: rotate(40deg);
      border-left: none;
      border-bottom: none;
    }
  }
  
  &:hover {
    color: ${props => props.theme.colors.red};
  }
  &:hover span::after,
  &:hover span::before{
    background-color: ${props => props.theme.colors.red};
  }
`
const NewsStories = () => {
  return (
        <SectionStyled>
            <h2>News & Stories</h2>
            <ListStyled>
                <ListItem>
                    <ArticleImage src={'./img/logo/logo.png'} />
                    <ArticleStyled>
                        <NewsDateWho>APR 1 | COMMUNITY UPGRADED MEMBERS</NewsDateWho>
                        <NewsHeader to={'/'}>Digitalization of
healthcare accelerates –
Buddy Healthcare
receives growth capital</NewsHeader>
                        <ParagraphStyled>
                            Finnish Buddy Healthcare Ltd Oy has received
                            a total of 2 million EUR of growth capital to be
                            used for internationalization. Buddy Healthcare
                            simplifies and optimizes communication between
                            patients and…
                        </ParagraphStyled>
                    </ArticleStyled>
                </ListItem>
                <ListItem>
                    <ArticleImage src={'./img/logo/logo.png'} />
                    <ArticleStyled>
                        <NewsDateWho>APR 1 | COMMUNITY UPGRADED MEMBERS</NewsDateWho>
                        <NewsHeader to={'/'}>Digitalization of
                            healthcare accelerates –
                            Buddy Healthcare
                            receives growth capital</NewsHeader>
                        <ParagraphStyled>
                            Finnish Buddy Healthcare Ltd Oy has received
                            a total of 2 million EUR of growth capital to be
                            used for internationalization. Buddy Healthcare
                            simplifies and optimizes communication between
                            patients and…
                        </ParagraphStyled>
                    </ArticleStyled>
                </ListItem>
                <ListItem>
                    <ArticleImage src={'./img/logo/logo.png'} />
                    <ArticleStyled>
                        <NewsDateWho>APR 1 | COMMUNITY UPGRADED MEMBERS</NewsDateWho>
                        <NewsHeader to={'/'}>Digitalization of
                            healthcare accelerates –
                            Buddy Healthcare
                            receives growth capital</NewsHeader>
                        <ParagraphStyled>
                            Finnish Buddy Healthcare Ltd Oy has received
                            a total of 2 million EUR of growth capital to be
                            used for internationalization. Buddy Healthcare
                            simplifies and optimizes communication between
                            patients and…
                        </ParagraphStyled>
                    </ArticleStyled>
                </ListItem>
            </ListStyled>
            <MoreButton to={'/news-and-stories'}>View all<span /></MoreButton>
        </SectionStyled>
  )
}

export default NewsStories
