# Weather App

A simple weather app built with React, TypeScript, and Tailwind CSS.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [License](#license)

## Installation

Follow these steps to set up the project:

1. Clone the repository and navigate to the project directory:

   ```bash
   git clone https://github.com/derickferreira/weather01-react-ts-tw.git
   cd weather-app
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Install Tailwind CSS and initialize it:

   ```bash
   npm install -D tailwindcss
   npx tailwindcss init
   ```

4. Configure Tailwind CSS:

   Update your `tailwind.config.js` file to include the paths to your content files:

   ```javascript
   module.exports = {
     purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
     darkMode: false,
     theme: {
       extend: {},
     },
     variants: {
       extend: {},
     },
     plugins: [],
   };
   ```

5. Add Tailwind directives to your CSS file:

   Create or update the file `src/index.css` and add the following:

   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

6. Import the CSS file in your main entry file:

   Open `src/index.tsx` (or `src/index.js`) and import the CSS file:

   ```javascript
   import "./index.css";
   ```

## Usage

1. Go to WeatherContext.tsx file and add your KEY
  const API_KEY = "YOUR KEY HERE";
  // CREATE  an account HERE to ACCESS your KEY: https://openweathermap.org/

2. Start the development server:

   ```bash
   npm start
   ```

3. Open your browser and navigate to `http://localhost:3000`.

4. Enter a city name in the input field and click "Search" to view the current weather and hourly forecast.

## Features

- Fetches current weather and hourly forecast using the OpenWeatherMap API.
- Displays weather icon, temperature, and description.
- Responsive design with Tailwind CSS.

## License

This project is licensed under the MIT License.
