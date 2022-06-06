import React from 'react'
import styled from 'styled-components'

const FormCover = styled.section`
  width: 100%;
  @media ${props => props.theme.screen.desktop} {
    padding-right: 75px;
    box-sizing: border-box;
    max-width: 656px;
  }
`
const FormCaption = styled.h2`
  font-family: "TiemposBold", serif;

  margin: 0;
  color: ${props => props.theme.colors.blue};
  margin-bottom: 22px;

  text-align: left;
  @media ${props => props.theme.screen.desktop} {
    font-size: 48px;
    line-height: 57px;
    margin-bottom: 15px;
  }
`
const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  @media ${props => props.theme.screen.desktop} {

    height: 400px;
  }
`
const InputStyled = styled.input`
  border: 1px solid ${props => props.theme.colors.blue};
  padding: 13px;
  margin-bottom: 26px;
  background-color: #ffffff;
  color: ${props => props.theme.colors.blue};

  &::placeholder {
    color: #ADADAD;
  }
`
const TextareaStyled = styled.textarea`
  border: 1px solid ${props => props.theme.colors.blue};
  padding: 13px;
  height: 142px;
  color: ${props => props.theme.colors.blue};

  &::placeholder {
    color: #ADADAD;
  }
`
const ButtonSubmit = styled.button`
  color: #ffffff;
  padding: 12px 17px;
  text-align: center;
  margin-top: 30px;
  background-color: ${props => props.theme.colors.blue};
  @media ${props => props.theme.screen.desktop} {
    margin-top: 44px;
    width: 230px;
  }

  &:hover {
    background-color: ${props => props.theme.colors.red};
  }
`
const ContactForm = () => {
  return (
        <FormCover>
            <FormCaption>Contact us</FormCaption>
            <FormStyled>
                <InputStyled type={'text'} placeholder={'First name'} required/>
                <InputStyled type={'email'} placeholder={'Email'} required/>
                <TextareaStyled placeholder={'Write your message here...'} required/>
                <ButtonSubmit>Send message </ButtonSubmit>
            </FormStyled>
        </FormCover>
  )
}

export default ContactForm
