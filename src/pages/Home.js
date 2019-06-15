import React from 'react';
import Header from '../components/Header';
import statistics from "../img/statistics.png";
import test from "../img/test.png";
import professor from "../img/professor.png";
import imgBack from '../img/slider_jorge.png';
import BNCC from '../img/marcas/BNCC.jpg';
import ENEM from '../img/marcas/enem-logo.jpg';
import SAEB from '../img/marcas/saeb.png';
import {Card, CardContent, CardHeader, CardMedia} from "@material-ui/core";
import Footer from "../components/Footer";

function Home() {
    return (
        <div style={{height: '100vh', width: '100vwmax'}}>
            <Header />
            <div style={{backgroundColor: '#ffffff', width: '100%', height: '80%'}}>
                <div style={{
                    backgroundImage: `url(${imgBack})`,
                    backgroundSize: '100% 100%',
                    width: '100%',
                    height: '100%'
                }}/>
            </div>
            <div style={{position: 'absolute', left: '8%', top: '30%', width: '35%'}}>
                <p style={{color: '#004265', fontSize:'24px', fontWeight:'bold'}} >A partir da Teoria de Resposta ao Item, desenvolvemos avaliações para todas as séries do Ensino Básico, geração de dados estatísticos e capacitação de Equipes.</p>
                <ul style={{color: '#004265', fontSize:'18px', listStyleType:'none'}}>
                    <li>Avaliações baseadas na TRI, BNCC, SAEB e ENEM.</li>
                    <li>Acompanhamento progressivo dos estudantes do Fundamental I ao Ensino Médio.</li>
                    <li>Potencialização dos resultados na Prova-Brasil e no ENEM.</li>
                    <li>Formação de gestores e professores para implementação de estratégias a partir da análise dos dados estatísticos.</li>
                    <li>Foco em processos didáticos-pedagógicos eficientes e de excelência.</li>
                </ul>
            </div>

            <div style={{
                width: '100%',
                height: '30%',
                display: 'flex',
                padding: '3% 0%',
                alignItems: 'center',
                fontSize:'18px',
                justifyContent: 'space-around',
                background:'linear-gradient(270deg, rgba(196, 196, 196, 0) 0%, #004265 100%)',
            }} className="esquerdadireta">
                <div style={{width: '50%', padding: "10px", display: 'flex', justifyContent: 'flex-end', color:"#ffffff"}}>
                    <p> As novas soluções da TRI permitem identificar as dificuldades e potencialidades ainda nas séries iniciais, gerando um histórico de cada estudante ao longo dos anos, além de estudos comparativos.</p>
                </div>
                <div  style={{
                    width: '50%',
                    padding: "10px",
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center'
                }}><img  className="leftobj" style={{width: '60%'}} src={BNCC}/></div>
            </div>
            <div style={{
                width: '100%',
                height: '30%',
                display: 'flex',
                padding: '3% 0%',
                fontSize:'18px',
                alignItems: 'center',
                justifyContent: 'space-around',
            }}>

                <div style={{
                    width: '50%',
                    padding: "10px",
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'center'
                }}><img style={{width: '60%'}} src={ENEM}/></div>
                <div style={{width: '50%', padding: "10px", display: 'flex', justifyContent: 'flex-start', color:'#004265'}}>
                    <p>Potencialize o gerenciamento e implantação de soluções de fato eficazes para o sucesso dos seus
                        estudantes e da Escola nos principais exames nacionais, como a Prova Brasil e o ENEM!</p>
                </div>
            </div>
            <div style={{
                width: '100%',
                height: '30%',
                display: 'flex',
                padding: '3% 0%',
                fontSize:'18px',
                alignItems: 'center',
                justifyContent: 'space-around',
                background:'linear-gradient(270deg, rgba(196, 196, 196, 0) 0%, #004265 100%)',
            }} className="esquerdadireta">
                <div style={{width: '50%',
                    fontSize:'18px', padding: "10px", display: 'flex', justifyContent: 'flex-end', color:"#ffffff"}}>
                    <p> A TRI também fornece formações presenciais e online para professores e gestores, capacitando a Equipe para a implantação eficiente de novas práticas didático-pedagógicas a partir dos dados obtidos.</p>
                </div>
                <div style={{
                    width: '50%',
                    padding: "10px",
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center'
                }}><img style={{width: '40%'}} src={SAEB}/></div>
            </div>
            <div style={{
                width: '100%',
                height: '30%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '3% 0%',
                background: '#3364a6',
                color: '#ffffff',
                fontWeight: "bolder",
                textAlign: "center"
            }}>
                <h4>Chega de levantamentos de dados que não impactam em melhora real dos seus resultados!</h4>
            </div>
            <div className="gradient" style={{
                width: '100%',
                height: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '3% 0%'
            }}>
                <div style={{
                    display: 'flex',
                    width: '60%',
                    backgroundColor: 'transparent',
                    justifyContent: 'space-around'
                }}>
                    <Card style={{
                        maxWidth: '250px',
                        maxHeight: '300px',
                        background: '#FFFFFF',
                        borderRadius: '5px',
                        width: '25%',
                        display: 'flex',
                        flexFlow: 'column',
                        alignItems: 'center',
                        padding: '10px 0'
                    }}>
                        <img
                            style={{width: '30%'}}
                            src={statistics}
                        />
                        <CardContent style={{textAlign: "center"}}>
                            Geramos dados estatísticos que permitem a Escola acompanhar com maior precisão o
                            desenvolvimento do estudante em todas as suas etapas do Ensino Básico, favorecendo a gestão
                            eficiente de pessoas e processos.
                        </CardContent>
                    </Card>
                    <Card style={{
                        maxWidth: '250px',
                        maxHeight: '300px',
                        background: '#FFFFFF',
                        borderRadius: '5px',
                        width: '25%',
                        display: 'flex',
                        flexFlow: 'column',
                        alignItems: 'center',
                        padding: '10px 0'
                    }}>
                        <img
                            style={{width: '30%'}}
                            src={test}
                        />
                        <CardContent style={{textAlign: "center"}}>
                            Oferecemos avaliações em larga escala para estudantes do Ensino Fundamental I, Fundamental
                            II e Ensino Médio baseadas na Teoria de Resposta ao Item e na BNCC/SAEB/ENEM.
                        </CardContent>
                    </Card>
                    <Card style={{
                        maxWidth: '250px',
                        maxHeight: '300px',
                        background: '#FFFFFF',
                        borderRadius: '5px',
                        width: '25%',
                        display: 'flex',
                        flexFlow: 'column',
                        alignItems: 'center',
                        padding: '10px 0'
                    }}>
                        <img
                            style={{width: '30%'}}
                            src={professor}
                        />
                        <CardContent style={{textAlign: "center"}}>
                            Possuímos planos de capacitação para o corpo docente e equipe técnica da Escola,
                            potencializando os resultados acadêmicos da Instituição e ampliando a consciência e
                            eficiência dos profissionais em seu fazer didático-pedagógico.
                        </CardContent>
                    </Card>
                </div>
            </div>
            <div style={{
                width: '100%',
                height: '30%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '3% 0%',
                background: '#3364A6',
                color: '#ffffff',
                fontWeight: "bolder",
                textAlign: "center"
            }}>
                <h4>Conheça nossos produtos!<br/> Agende uma visita ou teleconferência com um de nossos analistas. </h4>
            </div>
            <Footer/>
        </div>
    );
}

export default Home;