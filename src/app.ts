import { userRouter } from './routes/user'
import { dishRouter } from './routes/dish'
import express, { Application } from 'express'
import dotenv from 'dotenv'
import { categoryRouter } from './routes/category'
import { chefRouter } from './routes/chef'
import { cheekoutRouter } from './routes/cheekout'
import { commentRouter } from './routes/comment'
import { postRouter } from './routes/post'
import { swaggerSetup } from './doc/swagger'
import cors from 'cors'
import { connectDB } from './db/db'

dotenv.config()
const app: Application = express()

connectDB()

const corsOptions = {
  origin: [process.env.URI1 as string, process.env.URI2 as string],
}
app.use(cors(corsOptions))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/user', userRouter)
app.use('/menu', dishRouter)
app.use('/category', categoryRouter)
app.use('/chef', chefRouter)
app.use('/cheekout', cheekoutRouter)
app.use('/comment', commentRouter)
app.use('/post', postRouter)

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
  swaggerSetup(app)
})
