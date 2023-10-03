import "./ListaOpciones.css";

const ListaOpciones = (props) => {

    // para recorrer un array es el método map
    // map -> arreglo.map ( (equipos, index) => {
    //     return <option>Programacio</option>        
    // })

    const manejarCambio = (e) => {
        console.log("cambio", e.target.value);
        props.actualizarEquipo(e.target.value);
    }

    return <div className="lista-opciones">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>Seleccione equipo</option>
            // index posicion dentreo del arreglo
            {props.equipos.map((equipo, index) => <option key={index} value={equipo}>{equipo}</option>)};
        </select>
    </div>
}

export default ListaOpciones;