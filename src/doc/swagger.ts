import { Express, Request, Response } from 'express'
import swaggerJsdoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: '3.0.3',
    info: {
      title: 'API for the restaurant FoodTuck',
      version: '0.0.0',
    },
    // security: [
    //   {
    //     bearerAuth: [],
    //   },
    // ],
    servers: [
      {
        url: 'http://localhost:4000/api/',
      },
    ],
  },
  apis: ['./src/routes/*.ts', './src/models/*.ts'],
}

export const swaggerSetup = (app) => {
  const swaggerSpec = swaggerJsdoc(options)
  app.use('/api', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
}

