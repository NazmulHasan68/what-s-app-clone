import { useContext } from "react"
import { AccountConttext } from "../../../context/AccountProvider"

import WebStoriesIcon from '@mui/icons-material/WebStories';
import ChatIcon from '@mui/icons-material/Chat';
import HeaderMenu from "./HeaderMenu";

export default function Header() {
    const {account} = useContext(AccountConttext)
  return (
    <div className="h-18 bg-[#ededed] py-2 px-4 flex justify-between items-center">
        <div className="h-10 w-10">
            <img src={account.picture} alt="profile pic" className="w-full h-full object-cover rounded-full"/>
        </div>
        <div className="flex gap-4 items-center text-slate-700">
            <WebStoriesIcon className=" cursor-pointer"/>
            <ChatIcon className=" cursor-pointer"/>
            <HeaderMenu/>
        </div>
    </div>
  )
}
