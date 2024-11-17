import { createContext, useState } from "react";

export const AccountConttext = createContext(null)

const AccountProvider = ({children}) =>{

    const [account , setAccount] = useState()

    return(
        <AccountConttext.Provider value={{
            account,
            setAccount
        }}>
            {children}
        </AccountConttext.Provider>
    )
}

export default AccountProvider