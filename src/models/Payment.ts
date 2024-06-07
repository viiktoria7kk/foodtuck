export interface IPayment {
  id: string
  amount: number
  currency: string
  status: string
  method: string
  transaction_id: string
  checkout_id: string
  created_at: Date
  updated_at: Date
}

/**
 * @openapi
 * components:
 *  schemas:
 *    Payment:
 *      type: object
 *      required:
 *        - id
 *        - amount
 *        - currency
 *        - status
 *        - method
 *        - transaction_id
 *        - checkout_id
 *      properties:
 *        id:
 *          type: string
 *          format: uuid
 *          description: The unique identifier of the payment
 *        amount:
 *          type: number
 *          description: The amount of the payment
 *        currency:
 *          type: string
 *          description: The currency of the payment
 *        status:
 *          type: string
 *          description: The status of the payment
 *        method:
 *          type: string
 *          description: The payment method
 *        transaction_id:
 *          type: string
 *          description: The transaction identifier
 *        checkout_id:
 *          type: string
 *          description: The checkout identifier
 *        created_at:
 *          type: string
 *          format: date-time
 *          description: The date and time when the payment was created
 *        updated_at:
 *          type: string
 *          format: date-time
 *          description: The date and time when the payment was last updated
 */