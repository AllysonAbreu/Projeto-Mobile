'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Pessoas', [
      {     
				nome: 'Ana Souza',
				tipo: 'estudante',
				ativo: true,				
				email: 'ana@ana.com',
				senha: 123123132,
				data_nascimento: new Date("12/12/1998"),				
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				nome: 'Marcos Cintra',
				tipo: 'estudante',
				ativo: true,
				email: 'marcos@marcos.com',		
				senha: 321321321,
				data_nascimento: new Date("12/12/1970"),
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				nome: 'Felipe Cardoso',
				tipo: 'estudante',
				ativo: true,
				email: 'felipe@felipe.com',
				senha: 369369369,
				data_nascimento: new Date("12/12/1950"),				
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				nome: 'Sandra Gomes',
				tipo: 'estudante',
				ativo: false,
				email: 'sandra@sandra.com',
				senha: 963963963,
				data_nascimento: new Date("12/12/1970"),
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				nome: 'Paula Morais',
				tipo: 'docente',
				ativo: true,
				email: 'paula@paula.com',
				senha: 987987987,
				data_nascimento: new Date("12/12/1987"),				
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				nome: 'Sergio Lopes',
				tipo: 'docente',
				ativo: true,
				email: 'sergio@sergio.com',
				senha: 789789789,
				data_nascimento: new Date("12/12/1987"),
				createdAt: new Date(),
				updatedAt: new Date()
			}
   ], {}); 
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Pessoas', null, {});    
  }
};
