import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
const logo = document.querySelectorAll("#svgLogo path");
console.log(logo);

for (let index = 0; index < logo.length; index++) {
  console.log(`Letter ${index} is ${logo[index].getTotalLength()}`);
}
