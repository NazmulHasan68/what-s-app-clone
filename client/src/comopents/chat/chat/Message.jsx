import { formDate } from "../../../util/common.utils"
import { useContext, useEffect, useRef } from "react"
import { AccountContext } from "../../../context/AccountProvider";


export default function Message({message}) {

  const {account, person,} = useContext(AccountContext)

console.log(formDate(message.createdAt));


  return (
    <div className="">
    {account.sub === message.senderId? 
        <div className=" text-white max-w-[60%] flex gap-2 ml-auto m-2 w-fit items-center" >
          <div className="flex border-md break-words items-end rounded-lg bg-sky-600">
            <p className="text-md px-4 py-1 break-words">{message.text}</p>
            <p className="text-xs py-1 px-2 w-[70px]">{formDate(message.createdAt)}</p>
          </div>
          <div className="w-8 h-8 overflow-hidden rounded-full">
              <img src={account.picture} alt="dp" className="w-full h-full object-cover"/>
          </div>
        </div>
       :
        <div className=" text-white max-w-[60%] flex gap-2 mr-auto m-2 w-fit items-center" >
          <div className="w-8 h-8 overflow-hidden rounded-full">
              <img src={person.picture} alt="dp" className="w-full h-full object-cover"/>
          </div>
          <div className="flex border-md break-words items-end rounded-lg bg-[#1a8f71]">
            <p className="text-md px-4 py-1 break-words">{message.text}</p>
            <p className="text-xs py-1 px-2 w-[70px]">{formDate(message.createdAt)}</p>
          </div>
        </div>
    }
    </div>
   
  )
}
