function verificaPrimo(dado){
    let divisores = 0;
    let resposta = "";
    for (let contador = 1; contador <= dado; contador++) {
        if (dado % contador == 0) {
            divisores++;
        }
    }
    if (divisores == 2) {
        resposta = "é primo"
    }
    else{
        resposta = "não é primo"
    }
    return resposta;
}

let dado = prompt("Digite um número:");
parseInt(dado);

while(dado < 0){
    alert("Valor inválido, digite outro número")
    dado = prompt("Digite um número:");
    parseInt(dado);
}
let numero_verificado = verificaPrimo(dado);
alert("O número " + numero_verificado);