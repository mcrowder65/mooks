import React from "react";
import { SnackbarContext } from "./SnackbarProvider";

export default function useSnackbar() {
  return React.useContext(SnackbarContext);
}
