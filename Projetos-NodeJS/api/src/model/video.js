const { Sequelize, Model } = require('sequelize');

module.exports = class Videos extends Model {
  static init(sequelize) {
    super.init({
      title: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          len: {
            args: [3, 255],
            msg: 'O Campo de título precisa ter no mínimo 3 caracteres',
          },
        },
      },
      description: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
          len: {
            args: [3, 255],
            msg: 'O Campo de description precisa ter no mínimo 3 caracteres',
          },
        },
      },
      duration: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
          isNumeric: {
            msg: 'O campo duration necessita de numeros válidos',
          },
        },
      },
    }, {
      sequelize,
    });
    return this;
  }
}
