function Carro() {
    this.marca;
    this.setMarca = function (vMarca) {
        this.marca = vMarca;
    }
    this.getMarca = function() {
        return this.marca;
    }

    this.modelo;
    this.setModelo = function(vModelo) {
        this.modelo = vModelo;
    }
    this.getModelo = function() {
        return this.modelo;
    }

    this.ano;
    this.setAno = function(vAno) {
        this.ano = vAno;
    }
    this.getAno = function() {
        return this.ano;
    }

    this.cor;
    this.setCor = function (vCor) {
        this.cor = vCor;
    }
    this.getCor = function () {
        return this.cor;
    }

    this.kilometragem;
    this.setKilometragem = function (vKilometragem) {
        this.kilometragem = vKilometragem;
    }
    this.getKilometragem = function () {
        return this.kilometragem;
    }

    this.valor_fipe;
    this.setValor_fipe = function (vValor_fipe) {
        this.valor_fipe = vValor_fipe;
    }
    this.getValor_fipe = function () {
        return this.valor_fipe;
    }

    this.anosUtilizacao = function() {
        let data = new Date();
        let anoAtual = data.getFullYear();
        return anoAtual - this.ano;
    }

    this.valorMercado = function() {
        let km_ano = this.kilometragem / this.anosUtilizacao();
        let valor_mercado;
        if (km_ano <= 30000) {
            valor_mercado = this.valor_fipe * 1.1;
        } else if (km_por_ano > 30000 && km_por_ano <= 50000) {
            valor_mercado = this.valor_fipe;
        } else {
            valor_mercado = this.valor_fipe * 0.9;
        }
        return valor_mercado.toFixed(2);
    }
}

function salvarCarro() {
    let marca = document.getElementById("marca-carro").value;
    let modelo = document.getElementById("modelo-carro").value;
    let cor = document.getElementById("cor-carro").value;
    let ano = document.getElementById("ano-carro").value;
    let kilometragem = document.getElementById("kilometragem-carro").value;
    let valor_fipe = document.getElementById("valor-fipe").value;

    let carroNovo = new Carro();
    carroNovo.setAno(ano);
    carroNovo.setModelo(modelo);
    carroNovo.setCor(cor);
    carroNovo.setKilometragem(kilometragem);
    carroNovo.setMarca(marca);
    carroNovo.setValor_fipe(valor_fipe);
    mostrarInfoCarro(carroNovo);
}

function mostrarInfoCarro(carroNovo) {
    document.getElementById("resultado").innerHTML = "Anos de utilização: " + carroNovo.anosUtilizacao()
    + "<br>" + "Valor de mercado: " + carroNovo.valorMercado();
    return false;
}

function teste(){
    return false;
}