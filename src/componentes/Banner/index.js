import './Banner.css'

const Banner = ({imagem}) => {
    return(
        <div className='banner_home'>
            <img className='banner'src={imagem}alt='Banner'></img>
        </div>
    )

}

export default Banner;