// Tools
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

// Helpers
import HTTP_STATUS from '../helpers/httpStatus.js'

const prisma = new PrismaClient()

// Authorization Controller
export const authController = () => {
  // =========================================== Login with existing user ===============================================
  const login = async (req, res, next) => {
    try {
      const { username, email, password } = req.body
      const user = await prisma.creators.findUnique({
        where: {
          email,
          username
        }
      })

      // User check
      if (!user) {
        return res
          .status(HTTP_STATUS.NOT_FOUND)
          .json({ message: 'Invalid inputs on one or more fields' })
      }

      // Password check
      const passwordValidation = await bcrypt.compare(password, user.password)
      if (!passwordValidation) {
        return res
          .status(HTTP_STATUS.NOT_FOUND)
          .json({ message: 'Invalid inputs on one or more fields' })
      }

      // All checks valid
      // Token creation
      const token = jwt.sign(
        { username: user.username, role: user.role },
        process.env.SECRET_KEY,
        { expiresIn: '1h' }
      )

      const refreshToken = jwt.sign(
        { username: user.username, role: user.role },
        process.env.REFRESH_KEY,
        { expiresIn: '12h' }
      )

      return res
        .status(HTTP_STATUS.OK)
        .json({ message: 'Login successful', token, refreshToken })
    } catch (error) {
      next(error)
    }
  }

  // =========================================== Register a new User ====================================================
  const register = async (req, res, next) => {
    try {
      const { username, email, firstName, lastName, password } = req.body

      // Password hashing
      const salt = await bcrypt.genSalt(10)
      const hashedPassword = await bcrypt.hash(password, salt)

      const creator = await prisma.creators.create({
        data: {
          username,
          email,
          firstName,
          lastName,
          password: hashedPassword
        }
      })

      res.status(HTTP_STATUS.CREATED).json(creator)
    } catch (error) {
      next(error)
    }
  }

  // =========================================== Refresh Token ==========================================================
  const refresh = async (req, res, next) => {
    try {
      const { refreshToken } = req.body

      const decoded = jwt.verify(refreshToken, process.env.REFRESH_KEY)

      const token = jwt.sign(
        {
          username: decoded.username,
          role: decoded.role
        },
        process.env.REFRESH_KEY,
        { expiresIn: '1h' }
      )

      const newRefreshToken = jwt.sign(
        {
          name: decoded.name
        },
        process.env.REFRESH_KEY,
        { expiresIn: '12h' }
      )

      res.status(HTTP_STATUS.OK).json({
        message: 'Token refreshed',
        token,
        refreshToken: newRefreshToken
      })
    } catch (error) {
      next(error)
    }
  }

  return {
    login,
    register,
    refresh
  }
}
