import React from "react"
import './Card.css'

export default (props) => {

    const cardStyle = {
        backgroundColor: props.color || '#F06543',
        borderColor: props.color || '#F06543',
    }

    return (
        <div className="Card" style={cardStyle}>
            <div className="Title">{props.titulo}</div>
            <div className="Content"> {props.children} </div>
        </div>
    )
}