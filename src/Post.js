import React from "react";
import PropTypes from "prop-types";

export default function Post(props){
    return (
        <>
            <article>
                <small>Likes: {props.likes}</small><br />
                <strong>{props.titulo}</strong><br/>
                <small>{props.subtitulo.conteudo}</small>
            </article>
            <br/>
        </>
    );
}

Post.PropTypes = {
    likes: PropTypes.number.isRequired,
    subtitulo: PropTypes.shape({
        conteudo: PropTypes.string.isRequired,
    }).isRequired,
}