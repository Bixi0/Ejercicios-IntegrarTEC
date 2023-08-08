import Joi from 'joi'

export const creatorSchema = Joi.object({
  username: Joi.string().max(20).required(),
  email: Joi.string().email().required(),
  role: Joi.string().required(),
  firstName: Joi.string().max(50).required(),
  lastName: Joi.string().max(50).required(),
  password: Joi.string().min(4).required()
})

export const loginCreatorSchema = Joi.object({
  username: Joi.string().max(20).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(4).required()
})

export const creatorParamsSchema = Joi.object({
  id: Joi.string()
    .pattern(/^[0-9]+$/, 'numbers')
    .required()
})
