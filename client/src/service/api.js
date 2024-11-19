import axios from 'axios'


const url = 'http://localhost:8000'

export const addUser = async(data) =>{
    try {
        await axios.post(`${url}/add`, data)
    } catch (error) {
        console.log("Error while addUser Api", error.message);
    }
}


export const getUser = async()=>{
    try {
        const res = await axios.get(`${url}/getuser`)
        console.log(res);
        return res.data
    } catch (error) {
        console.log("Eoror occours while get user data", error.message);
    }
}



export const setConversation = async(data) =>{
    try {
        await axios.post(`${url}/conversation/add`,data)
    } catch (error) {
       console.log("Error occours while setconversation", error.message);
    }
}



export const getConversation = async(data) =>{
    try {
       let res =  await axios.post(`${url}/conversation/get`, data)
       return res.data

    } catch (error) {
        console.log('Error while calling getConversation api', error.message)
    }
}


export const newMessage = async(message)=>{
    try {
        let res =  await axios.post(`${url}/message/add`, message)
        return res.message
 
     } catch (error) {
         console.log('Error while calling new mwssage api', error.message)
     }
}


export const getMessages = async(id)=>{
    try {
        let res = await axios.get(`${url}/message/get/${id}`)
        return res.data
    } catch (error) {
       console.log(error);
    }
}