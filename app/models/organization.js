'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Organization extends Model {
        static associate(models) {
            Organization.belongsTo(models.City, {
                foreignKey: 'city_id',
                as: 'city'
            });
        }
    };
    Organization.init({
        name: {type: DataTypes.STRING, allowNull: false},
        description: DataTypes.TEXT,
        address: DataTypes.STRING,
        telephone: DataTypes.STRING,
        iban: DataTypes.STRING,
        website: DataTypes.STRING,
        swift: DataTypes.STRING,
        verified: {type: DataTypes.BOOLEAN, defaultValue: false},
        archived: {type: DataTypes.BOOLEAN, defaultValue: false},
        highlighted: {type: DataTypes.BOOLEAN, defaultValue: false}
    }, {
        defaultScope: {
            attributes: {exclude: ['city_id']},
        },
        scopes: {
            verified: {where: {verified: true}},
            unverified: {where: {verified: false}},
            archived: {where: {archived: true}},
            unverified_and_not_archived: {where: {verified: false, archived: false}},
        },
        sequelize,
        tableName: 'organizations',
        modelName: 'Organization',
    });
    return Organization;
};

