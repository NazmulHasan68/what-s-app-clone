import User from "../models/user.model.js";

export const AddUserController =async(req, res)=>{
    try {
        let exist = await User.findOne({sub:req.body.sub})
        if(exist){
            res.status(200).json({message: "user Already exist!"})
            return
        }
        const newUser = new User(req.body)
        await newUser.save()

        res.status(200).json(newUser)
    } catch (error) {
        console.log("Error while add user controller", error.message); 
    }
}