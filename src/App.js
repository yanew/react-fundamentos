import React from "react";

import Post from './Post';
import Header from './Header';

const titPost = 'Música é demais!';

function App(){
    return (
        <>
            
            <Header>
                <h2>Children</h2>
            </Header>    

            <hr/>

            <Post 
                titulo = {titPost} 
                likes = {10} 
                subtitulo = {{
                    conteudo: 'Música é iraaaaaaaaado!!!'
                }}/>
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
