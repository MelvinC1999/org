import { useState } from "react";
import "./MiOrg.css";

const MiOrg = (props) => {
    // Estado - hooks
    // useState
    // funcion useState()
    // const [nombreVariable, funcionActualiza] = useState(valorInicial)
    // funcionActualiza(valorNuevo)
    // console.log(variable);
    // Hooks
    // useState
    console.log(props);
    //const [mostrar, actualizarMostrar] = useState(true);

    //const manejarClick = () => {
    //    console.log("Mostrar/Ocultar elemento", !mostrar);
    //    actualizarMostrar(!mostrar);
    //}

    return <section className="orgSection">
        <h3 className="title">Mi organización</h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar} />
    </section>
}

export default MiOrg;