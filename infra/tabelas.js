class Tabelas {
  init(conexao) {
    this.conexao = conexao
    this.criarCadastros()
  }

  criarCadastros() {
    const sql = `CREATE TABLE IF NOT EXISTS Usuario (id int NOT NULL AUTO_INCREMENT, nome varchar(100) NOT NULL, matricula varchar(50) NOT NULL, telefone varchar(50), email varchar(50), cpf varchar(11) NOT NULL, dataNascimento datetime NOT NULL, PRIMARY KEY(id))`

    this.conexao.query(sql, (erro) => {
      if(erro) {
        console.log(erro)
      } else {
        console.log('Tabela Usuario criada com sucesso.')
      }
    })
  }
}

module.exports = new Tabelas