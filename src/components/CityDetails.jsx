import { useState, useEffect } from "react"
import { Alert, Button, Card, Container, Spinner } from "react-bootstrap"
import { useParams } from "react-router-dom"

const CityDetails = function () {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [isFavorite, setIsFavorite] = useState(false)

  const params = useParams()
  const cityName = params.cityName // const {cityName} = useParams() ?

  const API = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=9319b17dda869360a74fae1583b82fe7&units=metric`

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("favorites")) || []
    setIsFavorite(saved.includes(cityName))
  }, [cityName])

  useEffect(() => {
    setLoading(true)

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
          setError(true)
          setLoading(false)
        } else {
          setError(false)
          setLoading(false)
          setData(data)
        }
      })
      .catch((err) => {
        console.log(err)
        setError(true)
        setLoading(false)
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cityName])

  const toggleFavorite = () => {
    let saved = JSON.parse(localStorage.getItem("favorites")) || []
    if (!isFavorite) {
      saved.push(cityName)
    } else {
      saved = saved.filter((city) => city !== cityName)
    }
    localStorage.setItem("favorites", JSON.stringify(saved))
    setIsFavorite(!isFavorite)
  }
  return (
    <>
      <title>Meteo Details</title>
      <Container className="mt-4">
        {/* LOADING */}
        {loading && (
          <div className="text-center mt-5">
            <Spinner animation="border" variant="primary" />
          </div>
        )}

        {/* ERROR */}
        {!loading && error && (
          <Alert variant="danger" className="text-center">
            Errore nel caricamento della località.
          </Alert>
        )}

        {/* SUCCESS */}
        {!loading && !error && data && (
          <Card
            className="p-3 text-center shadow mx-auto"
            style={{ maxWidth: "400px" }}
          >
            <Card.Title className="fs-2 fw-bold">{data.name}</Card.Title>

            <Card.Img
              src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
              alt="Weather icon"
              className="mx-auto"
              style={{ width: "90px" }}
            />

            <Card.Body>
              <Card.Text className="fs-3 fw-bold">
                {data.main.temp.toFixed(1)}°C
              </Card.Text>
              <Card.Text>
                Percepita: {data.main.feels_like.toFixed(1)}°C
              </Card.Text>
              <Card.Text>
                Min: {data.main.temp_min.toFixed(1)}°C • Max:{" "}
                {data.main.temp_max.toFixed(1)}°C
              </Card.Text>
              <Card.Text>Umidità: {data.main.humidity}%</Card.Text>
              <Card.Text>Vento: {data.wind.speed} m/s</Card.Text>

              <Button
                variant={isFavorite ? "outline-danger" : "outline-success"}
                onClick={toggleFavorite}
              >
                {isFavorite ? "Rimuovi dai preferiti" : "Aggiungi ai preferiti"}
              </Button>
            </Card.Body>
          </Card>
        )}
      </Container>
    </>
  )
}
export default CityDetails
