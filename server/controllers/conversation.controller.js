import Conversation from "../models/conversation.model.js"

export const conversationAddController = async (req, res)=>{
    try {
        const senderId = req.body.senderId
        const receiverId = req.body.receiverId
        
        const exist =await Conversation.find({members:{$all: [receiverId, senderId]}})

        if(exist){
            return res.status(200).json('Conversation already exists')
        }

        const newConversation = new Conversation({
            members: [senderId, receiverId]
        })
        await newConversation.save()
        return res.status(200).json('conversation saved successfully')

    } catch (error) {
        return res.status(500).json({message : "Error occours while Add conversation controller",})
    }
}