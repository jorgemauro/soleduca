import React from 'react';
import Header from '../components/Header';
import Tabela from '../components/tabela';
import Footer from "../components/Footer";

function Podserv() {
    return (
        <div style={{height: '100vh', width: '100vwmax'}}>
            <Header/>
            <div style={{padding:'3%'}}>
                <Tabela onclick={() => this.setState({detalhetabela: true})}
                        cabecalho={['Produtos']}
                        size='medium'
                        align='center'
                        rows={[
                            {
                                id: 0,
                                cel: ['Avaliação formulada pela TRI baseada no modelo ENEM com questões inéditas para estudantes do Ensino Médio.']
                            },
                            {
                                id: 1,
                                cel: ['Avaliação baseada no modelo ENEM com seleção de questões já utilizadas em anos anteriores para estudantes do Ensino Médio.']
                            },
                            {
                                id: 2,
                                cel: ['Avaliação formulada pela TRI baseada no modelo SAEB com questões inéditas para estudantes do Fundamental I e II.']
                            },
                            {
                                id: 3,
                                cel: ['Avaliação formulada pela TRI por disciplina nos moldes escolhidos pela Instituição contratante com questões inéditas. ']
                            },
                            {
                                id: 4,
                                cel: ['Análise estatística dos dados da Instituição no ENEM em anos anteriores, tendo como referência duas escolas concorrentes.']
                            },
                            {
                                id: 5,
                                cel: ['Feedback virtual.']
                            },
                            {
                                id: 6,
                                cel: ['Feedback presencial.']
                            }]}/>
            </div>
            <Footer/>
        </div>
    );
}

export default Podserv;