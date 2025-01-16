import React from "react";
import PropTypes from "prop-types";

export default function Post(props){
    /*if(props.post.read){
        return <h2>{props.post.titulo} já foi lido</h2>
    }*/ //Esta eh uma forma possivel. A de baixo eh outra e a ternaria ali dentro do strong eh outra

    return (
        //<>
            //{
               // props.post.read ? <h2>{props.post.titulo} já foi lido</h2>
            //: 
            <>
                <article>
                    <small>Likes: {props.post.likes}</small><br />
                    <strong>
                        {props.post.read ? <s>{props.post.titulo}</s> : props.post.titulo}
                    </strong>
                    <br/>
                    <button onClick={() => props.onRemove(props.id)}>Remover</button>
                    <br/>
                    <small>{props.post.subtitulo}</small>
                </article>
                <br/>
            </>
           // }
       // </>
    );
}

Post.PropTypes = {
    onRemove: PropTypes.func.isRequired,
    post: PropTypes.shape({
        titulo: PropTypes.string.isRequired,
        likes: PropTypes.number.isRequired,
        id: PropTypes.number.isRequired,
        subtitulo: PropTypes.string.isRequired,
        read: PropTypes.bool.isRequired
    }).isRequired,
}