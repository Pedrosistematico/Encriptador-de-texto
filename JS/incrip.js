const texArea = document.querySelector(".encriptada");
const mensaje = document.querySelector(".evaluar");
const imgMuñeco = document.querySelector(".img-muñeco");
const textUno = document.querySelector(".text-uno");
const textDos = document.querySelector(".text-dos");

//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"


function btnEncrip(){
    const textoEncrip = encriptar(texArea.value);
    mensaje.value = textoEncrip;
    texArea.value="";
    mensaje.style.backgroundImage = "none";
    imgMuñeco.style.display = "none";
    textUno.style.display = "none";  
    textDos.style.display = "none";
}

function encriptar(encriptarS){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    encriptarS = encriptarS.toLowerCase()


    for(let i = 0; i<matrizCodigo.length; i++){
        if(encriptarS.includes(matrizCodigo[i][0])){
            encriptarS = encriptarS.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }

    }
    return encriptarS
}


function btnDesenc(){
    const textoEncrip = desencriptar(texArea.value);
    mensaje.value = textoEncrip;
    texArea.value="";
    mensaje.style.backgroundImage = "none";
    imgMuñeco.style.display = "none";
    textUno.style.display = "none";  
    textDos.style.display = "none";
}



function desencriptar(encriptarD){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    encriptarD = encriptarD.toLowerCase()


    for(let i = 0; i<matrizCodigo.length; i++){
        if(encriptarD.includes(matrizCodigo[i][1])){
            encriptarD = encriptarD.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }

    }
    return encriptarD
}

async function copiarTexto() {
    try {
        await navigator.clipboard.writeText(mensaje.value); // Copia el texto al portapapeles
        console.log("Texto copiado al portapapeles"); // Mensaje en la consola (puedes cambiarlo por una notificación en la UI)
    } catch (err) {
        console.error("Error al copiar el texto: ", err);
    }
}
