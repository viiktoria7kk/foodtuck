import Joi from 'joi'
import { IComment } from 'src/models/Comment'
import { IUser } from 'src/models/User'
import { Categories } from '../enums/categories'
import { IDish } from 'src/models/Dish'
import { ICheekout } from 'src/models/Cheekout'
import { ITeamMember } from 'src/models/TeamMember'
import { IPost } from 'src/models/Post'
import { SignUpDto } from 'src/dto/sign-up.dto'
import { SignInDto } from 'src/dto/sign-in.dto'

const userSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().required(),
  avatar: Joi.string(),
})

export const validateUser = (user: IUser) => {
  return userSchema.validate(user)
}

export const validateSignUp = (user: SignUpDto) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required().min(6),
  })

  return schema.validate(user)
}

export const validateSignIn = (user: SignInDto) => {
  const schema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required(),
  })

  return schema.validate(user)
}

export const validateComment = (comment: IComment) => {
  const schema = Joi.object({
    user: Joi.object(userSchema).required(),
    content: Joi.string().required(),
    date: Joi.date().required(),
    postId: Joi.string().required(),
  })

  return schema.validate(comment)
}

const dishSchema = Joi.object({
  img: Joi.string().required(),
  calories: Joi.number(),
  category: Joi.array()
    .items(Joi.string().valid(...Object.values(Categories)))
    .required(),
  tags: Joi.array().items(Joi.string()).required(),
  rating: Joi.number().min(0).max(5).required(),
  receipe: Joi.array().items(Joi.string()).required(),
  description: Joi.string().required(),
  title: Joi.string().required(),
  price: Joi.number().required(),
})

export const validateDish = (dish: IDish) => {
  return dishSchema.validate(dish)
}

export const validateCheekout = (cheekout: ICheekout) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    dishes: Joi.object(dishSchema).required(),
    phone: Joi.string().required(),
    address: Joi.string().required(),
    total: Joi.number().required(),
  })

  return schema.validate(cheekout)
}

export const validateTeamMember = (teamMember: ITeamMember) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    avatar: Joi.string(),
    status: Joi.string(),
  })

  return schema.validate(teamMember)
}

export const validatePost = (post: IPost) => {
  const schema = Joi.object({
    img: Joi.array().items(Joi.string()).required(),
    date: Joi.date().required(),
    title: Joi.string().required(),
    description: Joi.string().required(),
    text: Joi.string().required(),
    comments: Joi.array().items(Joi.string()),
    tags: Joi.array().items(Joi.string()),
  })

  return schema.validate(post)
}
