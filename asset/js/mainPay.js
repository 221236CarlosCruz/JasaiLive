function guardar_datos(){
    let frm = document.forms;
    let formulario = frm.frm_registro;
    let nom = formulario.elements.nombre;

    alert("Nombre: "+ nom.value);

    document.getElementById('resultadoNombre').innerHTML = nom.value;
}