import React from "react";

import Post from './Post';
import Header from './Header';

const titPost = 'Música é demais!';

const posts = [
    {id: Math.random(), titulo: "Linkin Park: From Zero", likes: 67, conteudo: "Primeiro álbum com Emily Armstrong"},
    {id: Math.random(), titulo: "Evanescence: The Bitter Truth", likes: 35, conteudo: "Álbum mais recente de Evanescence"},
    {id: Math.random(), titulo: "Será que John Mayer vai lançar seu próximo álbum?", likes: 154, conteudo: "Esse álbum ainda não chegou"},
];

function App(){

    function handleRefresh(){
        posts.push({
            id: Math.random(), 
            titulo: `Titulo${posts.length+1}`, 
            likes: 154, 
            conteudo: `Texto${posts.length+1}`
        });
    }

    return (
        <>
            
            <Header>
                <h2>
                    Posts da semana
                    <button onClick={handleRefresh}>Atualizar</button>
                </h2>
            </Header>    

            <hr/>

            {
                posts.map(post => (
                    <Post 
                        key = {post.id}
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
