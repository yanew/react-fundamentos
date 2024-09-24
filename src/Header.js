import React from "react";
import PropTypes from "prop-types";

export default function Header({titulo, children /*pode ser pros aqui e la embaixo chamar props.children*/}){
    return (
        <>
            <h1>{titulo}</h1>
            {children}
        </>
    );
}


Header.PropTypes = {
    titulo: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}

Header.defaultProps = {
    titulo: `Blog de Yanezinha`,
}