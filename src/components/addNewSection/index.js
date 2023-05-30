import React from 'react'
import { AddSectionStyle } from './styled'
import { ThemeProvider } from 'styled-components'

const AddNewSection = ({name,value,handleChange,handle,cancel}) => {
  const theme = {
    background: "#faebd7"
  }
  return (
    <ThemeProvider theme={theme}>
      <AddSectionStyle className='fixed-element'>
        <h3>Add New {name}</h3>
        <input type='text' value={value} onChange={(e) => handleChange(e)} />
        <button onClick={() => handle()}>Add</button>
        <button onClick={() => cancel()}>Cancel</button>
      </AddSectionStyle>
    </ThemeProvider>
  )
}

export default AddNewSection