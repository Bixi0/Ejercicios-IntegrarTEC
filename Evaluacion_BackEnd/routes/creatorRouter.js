// Tools
import { Router } from 'express'

// Controllers & Validations
import { creatorController } from '../controllers/creatorController.js'
import {
  creatorValidation,
  creatorParamsValidation
} from '../middlewares/validations.js'

// Router Config.
export const creatorRoutes = () => {
  const creatorRouter = Router()
  const {
    getCreators,
    getCreatorById,
    updateCreator,
    deleteCreator
  } = creatorController()

  // '/creators' Route
  creatorRouter
    .route('/creators')
    .get(getCreators)

  // '/creators/:id' Route
  creatorRouter
    .route('/creators/:id')
    .get(getCreatorById)
    .put(creatorParamsValidation, creatorValidation, updateCreator)
    .delete(deleteCreator)

  return creatorRouter
}
