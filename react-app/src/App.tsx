import { MODBadge, MODTextInput } from "design-system-react";

import React, { useEffect, useRef, useState } from "react";

import logo from "./logo.svg";
import "./App.css";

function App() {
  const [value, setValue] = useState("");
  const inputRef = useRef<Element>(null);

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
          <br />
          <div>
            <MODTextInput
              ref={inputRef}
              initialValue="Hello"
              label="A label"
              onInput={(event) => {
                setValue(event.target.value);
              }}
            />
          </div>
          <br />
          <div>Current value: {value}</div>
        </div>
      </header>
    </div>
  );
}

export default App;
