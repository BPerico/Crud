import {obtenerEstudiante} from './API.js'; 

(function () {
    
    document.addEventListener("DOMContentLoaded", async () => {
        // Obtener el id del estudiante a actualizar
        const parametrosURL = new
       URLSearchParams(window.location.search);
        const idEstudiante = Number(parametrosURL.get("id"));
        const estudiante = await obtenerEstudiante(idEstudiante);
        console.log(estudiante);
        
        const {nombre, email, telefono, nota, id} = estudiante;
        nombreInput.value = nombre;
        emailInput.value = email;
        telefonoInput.value = telefono;
        notaInput.value = nota;
        idInput.value = id;

        mostrarEstudiante(estudiante);
    }); 
    
    const nombreInput = document.querySelector("#nombre");
    const emailInput = document.querySelector("#email");
    const telefonoInput = document.querySelector("#telefono");
    const notaInput = document.querySelector("#nota");
    const idInput = document.querySelector("#id");
    
})();

function mostrarEstudiante(estudiante) {
    
    console.log(estudiante);
    
}

