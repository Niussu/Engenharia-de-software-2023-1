let vetor = [];

        function acrescentarDadosNoVetor() {
            let palavra = document.getElementById("palavra");
            let palavraValor = palavra.value;
            if (palavraValor != "") {
                vetor.push(palavraValor);
                palavra.value = "";
            }
            exibirValoresDoVetor();
        }
        exibirValoresDoVetor();
        function exibirValoresDoVetor() {
            vetor.sort();
            let lista = document.getElementById("lista");
            lista.innerText = "";
            vetor.forEach(function(valor) {
                    let item = document.createElement('li');
                    item.innerText = valor;
                    lista.appendChild(item);
                });           
        }