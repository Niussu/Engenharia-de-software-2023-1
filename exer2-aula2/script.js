mostrarHora();

function mostrarHora() {
    let data_atual = new Date();

    novo_tempo = data_atual.getHours() + ":" + data_atual.getMinutes() + ":" + data_atual.getSeconds();

    document.getElementById("relogio").innerHTML = novo_tempo;

        setTimeout(mostrarHora, 1000);
}