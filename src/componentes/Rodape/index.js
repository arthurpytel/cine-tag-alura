import './Rodape.css'

const Rodape = ({textoRodape}) => {
    return(
        <footer className='rodape'>
            <h2>{textoRodape}</h2>
        </footer>
    )
}

export default Rodape;