// react imports
import { FormEvent, useState } from "react";

// context
import { useWeatherContext } from "./contexts/WeatherContext";

function App() {
  const [city, setCity] = useState<string>("");
  const { weather, forecast, fetchWeatherData } = useWeatherContext();

  const handleFetchWeather = (event: FormEvent) => {
    event.preventDefault();
    fetchWeatherData(city);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-md p-6 max-w-sm w-full">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Weather App</h2>
        <form onSubmit={handleFetchWeather} className="mb-4">
          <label>
            <span>City</span>
            <input
              type="text"
              id="city"
              placeholder="Enter city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          </label>
          <input
            type="submit"
            value="Search"
            className="mt-2 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
          />
        </form>
        {weather && (
          <>
            <img
              id="weather-icon"
              src={`https://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
              alt="Weather Icon"
              className="mx-auto my-4"
            />
            <div id="temp-div" className="text-3xl font-semibold text-gray-800">
              <p>{Math.round(weather.main.temp - 273.15)}°C</p>
            </div>
            <div id="weather-info" className="text-lg text-gray-600">
              <p>{weather.weather[0].description}</p>
            </div>
          </>
        )}

        {forecast && (
          <div id="hourly-forecast" className="mt-6">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              Hourly Forecast
            </h3>
            {forecast.list.slice(0, 5).map((item) => (
              <div
                key={item.dt}
                className="flex justify-between items-center mb-2"
              >
                <p className="text-gray-600">
                  {new Date(item.dt * 1000).toLocaleTimeString()}
                </p>
                <p className="text-gray-600">
                  {Math.round(item.main.temp - 273.15)}°C
                </p>
                <img
                  src={`https://openweathermap.org/img/w/${item.weather[0].icon}.png`}
                  alt="weather icon"
                  className="w-8 h-8"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
