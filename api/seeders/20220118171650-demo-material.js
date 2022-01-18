'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Materiais', [
    {
      titulo: 'Atividade avaliativa - 2 Bimestre',
      descricao: 'Atividade que corresponderá à primeira nota do bimestra da disciplina',
      tipo: 'avaliação',
      nota:10,
      turmas_id: 1,
      postagem_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      titulo: 'Atividade avaliativa - 2 Bimestre',
      descricao: 'Atividade que corresponderá à segunda nota do bimestra da disciplina',
      tipo: 'avaliação',
      nota:10,
      turmas_id: 2,
      postagem_id: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      titulo: 'Atividade para casa',
      descricao: 'Lista para resolver em casa',
      tipo: 'dever de casa',
      nota:0,
      turmas_id: 3,
      postagem_id: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      titulo: 'Atividade para casa',
      descricao: 'Lista para resolver em casa',
      tipo: 'dever de casa',
      nota:0,
      turmas_id: 2,
      postagem_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Materiais', null, {});
  }
};
