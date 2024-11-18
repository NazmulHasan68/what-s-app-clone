import Conversations from "./COnversations"
import Header from "./Header"
import Search from "./Search"
import { useState } from "react"

const Menu = () =>{
    const [text ,settext] = useState('')
    return (
        <>
            <Header/>
            <Search settext={settext}/>
            <Conversations text={text}/>
        </>
    )
}

export default Menu