import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ModalContext = createContext();

export const ModalProvider = (props) =>{
    //State del provider
    const [idReceta, setIdReceta] = useState(null);
    const [informacion, setReceta] = useState({});
    //Una vez tenemos una receta, llamar la api

    useEffect(() => {
      const ObtenerReceta = async () =>{
        if (!idReceta) return;

        const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idReceta}`;
        const resultado = await axios.get(url);
        setReceta(resultado.data.drinks[0]);
      }
      ObtenerReceta();
    }, [idReceta])
    
    return(
        <ModalContext.Provider
            value={{
                informacion,
                setIdReceta
            }}
        >
            {props.children}
        </ModalContext.Provider>
    )
}