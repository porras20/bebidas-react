import { useContext } from "react";
import { RecetasContext } from "../context/RecetasContext";
import { Receta } from "./Receta";

const ListaRecetas = () => {
    //Extraer las recetas
    const {recetas} = useContext(RecetasContext);
    
    return ( 
        <div className="row mt-5">
            {recetas.map(receta =>(
                <Receta
                    receta={receta}
                    key={receta.idDrink}
                />
            ))}
        </div>
     );
}
 
export default ListaRecetas;