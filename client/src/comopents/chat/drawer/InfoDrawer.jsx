import { Drawer } from "@mui/material"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EditIcon from '@mui/icons-material/Edit';
import { useContext } from "react";
import { AccountContext } from "../../../context/AccountProvider";


export default function InfoDrawer({open, setopen}) {
    const {account} = useContext(AccountContext)
    const handleclose = () =>{
        setopen(false)
    }
    const drawstyle = {
        left:20,
        top : 17,
        height: '95%',
        width:'25%',
        boxShadow: 'none'
    }

  return (
    <Drawer
        open={open}
        onClose={handleclose}
        style={{zIndex:1500}}
        PaperProps={{sx:drawstyle}}
    >
        <div className="flex gap-4 h-36 bg-[#008069] items-end px-4 py-2 text-white cursor-pointer hover:font-bold">
            <ArrowBackIcon onClick={()=>setopen(false)}/>
            <p className="text-lg font-semibold  cursor-pointer ">Profile</p>
        </div>
        <div className="flex gap-4 py-10 bg-[#86a8a2] items-center px-4 justify-center">
           <div className="w-36 h-36 rounded-full border-2 overflow-hidden">
                <img src={account.picture} className="w-full h-full object-cover" alt="profile image"/>
           </div>
        </div>
        <div className="flex flex-col justify-between p-2 h-20 bg-gray-200 shadow-md">
            <p className="text-green-600">Your name</p>
            <div className="flex items-center justify-between">
                <p>{account.name}</p>
                <EditIcon/>
            </div>
        </div>
        <div className="flex flex-col justify-between p-2 h-20 bg-gray-300 ">
            <p className="py-2 text-sm text-[#8696a0]">This is not your username or pin. This name will be visible to your whatsApp contacts</p>
        </div>
        <div className="flex flex-col justify-between p-2 h-20 bg-gray-200 shadow-md">
            <p className="text-green-600">About</p>
            <p className="text-[#8696a0]">Eate sleep! code! Repeat!</p>
        </div>
    </Drawer>
  )
}
