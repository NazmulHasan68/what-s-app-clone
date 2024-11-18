import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    iss : {
        type : String,
    },
    nbf : {
        type : Number
    },
    aub : {
        type:String,
    },
    sub:{
        type : String,
        required:true
    },
    email : {
        type :String
    },
    email_verified:{
        type : Boolean
    },
    azp :{
        type : String,
    },
    name : {
        type : String,
        required : true
    },
    picture :{
        type : String,
        required : true
    },
    given_name : {
        type : String,
    },
    family_name:{
        type:String,
    },
    iat : {
        type : Number
    },
    exp : {
        type :String
    },
    jti : {
        type : String
    }
})

const User = mongoose.model('User', userSchema)

export default User

