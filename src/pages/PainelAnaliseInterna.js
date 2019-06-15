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
    Drawer, Icon, IconButton, InputLabel,
    List,
    ListItem,
    ListItemIcon,
    ListItemText, Menu, MenuItem, Select
} from "@material-ui/core";
import Tabela from "../components/tabela";

const rows = [
    {id: 0, cel: ['CH', 'Competência 4', 'Habilidade 17', 13]},
    {id: 1, cel: ['CN', 'Competência 6', 'Habilidade 23', 13]},
    {id: 2, cel: ['LC', 'Competência 6', 'Habilidade 19', 13]},
    {id: 3, cel: ['MT', 'Competência 2', 'Habilidade 2', 13]},
    {id: 4, cel: ['CN', 'Competência 7', 'Habilidade 14', 13]},
    {id: 5, cel: ['CN', 'Competência 2', 'Habilidade 5', 13]},
    {id: 6, cel: ['CN', 'Competência 6', 'Habilidade 22', 13]},
    {id: 7, cel: ['MT', 'Competência 2', 'Habilidade 9', 13]},
];
const rowsIncidencia = [
    {
        id: 1,
        cel: ['1', 'Diversidade cultural, conflitos e vida em sociedade: Movimentos culturais no mundo ocidental e seus impactos na vida política e social.', '6.44%']
    },
    {
        id: 2,
        cel: ['2', 'Formas de organização social, movimentos sociais, pensamento político e ação do Estado: Cidadania e democracia na Antiguidade.', '5.42%']
    },
    {
        id: 3,
        cel: ['3', 'Formas de organização social, movimentos sociais, pensamento político e ação do Estado: Formação territorial brasileira, as regiões brasileiras, políticas de reordenamento territorial.', '5.13%']
    },
    {
        id: 4,
        cel: ['4', 'Diversidade cultural, conflitos e vida em sociedade: Cultura material e imaterial, patrimônio e diversidade cultural no Brasil.', '4.99%']
    },
    {
        id: 5,
        cel: ['5', 'Características e transformações das estruturas produtivas: A globalização e as novas tecnologias de telecomunicação e suas consequências econômicas, políticas e sociais.', '4.29%']
    },
    {
        id: 6,
        cel: ['6', 'Os domínios naturais e a relação do ser humano com o ambiente: A nova ordem ambiental internacional, políticas territoriais ambientais, uso e conservação dos recursos naturais, unidades de conservação, corredores ecológicos, zoneamento ecológico e econômico.', '3.83%']
    },
    {
        id: 7,
        cel: ['7', 'Formas de organização social, movimentos sociais, pensamento político e ação do Estado: Direitos sociais nas constituições brasileiras.', '3.79%']
    },
    {
        id: 8,
        cel: ['8', 'Formas de organização social, movimentos sociais, pensamento político e ação do Estado: Democracia direta, indireta e representativa.', '3.64%']
    },
    {
        id: 9,
        cel: ['9', 'Formas de organização social, movimentos sociais, pensamento político e ação do Estado: Democracia direta, indireta e representativa.', '3.48%']
    },
    {
        id: 10,
        cel: ['10', 'Formas de organização social, movimentos sociais, pensamento político e ação do Estado: A luta pela conquista de direitos pelos cidadãos: direitos civis, humanos, políticos e sociais.', '3.32%']
    },
    {
        id: 11,
        cel: ['11', 'Os domínios naturais e a relação do ser humano com o ambiente: Estruturas do solo e do relevo, agentes internos e externos modeladores do relevo.', '3.27%']
    },
    {
        id: 12,
        cel: ['12', 'Formas de organização social, movimentos sociais, pensamento político e ação do Estado: Grupos sociais em conflito no Brasil imperial e a construção da nação.', '3.16%']
    },
    {
        id: 13,
        cel: ['13', 'Os domínios naturais e a relação do ser humano com o ambiente: Recursos hídricos, bacias hidrográficas e seus aproveitamentos.', '2.69%']
    },
    {
        id: 14,
        cel: ['14', 'Formas de organização social, movimentos sociais, pensamento político e ação do Estado: Ditaduras políticas na América Latina: Estado Novo no Brasil e ditaduras na América.', '2.65%']
    }
];

