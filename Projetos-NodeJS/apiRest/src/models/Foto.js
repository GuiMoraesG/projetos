import Sequelize, { Model } from 'sequelize';
import appConfig from '../config/appConfig';

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
      url: {
        type: Sequelize.VIRTUAL,
        get() {
          return `${appConfig.url}/images/${this.getDataValue('filename')}`;
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
