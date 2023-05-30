import React from 'react'
import { HeaderStyle } from './styled'
import WrapperComponent from '../wrapper'
import Navbar from '../navbar'
import { ThemeProvider } from 'styled-components'
const HeaderComponent = () => {
  const theme = {
    background: '#f5f5dc',
    align: 'left'
  }
  return (
    <ThemeProvider theme={theme}>
      <HeaderStyle> 
        <WrapperComponent>
          <Navbar />
        </WrapperComponent>
      </HeaderStyle>
    </ThemeProvider>
  )
}

export default HeaderComponent