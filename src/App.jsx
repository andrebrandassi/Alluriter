import { BrowserRouter, Route, Routes } from "react-router-dom"
import SignUp from "./pages/SingUp"
import NotFound from "./pages/NotFound"
import SignIn from "./pages/SingIn"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp/>}/>
        <Route path="signin" element={<SignIn/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
