const { Sequelize, Model } = require('sequelize');
const bcrypt = require('bcrypt');

module.exports = class User extends Model {
    static init(sequelize) {
        super.init({
            nome: {
                type: Sequelize.STRING,
                defaultValue: '',
                validate: {
                    len: {
                        args: [3, 255],
                        msg: 'O campo nome precisa ter no mínimo 3 caracteres',
                    },
                },
            },
            email: {
                type: Sequelize.STRING,
                defaultValue: '',
                unique: {
                    msg: 'E-mail já registrado',
                },
                validate: {
                    isEmail: {
                        msg: 'E-mail inválido',
                    },
                },
            },
            numero: {
                type: Sequelize.INTEGER,
                defaultValue: '',
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
            if (user.password) user.password_hash = await bcrypt.hash(user.password, 8);
        });
        return this;
    }
};
