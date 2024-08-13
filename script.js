function encriptar() {
    var frase = document.getElementById("textoEncriptado").value.toLowerCase(); // Convierte en minuscula el texto
    
    var textoEncriptado = frase.replace(/e/img, "enter"); // Reemplaza las vocales por las letras asignadas
    textoEncriptado = textoEncriptado.replace(/o/img, "ober");
    textoEncriptado = textoEncriptado.replace(/i/img, "imes");
    textoEncriptado = textoEncriptado.replace(/a/img, "ai");
    textoEncriptado = textoEncriptado.replace(/u/img, "ufat");
    
    document.getElementById("textoDesencriptado").innerHTML = textoEncriptado;
    document.getElementById("imagenDerecha").style.display = "none";
    document.getElementById("tituloDerecho").style.display = "none";
    document.getElementById("botonCopiar").style.display = "block";
}
    
function desencriptar() {
    var frase = document.getElementById("textoEncriptado").value.toLowerCase();
    
    var textoDesencriptado = frase.replace(/enter/img, "e");
    textoDesencriptado = textoDesencriptado.replace(/ober/img, "o");
    textoDesencriptado = textoDesencriptado.replace(/imes/img, "i");
    textoDesencriptado = textoDesencriptado.replace(/ai/img, "a");
    textoDesencriptado = textoDesencriptado.replace(/ufat/img, "u");
    
    document.getElementById("textoDesencriptado").innerHTML = textoDesencriptado;
    document.getElementById("imagenDerecha").style.display = "none";
    document.getElementById("tituloDerecho").style.display = "none";
    document.getElementById("botonCopiar").style.display = "block";
}
    
    function copiar() {
    var contenido = document.querySelector("#textoDesencriptado");
    contenido.select();
    document.execCommand("copy");
    alert("¡Se Copió!");
}