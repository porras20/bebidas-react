import { useContext, useState } from "react"
// import { ModalContext } from "../context/ModalContext"
// import Modal from '@mui/material/Modal';


// function getModalStyle() {
//     const top = 50 ;
//     const left = 50;
  
//     return {
//       top: `${top}%`,
//       left: `${left}%`,
//       transform: `translate(-${top}%, -${left}%)`,
//     };
// }

// const useStyles = makeStyles(theme => ({
//     paper: {
//       position: 'absolute',
//       width: 450,
//       backgroundColor: theme.palette.background.paper,
//       boxShadow: theme.shadows[5],
//       padding: theme.spacing(2, 4, 3),
//     },
// }));

export const Receta = ({receta}) =>{

    //Configuracion del modal de material-ui
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    //Extraer los valores del context
    // const {informacion, setIdReceta} = useContext(ModalContext);
    return(
        <div className="col-md-4 mb-3">
            <div className="card">
                <h2 className="card-header">{receta.strDrink}</h2>
                <img className="card-img-top"  src={receta.strDrinkThumb} alt={`imagen de ${receta.strDrink}`} />
                <div className="card-body">
                    <button type="button" className="btn btn-block btn-primary"
                    onClick={() =>{
                        setIdReceta(receta.idDrink);
                        handleOpen()
                    }}
                    >
                        Ver Receta
                    </button>
                    {/* <Modal 
                        open={open}
                        onClose={()=>{
                            setIdReceta(null)
                            handleClose();
                        }}
                    >
                    <div style={getModalStyle}>
                        <h2 className="card-title">{informacion.strDrink}</h2>
                            <h3 className="mt-4">Instrucciones</h3>
                            <p className="card-text">
                                {informacion.srtInstructions}
                            </p>
                            <img className="img-img-top my-4" src={informacion.strDrinkThumb} alt="" />
                    </div>
                    </Modal> */}
                </div>
            </div>
        </div>
    )
}