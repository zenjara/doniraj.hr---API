const Organization = require('../models').Organization;
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

        // add the order parameters to the order
        if (order_by && order_direction) {
            order.push([order_by, order_direction]);
        } else {
            order.push(['highlighted', 'DESC']);
            order.push(['name', 'ASC']);
        }

        let organizations = await paginate(Organization, page, limit, search, order, 'city');

        return res.status(200).send({
            organizations: organizations
        })
    },

    async create(req, res) {
        try {
            const organization = await Organization.create(req.body);
            return res.status(201).send({organization})
        } catch (error) {
            return res.status(400).send({error: error.message})
        }
    },

};
