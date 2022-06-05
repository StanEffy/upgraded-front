import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import routesFooter from '../../utils/routes-footer'

const socialDescription = [
  {
    name: 'facebook',
    img: './img/social-icons/facebook.svg',
    link: 'https://www.facebook.com/UpgradedFi/'
  },
  {
    name: 'twitter',
    img: './img/social-icons/twitter.svg',
    link: 'https://twitter.com/UpgradedFi'
  },
  {
    name: 'linkedin',
    img: './img/social-icons/linkedin.svg',
    link: 'https://www.linkedin.com/company/9234106/'
  },
  {
    name: 'youtube',
    img: './img/social-icons/youtube.svg',
    link: 'https://www.youtube.com/channel/UCBmOe9IaFilaSj7bHgyNDSw'

  },
  {
    name: 'instagram',
    img: './img/social-icons/instagram.svg',
    link: 'https://www.instagram.com/upgraded.fi/'
  }
]

const FooterStyled = styled.footer`
  background-color: ${props => props.theme.colors.blue};
  color: #ffffff;
  font-size: 18px;
  display: flex;
  flex-direction: column;

  justify-content: space-between;
  padding-bottom: 32px;


  @media ${props => props.theme.screen.desktop} {
    padding: 40px 70px;
    flex-direction: row;
    flex-wrap: wrap;

    div:nth-child(3) {
      padding-top: 31px;
    }
  }
`
const FooterBlockStyled = styled.div`
  @media ${props => props.theme.screen.desktop} {
    :last-of-type {
      padding-top: 40px
    }
  }
`

const FooterLinksList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  padding-bottom: 40px;
`
const FooterLinksListItem = styled.li`
  display: flex;
`
const FooterNav = styled.nav`
  padding-top: 20px;
  height: 100%;
`
const FooterNavlink = styled(NavLink)`
  display: inline-block;
  padding: 10px 20px;

  text-transform: uppercase;
  color: #fff;
  text-decoration: none;
  flex-grow: 1;
  text-align: left;

  &:visited {
    color: #ffffff;
  }

  &:hover {
    color: ${props => props.theme.colors.red};
  }
`
const FooterLogo = styled.img`
  width: 152px;
  height: 33px;
  padding-bottom: 10px;
  //width: 294px;
  //height: 70px;
  @media ${props => props.theme.screen.desktop} {
    width: 294px;
    height: 70px;
  }
`

const FooterMiniText = styled.p`
  font-size: 8px;
  margin: 0;
  color: #ffffff;
  text-align: left;
  padding-left: 20px;

  @media ${props => props.theme.screen.tablet} {
    margin-top: auto;
  }
`
const FooterSocialList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  padding-left: 20px;
  flex-direction: row;
  margin-bottom: 50px;
`

const FooterSocialItem = styled.li`
  padding-right: 10px;
`

const FooterSocialLink = styled.a`
  border-radius: 50%;
  background-color: #ffffff;
  width: 32px;
  height: 32px;
  display: inline-block;

  & img {
    padding-top: 3px;
  }

  &:hover {
    background-color: ${props => props.theme.colors.red};
  }
`
const FooterAddress = styled.div`
  text-align: left;
  display: flex;
  padding-left: 20px;
  margin-top: 40px;

  img {
    padding-top: 1px;
    width: 57px;
    height: 57px;
    margin-right: 20px;
  }
`
const FooterAddressParagraph = styled.p`
  margin: 0;
  font-size: 12px;
  line-height: 18px;


`
const FooterHeader = styled.h3`
  font-weight: normal;
  text-align: left;

  font-size: 24px;
  line-height: 28px;
  text-transform: uppercase;
  margin: 0;

`
const FooterMoto = styled.p`
  margin: 0;
  width: 280px;
  padding-left: 20px;
  text-align: left;
  font-size: 8px;
  line-height: 10px;
  @media ${props => props.theme.screen.tablet} {
    font-size: 14px;
    line-height: 16px;

  }
`
const FooterLogoCover = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;


`
const FooterNewsletter = styled.div`
  display: flex;
`
const FooterNewsletterParagraph = styled.p`
  margin: 0;
`
const NewsletterCover = styled.div`

`
const NewsletterForm = styled.form`
  height: 40px;
  display: flex;
  flex-direction: row;
  padding-left: 20px;
  margin-top: 40px;
  margin-bottom: 60px;
`
const NewsletterInput = styled.input`
  padding-left: 10px;
