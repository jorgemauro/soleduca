import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import logo from '../img/400dpiLogo.jpg'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Button} from "@material-ui/core";
import {Link} from "react-router-dom";

const styles = {
    root: {
        flexGrow: 1,
    },
};

function Header(props) {
    const { classes } = props;

    return (
        <div className={{width:'100%'}}>
            <div style={{display:'flex', justifyContent:'center', width:'100%'}} color="Secondary">
                <Toolbar style={{width:'60%', display:'flex', justifyContent:'space-between'}}>
                    <img style={{width:"10%"}} src={logo}/>
                    <div style={{height:'100%'}}>
                        <Button style={{height:'100%'}} color="primary">Empresa</Button>
                        <Button style={{height:'100%'}} color="primary">Produtos e serviços</Button>
                        <Button style={{height:'100%'}} color="primary">Fique por dentro</Button>
                        <Button  style={{height:'100%'}} color="primary">Fale conosco</Button>
                        <Button style={{height:'100%'}} color="primary">Trabalhe conosco</Button>
                    </div>
                    <Link to='/login'><Button variant="contained" color="primary">Login</Button></Link>
                </Toolbar>
            </div>
        </div>
    );
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);