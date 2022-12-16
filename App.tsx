import { ThemeProvider } from "styled-components/native";

import { Dashboard } from "@screens/Dashboard/index";

import theme from "@theme/index";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Dashboard />
    </ThemeProvider>
  );
}
