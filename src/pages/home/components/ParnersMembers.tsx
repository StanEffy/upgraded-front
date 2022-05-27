import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import PartnersSlider from './PartnersSlider'

const HeaderStyled = styled.h2`
  color: ${props => props.theme.colors.blue}; 
  margin: 0;
  padding-bottom: 20px;
  padding-top: 40px;
  font-family: "TiemposBold", serif;
  font-weight: normal;
  position: relative;
  z-index: 3;
  font-size: 24px;
  line-height: 29px;
  @media ${props => props.theme.screen.tablet}{
    
    font-size: 32px;
    margin-bottom: 30px;
  }
  @media ${props => props.theme.screen.desktop}{
    font-size: 46px;
    //margin-top: 85px;
    margin-bottom: 10px;
  }
`

const SectionStyled = styled.section`
  
`
const SectionStyledParters = styled.section`
  position: relative;
  z-index: 3;
  background-color: ${props => props.theme.colors.blue}; 
  h2 {
    color: #ffffff;
    font-size: 44px;
    margin: 0;
    position: relative;
    z-index: 3;
  }
  p{
    color: #ffffff;
  }
  @media ${props => props.theme.screen.desktop} {
  
  padding-top: 60px;
}
`

const CoverStyled = styled.div`
  background-image: url("./img/home-page/main_partners.jpg");
  background-repeat: no-repeat;
  background-size: 220vw;
  background-position: top;
  position: relative;
  z-index: 1;
  padding-bottom: 40px;
  @media ${props => props.theme.screen.tablet} {
    
    margin-top: -20px;
}
  &:after {
    position: absolute;
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    background-color: rgba(249, 249, 249,0.8);
    z-index: 2;
  }
  @media ${props => props.theme.screen.desktop}{
    background-size: contain;
  }
`

const ParagraphStyled = styled.p`
  margin: 0 auto;
  font-size: 18px;
  line-height: 22px;
  position: relative;
  z-index: 3;
  padding-left: 20px;
  padding-right: 20px;
  margin-bottom: 100px;
  @media ${props => props.theme.screen.tablet} {
    width: auto;
    font-size: 21px;
    line-height: 28px;
    max-width: 560px;
    margin-bottom: 120px;
}
`
const PartnersCover = styled.div`
  margin: 0;
  padding: 0;
  background: linear-gradient(180deg, rgba(48, 66, 131, 1) 0%, rgba(48, 66, 131, 1) 50%, rgb(249, 249, 249) 50%, rgba(249, 249, 249, 1) 100%);
  padding-top: 50px;
  padding-bottom: 50px;
`
//
// const PartnersListItem = styled.li`
//   height: 300px;
//   width: 200px;
//   background-color: #ffffff;
// `
//
// const PartnerLink = styled(NavLink)`
//   display: block;
//   width: 100%;
//   height: 100%;
//   background-color: rgba(255, 255, 255, 0.3);
//   background-repeat: no-repeat;
//   background-size: contain;
//   background-position: center;
// `

const MembersList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  position: relative;
  z-index: 3;
  min-height: 20px;
  
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
  
  margin-bottom: 100px;
  @media ${props => props.theme.screen.desktop} {
    padding: 0 70px;
    margin-bottom: 250px;
  }
`

const MembersListItem = styled.li`
  background-color: white;
  border:1px solid blue;
`

const MemberLink = styled(NavLink)`
  display: inline-block;
  height: 100px;
  width: 200px;
  
  background-color: rgba(255, 255, 255, 0.3);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  &:hover {
    opacity: 0.8;
  }
`

const ParnersMembers = () => {
  return (
        <CoverStyled>
            <SectionStyled>
                <HeaderStyled>Our main partners</HeaderStyled>
                <ParagraphStyled>
                    We can&apos;t do everything ourselves. That&apos;s why it&apos;s important
                    to have startup-oriented partners, who  provide additional
                    value for our members as well as to the Association itself.
                </ParagraphStyled>
                <MembersList>
                    <MembersListItem>
                        <MemberLink to={'/'}></MemberLink>
                    </MembersListItem>
                    <MembersListItem>
                        <MemberLink to={'/'}></MemberLink>
                    </MembersListItem>
                    <MembersListItem>
                        <MemberLink to={'/'}></MemberLink>
                    </MembersListItem>
                    <MembersListItem>
                        <MemberLink to={'/'}></MemberLink>
                    </MembersListItem>
                    <MembersListItem>
                        <MemberLink to={'/'}></MemberLink>
                    </MembersListItem>
                </MembersList>
            </SectionStyled>
            <SectionStyledParters>
                <HeaderStyled>Our members</HeaderStyled>
                <ParagraphStyled>
                    With Upgraded Membership you get to be a part of our
                    active startup community and network and get to enjoy our
                    membership benefits. Our benefits include services from
                    our partners, discounts to events, exclusive opportunities,
                    invitations and more!
                </ParagraphStyled>
                <PartnersCover>
                    <PartnersSlider />
                </PartnersCover>
            </SectionStyledParters>
        </CoverStyled>
  )
}

export default ParnersMembers
