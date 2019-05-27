import React from 'react';
import Logo from "../img/400dpiLogo.jpg";
import {Button, Card, CardContent, CardHeader, CardMedia, TextField} from "@material-ui/core";

class Login extends React.Component{
    state = {
        name: '',
        psw:'',
    };
    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };
    render() {
        return (
            <div style={{height: '100vh', width: '99vw'}}>
                <div className="gradient" style={{
                    width: '100%',
                    height: '100%',
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
                                value={this.state.psw}
                                onChange={this.handleChange('psw')}
                                autoComplete="current-password"
                                margin="normal"
                                fullWidth
                            />
                            <Button variant='contained' onClick={
                                ()=>{
                                    if(this.state.name==='admin'&&this.state.psw==='teste'){
                                        this.props.history.push('/dashboard');
                                    }else if(this.state.name==='aluno'&&this.state.psw==='teste'){
                                        this.props.history.push('/AcessoAluno');
                                    }
                                }
                            } color="primary" fullWidth >Entrar</Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        );
    }
}

export default Login;