import React from 'react'
import styled from 'styled-components'
import HeaderAdmin from './HeaderAdmin'
const HomeCoverStyled = styled.div`
  padding: 100px;
  text-align: left;
`
const Newsletter = function () {
  return (
      <HomeCoverStyled>
          <HeaderAdmin />
        <h2>Newsletter</h2>
        <form>
          <fieldset>
            <label htmlFor="">Link</label>
            <input type="text" />
          </fieldset>
        </form>
      </HomeCoverStyled>
  )
}

export default Newsletter
