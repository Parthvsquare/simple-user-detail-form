import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { Button, createTheme, ThemeProvider } from "@mui/material";
import UserDetailsForm from "./UserFormDetails";

function App() {
  const [count, setCount] = useState(0);

  const theme = createTheme({
    palette: {
      primary: {
        main: "#FFC130",
      },
      secondary: {
        main: "#1976d2",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <div style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <UserDetailsForm />
      </div>
    </ThemeProvider>
  );
}

export default App;
