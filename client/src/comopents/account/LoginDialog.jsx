import { Dialog, Box, Typography, List, ListItem, styled } from '@mui/material';
import qr from '../../assets/qr.png';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';
import { useContext } from 'react';
import { AccountConttext } from '../../context/AccountProvider';


const dialogStyle = {
  height: '95%',
  marginTop: '12%',
  width: '60%',
  maxWidth: '100%',
  maxHeight: '100%',
  boxShadow: 'none',
  overflow: 'hidden',
};

const Title = styled(Typography)`
  font-size: 26px;
  color: #525252;
  font-weight: 300;
  font-family: inherit;
  margin-bottom: 25px;
`;

const Component = styled(Box)`
  display: flex;
`;

const Container = styled(Box)`
  padding: 56px 0 56px 56px;
`;

const Qrcode = styled('img')({
  height: 264,
  width: 264,
  margin: '50px 0 0 50px',
});

const StyleList = styled(List)`
  & > li {
    padding: 0;
    margin-top: 15px;
  }
`;

export default function LoginDialog() {

  const {setAccount} = useContext(AccountConttext)

  const onLoginSuccess = (response) => {
    // Decode the JWT credential
    const data = jwt_decode(response.credential);
    setAccount(data)
  };

  const onLoginError = (error) => {
    console.log('Login Error:', error);
  };

  return (
    <Dialog open={true} PaperProps={{ sx: dialogStyle }} hideBackdrop={true}>
      <Component>
        <Container>
          <Title>To use WhatsApp on your computer</Title>
          <StyleList>
            <ListItem>1. Open WhatsApp on your phone</ListItem>
            <ListItem>2. Tap Menu or Settings and select Linked Devices</ListItem>
            <ListItem>3. Point your phone to this screen to capture the code</ListItem>
          </StyleList>
        </Container>
        <Box className="relative">
          <Qrcode src={qr} alt="bar code" className="cursor-pointer" />
          <Box className="absolute top-1/2 left-24">
            <GoogleLogin
              onSuccess={onLoginSuccess}
              onError={onLoginError}
            />
          </Box>
        </Box>
      </Component>
    </Dialog>
  );
}
