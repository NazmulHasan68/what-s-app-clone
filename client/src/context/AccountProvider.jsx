import { createContext, useState , useRef, useEffect} from "react";
import {io} from 'socket.io-client'

export const AccountConttext = createContext(null)

const AccountProvider = ({children}) =>{
    const socket = useRef()

    useEffect(()=>{
        socket.current = io('ws://localhost:9000')
    },[])

    const [account , setAccount] = useState()
    const [person, setPerson] = useState({})

    return(
        <AccountConttext.Provider value={{
            account,
            setAccount,
            person,
            setPerson,
            socket
        }}>
            {children}
        </AccountConttext.Provider>
    )
}

export default AccountProvider