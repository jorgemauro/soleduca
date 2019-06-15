import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Home from './pages/Home';
import Podserv from './pages/prodserv'
import Login from './pages/Login';
import DashboardManager from './pages/DashboardManager';
import DashboardAluno from './pages/DashboardAluno';
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
                    <Route exact path="/produtoseservicos" component={Podserv}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/dashboard" component={DashboardManager}/>
                    <Route exact path="/AcessoAluno" component={DashboardAluno}/>
                </div>
            </Router>
        </MuiThemeProvider>
    );
}

export default App;
