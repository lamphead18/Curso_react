import React from "react";
import FamiliaMembro from "./FamiliaMembro";

export default props => {

    return (
        <div>
            <FamiliaMembro nome='Gabriel' {...props} />
            <FamiliaMembro nome='Luiz' {...props}/>
            <FamiliaMembro nome='André' {...props}/>
        </div>
    )
}