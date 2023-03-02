import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const RecetasContext = createContext();

export const RecetasProvider = (props) =>{
    
    const [recetas, setRecetas] = useState([])
    const [busquedaRecetas, setBusquedaRecetas] = useState({
        ingrediente: '',
        categoria: ''
    })
    const [consultar, setConsultar] = useState(false);
    const {nombre, categoria} = busquedaRecetas

    useEffect(() => {
        if (consultar) {
            const obtenerRecetas = async () =>{
            const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria}`;
            const resultado = await axios.get(url);
            
            setRecetas(resultado.data.drinks);
        }
        obtenerRecetas();
      }
    }, [busquedaRecetas])
    
    return(
        <RecetasContext.Provider
        value={{
            recetas,
            setBusquedaRecetas,
            setConsultar
        }}
        >
            {props.children}
        </RecetasContext.Provider>
    )
}