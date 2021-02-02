'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addIndex('organizations', ['name', 'city_id'], {
      type: 'FULLTEXT',
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeIndex('organizations', ['name', 'city_id']);
  }
};
