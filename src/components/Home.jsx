import { useEffect, useState } from "react"
import { Col, Container, Row, Form } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import CityCard from "./CityCard"

const Home = function () {
  const [city, setCity] = useState("")
  const [cardData, setCardData] = useState([])

  const cities = ["Padova", "Milano", "Cagliari", "New York", "Tokyo", "Parigi"]

  const navigate = useNavigate()

  const loadCity = (cityName) => {
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=9319b17dda869360a74fae1583b82fe7&units=metric`
    fetch(API)
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error("Errore:" + res.status)
        }
      })
      .then((data) => {
        setCardData((prev) => {
          return [...prev, data]
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }
  //carico le città in cities al primo caricamento della pagina
  useEffect(() => {
    cities.forEach((c) => loadCity(c))
  }, [])

  return (
    <>
      <h1 className="text-center">METEO</h1>
      <Container>
        <Form.Control
          type="text"
          placeholder="Cerca località"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <Row>
          {cardData.map((data, i) => {
            return (
              <Col xs={12} sm={6} lg={4} key={i}>
                <CityCard data={data} />
              </Col>
            )
          })}
        </Row>
      </Container>
    </>
  )
}
export default Home
