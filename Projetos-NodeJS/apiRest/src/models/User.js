import Sequelize, { Model } from 'sequelize';
import bcryptjs from 'bcryptjs';

export default class User extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'E-mail já registrado',
        },
        validate: {
          len: {
            args: [3, 255],
            msg: 'O nome precisa ter no mínimo 3 caracteres',
          },
        },
      },
      password_hash: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      password: {
        type: Sequelize.VIRTUAL,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 20],
            msg: 'campo senha precisa ter no mínimo 3 caracteres',
          },
        },
      },
    }, {
      sequelize,
    });

    this.addHook('beforeSave', async (user) => {
      user.password_hash = await bcryptjs.hash(user.password, 8);
    });
    return this;
  }
}
