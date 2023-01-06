function desencriptador(event){
    event.preventDefault();
    //Seleccionamos el input donde se va a ingresar el texto
    var inputDesencriptar = document.querySelector("#textBox");
    //reasignamos la variable inputDesencriptar
    var outText = inputDesencriptar.value;
    //Seleccionamos el input donde se mostrara el mensaje
    var msg = document.querySelector("#mensaje");
    var msgDesencrip = "";

    msgDesencrip = outText.replace(/ai/g, "a").replace(/enter/g,"e").
    replace(/imes/g, "i").replace(/ober/g, "o").replace(/ufat/g, "u");  

    msg.value = msgDesencrip;
}

var btnDesencriptar = document.querySelector("#botonDesencriptar");
btnDesencriptar.onclick = desencriptador;