import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import SelectData from './SelectData'

import axios from 'axios'
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
` // Add css for snow theme
// or import 'quill/dist/quill.bubble.css'; // Add css for bubble theme

const News = function () {
  const [activeTab, setActiveTab] = useState('Add')
  const [news, setNews] = useState({})
  const [pics, setPics] = useState(null)

  const directoryPath = useRef(null)
  const sendData = async () => {
    const json = JSON.stringify()
    const res = await axios.post('http://localhost:3001/api/v1/news', json, {
      headers: {
        // Overwrite Axios's automatically set Content-Type
        'Content-Type': 'application/json'
      }
    })
  }
  const sendPics = async (e) => {
    e.preventDefault()
    const formData = new FormData()

    // Update the formData object
    const picsKeys = Object.keys(pics)
    picsKeys.forEach(key => {
      console.log(pics[key].name,
        pics[key])
      formData.append(
        pics[key].name,
        pics[key]

      )
    })
    formData.append('name', 'Steve')
    console.log(formData)

    await axios.post('http://localhost:3001/api/v1/news/pics', formData)
  }
  return (
    <HomeCoverStyled>
      <HeaderAdmin />
      <h2>NEWS</h2>
      <SelectData />
      <section>
        <div>
          <ButtonStyled
            className={activeTab === 'Add' ? 'activeTab' : ''}
            onClick={() => setActiveTab('Add')}
          >
            Add news
          </ButtonStyled>
          <ButtonStyled
            className={activeTab === 'Edit' ? 'activeTab' : ''}
            onClick={() => setActiveTab('Edit')}
          >
            Edit news
          </ButtonStyled>
        </div>
        <form>
          <FieldsetStyled>
            <legend>Enter name of the news</legend>
            <label htmlFor="name">
              Name
            </label>
            <input type="text" id="name" />
          </FieldsetStyled>
          <FieldsetStyled>
            <legend>What was the date of publication</legend>
            <label htmlFor="date">
              Date
            </label>
            <input type="date" id="date" />
          </FieldsetStyled>
          <FieldsetStyled>
            <legend>Enter link to the news (IMPORTANTE!)</legend>
            <label htmlFor="link">Link like this: <i>scientist-invented-how-to-add-third-hand</i></label>
            <input type="text" id="link" ref={directoryPath}/>
          </FieldsetStyled>
          <p>Here is a simple editor for our content. I am not absolutely sure it perfectly works...</p>
          <div style={{ minHeight: 300 }}>
          </div>
          <FieldsetStyled>
            <label htmlFor="picture">Main picture used for previews</label>
            <input type="file" id="picture" />
          </FieldsetStyled>
          <FieldsetStyled>
            <label htmlFor="pictures">Pictures you going to use in this news</label>
            <input type="file" id="pictures" multiple onChange={(e) => { setPics(e.target.files) }}/>
          </FieldsetStyled>
          <ButtonSendReq onClick={(e) => sendPics(e)}>Send</ButtonSendReq>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '20px'
            }}
          >
            <ButtonSendReq onClick={() => sendData()}>Send</ButtonSendReq>
            <ButtonClear type="reset">Clear form</ButtonClear>
          </div>
        </form>
      </section>
    </HomeCoverStyled>
  )
}

export default News
