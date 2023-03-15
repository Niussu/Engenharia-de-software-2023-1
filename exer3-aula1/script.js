function verificaParImpar(dado) {
    let numero_verificado = "";
    if (dado % 2 == 0) {
        numero_verificado = "par";
    }
    else{
        numero_verificado = "impar";
    }
    return numero_verificado;
}

let dado = prompt("Digite um número:");
parseInt(dado);

while(dado <= 0){
    alert("Valor inválido, digite outro número")
    dado = prompt("Digite um número:");
    parseInt(dado);
}
let resposta = verificaParImpar(dado);
alert("O número é " + resposta);