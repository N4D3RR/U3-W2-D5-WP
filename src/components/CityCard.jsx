import Card from "react-bootstrap/Card"
import { Link } from "react-router-dom"

const CityCard = function ({ data }) {
  return (
    <Card
      as={Link}
      to={`/city/${data.name}`}
      className="text-decoration-none my-3 shadow border-0 rounded-4 bg-primary bg-gradient text-white"
    >
      <Card.Body className="text-center">
        <Card.Title className="fs-4 fw-bold mb-3">{data.name}</Card.Title>

        <Card.Img
          src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
          alt="icon"
          className="mb-3"
          style={{ width: "70px", height: "70px" }}
        />

        <Card.Text className="display-6 fw-light mb-2">
          {data.main.temp.toFixed(1)}°
        </Card.Text>

        <Card.Text className="small text-muted mb-0">
          Min {data.main.temp_min.toFixed(1)}° • Max{" "}
          {data.main.temp_max.toFixed(1)}°
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default CityCard
