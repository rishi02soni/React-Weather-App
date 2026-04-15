import { useState } from 'react'
import axios from 'axios'
import WeatherCard from './components/WeatherCard'

export default function App() {
  const [city, setCity] = useState('')
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const fetchWeather = async () => {
    if (!city) return
    try {
      setLoading(true)
      setError('')
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_WEATHER_API_KEY}&units=metric`
      )
      setWeather(res.data)
    } catch {
      setError('City not found')
      setWeather(null)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="app">
      <div className="container">
        <h1>Weather App</h1>
        <div className="search-box">
          <input
            type="text"
            placeholder="Enter city..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button onClick={fetchWeather}>Search</button>
        </div>

        {loading && <p>Loading...</p>}
        {error && <p className="error">{error}</p>}
        {weather && <WeatherCard weather={weather} />}
      </div>
    </div>
  )
}
