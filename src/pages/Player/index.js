import Titulo from 'componentes/Titulo'
import './Player.css'
import Banner from 'componentes/Banner'
import { useParams } from 'react-router-dom'
import NaoEncontrado from 'pages/NaoEncontrado';
import { useEffect, useState } from 'react';

const Player = () => {

    const [video, setVideo] = useState();
    const parametros = useParams();

    useEffect(() =>{
        fetch(`https://my-json-server.typicode.com/arthurpytel/cine-tag-api/videos?id=${parametros.id}`)
        .then(resposta => resposta.json())
        .then(dados =>{
            setVideo(...dados)
        })
    }, [])
    
    if(!video){
        return <NaoEncontrado/>
    }
     
    return(
        <>
            <Banner
                imagem='/Imagens/Banner Player.png'
            />
            <Titulo>
                <h1>Player</h1>
            </Titulo>
            <section className='video'>
                <iframe 
                    width="100%" 
                    height="100%" 
                    src={video.link} 
                    title={video.title} 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowfullscreen>
                </iframe>
            </section>
        </>
    )

}

export default Player;