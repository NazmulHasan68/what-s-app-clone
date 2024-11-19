import { Server } from "socket.io";

const io = new Server(9000, {
    cors: {
        origin: "http://localhost:5173", 
    },
});

let users = [];

const addUser = (userData)=>{
    !users.some(user =>user.sub == userData.sub) && users.push({...userData, socketId})
}

io.on("connection", (socket) => {
    console.log("User connected");

    socket.on('addUsers', userData =>{
        addUser(userData, socket.id)
    })
});
