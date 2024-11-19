import Conversation from "../models/conversation.model.js"

export const conversationAddController = async (req, res) => {
    try {
      const { senderId, receiverId } = req.body;
  
      if (!senderId || !receiverId) {
        return res.status(400).json({ message: "Both senderId and receiverId are required." });
      }
  
      const exist = await Conversation.findOne({
        members: { $all: [receiverId, senderId] },
      });
  
      if (exist) {
        return res.status(200).json({ message: "Conversation already exists." });
      }

      const newConversation = new Conversation({
        members: [senderId, receiverId],
      });
      await newConversation.save();
  
      return res.status(201).json({ message: "Conversation saved successfully." });
    } catch (error) {
      return res.status(500).json({
        message: "An error occurred while adding the conversation.",
        error: error.message,
      });
    }
  };
  


export const conversationgetController = async(req, res)=>{
    const senderId = req.body.senderId
    const receiverId = req.body.receiverId
    try {
       let conversation = await Conversation.findOne({members:{$all :[senderId, receiverId]}})
       return res.status(200).json(conversation)
    } catch (error) {
       console.log(error.message);
    }
}