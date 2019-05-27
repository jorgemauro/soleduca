import React from 'react';
import comparativo from '../img/graficos/Comparativo de evolução.png';
import comparacaoenem from '../img/graficos/comparacaotriavali.png';
import comparacaoenemoutras from '../img/graficos/comparacaooutrasescolasavali.png';
import pontosfracos from '../img/graficos/analisepontosfracos.png';
import questao from '../img/graficos/questao.jpg';
import curvaItem from '../img/graficos/curva caracteristica do item.png';
import analiseatividade from '../img/graficos/analisedeatratividade.png';
import {
    Button,
    Card,
    CardHeader,
    CardMedia,
    Divider,
    Drawer, Icon, IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText, Menu, MenuItem, Select
} from "@material-ui/core";
import Tabela from "../components/tabela";
const rows =[
    {id:0,cel:['CH','Competência 4','Habilidade 17',13]},
    {id:0,cel:['CN','Competência 6','Habilidade 23',13]},
    {id:0,cel:['LC','Competência 6','Habilidade 19',13]},
    {id:0,cel:['MT','Competência 2','Habilidade 2',13]},
    {id:0,cel:['CN','Competência 7','Habilidade 14',13]},
    {id:0,cel:['CN','Competência 2','Habilidade 5',13]},
    {id:0,cel:['CN','Competência 6','Habilidade 22',13]},
    {id:0,cel:['MT','Competência 2','Habilidade 9',13]},
]
export default class PainelAnaliseComparativa extends React.Component {
    state = {
        painelselected: 0,
        selectGraph: 1,
        itemescolhido: false,
        questaoescolhida:false,
        anchorEl: null,
    };
    handleChange = event => {
        this.setState({selectGraph: event.target.value});
    };
    image = (i) => {
        if (i === 0)
            return comparativo;
        if (i === 1)
            return comparacaoenem;
        if (i === 2)
            return comparacaoenemoutras;
        if (i === 3)
            return pontosfracos;
        if (i === 4)
            return comparacaoenem;
        if (i === 5)
            return comparacaoenem;
        if (i === 6)
            return comparacaoenem;
    }

    render() {
        const {anchorEl} = this.state;

        return (
            <div style={{
                minHeight: '100%',
                widht: '100%',
                display: 'flex',
                flexFlow: 'column',
                alignItems: 'center',
                padding: '0 3%',
                flexWrap: 'wrap'
            }}>{
                this.props.select===-1&&<div><h2>Bem vindo aos sitema TRI</h2></div>
            }
                {this.props.select>-1&&<div style={{
                    backgroundColor: '#ffffff',
                    padding: '10px 5px',
                    display: 'flex',
                    width: '80%',
                    marginBottom: '20px'
                }}>
                    <div style={{fontWeight:'bolder'}}>Areas de conhecimento: </div><Select
                    value={this.state.selectGraph}
                    onChange={this.handleChange}
                    inputProps={{
                        name: 'Grafico',
                        id: 'age-simple',
                    }}
                >
                    <MenuItem value={1}>Ciências da natureza</MenuItem>
                    <MenuItem value={2}>Ciências Humanas</MenuItem>
                    <MenuItem value={3}>Códigos e linguagem</MenuItem>
                    <MenuItem value={4}>Matematica</MenuItem>
                </Select>
                </div>}
                {/*graficos*/}
                {this.state.selectGraph === 1 && this.props.select !== 2 &&
                <Card style={{
                    width: '50%',
                    height: '30%',
                    display: 'flex',
                    flexFlow: 'column',
                    alignItems: 'center',
                    padding: '1%'
                }}>
                    <img style={{width: '100%'}} src={
                        this.image(this.props.select)
                    }/>
                </Card>
                }

                {this.state.selectGraph === 1 && this.props.select === 2 && !this.state.itemescolhido&& <Card className="cardHover" style={{
                    width: '70%',
                    height: '30%',
                    display: 'flex',
                    flexFlow: 'column',
                    alignItems: 'center',
                    padding: '1%'
                }}>
                    <img style={{width: '100%'}} src={
                        this.image(this.props.select)
                    }
                         onClick={() => {
                             this.setState({itemescolhido: true})
                         }}
                    />
                </Card>
                }
                {this.props.select>-1&&this.state.itemescolhido && !this.state.questaoescolhida && <Card style={{
                    width: '70%',
                    height: '30%',
                    display: 'flex',
                    flexFlow: 'column',
                    alignItems: 'center',
                    padding: '1%',
                }}>
                    <IconButton style={{alignSelf:"self-start"}} onClick={() => {
                        this.setState({itemescolhido: false})
                    }}><Icon>close</Icon></IconButton>
                    <img style={{width: '100%'}} src={
                        this.image(3)
                    }
                         className="cardHover"
                         onClick={() => {
                             console.log(this.state.questaoescolhida);
                             this.setState({questaoescolhida: true})
                         }}
                    />
                </Card>}
                {this.state.questaoescolhida && <Card style={{
                    width: '70%',
                    height: '30%',
                    display: 'flex',
                    flexFlow: 'column',
                    alignItems: 'center',
                    padding: '1%',
                }}>
                    <IconButton style={{alignSelf:"self-start"}} onClick={() => {
                        this.setState({questaoescolhida: false})
                    }}><Icon>close</Icon></IconButton>
                    <img style={{width:'70%'}} src={questao}/>
                    <div style={{display:'flex', alignItems:'center'}}>
                        <img style={{width:'50%'}} src={curvaItem}/>
                        <img style={{width:'50%'}} src={analiseatividade}/>
                    </div>
                </Card>
                }
                {this.props.select===3&& <Card style={{
                    width: '70%',
                    height: '30%',
                    display: 'flex',
                    flexFlow: 'column',
                    alignItems: 'center',
                    padding: '1%',
                }}>
                    <Tabela cabecalho={['Area', 'Competência','Habilidade','Alunos']}rows={rows}/>
                </Card>}
                {this.props.select>-1&&this.state.selectGraph !== 1 && <Card style={{
                    width: '80%',
                    height: '30vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '1%'
                }}>
                    <h5 style={{color: '#cccccc'}}>Grafico indisponível</h5>
                </Card>
                }
            </div>
        );
    }
}

