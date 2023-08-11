import React from "react";

import './App.css'
import Card from "./components /layout/Card";
import Aleatorio from "./components /basicos/Aleatorio";
import Primeiro from './components /basicos/Primeiro';
import ComParametro from './components /basicos/ComParametro';
import Fragmento from './components /basicos/Fragmento';
import Familia from "./components /basicos/Familia";

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
                    <Familia sobrenome='Franco'/>
                </Card>

            </div>
        </div>
    )
} 
