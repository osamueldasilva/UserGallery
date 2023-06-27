import  './styles/App.css'
import Login from './Pages/Login/index'
import Galeria from './Pages/Galeria/index'
import {Cadastro} from "./Pages/Cadastro/index"

import { BrowserRouter,Routes, Route, Navigate, useHistory } from 'react-router-dom'

import { api } from './service/api'
import { useEffect } from 'react'

function App() {
   useEffect(() => {
    checkAutenticador()
   }, [])

   async function checkAutenticador() {
    const token = JSON.parse(localStorage.getItem("token"))

    if(token) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`

      try {
      const {data} = await api.get("user/login")

      localStorage.setItem("token", JSON.stringify(data.token));

      history.push('/home')
        
      } catch (error) {
        history.push("/login")
      }
    }

   }
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to='/login'/>} />
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Galeria />} />
        <Route path='/cadastro' element={<Cadastro />} />
      </Routes>
    </BrowserRouter>    
     
  )
}

export default App
