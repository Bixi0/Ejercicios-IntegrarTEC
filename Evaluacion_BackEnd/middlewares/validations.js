// Creator's Schemas
import {
  creatorSchema,
  creatorParamsSchema,
  loginCreatorSchema
} from '../validationSchemas/creatorSchema.js'

// Item's Schemas
import {
  itemsSchema,
  itemParamsSchema
} from '../validationSchemas/itemsSchema.js'

// Quest's Schemas
import {
  questsSchema,
  questsParamsSchema
} from '../validationSchemas/questsSchema.js'

// Item Type's Schemas
import {
  typeSchema,
  typeParamsSchema
} from '../validationSchemas/typeSchema.js'

// ================================== Creators Validations ===================================

export const creatorValidation = (req, _res, next) => {
  const data = req.body
  const { error } = creatorSchema.validate(data, { abortEarly: false })

  error ? next(error) : next()
}

export const creatorParamsValidation = (req, _res, next) => {
  const params = req.params
  const { error } = creatorParamsSchema.validate(params, { abortEarly: false })

  error ? next(error) : next()
}

export const creatorLoginValidation = (req, _res, next) => {
  const params = req.body
  const { error } = loginCreatorSchema.validate(params, { abortEarly: false })

  error ? next(error) : next()
}

// ================================== Items Validations ===================================

export const itemValidation = (req, _res, next) => {
  const data = req.body
  const { error } = itemsSchema.validate(data, { abortEarly: false })

  error ? next(error) : next()
}

export const itemParamsValidation = (req, _res, next) => {
  const params = req.params
  const { error } = itemParamsSchema.validate(params, { abortEarly: false })

  error ? next(error) : next()
}

// ================================== Quests Validations ===================================

export const questValidation = (req, _res, next) => {
  const data = req.body
  const { error } = questsSchema.validate(data, { abortEarly: false })

  error ? next(error) : next()
}

export const questParamsValidation = (req, _res, next) => {
  const params = req.params
  const { error } = questsParamsSchema.validate(params, { abortEarly: false })

  error ? next(error) : next()
}

// ================================== Types Validations ===================================

export const typeValidation = (req, _res, next) => {
  const data = req.body
  const { error } = typeSchema.validate(data, { abortEarly: false })

  error ? next(error) : next()
}

export const typeParamsValidation = (req, _res, next) => {
  const params = req.params
  const { error } = typeParamsSchema.validate(params, { abortEarly: false })

  error ? next(error) : next()
}
