import Login from './components/login/Login.jsx'
import Register from './components/register/Register.jsx'

//Importe do React Rounter Dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
    </Routes>
  </BrowserRouter>
  )
}

export default App
