// Tools
import { Router } from 'express'

// Controllers & Validations
import { questsController } from '../controllers/questsController.js'
import {
  questValidation,
  questParamsValidation
} from '../middlewares/validations.js'

// Router Config.
export const questsRoutes = () => {
  const questsRouter = Router()
  const { createQuest, getQuests, getQuestById, updateQuest, deleteQuest } =
    questsController()

  // '/quests' Route
  questsRouter
    .route('/quests')
    .get(getQuests)
    .post(questValidation, createQuest)

  // '/quests/:id' Route
  questsRouter
    .route('/quests/:id')
    .get(getQuestById)
    .put(questParamsValidation, questValidation, updateQuest)
    .delete(deleteQuest)

  return questsRouter
}