`
const NewsletterSend = styled.a`
  border: 1px solid #ffffff;
  color: #ffffff;
  background-color: ${props => props.theme.colors.blue};
  padding: 10px 20px;
  text-decoration: none;

  &:hover {
    background-color: ${props => props.theme.colors.red};
  }

  &:visited {
    color: white;
  }
`
const FooterReachUs = styled.div`
  display: flex;
  padding-left: 20px;
  margin-top: 20px;
  margin-bottom: 60px;

  img {
    padding-top: 1px;
    width: 57px;
    height: 57px;
    margin-right: 20px;
  }
`
const ReachInnerCover = styled.div`
  display: flex;
  flex-direction: column;

  p {
    position: relative;
    left: -7px;
  }
`

const FooterHeaderSecondary = styled.h2`
  font-weight: normal;
  text-align: left;

  font-size: 14px;
  line-height: 18px;
  text-transform: uppercase;
  margin: 0;
  padding-left: 20px;
  padding-bottom: 10px;
`

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 8px;
  line-height: 10px;
  text-align: left;
  padding: 0 24px;

  div:first-child {
    display: none;
  }

  div {
    width: 50%;
  }

  & div:last-of-type {
    text-align: right;
  }

  @media ${props => props.theme.screen.desktop} {
    width: 100%;
    padding: 0;
    text-align: center;
    div:first-child {
      display: block;
    }

    div {
      width: 33%;
    }

  }
`
const Footer = () => {
  return (
        <FooterStyled>
            <FooterBlockStyled>
                <FooterLogoCover>
                    <FooterNavlink to={'/'}>
                        <FooterLogo src={'./img/logo/logo_white.png'}/>
                    </FooterNavlink>
                    <FooterMoto>
                        No good health innovation should be lost
                        due to the lack of knowledge about it
                    </FooterMoto>
                </FooterLogoCover>

                <FooterAddress>
                    <img src={'./img/home-page/Building.svg'}/>
                    <div>
                        <FooterHeader>
                            Address
                        </FooterHeader>
                        <FooterAddressParagraph>Lapinlahdenkatu 16
                        </FooterAddressParagraph>
                        <FooterAddressParagraph>00180 Helsinki, Finland
                        </FooterAddressParagraph>

                        {/* <FooterMiniText>Created by TIdesign®</FooterMiniText> */}
                    </div>
                </FooterAddress>
                <FooterReachUs>
                    <img src={'./img/home-page/Telephone.svg'}/>
                    <ReachInnerCover>
                        <FooterHeader>Reach us
                        </FooterHeader>
                        <FooterAddressParagraph>+358 40 589 7819</FooterAddressParagraph>
                    </ReachInnerCover>

                </FooterReachUs>
            </FooterBlockStyled>
            <FooterBlockStyled>
                <FooterNav>
                    <FooterLinksList>
                        {routesFooter.map(route => <FooterLinksListItem key={route.routeName}>
                            <FooterNavlink to={route.route}>{route.routeName}</FooterNavlink>
                        </FooterLinksListItem>)}
                    </FooterLinksList>
                </FooterNav>

            </FooterBlockStyled>
            <FooterBlockStyled>
                <div>
                    <FooterHeaderSecondary>
                        Follow us
                    </FooterHeaderSecondary>
                    <FooterSocialList>
                        {socialDescription.map(socialItem => {
                          return (
                                <FooterSocialItem key={socialItem.name}>
                                    <FooterSocialLink href={socialItem.link} target={'_blank'}>
                                        <img src={socialItem.img} alt={`Our page on ${socialItem.name}`} width={24}/>
                                    </FooterSocialLink>
                                </FooterSocialItem>
                          )
                        })
                        }
                    </FooterSocialList>
                </div>
                <NewsletterCover>
                    <FooterHeaderSecondary>
                        NEWSLETTER
                    </FooterHeaderSecondary>
                    <FooterMoto>
                        Subscribe to our monthly newsletter to stay tuned of
                        our activities and of the health startup scene in Finland!
                    </FooterMoto>
                    <NewsletterForm>
                        <NewsletterInput placeholder={'Email'}/>
                        <NewsletterSend
                            target={'_blank'}
                            href={'https://upgraded.us5.list-manage.com/subscribe?u=103e1482ca6ba7daba7272565&id=ca8b9b7d29'}>SUBSCRIBE</NewsletterSend>
                    </NewsletterForm>
                </NewsletterCover>

            </FooterBlockStyled>
            <FooterBottom>
                <div></div>
                <div>© 2021 Upgraded. All rights reserved</div>
                <div>Created by TIdesign®</div>
            </FooterBottom>
        </FooterStyled>
  )
}

export default Footer
