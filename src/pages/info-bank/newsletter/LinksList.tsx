import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
  padding: 70px 20px;
  @media ${props => props.theme.screen.desktop} {
    padding: 180px 70px;
  }
`
const Header = styled.h2`
  color: ${props => props.theme.colors.blue};
  margin: 0 auto;
  margin-bottom: 40px;
  font-size: 24px;
  line-height: 29px;
  font-family: "TiemposBold", serif;
  @media ${props => props.theme.screen.desktop}{
    margin-bottom: 72px;
    font-size:48px;
    line-height: 57px;
  }
`
const AllLettersContainer = styled.div`
  @media ${props => props.theme.screen.desktop} {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`
const OneYearContainer = styled.div`
  @media ${props => props.theme.screen.desktop}{
    width: 50%;
  }
`
const Year = styled.p`
  font-size: 21px;
  line-height: 36px;
  margin-bottom: 20px;
  font-family: "TiemposBold", serif;
  text-align: left;
  color: ${props => props.theme.colors.blue};
  @media ${props => props.theme.screen.desktop}{
    font-size: 36px;
  }
`
const ListOfLetters = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  
  @media ${props => props.theme.screen.desktop}{
    
  }
`
const Letter = styled.li`
text-align: left;
`
const LetterLink = styled.a`
  font-size: 14px;
  line-height: 24px;
  margin: 0;
  margin-bottom: 10px;
  text-decoration: none;
  color: ${props => props.theme.colors.blue};
  &:visited {
    color: ${props => props.theme.colors.blue};
  }
  &:hover{
    font-weight: bold;
  }
`

const LinksList = () => {
  return (
        <Section>
            <Header>Past Issues of <br/>
                the Newsletter:</Header>
            <AllLettersContainer>
                <OneYearContainer>
                    <Year>2021</Year>
                    <ListOfLetters>
                        <Letter>
                            <LetterLink href={'#'} about={'_blank'}>Community Newsletter  for December / 2021
                            </LetterLink>
                        </Letter>
                        <Letter>
                            <LetterLink href={'#'} about={'_blank'}>Community Newsletter  for December / 2021
                            </LetterLink>
                        </Letter>
                        <Letter>
                            <LetterLink href={'#'} about={'_blank'}>Community Newsletter  for December / 2021
                            </LetterLink>
                        </Letter>
                        <Letter>
                            <LetterLink href={'#'} about={'_blank'}>Community Newsletter  for December / 2021
                            </LetterLink>
                        </Letter>
                        <Letter>
                            <LetterLink href={'#'} about={'_blank'}>Community Newsletter  for December / 2021
                            </LetterLink>
                        </Letter>
                        <Letter>
                            <LetterLink href={'#'} about={'_blank'}>Community Newsletter  for December / 2021
                            </LetterLink>
                        </Letter>
                        <Letter>
                            <LetterLink href={'#'} about={'_blank'}>Community Newsletter  for December / 2021
                            </LetterLink>
                        </Letter>
                        <Letter>
                            <LetterLink href={'#'} about={'_blank'}>Community Newsletter  for December / 2021
                            </LetterLink>
                        </Letter>
                        <Letter>
                            <LetterLink href={'#'} about={'_blank'}>Community Newsletter  for December / 2021
                            </LetterLink>
                        </Letter>

                    </ListOfLetters>
                </OneYearContainer>
                <OneYearContainer>
                    <Year>2021</Year>
                    <ListOfLetters>
                        <Letter>
                            <LetterLink href={'#'} about={'_blank'}>Community Newsletter  for December / 2021
                            </LetterLink>
                        </Letter>
                        <Letter>
                            <LetterLink href={'#'} about={'_blank'}>Community Newsletter  for December / 2021
                            </LetterLink>
                        </Letter>
                        <Letter>
                            <LetterLink href={'#'} about={'_blank'}>Community Newsletter  for December / 2021
                            </LetterLink>
                        </Letter>
                        <Letter>
                            <LetterLink href={'#'} about={'_blank'}>Community Newsletter  for December / 2021
                            </LetterLink>
                        </Letter>
                        <Letter>
                            <LetterLink href={'#'} about={'_blank'}>Community Newsletter  for December / 2021
                            </LetterLink>
                        </Letter>
                        <Letter>
                            <LetterLink href={'#'} about={'_blank'}>Community Newsletter  for December / 2021
                            </LetterLink>
                        </Letter>
                        <Letter>
                            <LetterLink href={'#'} about={'_blank'}>Community Newsletter  for December / 2021
                            </LetterLink>
                        </Letter>
                        <Letter>
                            <LetterLink href={'#'} about={'_blank'}>Community Newsletter  for December / 2021
                            </LetterLink>
                        </Letter>
                        <Letter>
                            <LetterLink href={'#'} about={'_blank'}>Community Newsletter  for December / 2021
                            </LetterLink>
                        </Letter>

                    </ListOfLetters>
                </OneYearContainer>
                <OneYearContainer>
                    <Year>2021</Year>
                    <ListOfLetters>
                        <Letter>
                            <LetterLink href={'#'} about={'_blank'}>Community Newsletter  for December / 2021
                            </LetterLink>
                        </Letter>
                        <Letter>
                            <LetterLink href={'#'} about={'_blank'}>Community Newsletter  for December / 2021
                            </LetterLink>
                        </Letter>
                        <Letter>
                            <LetterLink href={'#'} about={'_blank'}>Community Newsletter  for December / 2021
                            </LetterLink>
                        </Letter>
                        <Letter>
                            <LetterLink href={'#'} about={'_blank'}>Community Newsletter  for December / 2021
                            </LetterLink>
                        </Letter>
                        <Letter>
                            <LetterLink href={'#'} about={'_blank'}>Community Newsletter  for December / 2021
                            </LetterLink>
                        </Letter>
                        <Letter>
                            <LetterLink href={'#'} about={'_blank'}>Community Newsletter  for December / 2021
                            </LetterLink>
                        </Letter>
                        <Letter>
                            <LetterLink href={'#'} about={'_blank'}>Community Newsletter  for December / 2021
                            </LetterLink>
                        </Letter>
                        <Letter>
                            <LetterLink href={'#'} about={'_blank'}>Community Newsletter  for December / 2021
                            </LetterLink>
                        </Letter>
                        <Letter>
                            <LetterLink href={'#'} about={'_blank'}>Community Newsletter  for December / 2021
                            </LetterLink>
                        </Letter>

                    </ListOfLetters>
                </OneYearContainer>
                <OneYearContainer>
                    <Year>2021</Year>
                    <ListOfLetters>
                        <Letter>
                            <LetterLink href={'#'} about={'_blank'}>Community Newsletter  for December / 2021
                            </LetterLink>
                        </Letter>
                        <Letter>
                            <LetterLink href={'#'} about={'_blank'}>Community Newsletter  for December / 2021
                            </LetterLink>
                        </Letter>
                        <Letter>
                            <LetterLink href={'#'} about={'_blank'}>Community Newsletter  for December / 2021
                            </LetterLink>
                        </Letter>
                        <Letter>
                            <LetterLink href={'#'} about={'_blank'}>Community Newsletter  for December / 2021
                            </LetterLink>
                        </Letter>
                        <Letter>
                            <LetterLink href={'#'} about={'_blank'}>Community Newsletter  for December / 2021
                            </LetterLink>
                        </Letter>
                        <Letter>
                            <LetterLink href={'#'} about={'_blank'}>Community Newsletter  for December / 2021
                            </LetterLink>
                        </Letter>
                        <Letter>
                            <LetterLink href={'#'} about={'_blank'}>Community Newsletter  for December / 2021
                            </LetterLink>
                        </Letter>
                        <Letter>
                            <LetterLink href={'#'} about={'_blank'}>Community Newsletter  for December / 2021
                            </LetterLink>
                        </Letter>
                        <Letter>
                            <LetterLink href={'#'} about={'_blank'}>Community Newsletter  for December / 2021
                            </LetterLink>
                        </Letter>

                    </ListOfLetters>
                </OneYearContainer>
            </AllLettersContainer>

        </Section>
  )
}

export default LinksList
