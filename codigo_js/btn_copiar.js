function copiar(event){
    event.preventDefault();
    var copyText = document.querySelector("#mensaje");
    copyText.select();
    document.execCommand("copy");
}

var btnCopy = document.querySelector("#botonCopiar");
btnCopy.onclick = copiar;