import { obtenerEstudiantes, eliminarEstudiante } from "./API.js"; 
// se agrega eliminar


(function () {
    
    const listado = document.querySelector("#listado-estudiantes");
document.addEventListener("DOMContentLoaded", mostrarEstudiantes);

async function mostrarEstudiantes() {
    const estudiantes = await obtenerEstudiantes();
    console.log(estudiantes);
    //este
    estudiantes.forEach((estudiante) => {
        const { nombre, email, telefono, nota, id } = estudiante;
       const row = document.createElement("tr");
       row.innerHTML += `
       <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <p class="text-sm leading-5 font-medium text-gray-700 text-lg fontbold">${nombre}</p>
        <p class="text-sm leading-10 text-gray-700"> ${email} </p>
       </td>
       <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
        <p class="text-gray-700">${telefono}</p>
       </td>
       <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200
       leading-5 text-gray-700">
        <p class="text-gray-600">${nota}</p>
       </td>
       <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200
       text-sm leading-5">
       <a href="editar-estudiante.html?id=${id}" class="text-teal-600
       hover:text-teal-900 mr-5">Editar</a>
       <a href="#" data-estudiante="${id}" class="text-red-600 hover:textred-900 eliminar">Eliminar</a>
       </td>
       `;
       listado.appendChild(row);
       listado.addEventListener('click', confirmarEliminar); 

    });

    function confirmarEliminar(e) {
        if( e.target.classList.contains('eliminar') ) {
            const estudianteId = Number(e.target.dataset.estudiante); 
            const confirmar = confirm("¿Deseas eliminar este Estudiante?");
            if (confirmar) {

            console.log(`eliminando ${estudianteId}`);
            } 

            eliminarEstudiante(estudianteId) 
 
        console.log('Se dio click en eliminar');
        }
    }
}

})(); 



 
   