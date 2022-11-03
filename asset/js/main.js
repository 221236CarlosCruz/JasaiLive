
alerta_boletos = () =>{
    let soporteJasai = "JASAI LIVE: "
    let cantidadBoletos = "Lo sentimos los boletos estan agotados";

    alert(soporteJasai + cantidadBoletos);
}

enVivo = () =>{
    let soporteJasai = "JASAI LIVE: Esta opcion esta en desarrollo";

    alert(soporteJasai);
}

acercaDe = () =>{

    var a = document.createElement('a'); 
    var linkText = document.createTextNode("my title text"); a.appendChild(linkText); a.title = "my title text"; a.href = "http://example.com"; document.body.appendChild(a);

}

hacerFila = () =>{
    let soporteJasai = "JASAI LIVE: Estas formado en la cola, Agradecemos tu paciencia";

    let numFolio = Math.round(Math.random()*(170000 -89000) + 89000);

    alert(soporteJasai);
    alert("Su numero de folio es: " + numFolio + " Espera tu turno" + miHora);
}

bm = true, bd = true, bc = true;

let imprimirm = (texto) =>

{
    
    if(bm)
    {
        document.getElementById("dsamuel").innerHTML = "";
        document.getElementById("dsamuel").innerHTML = texto;
        bm = false;
    }
    else
    {
        document.getElementById("dsamuel").innerHTML = "";
        bm = true;

    }
    
}

let mostrarm = (callback) =>
{
    let cadenam = "<h2>Samuel Escobar</h2> <p>Edad: 19 años<\p> <p>Tel: 9651062634</p> <a>Correo: 221238@ids.upchiapas.edu.mx <\a> <br> <a href='https://web.facebook.com/profile.php?id=100041598095592' target='_blank'><br>Facebook</a>";
    callback(cadenam);
}


let imprimirc = (texto) =>
{
    if(bc)
    {
        document.getElementById("dcarlos").innerHTML = "";
        document.getElementById("dcarlos").innerHTML = texto;
        bc = false;
    }
    else
    {
        document.getElementById("dcarlos").innerHTML = "";
        bc = true;

    }
}

let mostrarc = (callback) =>
{
    
    let cadenam = "<h2>Carlos Cruz</h2> <p>Edad: 19 años<\p> <p>Tel: 9681096112</p> <a>Correo: 221236@ids.upchiapas.edu.mx <\a> <a href=''><\a><br><a href='https://web.facebook.com/Carlos.cruz.006' target='_blank'><br>Facebook</a>";
    callback(cadenam);

}


let imprimirj = (texto) =>
{
    if(bd)
    {
        document.getElementById("djorge").innerHTML = "";
        document.getElementById("djorge").innerHTML = texto;
        bd = false;
    }
    else
    {
        document.getElementById("djorge").innerHTML = "";
        bd = true;

    }
}

let mostrarj = (callback) =>
{
    let cadenam = "<h2>Jorge Molina</h2> <a>Edad: 19 años<\a> <p>Tel: 9676680760</p> <a>Correo: 221251@ids.upchiapas.edu.mx <\a> <br> <a href='https://web.facebook.com/jorge.molinagomez.79' target='_blank'><br>Facebook</a>";
    callback(cadenam);

}

let imprimird = (texto) =>
{
    if(bd)
    {
        document.getElementById("ddavid").innerHTML = "";
        document.getElementById("ddavid").innerHTML = texto;
        bd = false;
    }
    else
    {
        document.getElementById("ddavid").innerHTML = "";
        bd = true;

    }
}

let mostrard = (callback) =>
{
    let cadenam = "<h2>David Ruiz</h2> <a>Edad: 20 años<\a> <p>Tel: 9612835436</p> <a>Correo: 221263@ids.upchiapas.edu.mx <\a> <br> <a href='https://web.facebook.com/JesuVid.RG/' target='_blank'><br>Facebook</a>";
    callback(cadenam);

}

