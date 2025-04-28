import './WeatherInfo.css'

function WeatherInfo({ weather }) {
  console.log(weather);

  return (
    <div className='weather-container'>
      <h1 className='nome-lugar'> {weather.name} </h1>
      <div className='weather-info'>
        <img
          src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
        />
        <p className='temperature'> {Math.round(weather.main.temp)} ºC </p>
      </div>
      <p className='description'> {weather.weather[0].description} </p>
      <div className='details'>
        <p> Sensação: {Math.round(weather.main.feels_like)}º</p>
        <p> Umidade: {weather.main.humidity}%</p>
      </div>
    </div>
  );
}

export default WeatherInfo;
