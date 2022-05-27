import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import SelectData from './SelectData'
import AdminCover from './AdminCover'
import HeaderAdmin from './HeaderAdmin'
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
const HomeCoverStyled = styled.div`
  padding: 100px;
  text-align: left;
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
const urlPartners = 'http://localhost:3001/api/v1/partners'
const urlMembers = 'http://localhost:3001/api/v1/members'

const Partners = function () {
  const [activeTab, setActiveTab] = useState('Add')
  const [membersArray, setMembersArray] = useState(null)
  const [mainPartners, setMainPartners] = useState([])

  const [members, setMembers] = useState([])

  const [activeMember, setActiveMember] = useState(null)

  const [isPartner, setIsPartner] = useState(false)
  const [pic, setPic] = useState(null)

  const companyName = useRef('')
  const description = useRef('')

  const selectChangeHandler = (e) => {
    let selectedCompany = mainPartners.find(el => el.name === e.target.value)
    if (mainPartners.find(el => el.name === e.target.value)) {
      selectedCompany = mainPartners.find(el => el.name === e.target.value)
      setMembersArray('partners')
    } else {
      selectedCompany = members.find(el => el.name === e.target.value)
      setMembersArray('members')
    }
    setActiveMember(selectedCompany)

    companyName.current.value = selectedCompany.name
    description.current.value = selectedCompany.description
  }

  const addCompany = async (e) => {
    e.preventDefault()

    const form = new FormData()
    if (pic != null) {
      // form.append("img", pic)
      console.log('NOT NULL')
      form.append('imgF', pic)
    }

    form.append('name', companyName.current.value)
    form.append('description', description.current.value)
    form.append('img', 'imggg')
    for (const key in form.entries()) {
      console.log(key)
    }
    // const obj ={
    //   img: 'reader.result',
    //   name: 'STAN2',
    //   description: "DESCRIPTI2ON"
    // }
    // axios({
    //   method: "post",
    //   url: isPartner ? urlPartners : urlMembers,
    //   data: form,
    //   headers: { "Content-Type": "multipart/form-data" },
    // })
    //     .then(function (response) {
    //       //handle success
    //       console.log(response);
    //     })
    //     .catch(function (response) {
    //       //handle error
    //       console.log(response);
    //     });
    axios.post(isPartner ? urlPartners : urlMembers, form).then(data => console.log(data))
  }

  const deleteHandler = async () => {
    const result = confirm(`Are you sure you want to delete ${activeMember.name} from the DB? It can't be undone...`)
    if (result) {
      await axios.delete(membersArray === 'members' ? urlMembers : urlPartners + '/' + activeMember._id)
    }
  }
  useEffect(() => {
    (async () => {
      const partnersReq = await axios.get(urlPartners)
      setMainPartners(partnersReq.data.data.partners)

      const membersReq = await axios.get(urlMembers)
      setMembers(membersReq.data.data.members.sort((a, b) => a.name.localeCompare(b.name)))
    })()
  }, [])
  return (
    <HomeCoverStyled>
      <HeaderAdmin />
      <h2>Partners</h2>
      <div>
        {JSON.stringify(activeMember)}
      </div>
      <FieldsetStyled>
        <label htmlFor="name">Choose company from the list</label>
        <select onChange={(e) => {
          e.preventDefault()
          selectChangeHandler(e)
        }}>
          <optgroup label="Main Partners">
            {mainPartners.map((partner) => (
              <option key={partner.name}>{partner.name}</option>
            ))}
          </optgroup>
          <optgroup label="Members">
            {members.map((member) => (
              <option key={member.name} >{member.name}</option>
            ))}
          </optgroup>
        </select>
      </FieldsetStyled>
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
            <legend>Is it a partner (if not checked it is a member)</legend>
            <label htmlFor="name">
              Name
            </label>
            <input type="checkbox" id="isPartner" onChange={() => setIsPartner(!isPartner)}/>
          </FieldsetStyled>
          <FieldsetStyled>
            <legend>Enter name of the news</legend>
            <label htmlFor="name">
              Name
            </label>
            <input type="text" id="name" ref={companyName}/>
          </FieldsetStyled>
          <FieldsetStyled>
            <legend>Enter text of the news</legend>
            <label htmlFor="#description">

              Description
            </label>
            <textarea id="description" ref={description}/>
          </FieldsetStyled>
          <FieldsetStyled>
            <legend>Png, jpg</legend>
            <label htmlFor="picture">
              Logo
            </label>
            <input type="file" id="picture" onChange={(e) => setPic(e.target.files[0])}/>
          </FieldsetStyled>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '20px'
            }}
          >
            <ButtonSendReq onClick={(e) => addCompany(e)}>Send to the DataBase</ButtonSendReq>
            <ButtonClear onClick={() => deleteHandler()}>Delete selected</ButtonClear>
            <ButtonClear type="reset">Clear form</ButtonClear>
          </div>
        </form>
      </section>
    </HomeCoverStyled>
  )
}

export default Partners
