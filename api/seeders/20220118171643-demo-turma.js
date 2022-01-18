'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Turmas', [
    {
      nome: 'Terceiro Ano - B',
      disciplina: 'Geografia',
      descricao: 'Turma de geografia',
      docente_id: 6,
      createdAt: new Date(),
      updatedAt: new Date()				 
    },
    {
      nome: 'Segundo Ano - A',
      disciplina: 'Geografia',
      descricao: 'Turma de geografia',
      docente_id: 6,
      createdAt: new Date(),
      updatedAt: new Date()		
    },
    {
      nome: 'Primeiro Ano - C',
      disciplina: 'Geografia',
      descricao: 'Turma de geografia',
      docente_id: 6,
      createdAt: new Date(),
      updatedAt: new Date()			
      },
    {
      nome: 'Terceiro Ano - B',
      disciplina: 'Português',
      descricao: 'Turma de português',
      docente_id: 5,
      createdAt: new Date(),
      updatedAt: new Date()	
    },
    {
      nome: 'Segundo Ano - A',
      disciplina: 'Português',
      descricao: 'Turma de português',
      docente_id: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: 'Primeiro Ano - C',
      disciplina: 'Português',
      descricao: 'Turma de português',
      docente_id: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Turmas', null, {});    
  }
};
