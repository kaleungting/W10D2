import React from "react";
import ReactDOM from "react-dom";
import Clock from "./frontend/clock";
import Tabs from "./frontend/tabs";
import Weather from "./frontend/weather";

function Root() {
  return (
    <div>
      <Clock />
      <Weather />
      <Tabs />
    </div>
  );
}

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<Root />, root);
});
