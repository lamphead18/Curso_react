import React from "react";

export default (props) => {

    const { min, max } = props;

    const aleatorio = parseInt(Math.random() * (max - min)) + min

    return (
        <div>
            <h2> Valor Aleatório </h2>
            <p> Valor Mínimo: <strong> {min} </strong> </p>
            <p> Valor Máximo: <strong> {max} </strong> </p>
            <p> Valor Escolhido: <strong> {aleatorio} </strong> </p>

        </div>
    );
};