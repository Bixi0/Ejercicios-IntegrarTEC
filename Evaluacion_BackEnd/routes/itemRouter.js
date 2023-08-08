// Tools
import { Router } from 'express'

// Controllers & Middlewares
import { itemController } from '../controllers/itemController.js'
import {
  itemValidation,
  itemParamsValidation
} from '../middlewares/validations.js'
import { auth } from '../middlewares/auth.js'

// Router Config.
export const itemRoutes = () => {
  const itemRouter = Router()
  const { createItem, getItems, getItemById, updateItem, deleteItem } =
    itemController()

  // '/items' Route
  itemRouter
    .route('/items')
    .get(auth, getItems)
    .post(itemValidation, createItem)

  // '/items/:id' Route
  itemRouter
    .route('/items/:id')
    .get(getItemById)
    .put(itemParamsValidation, itemValidation, updateItem)
    .delete(deleteItem)

  return itemRouter
}
