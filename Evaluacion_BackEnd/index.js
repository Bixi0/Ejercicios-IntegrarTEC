// Dependencies
import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { expressjwt as expjwt } from 'express-jwt'

// Middlewares
import errorHandler from './middlewares/errorHandler.js'

// Import Routes
import { authRoutes } from './routes/authRouter.js'
import { creatorRoutes } from './routes/creatorRouter.js'
import { itemTypeRoutes } from './routes/itemTypeRouter.js'
import { questsRoutes } from './routes/questsRouter.js'
import { itemRoutes } from './routes/itemRouter.js'

// Configurations
dotenv.config()

const PORT = process.env.PORT || 3000
const app = express()

// Backend Flow
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(
  cors({
    origin: '*'
  })
)

app.use(
  expjwt({
    secret: process.env.SECRET_KEY,
    algorithms: ['HS256']
  }).unless({
    path: ['/api/auth/login', '/api/auth/register', '/api/auth/refresh']
  })
)

app.use(
  '/api',
  authRoutes(),
  creatorRoutes(),
  itemTypeRoutes(),
  questsRoutes(),
  itemRoutes()
)

app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
