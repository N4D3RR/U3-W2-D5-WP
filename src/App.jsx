import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import NavBar from "./components/Navbar"
import "bootstrap/dist/css/bootstrap.min.css"
import Footer from "./components/Footer"
import Home from "./components/Home"
import CityDetails from "./components/CityDetails"

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/city/:cityName" element={<CityDetails />}></Route>
          {/* <Route path="/favorites" element={<Favorites />}></Route>  */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
