import { BrowserRouter, Route, Routes } from "react-router-dom"
import SignUp from "./pages/SingUp"
import NotFound from "./pages/NotFound"




function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
