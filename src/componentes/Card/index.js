import { useFavoritosContext } from 'contextos/Favoritos';
import './Card.css';
import { Link } from 'react-router-dom';

const Card = ({id, titulo,capa}) => {
    
    const {favoritos, adicionarFavorito} = useFavoritosContext();
    const ehFavorito = favoritos.some((fav) => fav.id === id);
    const icone = !ehFavorito ? '/Imagens/favoritoVazio.png' : 'Imagens/favoritado.png';

    return(
        <div className='card_principal'>
            <Link className='link_Imagem' to={`/${id}`}>
                <img className='capa' src={capa} alt={titulo}></img>
                <h2>{titulo}</h2>
            </Link>
            <img 
                className='favoritar' 
                src={icone} 
                alt='favoritar'
                onClick={() =>{
                    adicionarFavorito({id, titulo, capa})
                }}
            >
            </img>
        </div>

    )
}

export default Card;