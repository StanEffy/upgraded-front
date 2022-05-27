import React, { useState } from 'react'
import styled from 'styled-components'
import { knowledgeData } from './KnowledgeData'

const SectionStyled = styled.section`
  padding: 70px 20px;
  
  @media ${props => props.theme.screen.desktop} {
    padding: 110px 70px;
  }
`
const HeaderStyled = styled.h2`
  font-size: 25px;
  line-height: 35px;
  font-family: "TiemposBold", serif;
  text-transform: uppercase;
  text-align: center;
  color: ${props => props.theme.colors.blue};
  margin-bottom: 40px;
  @media ${props => props.theme.screen.desktop} {
    margin-bottom: 80px;
    font-size: 48px;
    line-height: 58px;
  }
`
const ParagraphStyled = styled.p`
  font-size: 25px;
  line-height: 35px;
  font-family: "Avenir", sans-serif;
  color: ${props => props.theme.colors.blue};
  max-width: 900px;
  margin-bottom: 80px;
  
  @media ${props => props.theme.screen.desktop} {
    margin: 0 auto;
    margin-bottom: 120px;
    font-size: 34px;
    line-height: 40px;
  }
`
const DropdownHeader = styled.button`
  background-color: ${props => props.theme.colors.red};
  text-transform: uppercase;
  color: #ffffff;
  width: 100%;
  padding: 15px 20px;
  text-align: left;
  border: none;
  position: relative;
  &:after{
    display: block;
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    background-image: url("./img/utils/arrow.png");
    background-size: contain;
    background-repeat: no-repeat;
    right: 20px;
    top: 12px;
  }
  
`
const HeadersList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  > li {
    width: 100%;
    margin-bottom: 30px;
  }
`
const InnerList = styled.ul`
  margin: 0;
  padding: 0 14px;
  border: 1px solid ${props => props.theme.colors.red};
  list-style: none;
  display: none;
  color: ${props => props.theme.colors.blue};
`
const InnerListItem = styled.li`
border-bottom: 2px solid #C4C4C4;
  &:last-of-type {
    border: none;
  }
  text-align: left;
  display: flex;
  align-items: center;
  img {
    padding: 9px;
    width: 33px;
    height: 33px;
    background-size: contain;
    background-position: center;
  }
  a {
    text-decoration: none;
    color: ${props => props.theme.colors.blue};
    
    &:visited{
      color: ${props => props.theme.colors.blue};
    }
    &:hover{
      color: ${props => props.theme.colors.red};
    }
  }
`

const ImportantLinks = () => {
  const [opened, toggleOpened] = useState(false)
  const [listName, setListName] = useState('')

  const handleClick = (header: string) => {
    setListName(header)
    toggleOpened(true)
  }
  return (
        <SectionStyled>
            <HeaderStyled>KNOWLEDGE BANK</HeaderStyled>
            <ParagraphStyled>Below, we are collecting a knowledge bank of services and
                collaboration opportunities offered by public and private
                organizations for health startups. For upcoming industry
                events in Finland and abroad, check our Event page.</ParagraphStyled>
            <HeadersList >
                {knowledgeData.map((el:any, i:number) => {
                  return (<li key={i}>
                        <DropdownHeader className={el.header === listName && opened ? 'knowledge-list__opened' : ''} onClick={() => handleClick(el.header)}>{el.header}</DropdownHeader>
                        <InnerList>
                            {el.links.map((link:{img:string, text: string, link: string}) => <InnerListItem key={link.text}>
                                <img src={link.img} alt=""/> <a href={link.link}>{link.text}</a>
                            </InnerListItem>)}
                        </InnerList>
                    </li>)
                })}
            </HeadersList>
        </SectionStyled>
  )
}

export default ImportantLinks
