// Tools
import { PrismaClient } from '@prisma/client'

// Helpers
import HTTP_STATUS from '../helpers/httpStatus.js'

// Middlewares
import softDelete from '../middlewares/softDelete.js'

const prisma = new PrismaClient()

export const itemTypeController = () => {
  // Create Item Type
  const createType = async (req, res, next) => {
    try {
      const { name } = req.body
      const item = await prisma.itemType.create({
        data: {
          name
        }
      })
      return res.status(HTTP_STATUS.CREATED).json(item)
    } catch (error) {
      next(error)
    }
  }

  // Get all Item Types
  const getTypes = async (_req, res, next) => {
    try {
      const itemTypes = await prisma.itemType.findMany()

      return res.status(HTTP_STATUS.OK).json(itemTypes)
    } catch (error) {
      next(error)
    }
  }

  // Get Item Type by its ID
  const getTypeById = async (req, res, next) => {
    try {
      const { id } = req.params
      const type = prisma.itemType.findUnique({
        where: {
          id: Number(id)
        }
      })

      return res.status(HTTP_STATUS.OK).json(type)
    } catch (error) {
      next(error)
    }
  }

  // Update Item Type
  const updateItemType = async (req, res, next) => {
    try {
      const { id } = req.params
      const { name } = req.body

      const updatedItemType = await prisma.itemType.update({
        where: {
          id: Number(id)
        },
        data: {
          name
        }
      })

      return res.status(HTTP_STATUS.OK).json(updatedItemType)
    } catch (error) {
      next(error)
    }
  }

  // Delete Item Type
  const deleteItemType = async (req, res, next) => {
    try {
      const { id } = req.params
      prisma.$use(softDelete)
      await prisma.itemType.delete({
        where: {
          id: Number(id)
        }
      })
      return res
        .status(HTTP_STATUS.OK)
        .json({ message: 'Item Type deleted succesfully' })
    } catch (error) {
      next(error)
    }
  }

  return {
    createType,
    getTypes,
    getTypeById,
    updateItemType,
    deleteItemType
  }
}
