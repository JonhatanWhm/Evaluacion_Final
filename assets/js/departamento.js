document.addEventListener('DOMContentLoaded',function(){
    iniciar();
})

function iniciar(){
    obtenerDepartamentos();
}

async function obtenerDepartamentos(){
    const url = "data/departamento.php?accion=listar";
    const respuesta = await fetch(url);
    const resultado = await respuesta.json();
    if (resultado.codigo === 200) {
        const data = resultado.data;
        let html = "";
        data.forEach(departamento=> {
            html += "<tr>";
            html += "<td>" + departamento.id + "</td>";
            html += "<td>" + departamento.titulo + "</td>";
            html += "<td>" + departamento.precio + "</td>";
            html += "<td>" + departamento.descripcion + "</td>";
            html += "<td>" + departamento.habitaciones + "</td>";
            html += "<td>" + departamento.estacionamiento + "</td>";
            html += "</tr>";
        });
        const tabla = document.querySelector("#tblData");
        tabla.innerHTML = HTML
        //console.log(html);
    }
}