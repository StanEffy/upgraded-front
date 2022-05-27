import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

type T = {
    date: string,
    category: string,
    header: string,
    preview: string,
    link: string,
    img: string
}

const Story = styled.li`
  max-width: 326px;
  margin-bottom: 20px;
  text-align: left;
  @media ${props => props.theme.screen.desktop} {
    width: 416px;
    max-width: none;
    box-sizing: border-box;
    padding: 15px;
    &:hover{
      background-color: #ffffff;
      -webkit-box-shadow: 0px 0px 12px 2px rgba(0,0,0,0.2);
      box-shadow: 0px 0px 12px 2px rgba(0,0,0,0.2);
    }
  
  }
`
const StoryImage = styled.img`
  width: 100%;
`
const StoryDate = styled.p`
  font-family: "Avenir", sans-serif;
  font-size: 11px;
  line-height: 34px;
  margin: 0;
  color: #7c7c7c;
  margin-bottom: 20px;
  text-transform: uppercase;
  @media ${props => props.theme.screen.desktop}[
  ]
`
const StoryHeader = styled.h2`
  color: ${props => props.theme.colors.red};
  margin: 0 0 50px;
  height: 70px;
  width: 270px;
  font-family: "TiemposRegular", serif;
  font-size: 19px;
  line-height: 23px;
  @media ${props => props.theme.screen.desktop}{
    font-size: 26px;
    line-height: 31px;
    height: 90px;
    width: auto;
  }
`

const StoryPreview = styled.p`
  font-family: "Avenir", sans-serif;
  font-size: 11px;
  line-height: 15px;
  color: ${props => props.theme.colors.blue};
  margin: 0;
  height: 75px;
  overflow: hidden;
  
  text-overflow: fade;
  margin-bottom: 80px; 
  @media ${props => props.theme.screen.desktop}{
    font-size: 18px;
    line-height: 23px;
  }
`
const LinkToNew = styled(NavLink)`
  text-transform: uppercase;
  color: ${props => props.theme.colors.red};
  font-size: 11px;
  line-height: 34px;
  text-decoration: none;
  height: 75px;
  width: 230px;
  overflow: hidden;
  text-overflow: ellipsis;
 
  &:visited {
    color: ${props => props.theme.colors.red};
  } 
  &:hover {
      color: ${props => props.theme.colors.blue};
  }
  @media ${props => props.theme.screen.desktop}{
    font-size: 14px;
    line-height: 34px;
  }
`

const StoryItem:React.FC<T> = ({ img, date, header, preview, category, link }) => {
  return (
        <Story>
            <StoryImage src={img} alt={header}/>
            <StoryDate>{`${date} | ${category}`}</StoryDate>
            <StoryHeader>{header}</StoryHeader>
            <StoryPreview>{preview}</StoryPreview>
            <LinkToNew to={link}>KEEP READING</LinkToNew>
        </Story>
  )
}

export default StoryItem
