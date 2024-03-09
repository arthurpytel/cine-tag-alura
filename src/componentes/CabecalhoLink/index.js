import { Link } from 'react-router-dom';
import './CabecalhoLink.css'

const CabecalhoLink = ({url,nome}) => {
    return(
        <Link to={url} className='link'>
            {nome}
        </Link>

    )
}

export default CabecalhoLink;