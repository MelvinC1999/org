import { useState } from "react";
import "./Campo.css";

// props objeto con todas las propiedades que deseamos agregar
const Campo = (props) => {
    const placeholderModificado = `${props.placeholder}...`;

    // Destructuracion
    const { type = "text" } = props

    const manejarCambio = (e) => {
        // e.target.value es muy utilizado
        props.actualizarValor(e.target.value);
    }

    return <div className={`campo campo-${type}`}>
        <label>{props.titulo}</label>
        <input 
            placeholder={placeholderModificado} 
            required={props.required} 
            value={props.valor} 
            onChange={manejarCambio} 
            type={type}
        />
    </div>
};

export default Campo;