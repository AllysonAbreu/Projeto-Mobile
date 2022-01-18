'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Turmas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Turmas.hasMany(models.Matriculas, {
        foreignKey: 'turma_id'
      })      
      Turmas.hasMany(models.Materiais, {
        foreignKey: 'materiais_id'
      })
      Turmas.belongsTo(models.Pessoas, {
        foreignKey: 'docente_id'
      })
    }
  }
  Turmas.init({
    nome: DataTypes.STRING,
    disciplina: DataTypes.STRING,
    descricao: DataTypes.TEXT,    
  }, {
    sequelize,
    modelName: 'Turmas',
  });
  return Turmas;
};