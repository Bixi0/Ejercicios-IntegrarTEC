// Tools
import { PrismaClient } from '@prisma/client'

// Helpers
import HTTP_STATUS from '../helpers/httpStatus.js'

// Middlewares
import softDelete from '../middlewares/softDelete.js'

const prisma = new PrismaClient()

export const itemController = () => {
  // Create new item
  const createItem = async (req, res, next) => {
    try {
      const { creatorID, typeID, questID, name, effect } = req.body
      const item = await prisma.items.create({
        data: {
          creatorID,
          typeID,
          questID,
          name,
          effect
        }
      })

      return res.status(HTTP_STATUS.CREATED).json(item)
    } catch (error) {
      next(error)
    }
  }

  // Get all items
  const getItems = async (_req, res, next) => {
    try {
      const items = await prisma.items.findMany()

      return res.status(HTTP_STATUS.OK).json(items)
    } catch (error) {
      next(error)
    }
  }

  // Get item by its ID
  const getItemById = async (req, res, next) => {
    try {
      const { id } = req.params
      const item = await prisma.items.findUnique({
        where: {
          id: Number(id)
        }
      })

      return res.status(HTTP_STATUS.OK).json(item)
    } catch (error) {
      next(error)
    }
  }

  // Update Item by its ID
  const updateItem = async (req, res, next) => {
    try {
      const { id } = req.params
      const { creatorId, typeId, questId, name, effect } = req.body

      const updatedItem = await prisma.items.update({
        where: {
          id: Number(id)
        },
        data: {
          creatorId,
          typeId,
          questId,
          name,
          effect
        }
      })

      return res.status(HTTP_STATUS.OK).json(updatedItem)
    } catch (error) {
      next(error)
    }
  }

  // Soft Delete Item
  const deleteItem = async (req, res, next) => {
    try {
      const { id } = req.params
      prisma.$use(softDelete)
      await prisma.items.delete({
        where: {
          id: Number(id)
        }
      })

      return res
        .status(HTTP_STATUS.OK)
        .json({ message: 'Item deleted succesfully' })
    } catch (error) {
      next(error)
    }
  }

  return {
    createItem,
    getItems,
    getItemById,
    updateItem,
    deleteItem
  }
}
