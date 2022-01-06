class Tabelas {
  init(conexao) {
    this.conexao = conexao
    this.criaUsuario()
    this.criaTurma()
    this.criaPost()
    this.criaMaterial()
  }

  criaUsuario() {
    const sql = `CREATE TABLE IF NOT EXISTS Usuario (id int NOT NULL AUTO_INCREMENT, nome varchar(100) NOT NULL, matricula varchar(50) NOT NULL, telefone varchar(50), email varchar(50), cpf varchar(11) NOT NULL, dataNascimento datetime NOT NULL, PRIMARY KEY(id))`

    this.conexao.query(sql, (erro) => {
      if(erro) {
        console.log(erro)
      } else {
        console.log('Tabela Usuario criado com sucesso.')
      }
    })
  }

  criaTurma() {
    const sql = `CREATE TABLE IF NOT EXISTS Turma (codigo int NOT NULL AUTO_INCREMENT, nome varchar(50) NOT NULL, disciplina varchar(50) NOT NULL, descricao varchar(200), dataCriacao datetime NOT NULL, PRIMARY KEY(codigo))`

    this.conexao.query(sql, (erro) => {
      if(erro) {
        console.log(erro)
      } else {
        console.log('Tabela Turma criada com sucesso.')
      }
    })
  }

  criaPost() {
    const sql = `CREATE TABLE IF NOT EXISTS Post (codigo int NOT NULL AUTO_INCREMENT, titulo varchar(50) NOT NULL, dataCriacao datetime NOT NULL, conteudo text, PRIMARY KEY(codigo))`

    this.conexao.query(sql, (erro) => {
      if(erro) {
        console.log(erro)
      } else {
        console.log('Tabela Post criada com sucesso.')
      }
    })
  }

  criaMaterial() {
    const sql = `CREATE TABLE IF NOT EXISTS Material (codigo int NOT NULL AUTO_INCREMENT, titulo varchar(50) NOT NULL, descricao varchar(200) NOT NULL, nota int NOT NULL, idTurma int NOT NULL, CONSTRAINT fk_idTurma FOREIGN KEY (idTurma) REFERENCES Turma (codigo), PRIMARY KEY(codigo))`

    this.conexao.query(sql, (erro) => {
      if(erro) {
        console.log(erro)
      } else {
        console.log('Tabela Material criada com sucesso.')
      }
    })
  }
}

module.exports = new Tabelas