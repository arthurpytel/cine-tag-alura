import { Children } from 'react';
import './Titulo.css'

const Titulo = ({children}) => {
    return(
        <div className='titulo'>
            {children}
        </div>
    )
}

export default Titulo;