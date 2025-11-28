import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import NavBar from "./components/Navbar"
import "bootstrap/dist/css/bootstrap.min.css"
import Footer from "./components/Footer"
import Home from "./components/Home"

function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          {/* <Route path="/city/:cityName" element={<CityDetails />}></Route>
          <Route path="/favorites" element={<Favorites />}></Route> */}
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
