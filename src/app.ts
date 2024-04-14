import { userRouter } from './routes/user'
import { dishRouter } from './routes/dish'
import express, { Application } from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import { categoryRouter } from './routes/category'
import { chefRouter } from './routes/chef'
import { cheekoutRouter } from './routes/cheekout'
import { commentRouter } from './routes/comment'

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
app.use('/category', categoryRouter)
app.use('/chef', chefRouter)
app.use('/cheekout', cheekoutRouter)
app.use('/comment', commentRouter)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
