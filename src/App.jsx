import React from "react";

import Primeiro from './components /basicos/Primeiro';
import ComParametro from './components /basicos/ComParametro';
import Fragmento from './components /basicos/Fragmento';

export default (props) => {
    return(
        <div id='app'>
        <h1>Fundamentos React (Arrow)</h1>
        <Fragmento/>
        <ComParametro 
            titulo = 'Situação do Aluno' 
            aluno = 'Pedro' 
            nota = {10}
        />
        <Primeiro></Primeiro>

    </div>
    )
} 