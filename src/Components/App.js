import React from "react";
import Forecast from "./Forecast/Forecast";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="row">
          <nav>
            <div className="nav-wrapper blue darken-1">
              <a href="/" className="brand-logo">
                Quick Weather!
              </a>
            </div>
          </nav>
        </div>
        <main>
          <Forecast />
        </main>
      </div>
    );
  }
}

export default App;
