var SetaDireita = window.document.getElementById("SetaDireita")
var Leonardo = window.document.getElementById("Leonardo")
var Samantha = window.document.getElementById("Samantha")
var Bruna = window.document.getElementById("Bruna")
var SetaEsquerda = window.document.getElementById("SetaEsquerda")

function RolarParaDireita() {
    Leonardo.style = "display:none"
    Bruna.style = "display:flex"
    SetaDireita.style = "display:none"
    SetaEsquerda.style = "display:flex;"
}
function RolarParaEsquerda() {
    Leonardo.style = "display: flex"
    Bruna.style = "dsplay:none"
    SetaDireita.style = "display:flex;"
    SetaEsquerda.style = "display:none"
}