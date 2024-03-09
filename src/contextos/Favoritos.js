import { createContext,  useContext,  useState } from "react";

export const FavoritosContext = createContext();

export const FavoritosProvider = ({children}) => {
    const [favoritos, setFavoritos] = useState([]);

    return(
        <FavoritosContext.Provider value={{favoritos, setFavoritos}}>
            {children}
        </FavoritosContext.Provider>

    )   
}

export function useFavoritosContext() {
    const {favoritos, setFavoritos} = useContext(FavoritosContext)

    function adicionarFavorito(novoFavorito){
        const favoritoRepetido = favoritos.some(item => item.id === novoFavorito.id)

        let novaLista = [...favoritos];

        if(!favoritoRepetido){
            novaLista.push(novoFavorito);
            return setFavoritos(novaLista);
        }

        novaLista = favoritos.filter((fav) => fav.id !== novoFavorito.id)
        return setFavoritos(novaLista);
    }

    return{
        favoritos,
        adicionarFavorito
    }
}