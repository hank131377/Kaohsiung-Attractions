import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Index from './pages/Index'
import './style/app.scss'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />}></Route>
        <Route path="/:id" element={<Index />}></Route>
      </Routes>
    </>
  )
}

export default App
