import express from 'express'
import { AddUserController, getuserCOntroller } from '../controllers/user-controller.js'
import { conversationAddController } from '../controllers/conversation.controller.js'
const route = express.Router()

route.post('/add', AddUserController)
route.get('/getuser', getuserCOntroller)
route.post('/conversation/add', conversationAddController)

export default route