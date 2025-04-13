import "./Weather5Days.css";

function Weather5Days({ weather5Days }) {
  console.log(weather5Days);

  let dailyForecast = {};

  for (let forecast of weather5Days.list) {
    const date = new Date(forecast.dt * 1000).toLocaleDateString();

    if (!dailyForecast[date]) {
      dailyForecast[date] = forecast;
    }

    console.log(dailyForecast);
  }

  const nextFiveDays = Object.values(dailyForecast).slice(0, 5);

  function convertDate(date) {
    const newDate = new Date(date.dt * 1000).toLocaleDateString("pt-br", {
      weekday: "long",
      day: "2-digit",
    });

    return newDate;
  }

  return (
    <div className="weather-container">
      <h3> Previsão Próximos 5 Dias </h3>
      <div className="weather-list">
        {nextFiveDays.map((forecast) => (
          <div key={forecast.dt} className="weather-item">
            <p className="week-date"> {convertDate(forecast)} </p>
            <img
              src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`}
            />
            <p>
              {" "}
              {Math.round(forecast.main.temp_min)} ºC /{" "}
              {Math.round(forecast.main.temp_max)} ºC{" "}
            </p>
            <p className="second-description"> {forecast.weather[0].description} </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Weather5Days;
