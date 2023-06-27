import './styles/App.css'
import Login from './Pages/Login/index'
import Galeria from './Pages/Galeria/index'
import { Cadastro } from "./Pages/Cadastro/index"

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import { api } from './service/api'
import { useEffect } from 'react'
import { AuthProvider } from "./AuthContext"

function App() {

  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<Navigate to='/login' />} />
          <Route path='/login' element={<Login />} />
          <Route path='/home' element={<Galeria />} />
          <Route path='/cadastro' element={<Cadastro />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>

  )
}

export default App
