import Message from "../models/message.model.js"
import Conversation from "../models/conversation.model.js"

export const newMessageController = async(req, res)=>{
    try {
        const newMessage = new Message(req.body)  
        const message = await newMessage.save()
        
        const update = await Conversation.findByIdAndUpdate(req.body.conversationid, {message: req.body.text})
        return res.status(200).json('Message has been sent successfully')
        
    } catch (error) {
        console.log("Eroor occurs while new message ",error.Message);
    }
}


export const getMessage = async(req, res)=>{
    try {
        const message = await Message.find({conversationid:req.params.id})
        return res.status(200).json(message)

    } catch (error) {
        console.log("error occures while message get ", error.message);
    }
}