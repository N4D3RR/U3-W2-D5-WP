import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import NavBar from "./components/Navbar"
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
