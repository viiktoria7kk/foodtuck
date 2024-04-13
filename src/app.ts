import { userRouter } from './routes/user'
import { dishRouter } from './routes/dish'
import express, { Application } from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const app: Application = express()
const PORT = process.env.PORT
mongoose
  .connect(process.env.DB_URL as string, {})
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => {
    console.error('MongoDB connection error:', err)
    process.exit(1)
  })

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/user', userRouter)
app.use('/menu', dishRouter)


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
