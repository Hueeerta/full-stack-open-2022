import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const weather_api_key = process.env.REACT_APP_API_KEY;

ReactDOM.createRoot(document.getElementById("root")).render(<App weather_api_key={weather_api_key} />);
