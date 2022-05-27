import React from 'react'
import styled from 'styled-components'

const SectionStyled = styled.section`
  padding: 70px 20px;  
  text-align: left;
  color: ${props => props.theme.colors.blue};
  
  @media ${props => props.theme.screen.desktop} {
    padding: 110px 70px;
  }
`

const EventHeader = styled.h1`
  font-size: 21px;
  line-height: 26px;
  margin-bottom: 40px;
  margin-top: 40px;
  font-family: "TiemposBold", serif;
  text-align: left;
  
  @media ${props => props.theme.screen.desktop} {
    font-size: 48px;
    line-height: 58px;
    margin-bottom: 60px;
    margin-top: 60px;
    max-width: 900px;
  }
`

const EventImageCover = styled.div`
position: relative;
  max-width: 900px;
`

const EventImage = styled.img`
width: 100%;
`
const EventDate = styled.p`
  padding: 20px;
  background-color: #ffffff;
  color: ${props => props.theme.colors.red};
  position: absolute;
  left: 0;
  bottom: 4px;
  margin: 0;
  box-shadow: 4px -1px 5px 0px rgba(0,0,0,0.16);
  -webkit-box-shadow: 4px -1px 5px 0px rgba(0,0,0,0.16);
  -moz-box-shadow: 4px -1px 5px 0px rgba(0,0,0,0.16);
`
const EventParagraph = styled.p`
  font-size: 16px;
  line-height: 18px;
  font-family: "Avenir", sans-serif;
`
const RedColor = styled.span`
  color: ${props => props.theme.colors.red};
`
const ButtonSignUp = styled.a`
  display: block;
  color: white;
  max-width: 250px;
  text-transform: uppercase;
  background-color: ${props => props.theme.colors.blue};
  padding: 10px 30px;
  text-decoration: none;
  margin: 70px auto;
  text-align: center;
  &:hover{
    background-color: ${props => props.theme.colors.red};
  }
  &:visited{
    color: #ffffff;
  }
  @media ${props => props.theme.screen.desktop}{
    font-size: 28px;
    line-height: 34px;
  }
`
const SingleEvent = () => {
  return (
        <SectionStyled>
            <EventHeader>EEX Journey Development program for entrepreneurial leadership
            </EventHeader>
            <EventImageCover>
                <EventImage src={'https://i.stack.imgur.com/DCyzS.png'} alt={'EEX Journey Development program for entrepreneurial leadership'}/>
                <EventDate>AUGUST 1, 2021 | FINLAND</EventDate>
            </EventImageCover>
            <EventParagraph>
                Become a part of the exclusive community
                of EEX startups!</EventParagraph>

                <EventParagraph>The next EEX Journey starts in August 2021.</EventParagraph>

                <EventParagraph>EEX journey – how does it work?</EventParagraph>

                <EventParagraph>Our mission is to make the world more
                    entrepreneurial, and we do this by deploying
                    corporate leaders and key talents in startup Advisory
                    Boards. This means that for a full year (approx. 10-12
                    meetings), you get to work on your strategy together
                    with 4-6 hardcore business professionals from
                    outside your organization. In exchange, they get to
                    see how things are done in an agile startup, and
                    learn what the entrepreneurial mindset really is.</EventParagraph>

                <EventParagraph>EEX Journey is a great opportunity for you to:</EventParagraph>

                • Get outside opinions and frank feedback on your
                strategy
                • Get practical advice on how to develop your
                company
                • Learn to work with a board and lead through
                strategy
                • Learn about working with large corporations and
                partners
                • Develop skills for partnerships and business
                ecosystems

            <EventParagraph>INTERESTED?</EventParagraph>

            <EventParagraph>This program is meant for you if you have:</EventParagraph>

                • A full-time team (more than two founders /
                employees)
                • A strong will to grow
                • A significant renewal challenge or are in need of
                outside input
                • Are ready to take active leadership in all Advisory
                Board meetings
                • Are able to work with the Advisory Board approx.
                1 day/month (a bit more the first months)
                • Are ready to accept and work with outsiders’
                brutally honest advice on your business and strategy
                • Are ready to give honest and fair evaluations and
                feedback to the advisors (and to us – we are
                constantly developing the program to best match
                your needs)

            <EventParagraph>For more information please contact:</EventParagraph>

            <EventParagraph><RedColor>Elisa Kitunen</RedColor></EventParagraph>
            <EventParagraph><RedColor>elisa.kitunen@eexglobal.com</RedColor></EventParagraph>
            <EventParagraph><RedColor>+358 445886029</RedColor></EventParagraph>

                <ButtonSignUp>Sign up</ButtonSignUp>

        </SectionStyled>
  )
}

export default SingleEvent
