import { useEffect, useState, useContext } from "react"
import { AccountConttext } from "../../../context/AccountProvider"
import {getUser, setConversation} from '../../../service/api'

export default function Conversations({text}) {
    const {account} = useContext(AccountConttext)
    const {setPerson} = useContext(AccountConttext)
    const [users, setuser] = useState([])


    useEffect(() => {
        const fetchData = async () => {
          try {
            let res = await getUser();
            const filterData = res.user.filter(user => 
              user.name.toLowerCase().includes(text.toLowerCase()) 
            );
            setuser(filterData);
          } catch (error) {
            console.error("Error fetching users:", error.message);
          }
        };
      
        fetchData();
      }, [text]); 
      

    const setdata = async(user) =>{
        setPerson(user)
        await setConversation({senderId:account.sub, receiverId:user.sub})
    }



  return (
    <div className="flex flex-col  p-4 h-[80vh] overflow-auto">
    {users?.length > 0 ? (
        users.map((user, index) => (
          user.sub !== account.sub && 
            <div onClick={()=>setdata(user)} key={user.id || index} className="w-full p-3 rounded-lg border-b cursor-pointer hover:bg-slate-100">
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
