import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import setupMocks from "./api/mock";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
if(import.meta.env["VITE_MOCK"] === "true") {
    setupMocks();
}

