import Joi from 'joi'

export const itemsSchema = Joi.object({
  creatorID: Joi.number().required(),
  typeID: Joi.number().required(),
  questID: Joi.number().required(),
  name: Joi.string().max(30).required(),
  effect: Joi.string().required()
})

export const itemParamsSchema = Joi.object({
  id: Joi.string()
    .pattern(/^[0-9]+$/, 'numbers')
    .required()
})
