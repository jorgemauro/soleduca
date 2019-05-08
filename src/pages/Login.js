import React from 'react';
import Logo from "../img/Logo TRI.png";
import {Button, Card, CardContent, CardHeader, CardMedia, TextField} from "@material-ui/core";

class Login extends React.Component{
    state = {
        name: '',
    };
    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };
    render() {
        return (
            <div style={{height: '100vh', width: '99vw'}}>
                <div style={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: '#004265',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Card style={{
                        width: '25%',
                        display: 'flex',
                        flexFlow: 'column',
                        alignItems: 'center',
                        padding: '10px 0'
                    }}>
                        <img
                            style={{width: '30%'}}
                            src={Logo}
                        />
                        <CardContent>
                            <TextField
                                id="standard-name"
                                label="Name"
                                value={this.state.name}
                                onChange={this.handleChange('name')}
                                margin="normal"
                                fullWidth
                            />
                            <TextField
                                id="standard-password-input"
                                label="Password"
                                type="password"
                                autoComplete="current-password"
                                margin="normal"
                                fullWidth
                            />
                            <Button variant='contained' color="primary" fullWidth>Entrar</Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        );
    }
}

export default Login;