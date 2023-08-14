import { BrowserRouter, Route, Routes } from "react-router-dom"
import SignUp from "./pages/SignUp"
import SignIn from "./pages/SignIn"
import Home from "./pages/Home"
import Service from "./pages/Service"
import { useState } from "react"
import TokenContext from "./contexts/Token_User"
import RegisterService from "./pages/RegisterService"
import MyAccount from "./pages/MyAccount"
import MyServices from "./pages/MyServices"


function App() {

  const [token, setToken] = useState(null);
 
  return (
    <TokenContext.Provider value={{token, setToken}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/cadastro" element={<SignUp/>}/>
          <Route path="/login" element={<SignIn/>}/>
          <Route path="/services/:id" element={<Service/>}/>
          <Route path="/services/cadastro" element={<RegisterService/>}/>
          <Route path="/minha-conta" element={<MyAccount/>}/>
          <Route path="/meus-servicos" element={<MyServices/>}/>
        </Routes>
      </BrowserRouter>
    </TokenContext.Provider>
  )
}

export default App
