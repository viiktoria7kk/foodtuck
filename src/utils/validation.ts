import Joi from 'joi'
import { Categories } from '../enums/Category'
import { DishType } from '../types/Dish'
import { CommentType } from 'src/types/Comment'
import { CheekoutType } from 'src/types/Cheekout'
import { ChefType } from 'src/types/Chef'
import { PostType } from 'src/types/Post'
import { UserType } from 'src/types/User'

const userSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().required(),
  avatar: Joi.string(),
})

export const validateUser = (user: UserType) => {
  return userSchema.validate(user)
}

export const validateComment = (comment: CommentType) => {
  const schema = Joi.object({
    user: Joi.object(userSchema).required(),
    content: Joi.string().required(),
    date: Joi.date().required(),
    postId: Joi.string().required(),
  })

  return schema.validate(comment)
}

const dishSchema = Joi.object({
  title: Joi.string().alphanum().min(2).max(16).required(),
  description: Joi.string().alphanum().min(2).max(150).required(),
  category: Joi.string()
    .valid(...Object.values(Categories))
    .required(),
  price: Joi.string().required(),
  img: Joi.string().required(),
})

export const validateDish = (dish: DishType) => {
  return dishSchema.validate(dish)
}

export const validateCheekout = (cheekout: CheekoutType) => {
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

export const validateCategory = (category: Categories) => {
  const schema = Joi.object({
    value: Joi.string()
      .valid(...Object.values(Categories))
      .required(),
  })

  return schema.validate(category)
}

export const validateChef = (chef: ChefType) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    avatar: Joi.string().required(),
  })

  return schema.validate(chef)
}

export const validatePost = (post: PostType) => {
  const schema = Joi.object({
    img: Joi.array().items(Joi.string()).required(),
    title: Joi.string().required(),
    description: Joi.string().required(),
    text: Joi.string().required(),
    comments: Joi.array().items(Joi.string()).required(),
  })

  return schema.validate(post)
}
