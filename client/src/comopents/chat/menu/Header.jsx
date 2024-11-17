import { useContext, useState } from "react"
import { AccountConttext } from "../../../context/AccountProvider"

import WebStoriesIcon from '@mui/icons-material/WebStories';
import ChatIcon from '@mui/icons-material/Chat';
import HeaderMenu from "./HeaderMenu";
import InfoDrawer from "../drawer/InfoDrawer";

export default function Header() {
    const {account} = useContext(AccountConttext)
    const [openDrawer , setOpenDrawer] = useState(false)

    const toggleDrawer = () =>{
      setOpenDrawer(true)
    }
  return (
    <div className="h-18 bg-[#ededed] py-2 px-4 flex justify-between items-center z-0">
        <div className="h-10 w-10">
            <img src={account.picture} alt="profile pic" onClick={()=>toggleDrawer(true)} className=" cursor-pointer w-full h-full object-cover rounded-full"/>
        </div>
        <div className="flex gap-4 items-center text-slate-700">
            <WebStoriesIcon className=" cursor-pointer"/>
            <ChatIcon className=" cursor-pointer"/>
            <HeaderMenu setOpenDrawer={setOpenDrawer}/>
        </div>
        <InfoDrawer open={openDrawer} setopen={setOpenDrawer}/>
    </div>
  )
}
