import { useEffect, useState, useContext } from "react";
import { AccountContext } from "../../../context/AccountProvider";
import { getUser, setConversation } from "../../../service/api";
import { io } from "socket.io-client";

export default function Conversations({ text }) {
    const { account, socket, setActiveUsers ,setdata} = useContext(AccountContext);
    const { setPerson } = useContext(AccountContext);
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getUser();
                const filteredData = res.user.filter(user =>
                    user.name.toLowerCase().includes(text.toLowerCase())
                );
                setUsers(filteredData);
                
            } catch (error) {
                console.error("Error fetching users:", error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [text]);



    useEffect(() => {
       
        socket.current = io("ws://localhost:9000");
        socket.current.on("connect", () => {
            console.log("Socket connected");
            setdata(users)
        });
        if (account) {
            socket.current.emit("addUsers", account);
        }
        socket.current.on("getUsers", (users) => {
            setActiveUsers(users);
        });
        socket.current.on("connect_error", (error) => {
            console.error("Socket connection error:", error.message);
        });
        return () => {
            socket.current.disconnect();
            socket.current.off(); 
        };

    }, [account, socket, setActiveUsers]);



    const setData = async (user) => {
        setPerson(user);
        await setConversation({ senderId: account.sub, receiverId: user.sub });
    };

    return (
        <div className="flex flex-col p-4 h-[80vh] overflow-auto">
            {loading ? (
                <div>Loading users...</div>
            ) : users.length > 0 ? (
                users.map(user => (
                    user.sub !== account.sub && (
                        <div
                            key={user.sub}
                            onClick={() => setData(user)}
                            className="w-full p-3 rounded-lg border-b cursor-pointer hover:bg-slate-100"
                        >
                            <div className="flex gap-2 items-center">
                                <img
                                    src={user.picture}
                                    alt="profile pic"
                                    className="w-8 h-8 rounded-full border object-cover"
                                />
                                <p>{user.name}</p>
                            </div>
                        </div>
                    )
                ))
            ) : (
                <div>No users found</div>
            )}
        </div>
    );
}
