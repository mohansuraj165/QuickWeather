import React from "react";
const images = require.context("../../Images", true);

const DisplayForecast = (props) => {
  window.weatherData = props.weatherData;

  let img;

  try {
       img = images("./" + props.weatherData.weather[0].main + ".jpg")
  } catch(err) {
      if (props.weatherData.weather[0].main.toLowerCase().includes("cloud")) {
          img = "./Clouds.jpg"
      }
      else if (props.weatherData.weather[0].main.toLowerCase().includes("sun") ||
          props.weatherData.weather[0].main.toLowerCase().includes("clear")) {
          img = "./Clear.jpg"
      }

      else if (props.weatherData.weather[0].main.toLowerCase().includes("snow")) {
          img = "./Snow.jpg"
      }

      else if (props.weatherData.weather[0].main.toLowerCase().includes("rain") ||
          props.weatherData.weather[0].main.toLowerCase().includes("shower")) {
          img = "./Rain.jpg"
      }
      else if (props.weatherData.weather[0].main.toLowerCase().includes("storm")) {
          img = "./Thunder.jpg"
      }
      else {
          img = images("./Default.jpg");
      }
  }
  let sunrise = new Date(props.weatherData.sys.sunrise);
  return (
    <div class="align-items-center" >
      {props.weatherData.cod === 200 ? (
          //<div className="container">
        <div class="text-center" style={{width: 750, height: 750}}>
          <div className="row"  >
            <div className="col s12 m7" >
              <div className="card" >
                <div className="card-image"  >
                  <img src={img} alt="weather" />
                  <span className="card-title" >
                    {props.weatherData.name} -{" "}
                    {props.weatherData.weather[0].description}
                  </span>
                </div>
                <div className="card-content">
                  <div> Temperature : {props.weatherData.main.temp} &deg;F</div>
                  <div> Min : {props.weatherData.main.temp_min} &deg;F</div>
                  <div> Max : {props.weatherData.main.temp_max} &deg;F</div>
                  <div> Humidity : {props.weatherData.main.temp_max} &#37;</div>
                  <div> Sunrise : {sunrise.toLocaleTimeString()}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
          //</div>
      ) : null}
    </div>
  );
};

export default DisplayForecast;
