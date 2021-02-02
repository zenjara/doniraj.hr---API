const City = require('../models').City;
const {paginate} = require('../services/pagination')
const {Op} = require('sequelize')

module.exports = {
    async index(req, res) {
        const {q, page, limit, order_by, order_direction} = req.query;
        let search = {};
        let order = [];

        if (q) {
            search = {
                where: {
                    name: {
                        [Op.iLike]: `%${q}%`
                    }
                }
            };
        }

        if (order_by && order_direction) {
            order.push([order_by, order_direction]);
        } else {
            order.push(['name', 'ASC']);
        }

        let cities = await paginate(City, page, limit, search, order);

        return res.status(200).send({
            cities: cities
        })
    },
};
