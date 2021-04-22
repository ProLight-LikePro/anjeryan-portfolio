//import dependencies
import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme, CssBaseline } from '@material-ui/core';
import './App.css';

//import modules
import Home from './pages/Home';

//create MUI theme
const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 768,
      lg: 1280,
      xl: 1600
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
      <CssBaseline />
    </ThemeProvider>

  );
}

export default App;
