function fatorial(dado) {
    let resultado = 1;
    for (let index = 1; index <= dado; index++) {
        resultado *= index;
    }
    return resultado;
}

let dado = prompt("Digite um número:");
parseInt(dado);

while(dado <= 0){
    alert("Valor inválido, digite outro número")
    dado = prompt("Digite um número:");
    parseInt(dado);
}
let apresentar = fatorial(dado);
alert("O resultado é " + apresentar)