let a = window.document.getElementById("minhaDiv");
a.addEventListener('click', clicar)
a.addEventListener('mouseenter', entrar)
a.addEventListener('mouseout', sair)

function clicar() {
    a.innerText = "Clicou!"
    a.style.background = "red"
}
function entrar() {
    a.innerText = "Entrou!"
    a.style.background = "green"
}
function sair() {
    a.innerText = "Saiu!"
    a.style.background = "blue"
}

function somar () {
    var tn1 = document.getElementById("txtn1")
    var tn2 = document.getElementById("txtn2")
    var res = document.getElementById("res")
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var resultado = n1 + n2
    res.innerHTML = `A soma entre ${n1} e ${n2} é igual a <strong>${resultado}.</strong>`
}    