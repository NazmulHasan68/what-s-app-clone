import express from 'express'
import { AddUserController, getuserCOntroller } from '../controllers/user-controller.js'
import { conversationAddController, conversationgetController } from '../controllers/conversation.controller.js'
import { getMessage, newMessageController } from '../controllers/message.controller.js'
import { uploadFileController, getImage } from '../controllers/upload.controller.js'
import upload from '../util/upload.js'
const route = express.Router()

route.post('/add', AddUserController)
route.get('/getuser', getuserCOntroller)
route.post('/conversation/add', conversationAddController)
route.post('/conversation/get', conversationgetController)

route.post('/message/add', newMessageController)
route.get('/message/get/:id',getMessage)

route.post('/file/upload', upload.single('file'), uploadFileController)
route.get('/file/:filename', getImage);

export default route