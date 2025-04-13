import { useState, useRef } from 'react'
import './App.css'
import axios from 'axios'
import WeatherInfo from './components/Weatherinformation/WeatherInfo'
import Weather5Days from './components/Weather5days/Weather5Days'

function App() {
  const [weather, setWeather] = useState()
  const [weather5Days, setWeather5Days] = useState()
  const inputRef = useRef()

  async function SearchCity() {
    const city = inputRef.current.value
    const key = "e45681f424618f95c2aec0d1baf34114"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`
    const url5Days = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&lang=pt_br&units=metric`
    
    const apiInfo = await axios.get(url)
    const apiInfo5Days = await axios.get(url5Days)

    setWeather(apiInfo.data)
    setWeather5Days(apiInfo5Days.data)
  }

  return (
    <div className='container'>
      <h1> DevClub previsão do tempo </h1>
      <input ref={inputRef} type='text' placeholder='Nome da cidade' />
      <button onClick={SearchCity}> Buscar </button>

      { weather && <WeatherInfo weather={weather} /> }
      { weather5Days && <Weather5Days weather5Days={weather5Days} /> }
    </div>

  )
}

export default App
