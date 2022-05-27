import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
  background-image: url("./img/community/partners/pattern.svg");
  background-position: bottom;
  background-size: cover;
  background-repeat: no-repeat;
  @media ${props => props.theme.screen.desktop} {
    background-size: contain;
  }
`

const InnerCover = styled.div`
  padding: 50px 20px 77px ;
  @media ${props => props.theme.screen.desktop} {
    padding: 110px 70px 130px ;
  }
  background-color: rgba(255,255,255, 0.1);
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
const Form = styled.form`
  width: 100%;
  margin: 0 auto;
  @media ${props => props.theme.screen.desktop}{
    max-width: 760px;
  }
`
const Input = styled.input`
  border: 2px solid ${props => props.theme.colors.blue};
  padding: 12px;
  width: 100%;
  font-size: 11px;
  line-height: 13px;
  margin-bottom: 20px;
  @media ${props => props.theme.screen.desktop}{
    margin-bottom: 40px;
    padding: 40px 29px;
    font-size: 28px;
    line-height: 34px;
  }
`
const ButtonStyled = styled.button`
  display: none;
  text-decoration: none;
  text-transform: uppercase;
  padding: 9px 18px;
  width: 145px;
  box-sizing: border-box;
  background-color: ${props => props.theme.colors.blue};
  color: #ffffff;
  
  margin-top: 60px;
  
  font-size: 11px;
  line-height: 13px;
  &:hover{
    background-color: ${props => props.theme.colors.red};
  }
  @media ${props => props.theme.screen.tablet}{
    display: block;
  }
  @media ${props => props.theme.screen.desktop}{
    margin-top: 68px;
    width: 250px;
    font-size: 21px;
    line-height: 25px;
    text-align: center;
    padding: 13px 11px;
  }
`
const NewslettersForm = () => {
  return (
        <Section>
            <InnerCover>
                <Header>Sign up for <br/>our newsletter</Header>
                <Form>
                    <Input type={'text'} name={'name'} placeholder={'First name'}/>
                    <Input type={'text'} name={'last-name'} placeholder={'Last name'}/>
                    <Input type={'email'} name={'email'} placeholder={'Email'}/>
                    <Input type={'text'} name={'company'} placeholder={'Company'}/>
                    <ButtonStyled type={'submit'}>Subscribe</ButtonStyled>
                </Form>

            </InnerCover>
        </Section>
  )
}

export default NewslettersForm
