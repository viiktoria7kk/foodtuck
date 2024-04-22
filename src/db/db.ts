import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

export const connectDB = async () => {
  mongoose
    .connect(process.env.DB_URL as string, {})
    .then(() => console.log('MongoDB Connected'))
    .catch((err) => {
      console.error('MongoDB connection error:', err)
      process.exit(1)
    })
}
