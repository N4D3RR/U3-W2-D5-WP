// https://openweathermap.org/api/weathermaps#google2
// https://react-leaflet.js.org/docs/start-setup/
import { MapContainer, Marker, TileLayer } from "react-leaflet"

// const Map = function () {
//   return (
//     <MapContainer
//       center={[51.505, -0.09]}
//       zoom={13}
//       scrollWheelZoom={false}
//       style={{ height: "500px", width: "100%" }}
//     >
//       <TileLayer
//         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//       />
//       <Marker position={[51.505, -0.09]}></Marker>
//     </MapContainer>
//   )
// }
const Map = function () {
  return (
    <>
      <title>Weather Map</title>
      <div className="p-3">
        <h2 className="text-center mb-3">Clouds Map</h2>

        <MapContainer
          center={[41.8719, 12.5674]}
          zoom={6}
          scrollWheelZoom={true}
          style={{ height: "500px", width: "100%" }}
        >
          {/* mappa base */}
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {/* layer nuvole */}
          <TileLayer
            url={`https://tile.openweathermap.org/map/clouds_new/{z}/{x}/{y}.png?appid=9319b17dda869360a74fae1583b82fe7`}
            opacity={1}
          />
          {/* marker su milano */}
          <Marker position={[45.46, 9.18]}></Marker>
        </MapContainer>
      </div>
      <div className="p-3">
        <h2 className="text-center mb-3">Precipitation Map</h2>

        <MapContainer
          center={[41.8719, 12.5674]}
          zoom={6}
          scrollWheelZoom={true}
          style={{ height: "500px", width: "100%" }}
        >
          {/* mappa base */}
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {/* layer precipitazioni */}
          <TileLayer
            url={`https://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=9319b17dda869360a74fae1583b82fe7`}
            opacity={1}
          />
          {/* marker su milano */}
          <Marker position={[45.46, 9.18]}></Marker>
        </MapContainer>
      </div>
      <div className="p-3">
        <h2 className="text-center mb-3">Wind Map</h2>

        <MapContainer
          center={[41.8719, 12.5674]}
          zoom={6}
          scrollWheelZoom={true}
          style={{ height: "500px", width: "100%" }}
        >
          {/* mappa base */}
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {/* layer precipitazioni */}
          <TileLayer
            url={`https://tile.openweathermap.org/map/wind_new/{z}/{x}/{y}.png?appid=9319b17dda869360a74fae1583b82fe7`}
            opacity={1}
          />
          {/* marker su milano */}
          <Marker position={[45.46, 9.18]}></Marker>
        </MapContainer>
      </div>
    </>
  )
}
export default Map
