let dado = prompt("Escreva algo: ");
        if (confirm("Deseja verificar o tipo de dado?")) {
            if (Number(dado)) {
                document.write("É um número")
            }
            else if(dado.toUpperCase() == "TRUE" || dado.toUpperCase() == "FALSE"){
                document.write("É um booleano")
            }
            else if(dado.length == 0){
                document.write("Indefinido")
            }
            else{
                document.write("É uma string")
            }
        }
        else{
            alert("Obrigado por visitar esta página!")
        }