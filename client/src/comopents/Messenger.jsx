import LoginDialog from "./account/LoginDialog";

import { styled, alpha } from '@mui/material/styles';
import {Box,Toolbar, AppBar } from '@mui/material';


const Header = styled(AppBar)`
    height : 220px;
    background-color: #00bfa5;
    box-shadow:none;
`
const Comopent = styled(Box)`
    height:100vh;
    background: #DCDCDC;
    box-shadow: none;
`

export default function Messenger() {
  return (
    <div>
        <Comopent>
            <Header>
                <Toolbar>

                </Toolbar>
            </Header>
        </Comopent>
        <LoginDialog/>
    </div>
  )
}
