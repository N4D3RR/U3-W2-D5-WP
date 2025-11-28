import { useEffect, useState } from "react"
import { Col, Container, Row, Form, Spinner, Alert } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import CityCard from "./CityCard"

const Home = function () {
  const [city, setCity] = useState("")
  const [cardData, setCardData] = useState([])
  // const [loading, setLoading] = useState(true)
  // const [error, setError] = useState(false)

  const cities = ["Padova", "Milano", "Cagliari", "New York", "Tokyo", "Parigi"]

  const navigate = useNavigate()

  const loadCity = (cityName) => {
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=9319b17dda869360a74fae1583b82fe7&units=metric`
    fetch(API)
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error("Errore:", res.status)
        }
      })
      .then((data) => {
        if (data.cod !== 200) {
          // setError(true)
        } else {
          setCardData((prev) => {
            return [...prev, data]
          })
        }
      })
      .catch((err) => {
        console.log(err)
        // setError(true)
      })
  }
  //carico le città in cities al primo caricamento della pagina
  useEffect(() => {
    cities.forEach((c) => loadCity(c))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  // useEffect(() => {
  //   if (cardData.length === cities.length) {
  //     setLoading(false)
  //   }
  // }, [cardData]) ci rinuncio. volevo far si che anche se una fetch falliva mi caricava comunque le altre

  return (
    <>
      <title>Meteo App</title>
      <h1 className="text-center my-3 fw-bold">METEO</h1>

      <Container className="">
        <Form
          className="my-3"
          onSubmit={(e) => {
            e.preventDefault()
            if (city.trim()) navigate(`/city/${city}`)
          }}
        >
          <Form.Control
            type="text"
            placeholder="Cerca località"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="text-center w-100 w-md-50"
          />
        </Form>
        <Row>
          {cardData.map((data, i) => (
            <Col xs={12} sm={6} lg={4} key={i}>
              <CityCard data={data} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  )
}
export default Home
