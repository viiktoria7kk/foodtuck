import { Router } from 'express'
import { DishController } from '../controllers/dish'

export const dishRouter = Router()
const dishController = new DishController()

/**
 * @openapi
 * tags:
 *   name: Dish
 *   description: Operations related to dishes
 */

/**
 * @openapi
 * /dish:
 *   post:
 *     tags:
 *       - Dish
 *     summary: Create a new dish
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Dish'
 *     responses:
 *       '201':
 *         description: Created
 *       '400':
 *         description: Bad request
 *       '500':
 *         description: Internal server error
 */
dishRouter.post('/', dishController.createDish)

/**
 * @openapi
 * /dish:
 *   get:
 *     tags:
 *       - Dish
 *     summary: Get all dishes
 *     responses:
 *       '200':
 *         description: A list of dishes
 *       '400':
 *         description: Bad request
 *       '500':
 *         description: Internal server error
 */
dishRouter.get('/', dishController.getDish)

/**
 * @openapi
 * /dish/{id}:
 *   get:
 *     tags:
 *       - Dish
 *     summary: Get a dish by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: A dish object
 *       '400':
 *         description: Bad request
 *       '404':
 *         description: Dish not found
 *       '500':
 *         description: Internal server error
 */
dishRouter.get('/:id', dishController.getDishById)

/**
 * @openapi
 * /dish/{id}:
 *   put:
 *     tags:
 *       - Dish
 *     summary: Update a dish by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Dish'
 *     responses:
 *       '200':
 *         description: Updated successfully
 *       '400':
 *         description: Bad request
 *       '404':
 *         description: Dish not found
 *       '500':
 *         description: Internal server error
 */
dishRouter.put('/:id', dishController.updateDish)

/**
 * @openapi
 * /dish/{id}:
 *   delete:
 *     tags:
 *       - Dish
 *     summary: Delete a dish by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '204':
 *         description: Dish deleted
 *       '404':
 *         description: Dish not found
 *       '500':
 *         description: Internal server error
 */
dishRouter.delete('/:id', dishController.deleteDish)

/**
 * @openapi
 * /dish/category/{category}:
 *   get:
 *     tags:
 *       - Dish
 *     summary: Get dishes by category
 *     parameters:
 *       - in: path
 *         name: category
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: A list of dishes
 *       '400':
 *         description: Bad request
 *       '404':
 *         description: No dishes found for the category
 *       '500':
 *         description: Internal server error
 */
dishRouter.get('/category/:category', dishController.getDishByCategory)
