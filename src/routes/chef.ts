import { Router } from 'express'
import { ChefController } from '../controllers/chef'

export const chefRouter = Router()
const chefController = new ChefController()

/**
 * @openapi
 * tags:
 *   name: Chef
 *   description: Operations related to chefs
 */

/**
 * @openapi
 * /chef:
 *   post:
 *     tags:
 *       - Chef
 *     summary: Create a new chef
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Chef'
 *     responses:
 *       '201':
 *         description: Created
 *       '400':
 *         description: Bad request
 *       '500':
 *         description: Internal server error
 */
chefRouter.post('/', chefController.createChef)

/**
 * @openapi
 * /chef:
 *   get:
 *     tags:
 *       - Chef
 *     summary: Get all chefs
 *     responses:
 *       '200':
 *         description: A list of chefs
 *       '400':
 *         description: Bad request
 *       '500':
 *         description: Internal server error
 */
chefRouter.get('/', chefController.getChef)

/**
 * @openapi
 * /chef/{id}:
 *   get:
 *     tags:
 *       - Chef
 *     summary: Get a chef by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: A chef object
 *       '400':
 *         description: Bad request
 *       '404':
 *         description: Chef not found
 *       '500':
 *         description: Internal server error
 */
chefRouter.get('/:id', chefController.getChefById)

/**
 * @openapi
 * /chef/{id}:
 *   delete:
 *     tags:
 *       - Chef
 *     summary: Delete a chef by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '204':
 *         description: Chef deleted
 *       '404':
 *         description: Chef not found
 *       '500':
 *         description: Internal server error
 */
chefRouter.delete('/:id', chefController.deleteChef)

/**
 * @openapi
 * /chef/name/{name}:
 *   get:
 *     tags:
 *       - Chef
 *     summary: Get a chef by name
 *     parameters:
 *       - in: path
 *         name: name
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: A chef object
 *       '400':
 *         description: Bad request
 *       '404':
 *         description: Chef not found
 *       '500':
 *         description: Internal server error
 */
chefRouter.get('/name/:name', chefController.getChefByName)
