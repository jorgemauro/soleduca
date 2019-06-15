import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import logo from '../img/MediumSquareLogo.jpg'
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
            <div style={{display:'flex', justifyContent:'center', width:'100%', height:'15vh', padding:'3% 0', alignItems:'center'}} color="Secondary">
               <div style={{width:'80%', display:'flex', height:'100%'}}>
                   <div style={{width:'30%', display:'flex', justifyContent:'center', alignItems:'center'}}><img src={logo} style={{width:'50%'}}/></div>
                   <div style={{width:'30%', display:'flex', flexFlow:'column', alignItems:'center', justifyContent:'center', color:'#004265'}}>
                        <div>Endereço: Belo Horizonte</div>
                       <div>Rua Paul Bouthilier, 207, Magabeiras</div>
                       <div>E-mail:trieducacao@gmail.com </div>
                       <div>Telefone: (31) 9811-9343</div>
                   </div>
                   <div style={{width:'30%', display:'flex', alignItems:'center', height:'100%', justifyContent:'center'}}>
                        <img style={{width:'30px', height:'30px'}} src={twitter}/>
                       <img style={{width:'30px', height:'30px', marginLeft:'15px'}} src={insta}/>
                       <img style={{width:'30px', height:'30px', marginLeft:'15px'}} src={linkedin}/>
                       <img style={{width:'30px', height:'30px', marginLeft:'15px'}} src={face}/>
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