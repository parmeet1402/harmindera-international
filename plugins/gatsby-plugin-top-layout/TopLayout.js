import React from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import { QueryClientProvider, QueryClient } from "react-query";

import theme from "../../src/theme";
import "./styles.css";

export default function TopLayout(props) {
  // Create a client
  const queryClient = new QueryClient();

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <QueryClientProvider client={queryClient}>{props.children}</QueryClientProvider>
      </ThemeProvider>
    </React.Fragment>
  );
}
