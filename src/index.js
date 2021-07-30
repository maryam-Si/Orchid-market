import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Rtl from "./layout/Rtl";
import Theme from "./layout/Theme";
import { Provider } from "react-redux";
import store from "./store/configureStore";
import { saveState } from "./utils/shopingCartInStorage";

/** implement subscription */

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Rtl>
        <Theme>
          <App />
        </Theme>
      </Rtl>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
