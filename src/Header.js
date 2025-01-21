import React, { useContext } from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import { ThemeContext } from './ThemeContext';

import * as styles from './Header.scss';//eh necessario colocar o styles se for trabalhar com css modules

export default function Header(props/*{titulo, children - desestruturacao}*/){
    const {onToggleTheme} = useContext(ThemeContext);
    return (
        <div
            style={{
                background: '#ccc',
                fontFamily: 'sans-serif',
            }}>
            <h1 className={styles.title}>{props.titulo}</h1>
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