const rowsEstudante = [
    {
        id: 0,
        cel: ['13', '1', '4810625', 'Roberto Assis', '805,5', '566,0', '717', '669,87', '840', '719', '719', 'relatorio']
    },
    {
        id: 1,
        cel: ['18', '2', '4810626', 'Melissa', '805,5', '566,0', '717', '669,87', '840', '719', '719', 'relatorio']
    },
    {
        id: 2,
        cel: ['28', '3', '4810627', 'Roberta', '705,5', '665,0', '718', '669,89', '640', '719', '719', 'relatorio']
    },
    {id: 3, cel: ['33', '4', '4810628', 'Ingrid', '505,5', '566,0', '717', '669,87', '740', '719', '719', 'relatorio']},
    {
        id: 4,
        cel: ['37', '5', '4810629', 'Jurislete', '806,5', '566,0', '717', '669,87', '850', '719', '719', 'relatorio']
    },
    {
        id: 5,
        cel: ['89', '6', '4810623', 'Roberval', '725,5', '566,0', '717', '669,87', '880', '719', '719', 'relatorio']
    },
    {
        id: 6,
        cel: ['94', '7', '4810622', 'Tatiana', '735,5', '566,0', '717', '669,87', '570', '719', '719', 'relatorio']
    },
    {
        id: 7,
        cel: ['106', '8', '4810621', 'Ana Tim', '715,5', '566,0', '717', '669,87', '760', '719', '719', 'relatorio']
    },];


const rowsEstudantered = [
    {
        id: 0,
        cel: ['13', '1', '4810625', 'Roberto Assis', 'Redação']
    },
    {
        id: 1,
        cel: ['18', '2', '4810626', 'Melissa', 'Redação']
    },
    {
        id: 2,
        cel: ['28', '3', '4810627', 'Roberta', 'Redação']
    },
    {id: 3, cel: ['33', '4', '4810628', 'Ingrid','Redação']},
    {
        id: 4,
        cel: ['37', '5', '4810629', 'Jurislete', 'Redação']
    },
    {
        id: 5,
        cel: ['89', '6', '4810623', 'Roberval', 'Redação']
    },
    {
        id: 6,
        cel: ['94', '7', '4810622', 'Tatiana','Redação']
    },
    {
        id: 7,
        cel: ['106', '8', '4810621', 'Ana Tim','Redação']
    },];
