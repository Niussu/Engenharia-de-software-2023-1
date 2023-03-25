let verificadorProfessorAluno;
function apresentarProfessorInfo() {
    let div = document.getElementById("div-professor");
    let div2 = document.getElementById("div-aluno");
    div.style.display = "block";
    div2.style.display = "none";
    verificadorProfessorAluno = 1;
}
function apresentarAlunoInfo() {
    let div = document.getElementById("div-aluno");
    let div2 = document.getElementById("div-professor");
    div.style.display = "block";
    div2.style.display = "none";
    verificadorProfessorAluno = 2;
}
function Pessoa() {
    this.nome;
    this.prototype.setNome = function (vNome) {
        if (vNome) {
            this.nome = vNome;
        }
    }
    this.prototype.getNome = function () {
        return this.nome;
    }

    this.email;
    this.prototype.setEmail = function (vEmail) {
        if (vEmail) {
            this.email = vEmail;
        }
    }
    this.prototype.getEmail = function () {
        return this.email;
    }

    this.data_nascimento;
    this.prototype.setData_nascimento = function (vData_nascimento) {
        if (vData_nascimento) {
            this.data_nascimento = vData_nascimento;
        }
    }
    this.prototype.getData_nascimento = function () {
        return this.data_nascimento;
    }

    this.telefone_celular;
    this.prototype.setTelefone_celular = function (vTelefone_celular) {
        if (vTelefone_celular) {
            this.telefone_celular = vTelefone_celular;
        }
    }
    this.prototype.getTelefone_celular = function () {
        return this.telefone_celular;
    }

    this.telefone_fixo;
    this.prototype.setTelefone_fixo = function (vTelefone_fixo) {
        if (vTelefone_fixo) {
            this.telefone_fixo = vTelefone_fixo;
        }
    }
    this.prototype.getTelefone_fixo = function () {
        return this.telefone_fixo;
    }
}
function Limpar() {
    let div = document.getElementById("div-professor");
    let div2 = document.getElementById("div-aluno");
    div.style.display = "none";
    div2.style.display = "none";
}
function Aluno () {
    Pessoa.call(this);
    this.nomeCurso;
    this.setNomeCurso = function (vNomeCurso) {
        if (vNomeCurso) {
            this.nomeCurso = vNomeCurso;
        }
    }
    this.getNomeCurso = function () {
        return this.nomeCurso;
    }
    this.matriculaAluno;
    this.setMatriculaAluno = function (vMatriculaAluno) {
        if (vMatriculaAluno) {
            this.matriculaAluno = vMatriculaAluno;
        }
    }
    this.getMatriculaAluno = function () {
        return this.matriculaAluno;
    }
}
function Professor() {
    Pessoa.call(this);
    this.areaAtuacao;
    this.setAreaAtuacao = function (vAreaAtuacao) {
        if (vAreaAtuacao) {
            this.areaAtuacao = vAreaAtuacao;
        }
    }
    this.getAreaAtuacao = function () {
        return this.areaAtuacao;
    }
    this.matriculaProfessor;
    this.setMatriculaProfessor = function (vMatriculaProfessor) {
        if (vMatriculaProfessor) {
            this.matriculaProfessor = vMatriculaProfessor;
        }
    }
    this.getMatriculaProfessor = function () {
        return this.vMatriculaProfessor;
    }

    this.lattes;
    this.setLattes = function (vLattes) {
        if (vLattes) {
            this.lattes = vLattes;
        }
    }
    this.getLattes = function () {
        return this.lattes;
    }
}
function Salvar() {
    let nome = document.getElementById("campo-nome").value;
    let email = document.getElementById("campo-email").value;
    let data_nascimento = document.getElementById("campo-data").value;
    let telefone_celular = document.getElementById("campo-telefone-celular").value;
    let telefone_fixo = document.getElementById("campo-telefone-fixo").value;
    if (verificadorProfessorAluno == 1) {
        let area_atuacao = document.getElementById("campo-area-atuacao").value;
        let matricula_professor = document.getElementById("campo-matricula-professor").value;
        let lattes = document.getElementById("campo-lattes").value;
        let professor = new Professor();
        professor.setNome(nome);
        professor.setEmail(email);
        professor.setData_nascimento(data_nascimento);
        professor.setTelefone_celular(telefone_celular);
        professor.setTelefone_fixo(telefone_fixo);
        professor.setAreaAtuacao(area_atuacao);
        professor.setMatriculaProfessor(matricula_professor);
        professor.setLattes(lattes);

    }
    else if(verificadorProfessorAluno == 2){
        let nome_curso = document.getElementById("campo-nome-curso").value;
        let matricula_aluno = document.getElementById("campo-matricula-aluno").value;
        let aluno = new Aluno();
        aluno.setNome(nome);
        aluno.setEmail(email);
        aluno.setData_nascimento(data_nascimento);
        aluno.setTelefone_celular(telefone_celular);
        aluno.setTelefone_fixo(telefone_fixo);
        aluno.setNomeCurso(nome_curso);
        aluno.setMatriculaAluno(matricula_aluno);
        alert("deu certo!!")
    }
    else{
        alert("Por favor, selecione uma opção entre aluno e professor!!!")
    }
    verificadorProfessorAluno = 0;
}



