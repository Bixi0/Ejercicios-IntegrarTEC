import Joi from 'joi'

export const questsSchema = Joi.object({
  creatorID: Joi.number().required(),
  name: Joi.string().max(30).required(),
  guide: Joi.string().required(),
  level: Joi.number().max(99).required()
})

export const questsParamsSchema = Joi.object({
  id: Joi.string()
    .pattern(/^[0-9]+$/, 'numbers')
    .required()
})
