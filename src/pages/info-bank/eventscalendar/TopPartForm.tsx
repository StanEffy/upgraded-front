import * as React from 'react'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  margin-bottom: 20px;
  justify-content: space-between;
`

const TopPartForm = () => {
  const [age, setAge] = React.useState('')

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string)
  }

  return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="Category">Category</InputLabel>
                <Select
                    labelId="Category"
                    id="Category"
                    value={age}
                    label="Category"
                    onChange={handleChange}
                    sx={{ backgroundColor: '#ffffff' }}
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
            <Container>
            <FormControl fullWidth sx={{ marginRight: '20px', width: '70%' }}>
                <InputLabel id="Month">Month</InputLabel>
                <Select
                    labelId="Month"
                    id="Month"
                    value={age}
                    label="Month"
                    onChange={handleChange}
                    sx={{ backgroundColor: '#ffffff' }}
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
            <FormControl fullWidth sx={{ width: '30%' }}>
                <InputLabel id="Year">Year</InputLabel>
                <Select
                    labelId="Year"
                    id="Year"
                    value={age}
                    label="Year"
                    onChange={handleChange}
                    sx={{ backgroundColor: '#ffffff' }}
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
            </Container>
        </Box>
  )
}

export default TopPartForm
