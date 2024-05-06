import { Router } from 'express'
import { CheekoutController } from '../controllers/cheekout'

export const cheekoutRouter = Router()
const cheekoutController = new CheekoutController()

/**
 * @openapi
 * tags:
 *   name: Cheekout
 *   description: Operations related to cheekouts
 */

/**
 * @openapi
 * /checkout:
 *   post:
 *     summary: Create a new cheekout
 *     tags: [Cheekout]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateCheekoutDto'
 *     responses:
 *       '200':
 *         description: A cheekout object
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Cheekout'
 *       '400':
 *         description: Bad request
 *       '500':
 *         description: Internal server error
 */
cheekoutRouter.post('/', cheekoutController.createCheekout)

/**
 * @openapi
 * /cheekout:
 *   get:
 *     summary: Get all cheekouts
 *     tags: [Cheekout]
 *     responses:
 *       '200':
 *         description: A list of cheekouts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Cheekout'
 *       '400':
 *         description: Bad request
 *       '500':
 *         description: Internal server error
 */
cheekoutRouter.get('/', cheekoutController.getCheekout)

/**
 * @openapi
 * /cheekout/{id}:
 *   get:
 *     summary: Get a cheekout by ID
 *     tags: [Cheekout]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: A cheekout object
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Cheekout'
 *       '400':
 *         description: Bad request
 *       '404':
 *         description: Cheekout not found
 *       '500':
 *         description: Internal server error
 */
cheekoutRouter.get('/:id', cheekoutController.getCheekoutById)

/**
 * @openapi
 * /cheekout/{id}:
 *   delete:
 *     summary: Delete a cheekout by ID
 *     tags: [Cheekout]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '204':
 *         description: Cheekout deleted
 *       '404':
 *         description: Cheekout not found
 *       '500':
 *         description: Internal server error
 */
cheekoutRouter.delete('/:id', cheekoutController.deleteCheekout)

/**
 * @openapi
 * /cheekout/name/{name}:
 *   get:
 *     summary: Get a cheekout by name
 *     tags: [Cheekout]
 *     parameters:
 *       - in: path
 *         name: name
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: A list of cheekouts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Cheekout'
 *       '400':
 *         description: Bad request
 *       '404':
 *         description: Cheekout not found
 *       '500':
 *         description: Internal server error
 */
cheekoutRouter.get('/name/:name', cheekoutController.getCheekoutByName)
