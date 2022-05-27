import React, { useState } from 'react'
import styled from 'styled-components'
import SelectData from './SelectData'
import HeaderAdmin from './HeaderAdmin'
const HomeCoverStyled = styled.div`
  padding: 100px;
  text-align: left;
`
const FieldsetStyled = styled.fieldset`
  display: flex;
  flex-direction: column;
  label {
    display: inline-block;
    padding: 10px 0;
  }
`

const ButtonStyled = styled.button`
  border: none;
  text-transform: uppercase;
  background-color: transparent;
  padding: 10px 20px;
  font-weight: bold;
  &:hover {
    cursor: pointer;
  }
  &.activeTab {
    background-color: pink;
  }
`

const ButtonSendReq = styled.button`
  background-color: lightgreen;
  border: none;
  text-transform: uppercase;
  padding: 10px 20px;
  font-weight: bold;
`

const ButtonClear = styled(ButtonSendReq)`
  background-color: pink;
`
const Events = function () {
  const [activeTab, setActiveTab] = useState('Add')
  return (
    <HomeCoverStyled>
      <HeaderAdmin />
      <h2>Events</h2>
      <SelectData />
      <section>
        <div>
          <ButtonStyled
            className={activeTab === 'Add' ? 'activeTab' : ''}
            onClick={() => setActiveTab('Add')}
          >
            Add new event
          </ButtonStyled>
          <ButtonStyled
            className={activeTab === 'Edit' ? 'activeTab' : ''}
            onClick={() => setActiveTab('Edit')}
          >
            Edit event
          </ButtonStyled>
        </div>
        <form>
          <FieldsetStyled>
            <legend>Enter name of the event</legend>
            <label htmlFor="name">
              <input type="text" id="name" />
              Name
            </label>
          </FieldsetStyled>
          <FieldsetStyled>
            <legend>Enter date of the event</legend>
            <label htmlFor="dateStart">
              <input type="date" id="dateStart" />
              Date start
            </label>
            <label htmlFor="dateEnd">
              <input type="date" id="dateEnd" />
              Date end (optional)
            </label>
          </FieldsetStyled>
          <FieldsetStyled>
            <legend>Enter link to the event (optional)</legend>
            <label htmlFor="link">
              <input type="text" id="link" />
              Link
            </label>
          </FieldsetStyled>
          <FieldsetStyled>
            <legend>Location</legend>
            <label htmlFor="location">
              <input type="text" id="location" />
              Location
            </label>
          </FieldsetStyled>
          <FieldsetStyled>
            <legend>Enter some description</legend>
            <label htmlFor="description">
              <textarea id="description" />
              Description
            </label>
          </FieldsetStyled>
          <FieldsetStyled>
            <label htmlFor="picture">
              <input type="file" id="picture" />
              Picture
            </label>
          </FieldsetStyled>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '20px'
            }}
          >
            <ButtonSendReq>Send</ButtonSendReq>
            <ButtonClear type="reset">Clear form</ButtonClear>
          </div>
        </form>
      </section>
    </HomeCoverStyled>
  )
}

export default Events
