import { useEffect, useState, useContext } from "react"
import { getUser } from "../../../service/api"
import { AccountConttext } from "../../../context/AccountProvider"

export default function Conversations() {
    const {account} = useContext(AccountConttext)
    const [user, setuser] = useState([])
    useEffect(()=>{
        const fetchData = async()=>{
            let res = await getUser()
            setuser(res.user)
        }
        fetchData()
    },[])

    console.log(user);
    
  return (
    <div className="flex flex-col  p-4 h-[80vh] overflow-auto">
    {user.length > 0 ? (
        user.map((user, index) => (
          user.sub !== account.sub && 
            <div key={user.id || index} className="w-full p-3 rounded-lg border-b cursor-pointer hover:bg-slate-100">
                <div className="flex gap-2 items-center">
                    <img src={user.picture} alt="profile pic" className="w-8 h-8 rounded-full border object-cover"/>
                    <p>{user.name}</p>
                </div>
                
            </div>

        ))
    ) : (
        <div>Loading users...</div>
    )}
</div>
  )
}
