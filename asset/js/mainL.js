informar = () => {

    let mensaje = "Usuario no autorizado...";

    let usuarios = new Array(4);
    let claves = new Array(4);
    
    usuarios[0] = "Carlos";
    usuarios[1] = "Jorge";
    usuarios[2] = "David";
    usuarios[3] = "Samuel";

    claves[0] = "1234";
    claves[1] = "1234";
    claves[2] = "1234";
    claves[3] = "1234";

    for (i=0; i<usuarios.length; i++){
        if ((usuarios[i]==document.getElementById("nombre").value)
        && (claves[i]==document.getElementById("contraseña").value)){
            mensaje = "Bienvenido al sistema...";
            break;
        }

    }
  
    alert(mensaje);

}


