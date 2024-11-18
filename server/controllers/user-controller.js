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


export const getuserCOntroller = async(req, res)=>{
    try {
        const user = await User.find({})
        return res.status(200).json({user})
    } catch (error) {
        console.log("Error while add user controller", error.message);
        return res.status(200).json(error.message)
    }
}