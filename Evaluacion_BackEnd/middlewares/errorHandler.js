// Tools
import { Prisma } from '@prisma/client'

// Helpers
import HTTP_STATUS from '../helpers/httpStatus.js'

// Error list
const ERROR_HANDLERS = {
  ValidationError: ({ error, response }) => {
    response.status(HTTP_STATUS.UNPROCESSABLE_ENTITY).json({
      success: false,
      message: 'Recieved incorrect data on request.',
      error: error.message
    })
  },

  P2002: ({ error, response }) => {
    response.status(HTTP_STATUS.BAD_REQUEST).json({
      success: false,
      message: 'Unique constraint failed on one or more fields',
      error: error.message
    })
  },

  defaultError: (response, error) => {
    response
      .status(HTTP_STATUS.INTERNAL_SERVER_ERROR)
      .json({ success: false, message: error.message })
  }
}

// Error logic
const errorHandler = (error, _request, response, _next) => {
  let option = error.name

  if (error.isJoi) {
    option = 'ValidationError'
  }

  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    option = error.code
  }

  const handler = ERROR_HANDLERS[option] ?? ERROR_HANDLERS.defaultError

  handler({ response, error })
}

export default errorHandler
