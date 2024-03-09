import './Inicio.css'
import Banner from 'componentes/Banner';
import Titulo from 'componentes/Titulo';
import Card from 'componentes/Card';
import { useEffect, useState } from 'react';

const Inicio = () => {
    const [videos, setVideos] = useState([])

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/arthurpytel/cine-tag-api/videos')
        .then(resposta => resposta.json())
        .then(dados => {
            setVideos(dados)
        })
    },[])

    return(
        <>
            <Banner
                imagem='/Imagens/Banner Home.png'
            />
            <Titulo>
                <h1>Um lugar para guardar seus vídeos e filmes!</h1>
            </Titulo>
            <section className='video'>
                {videos.map((video) => {
                    return (<Card {...video} key={video.id}/>)
                })}
            </section>
            
        </>

    )
}

export default Inicio;