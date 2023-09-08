import Sequelize, { Model } from 'sequelize';

export default class Fotoaluno extends Model {
  static init(sequelize) {
    super.init({
      originalname: {
        type: Sequelize.STRING,
        validate: {
          notEmpty: {
            msg: 'Este campo não pode estar vazio',
          },
        },
      },
      filename: {
        type: Sequelize.STRING,
        validate: {
          notEmpty: {
            msg: 'Este campo não pode estar vazio',
          },
        },
      },
    }, {
      sequelize,
    });
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Aluno, { foreignKey: 'aluno_id' });
  }
}
