import Card from "react-bootstrap/Card"
import { Link } from "react-router-dom"

const CityCard = function ({ data }) {
  return (
    <Card
      as={Link}
      to={`city/${data.name}`}
      className="text-decoration-none my-3 shadow-sm"
    >
      <Card.Body className="text-center">
        <Card.Img
          variant="top"
          src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} //weather è un array, un incubo capire il problema
          alt="icon"
          style={{ width: "70px", height: "70px" }}
        />
        <Card.Title className="fs-3">{data.name}</Card.Title>
        <Card.Text className="mt-3">
          <strong>{data.main.temp.toFixed(1)}°C </strong>
        </Card.Text>
        <Card.Text className="text-muted small">
          Min: {data.main.temp_min.toFixed(1)}°C - Max:{" "}
          {data.main.temp_max.toFixed(1)}°C
        </Card.Text>
      </Card.Body>
    </Card>
  )
}
export default CityCard
