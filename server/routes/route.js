import express from 'express'
import { AddUserController } from '../controllers/user-controller.js'
const route = express.Router()

route.post('/add', AddUserController)

export default route