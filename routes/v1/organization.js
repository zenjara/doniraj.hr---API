const express = require('express')
const router = express.Router()
const organizationController = require('../../app/controllers/organization');

/**
 * @swagger
 * /api/v1/organizations:
 *   get:
 *     summary: Retrieve a list of Organizations.
 *     description: Retrieve a list of paginated Organizations.
 *     responses:
 *       200:
 *         description: A list of organizations.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 organizations:
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
 *                             description: The organization ID.
 *                             example: 1
 *                           name:
 *                             type: string
 *                             description: The organization's name.
 *                             example: Udruga Srce
 *                           description:
 *                             type: string
 *                             description: The organization's description.
 *                             example: Organization is helpin people in need.
 *                           address:
 *                             type: string
 *                             description: The organization's address.
 *                             example: Helpers Street 911
 *                           telephone:
 *                             type: string
 *                             description: The organization's telephone.
 *                             example: 01/111-333
 *                           iban:
 *                             type: string
 *                             description: The organization's international bank number.
 *                             example: HR6523400091110307522
 *                           website:
 *                             type: string
 *                             description: The organization's website.
 *                             example: www.website.com
 *                           swift:
 *                             type: string
 *                             description: The organization's swift code.
 *                             example: HPBZHR2X
 *                           verified:
 *                             type: boolean
 *                             description: Flag that shows if organization is verified.
 *                             example: true
 *                           archived:
 *                             type: string
 *                             description: Flag that shows if organization is archived.
 *                             example: false
 *                           highlighted:
 *                             type: string
 *                             description: Flag that shows if organization is highlighted to be displayed first.
 *                             example: false
 *                           created_at:
 *                             type: string
 *                             description: created at date time.
 *                             example: 2021-02-01T15:33:47.262Z
 *                           updated_at:
 *                             type: string
 *                             description: updated at date time
 *                             example: 2021-02-01T15:33:47.262Z
 *                           city:
 *                             type: object
 *                             properties:
 *                               id:
 *                                 type: Integer
 *                                 description: City ID.
 *                                 example: 1
 *                               name:
 *                                 type: string
 *                                 description: City name.
 *                                 example: Split
 */
router.get('/', organizationController.index)



/**
 * @swagger
 * /api/v1/organizations:
 *   post:
 *     summary: Create an Organization
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Organization name
 *                 example: 1
 *               city_id:
 *                 type: integer
 *                 description: ID of a city that organization belongs to
 *                 example: 2
 *             required:
 *               - name
 *               - city_id
 *     responses:
 *       201:
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                     id:
 *                       type: integer
 *                       description: The organization ID.
 *                       example: 1
 *                     name:
 *                       type: string
 *                       description: The organization's name.
 *                       example: Udruga Srce
 *                     description:
 *                       type: string
 *                       description: The organization's description.
 *                       example: Organization is helpin people in need.
 *                     address:
 *                       type: string
 *                       description: The organization's address.
 *                       example: Helpers Street 911
 *                     telephone:
 *                       type: string
 *                       description: The organization's telephone.
 *                       example: 01/111-333
 *                     iban:
 *                       type: string
 *                       description: The organization's international bank number.
 *                       example: HR6523400091110307522
 *                     website:
 *                       type: string
 *                       description: The organization's website.
 *                       example: www.website.com
 *                     swift:
 *                       type: string
 *                       description: The organization's swift code.
 *                       example: HPBZHR2X
 *                     verified:
 *                       type: boolean
 *                       description: Flag that shows if organization is verified.
 *                       example: true
 *                     archived:
 *                       type: string
 *                       description: Flag that shows if organization is archived.
 *                       example: false
 *                     highlighted:
 *                       type: string
 *                       description: Flag that shows if organization is highlighted to be displayed first.
 *                       example: false
 *                     created_at:
 *                       type: string
 *                       description: created at date time.
 *                       example: 2021-02-01T15:33:47.262Z
 *                     updated_at:
 *                       type: string
 *                       description: updated at date time
 *                       example: 2021-02-01T15:33:47.262Z
 *                     city:
 *                       type: object
 *                       properties:
 *                         id:
 *                           type: Integer
 *                           description: City ID.
 *                           example: 1
 *                         name:
 *                           type: string
 *                           description: City name.
 *                           example: Split
 */
router.post('/', organizationController.create)

module.exports = router
