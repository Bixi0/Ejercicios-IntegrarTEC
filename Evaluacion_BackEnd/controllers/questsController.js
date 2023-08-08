// Tools
import { PrismaClient } from '@prisma/client'

// Helpers
import HTTP_STATUS from '../helpers/httpStatus.js'

// Middlewares
import softDelete from '../middlewares/softDelete.js'

const prisma = new PrismaClient()

export const questsController = () => {
  // Create new quest
  const createQuest = async (req, res, next) => {
    try {
      const { creatorID, name, guide, level } = req.body
      const quest = await prisma.quests.create({
        data: {
          creatorID,
          name,
          guide,
          level
        }
      })
      return res.status(HTTP_STATUS.CREATED).json(quest)
    } catch (error) {
      next(error)
    }
  }

  // Get all quests
  const getQuests = async (_req, res, next) => {
    try {
      const quests = await prisma.quests.findMany()

      return res.status(HTTP_STATUS.OK).json(quests)
    } catch (error) {
      next(error)
    }
  }

  // Get quest by its ID
  const getQuestById = async (req, res, next) => {
    try {
      const { id } = req.params
      const quest = await prisma.quests.findUnique({
        where: {
          id: Number(id)
        }
      })

      return res.status(HTTP_STATUS.OK).json(quest)
    } catch (error) {
      next(error)
    }
  }

  // Update Quest by its ID
  const updateQuest = async (req, res, next) => {
    try {
      const { id } = req.params
      const { creatorId, name, guide, level } = req.body

      const updatedQuest = await prisma.quests.update({
        where: {
          id: Number(id)
        },
        data: {
          creatorId,
          name,
          guide,
          level
        }
      })

      return res.status(HTTP_STATUS.OK).json(updatedQuest)
    } catch (error) {
      next(error)
    }
  }

  // Soft Delete Quest
  const deleteQuest = async (req, res, next) => {
    try {
      const { id } = req.params
      prisma.$use(softDelete)
      await prisma.quests.delete({
        where: {
          id: Number(id)
        }
      })
      return res
        .status(HTTP_STATUS.OK)
        .json({ message: 'Quest deleted succesfully' })
    } catch (error) {
      next(error)
    }
  }

  return {
    createQuest,
    getQuests,
    getQuestById,
    updateQuest,
    deleteQuest
  }
}
