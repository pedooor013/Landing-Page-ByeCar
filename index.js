var setaEsquerda = window.document.getElementById("seta-esquerda")
var setaDireita = window.document.getElementById("seta-direita")
var imgScooter = window.document.getElementById("img-scooter")
var imgCb500 = window.document.getElementById("img-cb500")
var overlay = window.document.getElementById("overlay")


function rolarParaDireita(){
    imgScooter.style = "display:none"
    imgCb500.style = "display:flex"
}   

function rolarParaEsquerda(){
    imgScooter.style = "display:flex"
    imgCb500.style = "display:none"
}

function abrirOverlay(){
    overlay.style = "display:flex"      
}
function fecharOverlay(){
    overlay.style = "display:none"
}