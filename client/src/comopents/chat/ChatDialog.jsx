import { Box, Dialog } from "@mui/material";
import Menu from "./menu/Menu";
import ChatBox from "./chat/ChatBox";

import { useContext } from "react";
import { AccountContext } from "../../context/AccountProvider";
import EmptyChat from "./chat/EmptyChat";

//components menu


const dialogStyle = {
    height: '95%',
    marginTop: '5%',
    width: '100%',
    maxWidth: '100%',
    borderRadius: '0',
    maxHeight: '100%',
    boxShadow: 'none',
    overflow: 'hidden',
  };

export default function ChatDialog() {
  const {person} = useContext(AccountContext)
  return (
    <div className="">
      <Dialog open={true} hideBackdrop={true} PaperProps={{ sx: dialogStyle }}>
        <Box className="flex min-w-4x ">
            <Box className='basis-2/6 h-full'>
                <Menu/>
            </Box>
            <Box className="basis-4/6 h-full">
            {
              Object.keys(person).length ? <ChatBox/>:<EmptyChat/>
            }      
            </Box>
        </Box>
      </Dialog>
    </div>
  )
}