export default class PainelAnaliseInterna extends React.Component {
    state = {
        painelselected: 0,
        selectGraph: 1,
        itemescolhido: false,
        questaoescolhida: false,
        anchorEl: null,
        detalhetabela: false,
    };
    handleChange = event => {
        this.setState({selectGraph: event.target.value});
    };
    image = (i) => {
        if (i === 0 ||i === 7 )
            return comparativo;
        if (i === 1)
            return comparacaoenem;
        if (i === 2 ||i === 8 )
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
    componentWillReceiveProps(nextProps, nextContext) {
        if(this.props.select!==nextProps.select&&nextProps.select===4){
            this.setState({selectGraph:2})
        }else if(this.props.select!==nextProps.select){
            this.setState({selectGraph:1})
        }
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
                justfyContent:'center',
                padding: '0 3%',
                flexWrap: 'wrap'
            }}>{
                this.props.select === -1 && <div style={{padding: '5px'}}><h2>Bem-vindo ao sitema TRI</h2></div>
            }
                {this.props.select > -1 && (this.props.select<3||this.props.select===4) && <div style={{
                    backgroundColor: '#ffffff',
                    padding: '10px 5px',
                    display: 'flex',
                    flexFlow: 'column',
                    alignItems: 'center',
                    width: '80%',
                    marginBottom: '20px'
                }}>
                    <InputLabel htmlFor="age-simple">Areas de conhecimento</InputLabel>
                    <Select
                        value={this.state.selectGraph}
                        onChange={this.handleChange}
                        inputProps={{
                            name: 'Grafico',
                            id: 'age-simple',
                        }}
                        style={{maxWidth: '150px'}}
                    >
                        <MenuItem value={1}>Ciências da natureza</MenuItem>
                        <MenuItem value={2}>Ciências Humanas</MenuItem>
                        <MenuItem value={3}>Códigos e linguagem</MenuItem>
                        <MenuItem value={4}>Matematica</MenuItem>
                    </Select>
                </div>}
                {/*graficos*/}
                {this.state.selectGraph === 1 && this.props.select !== 2 && this.props.select > -1 && this.props.select < 3 &&
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

                {this.state.selectGraph === 1 && this.props.select === 2 && !this.state.questaoescolhida &&<Card style={{
                    width: '50%',
                    height: '30%',
                    display: 'flex',
                    flexFlow: 'column',
                    alignItems: 'center',
                    padding: '1%',
                }}>
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
                    width: '50%',
                    height: '30%',
                    display: 'flex',
                    flexFlow: 'column',
                    alignItems: 'center',
                    padding: '1%',
                }}>
                    <IconButton style={{alignSelf: "self-start"}} onClick={() => {
                        this.setState({questaoescolhida: false})
                    }}><Icon>close</Icon></IconButton>
                    <img style={{width: '70%'}} src={questao}/>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <img style={{width: '50%'}} src={curvaItem}/>
                        <img style={{width: '50%'}} src={analiseatividade}/>
                    </div>
                </Card>
                }
                {this.props.select === 4&&
                <Tabela onclick={() => this.setState({detalhetabela: true})}
                        cabecalho={['Number', 'Descrição', 'incidencia de erro']} rows={rowsIncidencia}/>
                }
                {this.props.select === 3 &&
                <Tabela  title="Habilidades com maior incidência de erro"  onclick={() => this.setState({detalhetabela: true})}
                        cabecalho={['Area', 'Competência', 'Habilidade', 'Alunos']} rows={rows}/>}
                {this.props.select === 5 &&
                <Tabela onclick={() => this.setState({detalhetabela: true})}
                        cabecalho={['Class Geral', 'Class. Escola', 'RE', 'Nome', 'CH', 'CN', 'LC', 'MT', 'Media sem RD', 'RD', 'Media com RD', 'Relatorio']}
                        rows={rowsEstudante}/>}
                {this.props.select === 6 &&
                <div style={{
                    display:'flex',
                    flexWrap:'wrap',
                    justifyContent:'space-around',
                    width:'100%'
                }}>
                    <Card style={{height:'50px',width:'30%', display:'flex', flexFlow:'column', padding:'5px', marginBottom:'10px', background: '#004265', color:'#ffffff'}}>
                        <div style={{ display:'flex', alignItems:'center', justifyContente:'center'}}>
                            <Icon>graphic_eq</Icon> <div style={{fontSize:'1.2em'}}><b>Media da escola:</b> 619.4</div>
                        </div>
                        <div style={{marginLeft:'25px'}}>Baseado nas competencias</div>
                    </Card>
                    <Card style={{height:'50px',width:'30%', display:'flex', flexFlow:'column', padding:'5px', marginBottom:'10px',color: '#004265'}}>
                        <div style={{ display:'flex', alignItems:'center', justifyContente:'center'}}>
                            <Icon>graphic_eq</Icon> <div style={{fontSize:'1.2em'}}><b>Escola:</b> 140 <b>Escola Geral:</b> 124,5</div>
                        </div>
                        <div style={{marginLeft:'25px'}}>Competência I -  norma padrão</div>
                    </Card>
                    <Card style={{height:'50px',width:'30%', display:'flex', flexFlow:'column', padding:'5px', marginBottom:'10px',color: '#004265'}}>
                        <div style={{ display:'flex', alignItems:'center', justifyContente:'center'}}>
                            <Icon>graphic_eq</Icon> <div style={{fontSize:'1.2em'}}><b>Escola:</b> 118,7 <b>Escola Geral:</b> 108,0</div>
                        </div>
                        <div style={{marginLeft:'25px'}}>Competência II -  Adequação ao tema</div>
                    </Card>
                    <Card style={{height:'50px',width:'30%', display:'flex', flexFlow:'column', padding:'5px', marginBottom:'10px',color: '#004265'}}>
                        <div style={{ display:'flex', alignItems:'center', justifyContente:'center'}}>
                            <Icon>graphic_eq</Icon> <div style={{fontSize:'1.2em'}}><b>Escola:</b> 120,0 <b>Escola Geral:</b> 104,5</div>
                        </div>
                        <div style={{marginLeft:'25px'}}>Competência III -  Seleção/Organização dos argumentos</div>
                    </Card>
                    <Card style={{height:'50px',width:'30%', display:'flex', flexFlow:'column', padding:'5px', marginBottom:'10px',color: '#004265'}}>
                        <div style={{ display:'flex', alignItems:'center', justifyContente:'center'}}>
                            <Icon>graphic_eq</Icon> <div style={{fontSize:'1.2em'}}><b>Escola:</b> 130,3 <b>Escola Geral:</b> 112,5</div>
                        </div>
                        <div style={{marginLeft:'25px'}}>Competência IV -  Construção da argumentação</div>
                    </Card>
                    <Card style={{height:'50px',width:'30%', display:'flex', flexFlow:'column', padding:'5px', marginBottom:'10px',color: '#004265'}}>
                        <div style={{ display:'flex', alignItems:'center', justifyContente:'center'}}>
                            <Icon>graphic_eq</Icon> <div style={{fontSize:'1.2em'}}><b>Escola:</b> 109,7 <b>Escola Geral:</b> 70,0</div>
                        </div>
                        <div style={{marginLeft:'25px'}}>Competência V -  Proposta de intervenção</div>
                    </Card>
                    <Tabela onclick={() => this.setState({detalhetabela: true})}
                            cabecalho={['Class Geral', 'Class. Escola', 'RE', 'Nome', 'Redação']}
                            rows={rowsEstudantered}/>
                </div>
                }
                {this.props.select > -1 && this.state.selectGraph !== 1 && <Card style={{
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

