import React from 'react'
import styled from 'styled-components'
import HeaderAdmin from './HeaderAdmin'

const HomeCoverStyled = styled.div`
  padding: 100px;
  text-align: left;
`
// eslint-disable-next-line react/prop-types
const AdminCover = ({ el }) => {
  return (
        <HomeCoverStyled>
            <HeaderAdmin />
            {el}
        </HomeCoverStyled>
  )
}

export default AdminCover
