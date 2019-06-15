import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import redac from '../img/graficos/readac.png';

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
});

function Tabela(props) {
    const {classes} = props;

    return (
        <Paper style={{marginTop:'5%'}}>
            {props.title?<div style={{width:'100%', fontWeight:'bolder',color:'#3E6BB5', fontSize:'20px', padding:'2% 0',textAlign:'center'}}>{props.title}</div>:''}
            <Table onClick={()=>props.onclick}>
                <TableHead style={{backgroundColor:'#3E6BB5'}}>
                    <TableRow>
                        {props.cabecalho.map((item) =>
                            <TableCell style={{color:'#ffffff', fontWeight:'bolder', fontSize:'16px'}} align={props.align?props.align:''} variant={'head'}>{item}</TableCell>)}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.rows.map(row => (
                        <TableRow key={row.id}>
                            {row.cel.map(cel=>
                            <TableCell size={props.size?props.size:'small'} align={props.align?props.align:''} component="th" scope="row">
                                {cel==='Redação'?<a href={redac}  target="_blank">{cel}</a>:cel}
                            </TableCell>)}

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    );
}

Tabela.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Tabela);