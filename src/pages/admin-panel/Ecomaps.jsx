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
  &:hover{
    opacity: 0.8;
  }
`

const ButtonClear = styled(ButtonSendReq)`
  background-color: pink;
`
const ButtonDelete = styled(ButtonSendReq)`
  background-color: darkred;
  color: white;
  padding: 10px 40px;
`
const Ecomaps = function () {
  const [activeTab, setActiveTab] = useState('Add')
  const [convertedText, setConvertedText] = useState('Some default content')
  return (
        <HomeCoverStyled>
            <HeaderAdmin />
            <h2>Ecomaps</h2>
            <SelectData />
            <section>
                <div>
                    <ButtonStyled
                        className={activeTab === 'Add' ? 'activeTab' : ''}
                        onClick={() => setActiveTab('Add')}
                    >
                        Add new map
                    </ButtonStyled>
                    <ButtonStyled
                        className={activeTab === 'Edit' ? 'activeTab' : ''}
                        onClick={() => setActiveTab('Edit')}
                    >
                        Edit map
                    </ButtonStyled>
                </div>
                <form>
                    <FieldsetStyled>
                        <legend>Enter name of the Ecomap</legend>
                        <label htmlFor="name">
                            <input type="text" id="name" />
                            Ecomap
                        </label>
                    </FieldsetStyled>
                    <FieldsetStyled>
                        <legend>Enter link to the code</legend>
                        <label htmlFor="link">Link</label>
                        <textarea id="link" />
                    </FieldsetStyled>
                    <div id={'alloy'}/>
                    <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          padding: '20px'
                        }}
                    >
                        <ButtonSendReq>Send</ButtonSendReq>
                        <ButtonDelete>DELETE MAP</ButtonDelete>
                        <ButtonClear type="reset">Clear form</ButtonClear>
                    </div>
                </form>
            </section>
        </HomeCoverStyled>
  )
}

export default Ecomaps
