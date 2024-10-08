function calcularFibonacci() {
    var valor = document.getElementById("valor").value;
    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = ""; // Limpar resultado anterior

    if (valor <= 0) {
        resultadoDiv.innerHTML = "Por favor, insira um número maior que 0.";
        return;
    }

    var Ant = 0;
    var Atual = 1;
    var cont = 1;

    resultadoDiv.innerHTML += Ant + "<br>";
    resultadoDiv.innerHTML += Atual + "<br>";

    while (cont < valor) {
        var NumAux = Ant + Atual;
        resultadoDiv.innerHTML += NumAux + "<br>";
        Ant = Atual;
        Atual = NumAux;
        cont++;
    }
}
