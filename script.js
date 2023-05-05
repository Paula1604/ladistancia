setTimeout(cambiaMensaje, 200);

function cambiaMensaje (){
    document.getElementById("loading-message").innerText = "Enviado"

}

setTimeout(function () {
    alert ("Recibiste un abrazo, ¡mi amor!")
}, 2800)