import { BrowserRouter, Route, Routes } from "react-router-dom"
import SignUp from "./pages/SignUp"
import SignIn from "./pages/SignIn"
import Home from "./pages/Home"
import Service from "./pages/Service"
import { useState } from "react"
import TokenContext from "./contexts/Token_User"
import RegisterService from "./pages/RegisterService"


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
        </Routes>
      </BrowserRouter>
    </TokenContext.Provider>
  )
}

export default App
