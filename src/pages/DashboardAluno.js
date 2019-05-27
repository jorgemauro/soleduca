import React from 'react';
import {Button, Card, Divider, List, ListItem} from "@material-ui/core";
import PainelAnaliseInterna from "./PainelAnaliseInterna";
import PainelAnaliseComparativa from "./PainelAnaliseComparativa";

export default class DashboardAluno extends React.Component{
    state = {
        selected: -1
    };
    painel = () => {
        if (this.state.selected === 1) {
            return PainelAnaliseComparativa;
        }
    };

    render(){
        return(
            <div style={{minHeight:'100vh', display:'flex'}}>
                <Card style={{width:'99vw',display:'flex', justifyContent:'flex-end',padding:'2vh 0 ', height:'4vh', backgroundColor:'#ffffff', position:'fixed'}}><Button style={{color:'#004265', fontWeight:'Bolder'}}>Logout</Button></Card>
                <div style={{position:"fixed",left:0, width:'20vw', marginTop:"8vh", height:'98vh', backgroundColor:'#004265', color:'#ffffff'}}>
                    <List>
                        <ListItem button style={{color:'#ffffff'}} key='inicio' onClick={()=>this.setState({selected:0})}>
                            Incio
                        </ListItem>
                        <ListItem button style={{color:'#ffffff'}} key='interna' onClick={()=>{
                            console.log('1');
                            this.setState({selected:1})

                        }}>
                            Analise interna
                        </ListItem>
                        <ListItem button style={{color:'#ffffff'}} key='comparativa' onClick={()=>this.setState({selected:2})}>
                            Analise comparativa
                        </ListItem>
                    </List>
                    <Divider />
                </div>
                <div style={{width:'80vw', backgroundColor: '#cccccc', marginLeft:'20vw',marginTop:"8vh", padding:'1% 0'}}>
                    {this.painel()}
                </div>
            </div>
        );
    }
}

