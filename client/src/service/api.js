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