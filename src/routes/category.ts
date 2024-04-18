import { Router } from 'express'
import { CategoryController } from '../controllers/category'

export const categoryRouter = Router()
const categoryController = new CategoryController()

/**
 * @openapi
 * tags:
 *   name: Category
 *   description: Operations related to categories
 */

/**
 * @openapi
 * /category:
 *   post:
 *     tags:
 *       - Category
 *     summary: Create a new category
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Category'
 *     responses:
 *       '201':
 *         description: Created
 *       '400':
 *         description: Bad request
 *       '500':
 *         description: Internal server error
 */
categoryRouter.post('/', categoryController.createCategory)

/**
 * @openapi
 * /category:
 *   get:
 *     tags:
 *       - Category
 *     summary: Get all categories
 *     responses:
 *       '200':
 *         description: A list of categories
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Category'
 *       '400':
 *         description: Bad request
 *       '500':
 *         description: Internal server error
 */
categoryRouter.get('/', categoryController.getCategory)

/**
 * @openapi
 * /category/{id}:
 *   get:
 *     tags:
 *       - Category
 *     summary: Get a category by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: A category object
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Category'
 */
categoryRouter.get('/:id', categoryController.getCategoryById)

/**
 * @openapi
 * /category/{id}:
 *   put:
 *     tags:
 *       - Category
 *     summary: Update a category by id
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
 *             $ref: '#/components/schemas/Category'
 *     responses:
 *       '200':
 *         description: Updated successfully
 *       '400':
 *         description: Bad request
 *       '500':
 *         description: Internal server error
 */
categoryRouter.put('/:id', categoryController.updateCategory)

/**
 * @openapi
 * /category/{id}:
 *   delete:
 *     tags:
 *       - Category
 *     summary: Delete a category by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Deleted successfully
 *       '400':
 *         description: Bad request
 *       '500':
 *         description: Internal server error
 */
categoryRouter.delete('/:id', categoryController.deleteCategory)

/**
 * @openapi
 * /category/value/{value}:
 *   get:
 *     tags:
 *       - Category
 *     summary: Get a category by value
 *     parameters:
 *       - in: path
 *         name: value
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: A category object
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Category'
 */
categoryRouter.get('/value/:value', categoryController.getCategoryByValue)
