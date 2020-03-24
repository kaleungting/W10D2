import React from "react";

export default class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = { weather: null };
    this.success = this.success.bind(this);
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(this.success);
  }

  success(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const api = "7000df8b069d852fa82b12948f0577cd";

    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${encodeURIComponent(
      lat
    )}&lon=${encodeURIComponent(lon)}&appid=${api}`;

    const xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState === XMLHttpRequest.DONE) {
        // XMLHttpRequest.DONE == 4
        if (xmlhttp.status === 200) {
          const data = JSON.parse(xmlhttp.responseText);
          this.setState({ weather: data });
        }
      }
    };

    xmlhttp.open("GET", url, true);
    xmlhttp.send();
  }

  render() {
    let content = <div></div>;

    if (this.state.weather) {
      const weather = this.state.weather;
      const temp = (weather.main.temp - 273.15) * 1.8 + 32;
      content = (
        <div>
          <p>{weather.name}</p>
          <p>{temp.toFixed(1)} degrees</p>
        </div>
      );
    } else {
      content = <div className="loading">loading the weather...</div>;
    }

    return (
      <div>
        <h1>Weather</h1>
        <div className="weather">{content}</div>
      </div>
    );
  }
}
