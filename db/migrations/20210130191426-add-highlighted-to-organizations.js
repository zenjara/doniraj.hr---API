'use strict';

module.exports = {
    up: async (queryInterface, DataTypes, Sequelize) => {
        await queryInterface.addColumn('organizations', 'highlighted', {
            type: DataTypes.BOOLEAN, defaultValue: false
        });
    },

    down: async (queryInterface, DataTypes, Sequelize) => {
        await queryInterface.removeColumn('organizations', 'highlighted', {
            type: DataTypes.BOOLEAN, defaultValue: false
        });
    }
};
