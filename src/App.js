
import './App.css';
//otra manera de importar imagenes
import freecodecampLogo from '../src/imagenes/react200.png'
//importar componentes
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
//importar el hooks de useState
import { useState } from 'react'; 

function App() {
  //trabajaremos con estados
  // la variable constara de un arreglo con 2 elementos importantes
  // numClics = es el valor que queremos usar como el estado. estado que vamos 
  // a guardar, usar y actualizar
  // setNumClics = es la funcion que nos permite actualizarlo
  // se le asignara el valor retornado por useState(0); valor inicial 0
  const [numClics, setNumClics] = useState(0);


  // aqui definimos la funcion (que va a pasar cuando se de clic al boton)
  const manejarClic = () => {
    //llamamos a la funcion y le pasamos 2 valores como argumentos, esto asignara el 
    // nuevo valor a numClics. este proceso se actualiza automaticamente
    setNumClics(numClics + 1);
    //console.log("Clic");
  }
  const reiniciarContador = () => {
    setNumClics(0);
  }

  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img className="freecodecamp-logo"
        src={freecodecampLogo}
        alt='logo de freecodecamp'  />
      </div>
      <div className='contenedor-principal'>
        <Contador
        // variable definida, estado del componente  numClics
        numClics={numClics} />

        {/* seccion BOTONES */}
        {/* creamos nuestros botones y necesitamos mandar sus props*/}
        <Boton 
        texto='Clic' 
        esBotonDeCLic={true} 
        // asignamos la funcion al prop para ser enviado, funcion esta en {}
        manejarClic={manejarClic} />
        
        <Boton 
        texto='Reiniciar' 
        esBotonDeCLic={false}
         manejarClic={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
