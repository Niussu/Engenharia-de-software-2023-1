document.getElementById("botao-verificar").addEventListener("click", verificarPalindromo);

        function verificarPalindromo() {
            let palavra = document.getElementById("campo-palavra").value;
            let aux = "";

            for (let index = palavra.length - 1 ; index >= 0; index--) {
                aux += palavra[index];
            }
            if (palavra == aux) {alert("É um palíndromo!")}
            else{alert("Não é um palíndromo!")}
        }