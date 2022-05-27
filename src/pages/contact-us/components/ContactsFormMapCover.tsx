import React from 'react'
import styled from 'styled-components'
import ContactForm from './ContactForm'
import ContactMap from './ContactMap'
const Cover = styled.div`
  display: flex;
  flex-direction: column;
  padding: 60px 20px;
  @media ${props => props.theme.screen.desktop}{
    flex-direction: row;
    justify-content: space-between;
    padding: 196px 70px 0;
  }
`
const ContactsFormMapCover = () => {
  return (
        <Cover>
            <ContactForm />
            <ContactMap />
        </Cover>
  )
}

export default ContactsFormMapCover
