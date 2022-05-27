import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
const Section = styled.section`
padding: 0px 20px 150px;
`
const FormParagraph = styled.p`
  font-family: "Avenir", sans-serif;
  line-height: 21px;
  text-align: left;
  font-size: 12px;
  margin: 0;
  margin-bottom: 20px;
  @media ${props => props.theme.screen.desktop}{
    font-size: 25px;
    line-height: 49px;
    margin-bottom: 40px;
  }
`
const RedSpan = styled.span`
  color: ${props => props.theme.colors.red};
`
const FormLink = styled(NavLink)`
  color: ${props => props.theme.colors.red};
  text-decoration: none;
  &:visited{
    color: ${props => props.theme.colors.red};
  }
`
const FormStyled = styled.form`
  margin: 0;
  margin-bottom: 40px;
  display: flex;
  max-width: 616px;
`
const Input = styled.input`
  border: 1px solid #adadad;
  padding: 10px;
  width: 100%;
  @media ${props => props.theme.screen.desktop} {
    padding: 20px;
  }
`
const Submit = styled.button`
  padding: 8px 29px;
  background-color: ${props => props.theme.colors.blue};
  color: #ffffff;
  text-transform: uppercase;
  border: none;
  &:hover{
    background-color: ${props => props.theme.colors.red};
  }
`
const Form = () => {
  return (
        <Section>
            <FormParagraph>If you have any questions, please don’t hesitate to drop us a line to
                <RedSpan> info@upgraded.fi</RedSpan> or <RedSpan>zung@upgraded.fi</RedSpan>.</FormParagraph>
            <FormParagraph>Not a startup, but want to get involved? <FormLink to={'/contact-us'}>Contact us</FormLink> for other options,
                such as <FormLink to={'/'}>partnerships</FormLink>! And subscribe to our newsletter!</FormParagraph>
            <FormParagraph>You can find information on the register<FormLink to={'/'}> here.</FormLink>
            </FormParagraph>
            <FormStyled>
                <Input type={'email'} placeholder={'Email'}/>
                <Submit>Subscribe</Submit>
            </FormStyled>
            <FormParagraph><FormLink to={'/'}>Rules of the Association</FormLink></FormParagraph>
        </Section>
  )
}

export default Form
