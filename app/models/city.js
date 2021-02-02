'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class City extends Model {
        static associate(models) {
            City.hasMany(models.Organization, {
                foreignKey: 'city_id',
                as: 'organizations',
            });
        }
    };
    City.init({
        name: DataTypes.STRING
    }, {
        defaultScope: {
            attributes: {exclude: ['created_at', 'updated_at']}
        },
        sequelize,
        tableName: 'cities',
        modelName: 'City',
    });
    return City;
};
