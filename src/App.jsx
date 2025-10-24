import { ThemeProvider, createTheme, CssBaseline, Typography, Button, Container } from "@mui/material";
import Home from './pages/Home.jsx'

const theme = createTheme({
  typography: {
    fontFamily: "'Montserrat', sans-serif",
  },
});


function App() {

  return (
    <>
      <ThemeProvider theme={theme}>
        <Home/>
      </ThemeProvider>
    </>
  )
}

export default App
