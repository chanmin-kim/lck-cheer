'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cheer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Cheer.init({
    nickname: DataTypes.STRING,
    comment: DataTypes.STRING,
    team: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Cheer',
  });
  return Cheer;
};

