import React from "react";
import { render as rtlRender } from "@testing-library/react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

export const render = (yourComponent) => {
  const theme = createMuiTheme();
  const { rerender: rtlRerender, ...others } = rtlRender(
    <MuiThemeProvider theme={theme}>{yourComponent}</MuiThemeProvider>,
  );

  // If you just call @testing-library/react rerender straight up, it will rerender but without
  // the original providers
  const rerender = (ui) => {
    return rtlRerender(
      <MuiThemeProvider theme={createMuiTheme()}>{ui}</MuiThemeProvider>,
    );
  };

  return {
    rerender,
    ...others,
  };
};
