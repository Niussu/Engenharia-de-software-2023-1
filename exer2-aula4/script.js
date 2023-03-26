let lista = document.getElementById("lista")
function adicionar() {
    let item_adicionar = document.createElement("p");
    let valor_item_adicionar = document.getElementById("caixa-texto").value;
    item_adicionar.innerHTML = valor_item_adicionar + "<button onclick='subir(this.parentNode)' class='b-resp'>^</button><button onclick='descer(this.parentNode)' class='b-resp'>v</button> <button onclick='deletar(this.parentNode)' class='b-resp'>x</button>";
    lista.appendChild(item_adicionar)
    valor_item_adicionar = "";
}
function descer(item) {
    let prox_no = item.nextSibling;
    if (prox_no) {
        lista.insertBefore(prox_no, item);
    }
}
function subir(item) {
    let ant_no = item.previousSibling;
    if (ant_no) {
        lista.insertBefore(item, ant_no)
    }
}
function deletar(item) {
    lista.removeChild(item);
}