'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Materiais extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Materiais.belongsTo(models.Turmas, {
        foreignKey:'turmas_id'
      })
      Materiais.belongsTo(models.Postagens, {
        foreignKey: 'postagem_id'
      })
    }
  }
  Materiais.init({
    titulo: DataTypes.STRING,
    descricao: DataTypes.TEXT,
    tipo: DataTypes.STRING,
    nota: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Materiais',
  });
  return Materiais;
};