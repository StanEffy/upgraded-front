import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { Carousel, CarouselItem } from '../../../components/carousel/CarouselItem.jsx'

const SectionStyled = styled.section`
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  background-size: cover;
  align-items: center;
  background-color: #f9f9f9;
 
  @media ${props => props.theme.screen.tablet}{
    background-repeat: no-repeat;
 
  }
  @media ${props => props.theme.screen.desktop}{
    height: auto;
    padding: 180px 70px;
    padding-top: 0;
    
  }
 
`

const JoinCover = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  height: 726px;
  width: 100%;
  @media ${props => props.theme.screen.tablet}{
    flex-direction: row;
  }
  @media ${props => props.theme.screen.desktop}{
    height: auto;
    padding: 0;
  }
`

// const JoinWhiteBg = styled.div`
//   background-color: #ffffff;
//   display: none;
//
//   @media ${props => props.theme.screen.tablet}{
//     display: block;
//   }
//   @media ${props => props.theme.screen.desktop}{
//    position: absolute;
//     width: 80%;
//     height: 400px;
//     z-index: 1;
//   }
//   position: absolute;
//   -webkit-box-shadow: 1px 1px 4px 0px rgba(0,0,0,0.35);
//   box-shadow: 1px 1px 4px 0px rgba(0,0,0,0.35);
// `

const CardGrey = styled.article`
  order: 2;
  background-color: #ffffff;
  display: none;
  pozition: relative;
  z-index: 2;
  -webkit-box-shadow: 1px 1px 4px 0px rgba(0,0,0,0.55);
  box-shadow: 1px 1px 4px 0px rgba(0,0,0,0.55);
  padding-top: 40px;
  margin-left: 20px;
  margin-right: 20px;
  
  box-sizing: border-box;
  
  @media ${props => props.theme.screen.tablet}{
    order: 1;
  }
  @media ${props => props.theme.screen.desktop}{
    display: block;
    width: 33%;
    height: 641px;
    align-self: center;
    padding-top: 60px;
    padding-bottom: 120px;
    margin: 0;
    
  }
`
const CardRed = styled.article`
  order: 1;
  background-color: ${props => props.theme.colors.red};
  color: #ffffff;
  position: absolute;
  top: 0;
  box-shadow: 1px 7px 18px 0px rgba(0,0,0,0.29);
  -webkit-box-shadow: 1px 7px 18px 0px rgba(0,0,0,0.29);
  -moz-box-shadow: 1px 7px 18px 0px rgba(0,0,0,0.29);
  width: 100vw;
  height: 100vw;
  min-height: 375px;
  max-height: 460px;
  max-width: 100%;
  z-index: 0;
  @media ${props => props.theme.screen.tablet}{
    order: 1;
    z-index: 2;
  }
  @media ${props => props.theme.screen.desktop}{
    display: flex;
    z-index: 3;
    position: relative;
    //justify-content: center;
    flex-direction: column;
    min-height: 550px;
    height: 720px;
    max-height: auto;
    max-width: 500px;
    padding-bottom: 180px;
  }
`
const SvgCoverStyled = styled.div`
  img {
    width: 150px;
    height: 150px;
  }
`

const HeaderStyled = styled.h3`
  color: ${props => props.theme.colors.blue};
  font-family: "TiemposBold", serif;
  text-transform: uppercase;
  font-size: 19px;
  line-height: 4px;
  margin: 0;
  margin-top: 40px;

  @media ${props => props.theme.screen.desktop}{
    font-size: 26px;
  }
`

const CardParagraph = styled.p`
  color: #000000;
  width: 140px;
  line-height: 12px;
  font-size: 11px;
  
  margin: 0 auto;
  margin-top: 14px;
  margin-bottom: 25px;
  text-align: center;
  @media ${props => props.theme.screen.desktop}{
    padding-top: 15px;
    text-align: left;
    width: 280px;
    min-height: 112px;
    box-sizing: border-box;
    line-height: 28px;
    font-size: 20px;
    margin-bottom: 70px;
  }
  
`
const CardRedHeader = styled.h2`
  color: #ffffff;
  text-transform: uppercase;
  font-family: "TiemposBold", serif;
  margin: 55px auto 24px;
  font-size: 24px;
  line-height: 29px;
  width: 175px;
  @media ${props => props.theme.screen.tablet}{
    
  }
  @media ${props => props.theme.screen.desktop}{
    font-size: 48px;
    line-height: 66px;
    margin: 0 auto;
    width: 320px;
    margin-top: 130px;
    margin-bottom: 90px;
  }
`

