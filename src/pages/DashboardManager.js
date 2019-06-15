import React from 'react';
import {
    Button,
    Card,
    Divider,
    Drawer, ExpansionPanel,
    ExpansionPanelDetails, ExpansionPanelSummary, Icon,
    List,
    ListItem,
    ListItemIcon,
    ListItemText, Typography
} from "@material-ui/core";

import logo from '../img/400dpiLogo.jpg'
import PainelAnaliseInterna from './PainelAnaliseInterna';

export default class DashboardManager extends React.Component{
    state = {
        selected: -1
    };
    painel = () => {
        if (this.state.selected === 1) {
            return PainelAnaliseInterna;
        }
    };

    render() {

        return (
            <div style={{minHeight: '100vh', display: 'flex'}}>
                <Card style={{
                    width: '99vw',
                    display: 'flex',
                    justifyContent: 'flex-end',
                    padding: '2vh 10px ',
                    height: '4vh',
                    marginRight:'10px',
                    backgroundColor: '#ffffff',
                    position: 'fixed'
                }}><Button style={{color: '#004265', fontWeight: 'Bolder' }} href="/">Logout</Button></Card>
                <div style={{
                    position: "fixed",
                    left: 0,
                    width: '20vw',
                    marginTop: "8vh",
                    height: '98vh',
                    display:'flex',
                    flexFlow:'column',
                    alignItems:'center',
                    backgroundColor: '#004265',
                    color: '#ffffff'
                }}>
                    <img src={logo} style={{width:'50%', margin:'15px'}}/>
                    <ExpansionPanel style={{
                        backgroundColor: '#004265', color:'#ffffff'}}>
                        <ExpansionPanelSummary style={{
                            backgroundColor: '#004265', color:'#ffffff'}} >
                            <Typography style={{ color:'#ffffff', fontWeight:'bolder'}}>Avaliações TRI</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <List>
                                <ListItem button style={{color:'#ffffff'}} key='inicio' onClick={()=>this.setState({selected:0})}>
                                    Desempenho - Série historica
                                </ListItem>
                                <ListItem button style={{color:'#ffffff'}} key='interna' onClick={()=>{
                                    this.setState({selected:1})

                                }}>
                                    Comparativo simulado TRI/ENEM
                                </ListItem>
                                <ListItem button style={{color:'#ffffff'}} key='comparativa' onClick={()=>this.setState({selected:2})}>
                                    Desempenho por item
                                </ListItem>
                                <ListItem button style={{color:'#ffffff'}} key='comparativa' onClick={()=>this.setState({selected:3})}>
                                    Rankig de habilidades
                                </ListItem>
                                <ListItem button style={{color:'#ffffff'}} key='comparativa' onClick={()=>this.setState({selected:4})}>
                                    Rankig dos objetos de conhecimento
                                </ListItem>
                                <ListItem button style={{color:'#ffffff'}} key='comparativa' onClick={()=>this.setState({selected:5})}>
                                    Resultado estudantes
                                </ListItem>
                                <ListItem button style={{color:'#ffffff'}} key='comparativa' onClick={()=>this.setState({selected:6})}>
                                    Redação
                                </ListItem>
                            </List>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                        <Divider/>
                    <ExpansionPanel style={{
                        backgroundColor: '#004265', color:'#ffffff'}}>
                        <ExpansionPanelSummary style={{
                            backgroundColor: '#004265', color:'#ffffff'}} >
                            <Typography style={{ color:'#ffffff', fontWeight:'bolder'}}>Dados ENEM</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <List>
                                <ListItem button style={{color:'#ffffff'}} key='inicio' onClick={()=>this.setState({selected:0})}>
                                    Desempenho - Série historica
                                </ListItem>
                                <ListItem button style={{color:'#ffffff'}} key='comparativa' onClick={()=>this.setState({selected:2})}>
                                    Desempenho por item
                                </ListItem>
                                <ListItem button style={{color:'#ffffff'}} key='comparativa' onClick={()=>this.setState({selected:3})}>
                                    Rankig de habilidades
                                </ListItem>
                                <ListItem button style={{color:'#ffffff'}} key='comparativa' onClick={()=>this.setState({selected:4})}>
                                    Rankig dos objetos de conhecimento
                                </ListItem>
                                <ListItem button style={{color:'#ffffff'}} key='comparativa' onClick={()=>this.setState({selected:6})}>
                                    Redação
                                </ListItem>
                            </List>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </div>
                <div style={{
                    width: '80vw',
                    backgroundColor: '#ffffff',
                    marginLeft: '20vw',
                    marginTop: "8vh",
                    padding: '1% 0'
                }}>
                    {this.state.selected < 7 && <PainelAnaliseInterna select={this.state.selected}/>}
                </div>
            </div>
    );
    }
    }

