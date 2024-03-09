import { Link } from 'react-router-dom';
import './Cabecalho.css'
import CabecalhoLink from 'componentes/CabecalhoLink';

const Cabecalho = () => {
    return(
        <header className='cabecalhoGeral'>
            <Link to='/'>
                <img src='/Imagens/Logo-cinetag-branco 1.png' alt='Logo'></img>
            </Link>
            <nav>
                <CabecalhoLink
                    url='/'
                    nome="Home"
                />
                <CabecalhoLink
                    url='/Favoritos'
                    nome="Favoritos"
                />
            </nav>
        </header>
    )
}

export default Cabecalho;