import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// context
import { WeatherProvider } from "./contexts/WeatherContext.tsx";

createRoot(document.getElementById("root")!).render(
  <WeatherProvider>
    <App />
  </WeatherProvider>
);
