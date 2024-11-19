
import Footer from './Footer';
import { useContext, useEffect, useState } from 'react';
import { AccountConttext } from "../../../context/AccountProvider";
import { getMessages, newMessage } from '../../../service/api';
import Message from './Message';


export default function Messages({person, conversation}) {
  const {account} = useContext(AccountConttext)
  const [newMessageFlg, setnewMessageFlg] = useState(false)

  const [text , setText] = useState('')
  const [messages , setMessages] = useState([])
 
  
    const sendText =async (e) =>{
      const code = e.keyCode || e.which
      if(code === 13){
        let message ={
          senderId:account.sub,
          receiverId: person.sub,
          conversationid :conversation._id,
          type : 'text',
          text:text
        }
        console.log(message);
       await newMessage(message)
       setText("");
       setnewMessageFlg(prev => !prev )
      }
    }

    useEffect(()=>{
      const getMessageDetails = async()=>{
       let data =  await getMessages(conversation._id)
       setMessages(data)
       
      }
      conversation._id && getMessageDetails()
    },[person._id, conversation._id, newMessageFlg])

  return (
    <div  style={{ backgroundColor: '#f3f3f3'}} className=' overflow-y-scroll mb-4'>
      <div className='px-4 h-[78vh]'>
        {messages && messages.map((message, index)=>(
          <Message key={index} message={message}/>
        ))}
      </div>
      <Footer sendText={sendText} setText={setText} text={text}/>
    </div>
  );
}
