import ChatHeader from "./ChatHeader";
import Messages from "./Messages";
import { useContext, useEffect, useState } from "react";
import { AccountConttext } from "../../../context/AccountProvider";
import { getConversation } from "../../../service/api";

export default function ChatBox() {
    const {account, person} = useContext(AccountConttext)
    const [conversation, setconversation] = useState({})

    useEffect(()=>{
      const getConversationDetails = async()=>{
       let data =  await getConversation({senderId:account.sub, receiverId:person.sub})
       setconversation(data)
      }
      getConversationDetails()
    },[person.sub])

  return (
    <div>
      <ChatHeader person={person}/>
      <Messages person={person} conversation={conversation}/>
    </div>
  )
}
