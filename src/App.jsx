import { BrowserRouter, Route, Routes } from "react-router-dom"
import SignUp from "./pages/SignUp"
import SignIn from "./pages/SignIn"
import Home from "./pages/Home"
import Service from "./pages/Service"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/cadastro" element={<SignUp/>}/>
          <Route path="/login" element={<SignIn/>}/>
          <Route path="/services/:id" element={<Service/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
