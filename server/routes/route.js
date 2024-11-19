import express from 'express'
import { AddUserController, getuserCOntroller } from '../controllers/user-controller.js'
import { conversationAddController, conversationgetController } from '../controllers/conversation.controller.js'
import { getMessage, newMessageController } from '../controllers/message.controller.js'
const route = express.Router()

route.post('/add', AddUserController)
route.get('/getuser', getuserCOntroller)
route.post('/conversation/add', conversationAddController)
route.post('/conversation/get', conversationgetController)

route.post('/message/add', newMessageController)
route.get('/message/get/:id',getMessage)

export default route