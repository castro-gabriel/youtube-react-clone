import React from 'react'
import './App.css';

import { ThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core'
import {} from '@material-ui/icons'

import Home from './components/Home/Home'


const useStyles = makeStyles((theme) => ({
  root: {
      height: '100vh' 
  },
}))

function App() {

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#ffffff'
      },
      secondary: {
        main: '#3f51b5'
      }
    }
  })

  const classes = useStyles()

  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
