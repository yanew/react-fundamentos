import React, { useContext } from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import { ThemeContext } from './ThemeContext';

export default function Header(props/*{titulo, children pode ser props aqui e la embaixo chamar props.children}*/){
    const {onToggleTheme} = useContext(ThemeContext);
    return (
        <div
            style={{
                background: '#ccc',
                fontFamily: 'sans-serif',
            }}>
            <h1>{props.titulo}</h1>
            <Button onClick={onToggleTheme}>
                Mudar tema
            </Button>
            {props.children}
        </div>
    );
}


Header.PropTypes = {
    titulo: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}

Header.defaultProps = {
    titulo: `Blog de Yanezinha`,
}