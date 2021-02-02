'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addIndex('cities', ['name'], {
      type: 'FULLTEXT',
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeIndex('cities', ['name']);
  }
};
