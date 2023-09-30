function calcularMedia() {
    var valor1 = parseFloat(document.getElementById("Numero1").value);
    //pega o valor solicitado pelo usuario referente a primerira nota;
    var valor2 = parseFloat(document.getElementById("Numero2").value);
    //valor solicitado pelo usuario referente a segunda nota;
    var media = (valor1 + valor2) / 2;
    //variavel responsavel por calcular a media aritrimetrica

    if (media >= 4 || media < 7) {
        var ap = document.getElementById("Status");
        ap.textContent ="O aluno foi para a recuperação com a media " + media.toFixed(2);
  
        function MediaREc() {
            var valor3 = parseFloat(document.getElementById("Numero3").value);
            var MediaR = (valor3 + media)/2;

            if (MediaR >= 5) { // Corrigido para usar MediaR em vez de MediaREc
                var Nr = document.getElementById("NotaRc");
                Nr.textContent = "O aluno foi aprovado na recuperação com a média de " + MediaR.toFixed(2);
            } else {
                var Nrr = document.getElementById("NotaRc");
                Nrr.textContent = "O aluno foi reprovado com a média de " + MediaR.toFixed(2);
            }
        }
    } else if (media < 4) {
        var rp = document.getElementById("Status");
        rp.textContent = "O aluno foi reprovado com a média " + media.toFixed(2);
    } else if (media >= 7) { // Corrigido para usar >= 7 em vez de > 7
        var apr = document.getElementById("Status");
        apr.textContent ="O aluno foi aprovado com média de " + media.toFixed(2);
    }
    var resultadosElement = document.getElementById("Resultados");
    resultadosElement.textContent = "O valor da média é de " + media.toFixed(2);
}
