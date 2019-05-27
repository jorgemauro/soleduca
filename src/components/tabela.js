import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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
        <Paper>
            <Table onClick={()=>this.props.onclick}>
                <TableHead>
                    <TableRow>
                        {props.cabecalho.map((item) =>
                            <TableCell>{item}</TableCell>)}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.rows.map(row => (
                        <TableRow key={row.id}>
                            {row.cel.map(cel=>
                            <TableCell component="th" scope="row">
                                {cel}
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