import { createContext, useState, useRef, useEffect } from "react";
import { io } from "socket.io-client";

export const AccountContext = createContext(null);

const AccountProvider = ({ children }) => {
    const socket = useRef();

    useEffect(() => {
        socket.current = io("ws://localhost:9000");
        return () => {
            socket.current.disconnect(); // Clean up the socket connection
        };
    }, []);

    const [account, setAccount] = useState(null); // Initialize as null for clarity
    const [person, setPerson] = useState({});
    const [activeUsers, setActiveUsers] = useState([]);
    const [data, setdata] = useState([])

    return (
        <AccountContext.Provider
            value={{
                account,
                setAccount,
                person,
                setPerson,
                socket,
                setActiveUsers,
                activeUsers,
                setdata,
                data
            }}
        >
            {children}
        </AccountContext.Provider>
    );
};

export default AccountProvider;
