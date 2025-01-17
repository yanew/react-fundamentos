import React from 'react';
import PropTypes from "prop-types";

import Button from './Button';

export default function PostHeader(props){
    return (
        <>
            <small>Likes: {props.post.likes}</small><br />
            <strong>
                {props.post.read ? <s>{props.post.titulo}</s> : props.post.titulo}
            </strong>
            <br/>
            <Button onClick = {() => props.onRemove(props.post.id)}>
                Remover
            </Button>
        </>
    )
}


PostHeader.PropTypes = {
    onRemove: PropTypes.func.isRequired,
    post: PropTypes.shape({
        titulo: PropTypes.string.isRequired,
        likes: PropTypes.number.isRequired,
        id: PropTypes.number.isRequired,
        read: PropTypes.bool.isRequired
    }).isRequired,
}