import { useEffect, useState } from "react"
import { Alert, Card, Col, Container, Row, Spinner } from "react-bootstrap"
import { Link } from "react-router-dom"

const Favorites = function () {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("favorites")) || []

    if (saved.length === 0) {
      setLoading(false)
      return
    }

    let completed = 0
    const results = []

    saved.forEach((city) => {
      const API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9319b17dda869360a74fae1583b82fe7&units=metric`

      fetch(API)
        .then((res) => {
          if (res.ok) return res.json()
          throw new Error("Errore fetch")
        })
        .then((json) => {
          if (json.cod === 200) results.push(json)
        })
        .catch((err) => {
          console.log(err)
        })
        .then(() => {
          completed++
          if (completed === saved.length) {
            setData(results)
            setLoading(false)
          }
        })
    })
  }, [])

  return (
    <>
      <title>Favorites</title>
      <Container>
        <Row>
          {loading && (
            <div className="text-center mt-5">
              <Spinner animation="border" variant="primary" />
            </div>
          )}
          {!loading && data.length === 0 && (
            <Alert className="text-center my-3 fs-4">
              Nessun preferito salvato.
            </Alert>
          )}
          {!loading &&
            data.length > 0 &&
            data.map((city, i) => (
              <Col xs={12} sm={6} lg={4} key={i} className="">
                <Card
                  as={Link}
                  to={`/city/${city.name}`}
                  className="text-decoration-none my-3 shadow-sm border-0 rounded-4 bg-primary bg-gradient text-white "
                >
                  <Card.Body className="text-center">
                    <Card.Title className="fs-4 fw-bold mb-3">
                      {city.name}
                    </Card.Title>

                    <Card.Img
                      src={`https://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`}
                      alt="icon"
                      className="mb-3"
                      style={{ width: "70px", height: "70px" }}
                    />

                    <Card.Text className="display-6 fw-light mb-2">
                      {city.main.temp.toFixed(1)}°
                    </Card.Text>

                    <Card.Text className="small text-muted mb-0">
                      Min {city.main.temp_min.toFixed(1)}° • Max{" "}
                      {city.main.temp_max.toFixed(1)}°
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row>
      </Container>
    </>
  )
}
export default Favorites
