import React from "react";

import Post from './Post';
import Header from './Header';

const titPost = 'Música é demais!';

const posts = [
    {titulo: "Linkin Park: From Zero", likes: 67, conteudo: "Primeiro álbum com Emily Armstrong"},
    {titulo: "Evanescence: The Bitter Truth", likes: 35, conteudo: "Álbum mais recente de Evanescence"},
    {titulo: "Será que John Mayer vai lançar seu próximo álbum?", likes: 154, conteudo: "Esse álbum ainda não chegou"},
];

function App(){
    return (
        <>
            
            <Header>
                <h2>Children</h2>
            </Header>    

            <hr/>

            {
                posts.map(post => (
                    <Post 
                        key = {post.titulo}
                        titulo = {post.titulo}
                        likes = {post.likes}
                        subtitulo = {{
                            conteudo: post.conteudo
                        }}
                    />
                ))
            }
            {/*<Post titulo = "Música é demais!"/>*/}
            {/* <Post 
                post={{
                    titulo:'Música é demais!',
                    subtitulo: 'é mesmo!'
                }}/>  nesse cao aqui, lá no componente tem que chamar props.post.titulo*/}

        </>
    );
}

export default App;
