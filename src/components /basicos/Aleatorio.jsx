import React from "react";

export default props => {
   const aleatorio = Math.random() * (props.max - props.min)
    return( 
   <div>
        <h2>Valor Aleatório</h2>
        <p><strong>Valor Mínimo: </strong> {props.min} </p>
        <p><strong>Valor Máximo: </strong> {props.max} </p>
        <p><strong>Valor Escolhido: </strong> {props.max} </p>

    </div>
    );
};