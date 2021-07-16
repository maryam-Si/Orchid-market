import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Rtl from "./layout/Rtl";
import { BrowserRouter as Router } from "react-router-dom";
import Theme from "./layout/Theme";
import { Provider } from "react-redux";
import store from "./store/configureStore";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Rtl>
          <Theme>
            <App />
          </Theme>
        </Rtl>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
