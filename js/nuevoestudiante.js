import { mostrarAlerta } from "./funciones.js"; 
import { nuevoEstudiante } from "./API.js"; 

(function () {    
    const formulario = document.querySelector("#formulario"); 
    formulario.addEventListener("submit", validarEstudiante)
    function validarEstudiante(e) {     
        e.preventDefault();
        const nombre = document.querySelector("#nombre").value; 
        const email = document.querySelector("#email").value; 
        const telefono = document.querySelector("#telefono").value; 
        const nota = document.querySelector("#nota").value; 
        const estudiante = {       
            nombre,       
            email,       
            telefono,       
            nota, 
        };
        function validar(obj) {    
             return !Object.values(obj).every((element) => element !== "");   
            } 

            if (validar(estudiante)) {
                mostrarAlerta('Todos los campos son obligatorios'); 
                } else {
                    nuevoEstudiante(estudiante); 

                } 
               
            } 
})();