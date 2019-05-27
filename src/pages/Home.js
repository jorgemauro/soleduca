import React from 'react';
import Header from '../components/Header';
import statistics from "../img/statistics.png";
import test from "../img/test.png";
import professor from "../img/professor.png";
import imgBack from '../img/slider_jorge.png'
import {Card, CardContent, CardHeader, CardMedia} from "@material-ui/core";
import Footer from "../components/Footer";

function Home() {
    return (
        <div style={{height: '100vh', width: '100vwmax'}}>
            <Header/>
            <div style={{backgroundColor:'#ffffff', width:'100%', height:'80%'}}>
                <div style={{backgroundImage:  `url(${imgBack})`, backgroundSize:'100% 100%', width:'100%', height:'100%'}}/>
            </div>
            <div style={{position:'absolute', left:'10%', top:'30%', width:'25%'}}>
                <h3 style={{color:'#004265'}}>TRI Soluções em educação</h3>
                <h4>Melhore o desempenho dos seus alunos</h4>
                <p>A solução proposta pela TRI proporciona a oportunidade de planejamento para melhor o desempenho dos alunos nos exames nacionais</p>
            </div>
            <div className="gradient" style={{
                width: '100%',
                height: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding:'3% 0%'
            }}>
                <div style={{
                    display: 'flex',
                    width: '60%',
                    backgroundColor: 'transparent',
                    justifyContent: 'space-around'
                }}>
                    <Card style={{
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
            <Footer/>
        </div>
    );
}

export default Home;