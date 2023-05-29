import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '../pages/home'
import About from '../pages/about'
const RoutesComponent = () => {
  return (
    <>
    <Routes>
      <Route exact path="/" element={<Home />} />
    </Routes>
    </>
  )
}

export default RoutesComponent