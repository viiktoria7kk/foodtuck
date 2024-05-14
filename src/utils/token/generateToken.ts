import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()


export const generateToken = (id: string) => {
  const token = jwt.sign({ id }, process.env.JWT_SECRET as string, {
    expiresIn: '30d',
  })
  return token
}
