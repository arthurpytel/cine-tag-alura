import Banner from 'componentes/Banner';
import './Favoritos.css'
import Titulo from 'componentes/Titulo';
import Card from 'componentes/Card';
import { useFavoritosContext } from 'contextos/Favoritos';

const Favoritos = () => {

    const {favoritos} = useFavoritosContext();

    return(
        <>
            <Banner
                imagem='/Imagens/Banner Favoritos.png'
            />
            <Titulo>
                <h1>Meus Favoritos</h1>
            </Titulo>
            <section className='container_fav'>
                {favoritos.map((fav) => {
                    return <Card {...fav} key={fav.id}/>
                })}
            </section>
        </>

    )
}

export default Favoritos;