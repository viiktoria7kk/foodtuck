import { userRouter } from './routes/user'
import { dishRouter } from './routes/dish'
import express, { Application } from 'express'
import dotenv from 'dotenv'
import { teamMemberRouter } from './routes/teamMember'
import { cheekoutRouter } from './routes/cheekout'
import { commentRouter } from './routes/comment'
import { postRouter } from './routes/post'
import { swaggerSetup } from './doc/swagger'
import cors from 'cors'
import { connectDB } from './db/db'

dotenv.config()
const app: Application = express()

connectDB()

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/users', userRouter)
app.use('/dishes', dishRouter)
app.use('/team-members', teamMemberRouter)
app.use('/cheekouts', cheekoutRouter)
app.use('/comments', commentRouter)
app.use('/posts', postRouter)

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
  swaggerSetup(app)
})
