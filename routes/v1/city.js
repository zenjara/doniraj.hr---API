const express = require('express')
const router = express.Router()
const cityController = require('../../app/controllers/city');


/**
 * @swagger
 * /api/v1/cities:
 *   get:
 *     summary: Retrieve a list of Cities.
 *     description: Retrieve a list of paginated Cities.
 *     responses:
 *       200:
 *         description: A list of cities.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 cities:
 *                   type: object
 *                   properties:
 *                     previousPage:
 *                       type: integer
 *                       example: null
 *                     currentPage:
 *                       type: integer
 *                       example: 1
 *                     nextPage:
 *                       type: integer
 *                       example: 2
 *                     total:
 *                       type: integer
 *                       example: 20
 *                     limit:
 *                       type: integer
 *                       example: 10
 *                     data:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           id:
 *                             type: integer
 *                             description: City ID.
 *                             example: 1
 *                           name:
 *                             type: string
 *                             escription: City name.
 *                             example: Split
 */
router.get('/', cityController.index)

module.exports = router
