import  './styles/App.css'
import Login from './Pages/Login/index'
import Galeria from './Pages/Galeria/index'
import {Cadastro} from "./Pages/Cadastro/index"

import { BrowserRouter,Routes, Route, Navigate } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to='/home'/>} />
        <Route path='/home' element={<Login />} />
        <Route path='/galeria' element={<Galeria />} />
        <Route path='/cadastro' element={<Cadastro />} />
      </Routes>
    </BrowserRouter>    
     
  )
}

export default App
