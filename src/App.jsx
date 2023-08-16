import React from "react";

import './App.css'
import Card from "./components /layout/Card";
import Aleatorio from "./components /basicos/Aleatorio";
import Primeiro from './components /basicos/Primeiro';
import ComParametro from './components /basicos/ComParametro';
import Fragmento from './components /basicos/Fragmento';
import Familia from "./components /basicos/Familia";
import FamiliaMembro from "./components /basicos/FamiliaMembro";
import ListaAlunos from "./components /repeticao/ListaAlunos";
import TabelaProdutos from "./components /repeticao/TabelaProdutos";
import ParOuImpar from "./components /condicional/ParOuImpar";
import UsuarioInfo from "./components /condicional/UsuarioInfo";
import DiretaPai from "./components /comunicacao/DiretaPai";
import IndiretaPai from "./components /comunicacao/IndiretaPai";
import Input from "./components /formulario/Input";
import Contador from "./components /contador/Contador";

export default (props) => {
    return (
        <div className='App'>
            <h1> Fundamentos React </h1>

            <div className="Cards">

                <Card titulo="#01 - Primeiro Componente" color='#F09D51'>
                    <Primeiro></Primeiro>
                </Card>

                <Card titulo='#02 - Desafio Aleatório'>
                    <Aleatorio min={1} max={60} />
                </Card>

                <Card titulo='#03 - Fragmento' color='#3A180F'>
                    <Fragmento min={1} max={60} />
                </Card>

                <Card titulo="#04 - Com Parâmetro" color='#240F0A'>
                    <ComParametro
                        titulo='Situação do Aluno'
                        aluno='Pedro'
                        nota={10}
                    />
                    <ComParametro
                        titulo='Situação do Aluno'
                        aluno='Maria'
                        nota={8.5}
                    />
                </Card>

                <Card titulo="#05 - Componente com Filhos" color='#413C58'>

                    <Familia sobrenome='Franco'>
                        <FamiliaMembro nome='Gabriel' />
                        <FamiliaMembro nome='Luiz' />
                        <FamiliaMembro nome='André' />
                    </Familia>

                </Card>

                <Card titulo="#06 - Repetição" color='#DB5461'>

                    <ListaAlunos></ListaAlunos>

                </Card>

                <Card titulo="#07 - Desafio Repetição" color='#58B09C'>

                    <TabelaProdutos></TabelaProdutos>

                </Card>

                <Card titulo="#08 - Renderização Condicional" color='#274C77'>

                    <ParOuImpar numero={21}></ParOuImpar>
                    <UsuarioInfo usuario={{ nome: 'Fernando' }} />

                </Card>

                <Card titulo="#09 - Comunicação Direta" color='#E71D36'>

                    <DiretaPai></DiretaPai>

                </Card>

                <Card titulo="#10 - Comunicação Indireta" color='#2F4550'>

                    <IndiretaPai></IndiretaPai>

                </Card>

                <Card titulo="#11 - Componente Controlado (Input)" color='#77966D'>

                    <Input></Input>

                </Card>

                <Card titulo="#12 - Contador)" color='#291528'>

                    <Contador numeroInicial={0}></Contador>

                </Card>

            </div>
        </div>
    )
} 
