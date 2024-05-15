import express, { Application } from 'express'
import { connectDB } from './db/db'
import { swaggerSetup } from './doc/swagger'
import { cheekoutRouter } from './routes/cheekout'
import { commentRouter } from './routes/comment'
import { dishRouter } from './routes/dish'
import { postRouter } from './routes/post'
import { teamMembersRouter } from './routes/teamMember'
import { userRouter } from './routes/user'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app: Application = express()

connectDB()

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/users', userRouter)
app.use('/dishes', dishRouter)
app.use('/team-members', teamMembersRouter)
app.use('/cheekouts', cheekoutRouter)
app.use('/comments', commentRouter)
app.use('/posts', postRouter)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
  swaggerSetup(app)
})
