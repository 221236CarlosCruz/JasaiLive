let agregarEventos = [];

function agregarDatosEventos(eventoNombre, eventoLugar, eventoFecha, eventoCapacidad, eventoGenero, eventoPrecio) {
    
    let NuevoEvento = {
        nomEvento: eventoNombre,
        lugar: eventoLugar,
        capacity: eventoCapacidad,
        genero: eventoGenero,
        precio: eventoPrecio,
        fecha: eventoFecha
    };

    console.log(NuevoEvento);
    agregarEventos.push(NuevoEvento);
}

function obtenerListaDeEventos() {
    return agregarEventos;
}








document.querySelector('#btnSubmit').addEventListener('click', guardarDatosDeEventos);
imprimirTabla();

function guardarDatosDeEventos() {
    let guardareventoNombre = document.querySelector('#nombreEvento').value,
        guardareventoLugar = document.querySelector('#lugar').value,
        guardareventoFecha = document.querySelector('#fecha').value;
        guardareventoCapacidad = document.querySelector('#capacidad').value;
        guardareventoGenero = document.querySelector('#genero').value;
        guardareventoPrecio = document.querySelector('#precio').value;

    agregarDatosEventos(guardareventoNombre, guardareventoLugar, guardareventoFecha, guardareventoCapacidad, guardareventoGenero, guardareventoPrecio);
    imprimirTabla();
}

function imprimirTabla() {
    let lista = obtenerListaDeEventos(),
    tbody = document.querySelector('#tablaEventos tbody');

    tbody.innerHTML = '';

    for (var i = 0; i < lista.length; i++) {
        let row = tbody.insertRow(i),
            nombreCelda = row.insertCell(0),
            lugarCelda = row.insertCell(1);
            capacidadCelda = row.insertCell(2);
            generoCelda = row.insertCell(3);
            precioCelda = row.insertCell(4);
            fechaCelda = row.insertCell(5);
            
        nombreCelda.innerHTML = lista[i].nomEvento+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
        lugarCelda.innerHTML = lista[i].lugar+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
        fechaCelda.innerHTML = lista[i].fecha+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
        capacidadCelda.innerHTML = lista[i].capacity+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
        generoCelda.innerHTML = lista[i].genero+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
        precioCelda.innerHTML = lista[i].precio+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";

        tbody.appendChild(row);
    }
}