function encriptar() {
    var texto = document.getElementById("input-text").value;
    texto = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");
    document.getElementById("encrypted-text").value = texto;
}

var boton = document.getElementById("boton-encriptar");

function ejecutar() { 
    if(document.getElementById("input-text").value.match(/^[a-z ]*$/)) {
        encriptar();
        
        setearEstadoControles();
    } else {
        alert("Solo se permiten letras minusculas, sin caracteres especiales.")
    }
};

function setearEstadoControles(){
    document.getElementById("boton-copiar").style.display = "block";
    document.getElementById("muneco").style.display = "none";
}

