import { Server } from "socket.io";

const io = new Server(9000, {
    cors: {
        origin: "http://localhost:5173", 
    },
});

let users = [];

// Function to add a user
const addUser = (userData, socketId) => {
    if (!users.some(user => user.sub === userData.sub)) {
        users.push({ ...userData, socketId });
    }
};

// Function to get a user by ID
const getUser = (userId) => {
   console.log("user",users);
   console.log("id", userId);
   
    return users.find(user => user.sub === userId); 
};

// Event listeners
io.on("connection", (socket) => {
    console.log("User connected:", socket.id);

    socket.on("addUsers", (userData) => {
        addUser(userData, socket.id);
        io.emit("getUsers", users);
    });

    socket.on("sendMessage", (data) => {
        const user = getUser(data.receiverId);
        if (user) {
            io.to(user.socketId).emit("getMessage", data); 
        } else {
            console.error("User not found for receiverId:", data.receiverId);
        }
    });

    // Handle disconnection
    socket.on("disconnect", () => {
        console.log("User disconnected:", socket.id);
        users = users.filter(user => user.socketId !== socket.id);
        io.emit("getUsers", users);
    });
});
