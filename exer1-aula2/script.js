let data = new Date();
        let dia_mes = data.getDate();
        let mes = data.getMonth();
        let dia_semana = data.getDay();
        let ano = data.getFullYear();

        let vet_mes = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
        let vet_dia_semana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];

        document.write("<h1>"+vet_dia_semana[dia_semana]+", "+dia_mes+" de "+vet_mes[mes]+ " de "+ano+"</h1>");