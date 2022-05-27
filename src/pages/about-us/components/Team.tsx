import React from 'react'
import styled from 'styled-components'
import { TeamMembers } from '../TeamMembers'

const TeamSection = styled.section`

`
const TeamHeader = styled.h2`
  text-align: center;
  color: ${props => props.theme.colors.blue};
`
const TeamParagraph = styled.p`
  font-size: 21px;
  line-height: 30px;
  max-width: 426px;
  margin: 0 auto;
  margin-bottom: 30px;
`

const TeamList = styled.ul`
  list-style: none;
  margin: 0 auto;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 20px;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 1440px;
`
const TeamMember = styled.li`
  color: ${props => props.theme.colors.blue};
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 180px;
  padding-top: 120px;
  @media ${props => props.theme.screen.desktop} {
    width: 350px;

  }

  &:hover {
    img {
      z-index: 6;
    }
  }
`
const TeamMemberPic = styled.img`
  border-radius: 50%;
  position: absolute;
  z-index: 1;
  top: 0px;
  width: 129px;
  height: 129px;
`
const TeamMemberName = styled.p`
  font-size: 24px;
  line-height: 29px;
`
const TeamMemberTitle = styled.p`

`

const TeamMemberBio = styled.p`
  font-size: 18px;
  line-height: 22px;
  display: none;
  text-align: left;
`
const TeamCardCover = styled.div`
  position: relative;
  top: -50px;

  z-index: 2;
  width: 350px;
  padding: 52px;
  border-radius: 25px;
  box-sizing: border-box;

  &:hover {
    background-color: #ffffff;
    position: absolute;
    z-index: 4;
    top: 70px;
    -webkit-box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.2);
    box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.2);

    p {
      display: block;
    }

  }
`
const Team = () => {
  return (
        <TeamSection id={'team'}>
            <TeamHeader>Meet our team</TeamHeader>
            <TeamParagraph>Our goal is to provide you with the best network and support your growth</TeamParagraph>
            <TeamList>
                {TeamMembers.map(member => {
                  return (
                        <TeamMember key={member.name}>
                            <TeamMemberPic src={member.img}/>
                            <TeamCardCover>
                                <TeamMemberName>{member.name}</TeamMemberName>
                                <TeamMemberTitle>{member.position}</TeamMemberTitle>
                                <TeamMemberBio>{member.bio}</TeamMemberBio>
                            </TeamCardCover>

                        </TeamMember>
                  )
                })}
            </TeamList>
        </TeamSection>
  )
}

export default Team
