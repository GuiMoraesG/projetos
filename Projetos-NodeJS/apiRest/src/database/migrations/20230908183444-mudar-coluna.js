module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.changeColumn('fotoAluno', 'filename', {
    type: Sequelize.STRING,
    allowNull: false,
    unique: false,
  }),

  down: async (queryInterface) => { },
};
