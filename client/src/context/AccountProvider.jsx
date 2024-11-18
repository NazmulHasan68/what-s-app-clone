import { createContext, useState } from "react";

export const AccountConttext = createContext(null)

const AccountProvider = ({children}) =>{

    const [account , setAccount] = useState()
    const [person, setPerson] = useState({})

    return(
        <AccountConttext.Provider value={{
            account,
            setAccount,
            person,
            setPerson
        }}>
            {children}
        </AccountConttext.Provider>
    )
}

export default AccountProvider