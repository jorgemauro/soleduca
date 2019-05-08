import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import logo from '../img/Logo TRI.png'
import twitter from '../img/twitter.png';
import face from '../img/facebook.png';
import insta from '../img/instagram.png';
import linkedin from '../img/linkedin.png';
import {Divider} from "@material-ui/core";

const styles = {
    root: {
        flexGrow: 1,
    },
};

function Footer(props) {
    const { classes } = props;

    return (
        <div style={{width:'100%'}}>
            <div style={{display:'flex', justifyContent:'center', width:'100%', height:'20vh', padding:'3%'}} color="Secondary">
               <div style={{width:'80%', display:'flex', height:'100%'}}>
                   <img src={logo} style={{width:'20%'}}/>
                   <div style={{width:'30%', display:'flex', flexFlow:'column', alignItems:'center', justifyContent:'center', color:'#004265'}}>
                        <div>Endereço: Belo Horizonte</div>
                       <div>Rua da Bahia, predio 9, andar 47</div>
                   </div>
                   <div style={{width:'30%', display:'flex', flexFlow:'column', alignItems:'center', justifyContent:'center', color:'#004265'}}>
                       <div>E-mail:trieducacao@gmail.com </div>
                       <div>Telefone: (99)99999-9999</div>
                   </div>
                   <div style={{width:'50%', display:'flex', alignItems:'center', height:'100%', justifyContent:'center'}}>
                        <img style={{width:'30px', height:'30px'}} src={twitter}/>
                       <img style={{width:'30px', height:'30px', marginLeft:'10px'}} src={insta}/>
                       <img style={{width:'30px', height:'30px', marginLeft:'10px'}} src={linkedin}/>
                       <img style={{width:'30px', height:'30px', marginLeft:'10px'}} src={face}/>
                   </div>
               </div>
            </div>
        </div>
    );
}

Footer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);