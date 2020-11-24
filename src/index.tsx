import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from "./darkTheme";

import App from "./App";

ReactDOM.render(<ThemeProvider theme={theme}><App /></ThemeProvider> , document.querySelector("#root"));
