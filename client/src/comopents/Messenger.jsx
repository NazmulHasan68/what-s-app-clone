import LoginDialog from "./account/LoginDialog";

import { styled, alpha } from '@mui/material/styles';
import {Box,Toolbar, AppBar } from '@mui/material';

import ChatDialog from "./chat/ChatDialog";
import { useContext } from "react";
import { AccountContext } from "../context/AccountProvider";


const LoginHeader = styled(AppBar)`
    height : 220px;
    background-color: #00bfa5;
    box-shadow:none;
`

const ChartHeader = styled(AppBar)`
    height : 120px;
    background-color: #00bfb6;
    box-shadow:none;
`
const Comopent = styled(Box)`
    height:100vh;
    background: #DCDCDC;
    box-shadow: none;
`

export default function Messenger() {
    const {account} = useContext(AccountContext)

  return (
    <div>
        <Comopent className="h-100vh">
            {
                account ?
                <>
                    <ChartHeader>
                        <Toolbar>

                        </Toolbar>
                    </ChartHeader>
                    <ChatDialog/> 
                </>
               : 
                <>
                    <LoginHeader>
                        <Toolbar>

                        </Toolbar>
                    </LoginHeader>
                    <LoginDialog/>
                </>
            }
        </Comopent>
    </div>
  )
}
