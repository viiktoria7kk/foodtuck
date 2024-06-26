import Joi from 'joi'
import { IDish } from '../../models/Dish'
import { ITeamMember } from '../../models/TeamMember'
import { SignInDto } from '../../models/sign-in.dto'
import { SignUpDto } from '../../models/sign-up.dto'
import { CreateCheekoutDto } from '../../models/create.cheekout.dto'
import { CreateCommentDto } from '../../models/create.comment.dto'
import { CreatePostDto } from '../../models/create.post.dto'
import { Categories } from '../enums/categories'
import { Types } from 'mongoose'

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

export const validateComment = (comment: CreateCommentDto) => {
  const schema = Joi.object({
    userId: Joi.string().required(),
    content: Joi.string().required(),
    postId: Joi.string().required(),
  })

  return schema.validate(comment)
}

const dishSchema = Joi.object({
  img: Joi.string(),
  calories: Joi.number().optional(),
  category: Joi.array()
    .items(Joi.string().valid(...Object.values(Categories)))
    .required(),
  tags: Joi.array().items(Joi.string()),
  rating: Joi.number().min(0).max(5).required(),
  receipe: Joi.array().items(Joi.string()).required(),
  description: Joi.string().required(),
  title: Joi.string().required(),
  price: Joi.number().required(),
})

export const validateDish = (dish: IDish) => {
  return dishSchema.validate(dish)
}

export const validateCheekout = (cheekout: CreateCheekoutDto) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    phone: Joi.string().required(),
    address: Joi.string().required(),
    city: Joi.string().required(),
    country: Joi.string().required(),
    total: Joi.number().required(),
    dishesId: Joi.array()
      .items(
        Joi.string().custom((value, helpers) => {
          if (!Types.ObjectId.isValid(value)) {
            return helpers.error('any.invalid')
          }
          return value
        }),
      )
      .required(),
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

export const validatePost = (post: CreatePostDto) => {
  const schema = Joi.object({
    img: Joi.array().items(Joi.string()),
    title: Joi.string().required(),
    description: Joi.string().required(),
    text: Joi.string(),
    comments: Joi.array().items(Joi.string()),
    tags: Joi.array().items(Joi.string()),
  })

  return schema.validate(post)
}
