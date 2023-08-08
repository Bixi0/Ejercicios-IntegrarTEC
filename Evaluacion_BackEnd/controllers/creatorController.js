// Tools
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'

// Helpers
import HTTP_STATUS from '../helpers/httpStatus.js'

// Middlewares
import softDelete from '../middlewares/softDelete.js'

const prisma = new PrismaClient()

export const creatorController = () => {
  // =========================================== Get all creators ===========================================
  const getCreators = async (_req, res, next) => {
    try {
      const creators = await prisma.creators.findMany()

      res.status(HTTP_STATUS.OK).json(creators)
    } catch (error) {
      next(error)
    }
  }

  // =========================================== Get creator by its ID ===========================================
  const getCreatorById = async (req, res, next) => {
    try {
      const { id } = req.params
      const creator = await prisma.creators.findUnique({
        where: {
          id: Number(id)
        }
      })

      res.status(HTTP_STATUS.OK).json(creator)
    } catch (error) {
      next(error)
    }
  }

  // =========================================== Update Creator ===========================================
  const updateCreator = async (req, res, next) => {
    try {
      const { id } = req.params
      const { username, email, firstName, lastName, password } = req.body

      // Password hashing
      const salt = await bcrypt.genSalt(10)
      const hashedPassword = await bcrypt.hash(password, salt)

      const updatedCreator = await prisma.creators.update({
        where: {
          id: Number(id)
        },
        data: {
          username,
          email,
          firstName,
          lastName,
          password: hashedPassword
        }
      })

      res.status(HTTP_STATUS.OK).json(updatedCreator)
    } catch (error) {
      next(error)
    }
  }

  // =========================================== Soft Delete Creator ===========================================
  const deleteCreator = async (req, res, next) => {
    try {
      const { id } = req.params
      prisma.$use(softDelete)
      await prisma.creators.delete({
        where: {
          id: Number(id)
        }
      })
      res
        .status(HTTP_STATUS.OK)
        .json({ message: 'Creator deleted succesfully' })
    } catch (error) {
      next(error)
    }
  }

  return {
    getCreators,
    getCreatorById,
    updateCreator,
    deleteCreator
  }
}
