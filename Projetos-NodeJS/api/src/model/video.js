const { Sequelize, Model } = require('sequelize');

module.exports = class Videos extends Model {
  static init(sequelize) {
    super.init({
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      duration: {
        type: Sequelize.INTEGER,
        allowNull: false,
      }
    }, {
      sequelize,
    });
    return this;
  }
}
