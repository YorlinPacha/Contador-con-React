import React from "react";
import '../hojas-de-estilo/Boton.css';

//utilizamos sintaxis de desestructurcion para no colocar
// aqui (props), si no de una el nombre de la propiedad y no el objeto como antes
// vamos a recibir esta funcion como props (manejarClic)
function Boton({texto , esBotonDeCLic, manejarClic}){
    return(
        <button
        // uso de operador ternario para colocar una clase basada en condicion
        // ?= si es esBotonDeCLic 0 true, se le asignara la clase "boton-clic"
        // : = si no o false, se le asignara la clase  "boton-reiniciar"
        className={ esBotonDeCLic ? "boton-clic" : "boton-reiniciar" }
        //que pasara cuando se haga clic en el boton - Event Listener
        // manejarClic = se le asigno a onClic, para que la funcion se llame cuando el boton reciba este evento
        onClick={manejarClic}
        >
            {/* ya no es {props.texto} */}
            {texto}
        </button>
    );
}
export default Boton;