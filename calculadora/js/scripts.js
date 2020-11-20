//var val1 = document.getElementById("num1").value;
var intro = document.getElementById("intro");
var resultado = document.getElementById("resultado");
var operador;
function limpar(){
    intro.value="";
    resultado.value="";
   
}

function numero(value){
    intro.value += value;
}

function operacao (value) {
    operador = value;
    intro.value += value;
}

function executar (valor1, valor2){

    var valor1 = Number(valor1)
    var valor2 = Number(valor2)
    if (operador == "+"){
        var result = parseInt(valor1) + parseInt(valor2)
    } else if (operador == "-") {
        var result = parseInt(valor1) - parseInt(valor2)
    } else if (operador == "/") {
        var result = parseInt(valor1) / parseInt(valor2)
    } else if (operador == "*") {
        var result = parseInt(valor1) * parseInt(valor2)
    }
    return result
}

function calcular () {
    const intro = document.getElementById('intro').value;
    const introSplit = intro.split(operador);
    const num1 = introSplit[0];
    const num2 = introSplit[1];
    
    resultado.innerHTML = executar(num1, num2)
}