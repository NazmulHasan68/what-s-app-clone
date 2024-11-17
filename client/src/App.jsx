import './App.css';
import Messenger from './comopents/Messenger';
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {
  const clientId = '230785451493-vgucm884v3pb69l2eilrkdr3pu13ma6h.apps.googleusercontent.com';

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <Messenger />
    </GoogleOAuthProvider>
  );
}

export default App;
