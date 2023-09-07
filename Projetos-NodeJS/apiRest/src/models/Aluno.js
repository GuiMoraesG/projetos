import Sequelize, { Model } from 'sequelize';

export default class Aluno extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        validate: {
          len: {
            args: [3, 255],
            msg: 'O campo nome precisa conter no mínimo 3 caracteres',
          },
        },
      },
      sobrenome: {
        type: Sequelize.STRING,
        validate: {
          len: {
            args: [3, 255],
            msg: 'O campo Sobrenome precisa conter no mínimo 3 caracteres',
          },
        },
      },
      email: {
        type: Sequelize.STRING,
        unique: {
          msg: 'Email já registrado',
        },
        validate: {
          isEmail: {
            msg: 'E-mail inválido',
          },
        },
      },
      idade: {
        type: Sequelize.INTEGER,
        validate: {
          isNumeric: {
            msg: 'O campo idade precisa ser um número válido',
          },
        },
      },
      peso: {
        type: Sequelize.FLOAT,
        validate: {
          isNumeric: {
            msg: 'O campo peso precisa ser um número válido',
          },
        },
      },
      altura: {
        type: Sequelize.FLOAT,
        validate: {
          isNumeric: {
            msg: 'O campo altura precisa ser um número válido',
          },
        },
      },
    }, {
      sequelize,
    });
    return this;
  }
}
