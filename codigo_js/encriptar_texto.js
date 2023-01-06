function encriptador(event){
    event.preventDefault();
    //Seleccionamos el input donde se va a ingresar el texto
    var inputEncriptar = document.querySelector("#textBox");
    //reasignamos la variable inputEncriptar
    var inText = inputEncriptar.value;
    //Seleccionamos el input donde se mostrara el mensaje
    var msg = document.querySelector("#mensaje");
    var msgEncriptado = " ";

    for(var i = 0;i < inText.length;i++){
        if(inText[i] == "a"){
            msgEncriptado += inText[i].replace("a", "ai"); 
    
        }else if(inText[i] == "e"){
            msgEncriptado += inText[i].replace("e","enter");
        
        }else if(inText[i] == "i"){
            msgEncriptado += inText[i].replace("i","imes");
            
        }else if(inText[i] == "o"){
            msgEncriptado += inText[i].replace("o","ober");
            
        }else if(inText[i] == "u"){
            msgEncriptado += inText[i].replace("u","ufat");
            
        }else{
            msgEncriptado += inText[i];
        }
    }
    
    msg.value = msgEncriptado;
}


var btnEncriptar = document.querySelector("#botonEncriptar")
btnEncriptar.onclick = encriptador;





