import './AcercaD.css';
import jaraImg from '../../jara.jpeg';
import DannyImg from '../../Danny.jpeg';
import React, { useState } from "react";

const AcercaDe = () => {
  const [personaSeleccionada, setPersonaSeleccionada] = useState(null);
  const mostrarInfo = (persona) => {
    setPersonaSeleccionada(persona);
  };

  const cerrarInfo = () => {
    setPersonaSeleccionada(null);
  };

  return (
    <div className="acerca-container">
      <h1 class="titulo">Acerca de esta API</h1>
      <p class="texto">
        Esta es una aplicación para explorar personajes de Dragon Ball,
        en la cual se mostrará información detallada sobre cada personaje,
        junto con su descripción desarrollada por:
      </p>
      <img src={jaraImg} alt="Foto jara" className="personalizar" onClick={() => mostrarInfo("jara")} />
      <img src={DannyImg} alt="Foto Danny" className="pestilo" onClick={() => mostrarInfo("danny")} />

      {/* Tarjeta de información */}
      {personaSeleccionada === "jara" && (
        <div className="card-info">
          <h3>Diego Mauricio Espitia Jara</h3>
          <p>Estudiante de la Universidad de la Amazonia, actualmente curso el noveno semestre del programa de Ingeniería de Sistemas.
            Esta API forma parte de un trabajo de desarrollado en el marco de la asignatura de Programación Web,
            donde aplicamos conocimientos sobre diseño de interfa, consumo de APIs REST, uso de HTML, CSS , visual code y react router dom así como principios de desarrollo front-end y buenas prácticas de codificación.</p>
          <button onClick={cerrarInfo}>Cerrar</button>
        </div>
      )}
      {personaSeleccionada === "danny" && (
        <div className="card-info">
          <h3>Danny Marcela Camacho</h3>
          <p>Estudiante de ingeniería de sistemas en la Universidad de la Amazonia,
            actualmente cursando el noveno semestre. El desarrollo de esta API ha sido una experiencia muy enriquecedora, ya que nos ha permitido aplicar y fortalecer nuestros conocimientos en programación web, además de fomentar el trabajo en equipo y el desarrollo de habilidades colaborativas.</p>
          <button onClick={cerrarInfo}>Cerrar</button>
        </div>
      )}
    </div>
  );
};
export default AcercaDe;

