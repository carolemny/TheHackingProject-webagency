// react imports
import React from "react";
import ReactDOM from "react-dom";

// styles imports
import App from "./App";

import ThemeProvider from "./Provider";

ReactDOM.render(
  <ThemeProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById("root")
);
