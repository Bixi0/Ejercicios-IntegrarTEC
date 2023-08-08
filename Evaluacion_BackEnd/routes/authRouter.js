// Tools
import { Router } from 'express'

// Controllers
import { authController } from '../controllers/authController.js'
import {
  creatorValidation,
  creatorLoginValidation
} from '../middlewares/validations.js'

// Router Config.
export const authRoutes = () => {
  const authRouter = Router()
  const { login, register, refresh } = authController()

  authRouter.route('/auth/login').post(creatorLoginValidation, login)

  authRouter.route('/auth/register').post(creatorValidation, register)

  authRouter.route('/auth/refresh').post(refresh)

  return authRouter
}
