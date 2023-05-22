import { createContext, useContext, useEffect, useState, useReducer } from 'react'
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'
import { auth } from '../config/firebase'
import PropTypes from 'prop-types';
import { GlobalState } from '@components/redux/GlobalState';

const AuthContext = createContext();
export default AuthContext





export const UserAuth = () => {
  return useContext(AuthContext);
};



export const AuthProvider = ({ children }) => {







    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

  // const dispatch=useDispatch() ;
  //const firestore= getFirestore(app)
  

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser({
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
          })
        } else {
          setUser(null)
        }
        setLoading(false)
      })
  
    return () => unsubscribe();
  
  },[]);



  //version normal 
  const signup  = (email, password) => {
    return  createUserWithEmailAndPassword(auth, email, password)
    
    
  };  
 

   const login  = (email, password) =>  {
    
      return signInWithEmailAndPassword(auth, email, password)
    
    
   }


  const logout = () => {
    setUser(null)
      return signOut(auth)
      
  }

  console.log(user)
  //console.log('Auth:', auth)
 
  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node
};


export const AuthConsumer = AuthContext.Consumer;

