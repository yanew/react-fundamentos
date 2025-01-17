import React from "react";
import PropTypes from "prop-types";
import PostHeader from "./PostHeader";

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
                    <PostHeader
                        onRemove = {props.onRemove}
                        post={
                            {
                                id: props.post.id,
                                titulo: props.post.titulo,
                                read: props.post.read,
                                likes: props.post.likes
                            }
                        }
                    />
                    
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