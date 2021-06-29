import '../styles/globals.css'
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from '../firebase';
import Login from './login';
import Loading from '../components/Loading';
import { useEffect } from 'react';
import firebase from 'firebase';

function MyApp({ Component, pageProps }) {
  const [user, loading] = useAuthState(auth)

  useEffect(() => {
    
      if (user) {
        db.collection('users').doc(user.uid).set(
          {email: user.email, photoURL: user.photoURL} 
        )
      }   
  }, [user]);

    if(!user) return <Login></Login>
    if(loading) return <Loading></Loading>

  return <Component {...pageProps} />
}

export default MyApp
