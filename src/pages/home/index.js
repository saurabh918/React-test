import React from 'react'
import { HomeStyle } from './styled'
import WrapperComponent from '../../components/wrapper'
import { decrement, increment } from '../../features/counterSlice'
import { useDispatch } from 'react-redux'
import { ThemeProvider } from 'styled-components'
const Home = () => {
  const dispatch = useDispatch()
  const theme = {
    primaryColor: "blue",
    secondaryColor: "red"
  }
  return (
    <ThemeProvider theme={theme}>
    <HomeStyle>
      <WrapperComponent>
        Home
      </WrapperComponent>
    </HomeStyle>
    </ThemeProvider>
  )
}

export default Home