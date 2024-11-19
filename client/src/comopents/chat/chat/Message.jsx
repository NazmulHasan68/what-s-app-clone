import { formDate } from "../../../util/common.utils"
import { useContext } from "react"
import { AccountConttext } from "../../../context/AccountProvider";


export default function Message({message}) {
  const {account} = useContext(AccountConttext)
  return (
    <>
    {account.sub === message.senderId? 
        <div className="bg-[#dcf8c6] max-w-[60%] ml-auto m-2 w-fit flex border-md break-words items-end rounded-lg">
          <p className="text-md px-4 py-1 break-words">{message.text}</p>
          <p className="text-xs py-1 break-words  w-[70px]">{formDate(message.createdAt)}</p>
        </div>
       :
        <div className="bg-[#234bff] max-w-[60%] mr-auto m-2 w-fit flex border-md break-words items-end rounded-lg">
          <p className="text-md px-4 py-1 break-words">{message.text}</p>
          <p className="text-xs py-1 px-2 w-[70px]">{formDate(message.createdAt)}</p>
        </div>
    }
    </>
   
  )
}
