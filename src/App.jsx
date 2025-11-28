import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import NavBar from "./components/Navbar"
import "bootstrap/dist/css/bootstrap.min.css"
import Footer from "./components/Footer"
import Home from "./components/Home"
import CityDetails from "./components/CityDetails"
import Favorites from "./components/Favorites"

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <BrowserRouter>
        <NavBar />
        <div className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/city/:cityName" element={<CityDetails />}></Route>
            <Route path="/favorites" element={<Favorites />}></Route>
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
