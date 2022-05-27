import React from 'react'
import styled from 'styled-components'
const HomeCoverStyled = styled.div`
  padding: 100px;
  text-align: left;
`
const FieldsetStyled = styled.fieldset`
  display: flex;
  flex-direction: column;
`
// eslint-disable-next-line react/prop-types
const SelectData = function ({ options = [], dataName = 'Template' }) {
  return (
    <form>
      <FieldsetStyled>
        <label>
          <select>
            {options.map((option) => (
              <option key={option.name}>{option.name}</option>
            ))}
          </select>
          {dataName}
        </label>
      </FieldsetStyled>
    </form>
  )
}

export default SelectData
