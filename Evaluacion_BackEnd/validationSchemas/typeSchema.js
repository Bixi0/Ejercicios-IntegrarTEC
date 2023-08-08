import Joi from 'joi'

export const typeSchema = Joi.object({
  name: Joi.string().max(20).required()
})

export const typeParamsSchema = Joi.object({
  id: Joi.string()
    .pattern(/^[0-9]+$/, 'numbers')
    .required()
})
