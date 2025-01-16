import React, { useState } from "react";

import Post from './Post';
import Header from './Header';

const titPost = 'Música é demais!';

function App(){

    const [posts, setPosts] = useState([
        {id: Math.random(), titulo: "Linkin Park: From Zero", likes: 67, conteudo: "Primeiro álbum com Emily Armstrong", read: false},
        {id: Math.random(), titulo: "Evanescence: The Bitter Truth", likes: 35, conteudo: "Álbum mais recente de Evanescence", read: true},
        {id: Math.random(), titulo: "Será que John Mayer vai lançar seu próximo álbum?", likes: 154, conteudo: "Esse álbum ainda não chegou, ô misera!", read: false},
    ]);

    function handleRefresh(){

        //A explicacao abaixo vai para o caso de ser necessario usar o estado anterior da variavel do useState:

        // setPosts([...posts,
        //     {
        //         id: Math.random(), 
        //         titulo: `Titulo${posts.length+1}`, 
        //         likes: 154, 
        //         conteudo: `Texto${posts.length+1}`
        //     }
        // ]); Desse modo aqui, se der dois cliques rapidinhos não vão ser adicionados 2 posts, 
            // porque o react pega a referencia de como o array posts estava na hora do clique.

        setPosts((prevState) => [//prevState é o array posts no estado corrente
            ...prevState,
            {
                id: Math.random(), 
                titulo: `Titulo${prevState.length+1}`, 
                likes: 154, 
                conteudo: `Texto${prevState.length+1}`
            }
        ]);// com a função os 2 posts sao adicionados, porque o react so vai pegar o estado 
           //do array posts no momento que for executar a funcao

        //Caso nao seja necessario pegar o estado anterior da variavel usada no useState, voce pode passar o novo valor 
        //da variavel direto:
        //setPosts([]);
    }

    function handleRemovePost(postId){
        setPosts((prevState) => (
            prevState.filter(post => post.id !== postId)
        ));
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
                        onRemove={handleRemovePost}
                        post = {post}
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
