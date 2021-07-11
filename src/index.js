import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Rtl from "./layout/Rtl";
import { BrowserRouter as Router } from "react-router-dom";
import Theme from "./layout/Theme";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Rtl>
        <Theme>
          <App />
        </Theme>
      </Rtl>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
