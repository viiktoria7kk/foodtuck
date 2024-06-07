import { Router } from 'express'
import { StripeController } from '../controllers/stripe'

export const stripeRouter = Router()
const stripeController = new StripeController()

/**
 * @openapi
 * tags:
 *   name: Stripe
 *   description: Operations related to Stripe
 */

/**
 * @openapi
 * /stripe/charge:
 *  post:
 *    tags:
 *      - Stripe
 *    summary: Charge a payment
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              amount:
 *                type: number
 *              source:
 *                type: string
 *    responses:
 *      '200':
 *        description: Payment successful
 *      '400':
 *        description: Bad request
 *      '500':
 *        description: Internal server error
 */
stripeRouter.post('/charge', stripeController.charge.bind(stripeController))
