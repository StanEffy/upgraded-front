import React from 'react'
import SelectData from './SelectData'
import styled from 'styled-components'
import HeaderAdmin from './HeaderAdmin'
const HomeCoverStyled = styled.div`
  padding: 100px;
  text-align: left;
`
const FormStyled = styled.form`
  fieldset {
    display: flex;
    flex-direction: column;
    
    label{
      display: block;
    }
  }
`

const Team = () => {
  return (
        <HomeCoverStyled>
            <HeaderAdmin />
            <h2>NEWS</h2>
            <SelectData />
            <FormStyled>
                <fieldset>
                    <label>Name and Surname</label>
                    <input type={'text'} />
                </fieldset>
                <fieldset>
                    <label>Title</label>
                    <input type={'text'} />
                </fieldset>
                <fieldset>
                    <label>Started at</label>
                    <input type={'date'} />
                </fieldset>
                <fieldset>
                    <label>Ended at</label>
                    <input type={'date'} />
                </fieldset>
                <fieldset>
                    <label>LinkedIn link</label>
                    <input type={'text'} />
                </fieldset>
                <fieldset>
                    <label>Bio</label>
                    <textarea style={{ height: '60px' }}/>
                </fieldset>
                <fieldset>
                    <label>Picture</label>
                    <input type={'file'} />
                </fieldset>
            </FormStyled>
        </HomeCoverStyled>
  )
}

export default Team
