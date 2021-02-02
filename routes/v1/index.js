const express = require('express')
const router = express.Router()
const cityController = require('../../app/controllers/city');
const organizationController = require('../../app/controllers/organization');

// # City
router.get('/cities', cityController.index)

// # Organization
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
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         description: The organization ID.
 *                         example: 1
 *                       name:
 *                         type: string
 *                         description: The organization's name.
 *                         example: Udruga Srce
 *                       description:
 *                         type: string
 *                         description: The organization's description.
 *                         example: Organization is helpin people in need.
 *                       address:
 *                         type: string
 *                         description: The organization's address.
 *                         example: Helpers Street 911
 *                       telephone:
 *                         type: string
 *                         description: The organization's telephone.
 *                         example: 01/111-333
 *                       iban:
 *                         type: string
 *                         description: The organization's international bank number.
 *                         example: HR6523400091110307522
 *                       website:
 *                         type: string
 *                         description: The organization's website.
 *                         example: www.website.com
 *                       swift:
 *                         type: string
 *                         description: The organization's swift code.
 *                         example: HPBZHR2X
 *                       verified:
 *                         type: boolean
 *                         description: Flag that shows if organization is verified.
 *                         example: true
 *                       archived:
 *                         type: string
 *                         description: Flag that shows if organization is archived.
 *                         example: false
 *                       highlighted:
 *                         type: string
 *                         description: Flag that shows if organization is highlighted to be displayed first.
 *                         example: false
 *                       created_at:
 *                         type: string
 *                         description: created at date time.
 *                         example: 2021-02-01T15:33:47.262Z
 *                       updated_at:
 *                         type: string
 *                         description: updated at date time
 *                         example: 2021-02-01T15:33:47.262Z
 *                       city:
 *                         type: object
 *                         properties:
 *                           id:
 *                             type: Integer
 *                             description: City ID.
 *                             example: 1
 *                           name:
 *                             type: string
 *                             description: City name.
 *                             example: Split
 */
router.get('/organizations', organizationController.index)


router.post('/organizations', organizationController.create)


module.exports = router
