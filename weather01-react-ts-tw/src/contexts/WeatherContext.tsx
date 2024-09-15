// interfaces or types
interface IWeatherData {
  cod: string;
  message: string;
  name: string;
  main: {
    temp: number;
  };
  weather: {
    description: string;
    icon: string;
  }[];
}

interface IForecastData {
  list: {
    dt: number;
    main: {
      temp: number;
    };
    weather: {
      icon: string;
    }[];
  }[];
}

interface IWeatherContextProps {
  weather: IWeatherData | undefined;
  forecast: IForecastData | undefined;
  searchCities: string[];
  fetchWeatherData: (city: string) => void;
}

// imports
import { useState, createContext, ReactNode, useContext } from "react";

// logic

export const WeatherContext = createContext<IWeatherContextProps | undefined>(
  undefined
);

export const WeatherProvider = ({ children }: { children: ReactNode }) => {
  const API_KEY = "YOUR KEY HERE";
  // CREATE  an account HERE to ACCESS your KEY: https://openweathermap.org/
  const BASE_URL = "https://api.openweathermap.org/data/2.5";
  // const KELVIN_TO_CELSIUS = -273.15;

  const [weather, setWeather] = useState<IWeatherData | undefined>(undefined);
  const [forecast, setForecast] = useState<IForecastData | undefined>(
    undefined
  );
  const [searchCities, setSeachCities] = useState<string[]>([]);

  const fetchWeather = <T,>(url: string, callback: (data: T) => void) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => callback(data))
      .catch((error) => console.log(error));
  };

  const fetchWeatherData = (city: string): void => {
    if (searchCities.includes(city.toLocaleLowerCase())) return;

    const currentWeatherUrl = `${BASE_URL}/weather?q=${city}&appid=${API_KEY}`;
    const forecastUrl = `${BASE_URL}/forecast?q=${city}&appid=${API_KEY}`;

    fetchWeather<IWeatherData>(currentWeatherUrl, (data) => setWeather(data));
    fetchWeather<IForecastData>(forecastUrl, (data) => setForecast(data));

    setSeachCities((prevCities) => [...prevCities, city.toLocaleLowerCase()]);
  };

  return (
    <WeatherContext.Provider
      value={{ weather, forecast, searchCities, fetchWeatherData }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

//   hooks functions

export const useWeatherContext = () => {
  const context = useContext(WeatherContext);
  if (context === undefined) {
    throw new Error("Error");
  }

  return context;
};
