import React from 'react'
import styled from 'styled-components'
import { Stories } from './ProjectsMockDate'
import StoryItem from './StoryItem'

const SectionStyled = styled.section`
  padding: 40px 20px;
`
const CommunityHeader = styled.h2`
  margin: 30px 0;
  color: ${props => props.theme.colors.blue};
  font-family: "TiemposBold", serif;
  font-size: 24px;
  line-height: 29px;
  text-align: left;
  @media ${props => props.theme.screen.desktop} {
    font-size: 48px;
    line-height: 58px;
  }
`
const StoriesList = styled.ul`
  text-align: left;
padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
`
const LoadMoreButton = styled.button`
  background-color: ${props => props.theme.colors.blue};
  display: block;
  max-width: 280px;
  margin: 50px auto 100px;
  color: #ffffff;
  padding: 9px 19px;
  text-transform: uppercase;
  box-sizing: border-box;
  text-align: center;
  font-size: 12px;
  line-height: 13px;
  border: none;
  @media ${props => props.theme.screen.desktop} {
    font-size: 21px;
    line-height: 25px;
  }
  &:hover {
    background-color: ${props => props.theme.colors.red};
  }
`
const CommunityStories = () => {
  return (
        <SectionStyled>
            <CommunityHeader>
                Community <br/> stories
            </CommunityHeader>
            <StoriesList>
                {Stories.map((el, i) => {
                  return (
                        <StoryItem link={el.link} header={el.header} img={el.img} date={el.date} category={el.category} preview={el.preview} key={el.header} />
                  )
                }) }
            </StoriesList>
            <LoadMoreButton>Load more stories</LoadMoreButton>
        </SectionStyled>
  )
}

export default CommunityStories
