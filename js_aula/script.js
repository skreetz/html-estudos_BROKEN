function calcular() {
    var txtv = document.getElementById('txtvel')
    var res = document.getElementById('div#res')
    var vel = Number(txtv.value)
    res.innerHTML = `A velocidade do seu carro é ${vel} Km/h`
}