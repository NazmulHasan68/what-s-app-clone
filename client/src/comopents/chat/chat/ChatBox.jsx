import ChatHeader from "./ChatHeader";
import Messages from "./Messages";
import { useContext } from "react";
import { AccountConttext } from "../../../context/AccountProvider";

export default function ChatBox() {
    const {person} = useContext(AccountConttext)
  return (
    <div>
      <ChatHeader person={person}/>
      <Messages person={person}/>
    </div>
  )
}
