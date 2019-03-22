import React from "react";
import { render as rtlRender } from "react-testing-library";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

export const render = (yourComponent) => {
  const theme = createMuiTheme();
  return rtlRender(
    <MuiThemeProvider theme={theme}>{yourComponent}</MuiThemeProvider>,
  );
};
