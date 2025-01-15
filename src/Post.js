import React from "react";
import PropTypes from "prop-types";

export default function Post(props){
    return (
        <>
            <article>
                <small>Likes: {props.likes}</small><br />
                <strong>{props.titulo}</strong>
                <button onClick={() => props.onRemove(props.id)}>Remover</button>
                <br/>
                <small>{props.subtitulo.conteudo}</small>
            </article>
            <br/>
        </>
    );
}

Post.PropTypes = {
    titulo: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    onRemove: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    subtitulo: PropTypes.shape({
        conteudo: PropTypes.string.isRequired,
    }).isRequired,
}