import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import logo from '../img/400dpiLogo.jpg'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Button} from "@material-ui/core";
import {Paper} from "@material-ui/core";
import {Link} from "react-router-dom";

const styles = {
    root: {
        flexGrow: 1,
    },
};

function Header(props) {
    const { classes } = props;
    console.log(props);
    return (
        <Paper className={{width:'100%'}}>
            <div style={{display:'flex', justifyContent:'center', width:'100%'}} color="Secondary">
                <Toolbar style={{width:'80%', display:'flex', justifyContent:'space-between'}}>
                    <a  style={{width:"20%"}} href='/'><img  style={{width:"100%"}} src={logo}/></a>
                    <div style={{height:'100%', display:'flex', alignItems:'center'}}>
                        <Button href="/" style={{height:'60%'}} color="primary" >Empresa</Button>
                        <Link  style={{textDecoration:'none'}} to='/produtoseservicos'><Button style={{height:'60%'}} color="primary">Produtos e serviços</Button></Link>
                        <Button style={{height:'60%'}} color="primary">Fique por dentro</Button>
                        <Button  style={{height:'60%'}} color="primary">Fale conosco</Button>
                        <Button style={{height:'60%'}} color="primary">Trabalhe conosco</Button>
                    </div>
                    <Link style={{textDecoration:'none'}} to='/login'><Button variant="contained" color="primary">Login</Button></Link>
                </Toolbar>
            </div>
        </Paper>
    );
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);