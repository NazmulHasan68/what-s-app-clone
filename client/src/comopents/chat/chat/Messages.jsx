import Footer from './Footer';
import { useContext, useEffect, useRef, useState } from 'react';
import { AccountContext } from "../../../context/AccountProvider";
import { getMessages, newMessage } from '../../../service/api';
import Message from './Message';

export default function Messages({ person, conversation }) {
  const { account, socket } = useContext(AccountContext);
  const [messages, setMessages] = useState([]);
  const [incomingmessage, setincomingmessage] = useState(null);
  const [text, setText] = useState('');
  const [file, setFile] = useState(null);
  const [Image, setImage] = useState('');
  const scrollRef = useRef();

  // Listen for incoming messages
  useEffect(() => {
    const currentSocket = socket.current;
    if (currentSocket) {
      currentSocket.on('getMessage', (data) => {
        setincomingmessage({
          ...data,
          createdAt: new Date().toISOString(), 
        });
      });
      
    }
    return () => currentSocket?.off('getMessage'); // Clean up listener
  }, [socket]);


  
   
  

  // Append incoming message if it belongs to the conversation
  useEffect(() => {
    if (
      incomingmessage &&
      conversation?.members?.includes(incomingmessage.senderId)
    ) {
      setMessages((prev) => [...prev, incomingmessage]);
    }
  }, [incomingmessage, conversation]);

  // Fetch messages when conversation changes
  useEffect(() => {
    const fetchMessages = async () => {
      const data = await getMessages(conversation._id);
      setMessages(data);
    };
    if (conversation._id) fetchMessages();
  }, [conversation._id]);

  // Scroll to the bottom of the container when messages update
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  // Send a message
  const sendText = async (e) => {
    const code = e.keyCode || e.which;
    if (code === 13) {
      if (!text && !Image) return;

      const message = {
        senderId: account.sub,
        receiverId: person.sub,
        conversationid: conversation._id,
        type: file ? 'media' : 'text',
        text: file ? Image : text,
      };

      socket.current.emit('sendMessage', message); // Emit to socket
      await newMessage(message); // Save to database

      setText('');
      setFile('');
      setImage('');
      setMessages((prev) => [...prev, message]); // Update messages locally
    }
  };

  return (
    <div style={{ backgroundColor: '#f3f3f3' }} className="mb-4">
      <div className="px-4 h-[500px] overflow-y-auto" ref={scrollRef}>
        {messages &&
          messages.map((message, index) => (
            <div key={index}>
              <Message message={message} />
            </div>
          ))}
      </div>
      <Footer
        sendText={sendText}
        setText={setText}
        text={text}
        setFile={setFile}
        file={file}
        setImage={setImage}
      />
    </div>
  );
}
