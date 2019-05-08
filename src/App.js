import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            // light: will be calculated from palette.primary.main,
            main: '#004265',
        },
        secondary: {
            // light: will be calculated from palette.primary.main,
            main: '#FFFFFF',
        },
    }
});

function App() {
    return (
        <MuiThemeProvider theme={theme}>
            <Router>
                <div>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/login" component={Login}/>
                </div>
            </Router>
        </MuiThemeProvider>
    );
}

export default App;
