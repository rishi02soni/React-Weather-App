export default function WeatherCard({ weather }) {
  return (
    <div className="weather-card">
      <h2>{weather.name}, {weather.sys.country}</h2>
      <h3>{weather.main.temp}°C</h3>
      <p>{weather.weather[0].main}</p>
      <p>Humidity: {weather.main.humidity}%</p>
      <p>Wind: {weather.wind.speed} km/h</p>
    </div>
  )
}
