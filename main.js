//botones a elegir //
const piedraBoton = document.getElementById("botonPiedra");
const papelBoton = document.getElementById("botonPapel");
const tijeraBoton = document.getElementById("botonTijera");


//elementos de puntaje //

const misPuntos = document.getElementById("scoreScreenPlayer");
const puntosPC = document.getElementById("scoreScreenPC")
var sumaUser = 0;
var sumaPC = 0;

//cambio de imagenes elegidas//

const imagenEscogidaUser = document.getElementById("eleccionTuya");
const imagenEscogidaPC = document.getElementById("eleccionDelPC");

//cambiar imagen a través del botón elegido //
function cambiarImgPCPapel(){
    imagenEscogidaPC.src = "./assets/papel.png"
}
function cambiarImgPCTijera(){ 
    imagenEscogidaPC.src = "./assets/tijeras.png"
}
function cambiarImgPCPiedra(){ 
    imagenEscogidaPC.src = "./assets/piedra.png"
}

//scores actualizando en html
function actualizarScoreUser(){
    misPuntos.textContent = sumaUser;
}
function actualizarScorePC(){
    puntosPC.textContent = sumaPC;
}

piedraBoton.addEventListener("click", function(){
    imagenEscogidaUser.src = "./assets/piedra.png"
    var numeroRandom = Math.floor(Math.random() * 3) + 1;
    switch(numeroRandom){
        case 1:
            cambiarImgPCPapel()
            sumaPC++;
            actualizarScorePC();
            break
        case 2:
            cambiarImgPCTijera()
            sumaUser++;
            actualizarScoreUser();
            break
        case 3:
            cambiarImgPCPiedra()
            break
    }
});
papelBoton.addEventListener("click", function(){
    imagenEscogidaUser.src = "./assets/papel.png"
    var numeroRandom = Math.floor(Math.random() * 3) + 1;
    switch(numeroRandom){
        case 1:
            cambiarImgPCPapel()
            break
        case 2:
            cambiarImgPCTijera()
            sumaPC++;
            actualizarScorePC();
            break
        case 3:
            cambiarImgPCPiedra()
            sumaUser++;
            actualizarScoreUser();
            break
    }
});
tijeraBoton.addEventListener("click", function(){
    imagenEscogidaUser.src = "./assets/tijeras.png"
    var numeroRandom = Math.floor(Math.random() * 3) + 1;
    switch(numeroRandom){
        case 1:
            cambiarImgPCPapel()
            sumaUser++;
            actualizarScoreUser();
            break
        case 2:
            cambiarImgPCTijera()
            break
        case 3:
            cambiarImgPCPiedra()
            sumaPC++;
            actualizarScorePC();
            break
    }
});
// cambiando contabilizador