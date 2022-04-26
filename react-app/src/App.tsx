import { MODBadge } from "design-system-react";

import React from "react";

import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <div>
          <div>
            <MODBadge>This is a badge</MODBadge>
          </div>
          <br />
          <div>
            <MODBadge size="large">This is a larger badge</MODBadge>
          </div>
          <br />
          <div>
            <MODBadge size="large" isRounded>
              This is a rounded badge
            </MODBadge>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
