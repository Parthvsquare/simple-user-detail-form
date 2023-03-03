import { createTheme, ThemeProvider } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import UserDetailsForm from "./UserFormDetails";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

function App() {
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
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <UserDetailsForm />
        </div>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;
