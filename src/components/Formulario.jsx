import { useContext, useState } from "react";
import { CategoriasContext } from "../context/CategoriasContext";
import { RecetasContext } from "../context/RecetasContext";


export const Formulario = () => {

    const [busqueda, setBusqueda] = useState({
        nombre: '',
        categoria: ''
    });
    const { categorias } = useContext(CategoriasContext);

    const {setBusquedaRecetas, setConsultar} =useContext(RecetasContext)
    
    //Funcion para leer los contenidos
    const obtenerDatosRecetas = e =>{
        setBusqueda({... busqueda, [e.target.name]: e.target.value})
    }

    return ( 
       <form 
        className="col-12"
        onSubmit={
            e => {
                e.preventDefault()
                setBusquedaRecetas(busqueda)
                setConsultar(true);
            }
        }
        >
        <fieldset className="text-center">
            <legend>Buscar bebidas por categoria o ingredientes</legend>
        </fieldset>
        <div className="row">
            <div className="col-md-4">
                <input 
                    type="text" 
                    name="nombre" 
                    className="form-control" 
                    placeholder="Buscar ingrediente" 
                    onChange={obtenerDatosRecetas}
                    />
            </div>
            <div className="col-md-4">
                <select 
                    className="form-control"
                    name="categoria"
                    onChange={obtenerDatosRecetas}
                    >
                    <option value="">-- Seleccione categoria --</option>
                    {categorias.map(categoria =>(
                        <option value={categoria.strCategory} key={categoria.strCategory}>{categoria.strCategory}</option>
                    ))}
                </select>
            </div>
            <div className="col-md-4">
                <input type="submit" className="btn btn-block btn-primary" value="Buscar bebida"/>
            </div>
        </div>
       </form>
     );
}
 
