// Tools
import { Router } from 'express'

// Controllers & Validations
import { itemTypeController } from '../controllers/itemTypeController.js'
import {
  typeValidation,
  typeParamsValidation
} from '../middlewares/validations.js'

// Router Config.
export const itemTypeRoutes = () => {
  const itemTypeRouter = Router()
  const { createType, getTypes, getTypeById, updateItemType, deleteItemType } =
    itemTypeController()

  // '/types' Route
  itemTypeRouter.route('/types').get(getTypes).post(typeValidation, createType)

  // '/types/:id' Route
  itemTypeRouter
    .route('/types/:id')
    .get(getTypeById)
    .put(typeParamsValidation, typeValidation, updateItemType)
    .delete(deleteItemType)

  return itemTypeRouter
}