const CardRedParagraph = styled.p`
  color: #ffffff;
  margin: 20px auto;
  width: 60%;
  @media ${props => props.theme.screen.tablet}{

}
  @media ${props => props.theme.screen.desktop}{
    font-size: 28px;
    width: 80%;
    margin-top: 0;
  }
`
const ButtonStyled = styled(NavLink)`
  border: none;
  text-decoration: none;
  text-transform: uppercase;
  background-color: ${props => props.theme.colors.blue};
  color: #ffffff;
  
  display: block;
  padding: 9px 19px;
  width: 105px;
  font-size: 11px;
  margin: 0 auto;
  
  margin-bottom: 40px;
  &:visited{
    color: #ffffff;
  }
  &:hover{
    background-color: ${props => props.theme.colors.red};
  }
  @media ${props => props.theme.screen.desktop}{
    padding: 16px 25px;
    width: 150px;
    font-size: 20px;
  }
`

const Slider = styled.div`
  
  @media ${props => props.theme.screen.desktop}{
    display: none;
  }
`
const InnerSlider = styled.div`
`

const CardGreyMob = styled(CardGrey)`
 display: block;
  width: 326px;
  @media ${props => props.theme.screen.desktop}{
    display: none;
  }
`

const JoinCommunity = () => {
  return (
        <SectionStyled>
            <JoinCover>
                <CardGrey>
                    <SvgCoverStyled>
                        <img src={'./img/home-page/members.svg'} alt={'members icon'}/>
                    </SvgCoverStyled>
                    <HeaderStyled>
                        AS A MEMBER
                    </HeaderStyled>
                    <CardParagraph> For startups our membership fee is 150€ for a year. Be part of the vibrant health startup community and join now!
                    </CardParagraph>
                    <ButtonStyled to={'become-member'}>
Read more
                    </ButtonStyled>
                </CardGrey>
                <CardRed>
                    <CardRedHeader>
                        Join the community!
                    </CardRedHeader>
                    <CardRedParagraph>
                        Enjoy the best benefits,
                        opportunities and networks
                        as Upgraded Member!
                    </CardRedParagraph>
                </CardRed>
                <CardGrey>
                    <SvgCoverStyled>
                        <img src={'./img/home-page/partners.svg'} alt={'partners icon'}/>
                    </SvgCoverStyled>
                    <HeaderStyled>
                        AS A PARTNER
                    </HeaderStyled>
                    <CardParagraph> For joining the community as a partner or supporting member, check out our partners page!
                    </CardParagraph>
                    <ButtonStyled to={'become-member'}>
                        Read more
                    </ButtonStyled>
                </CardGrey>

                <Carousel className={'carousel  carousel-home'}>
                    <CarouselItem>
                        <CardGreyMob>
                            <SvgCoverStyled>
                                <img src={'./img/home-page/members.svg'} alt={'members icon'}/>
                            </SvgCoverStyled>
                            <HeaderStyled>
                                AS A MEMBER
                            </HeaderStyled>
                            <CardParagraph> For startups our membership fee is 150€ for a year. Be part of the vibrant health startup community and join now!
                            </CardParagraph>
                            <ButtonStyled to={'become-member'}>
                                Read more
                            </ButtonStyled>
                        </CardGreyMob>
                    </CarouselItem>
                    <CarouselItem>
                        <CardGreyMob>
                            <SvgCoverStyled>
                                <img src={'./img/home-page/partners.svg'} alt={'partners icon'}/>
                            </SvgCoverStyled>
                            <HeaderStyled>
                                AS A PARTNER
                            </HeaderStyled>
                            <CardParagraph> For joining the community as a partner or supporting member, check out our partners page!
                            </CardParagraph>
                            <ButtonStyled to={'become-member'}>
                                Read more
                            </ButtonStyled>
                        </CardGreyMob>
                    </CarouselItem>

                </Carousel>
            </JoinCover>
        </SectionStyled>
  )
}

export default JoinCommunity
