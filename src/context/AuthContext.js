import { createContext, useContext, useEffect, useState, useReducer } from 'react'
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'
import { auth } from '../config/firebase'
import PropTypes from 'prop-types';

const AuthContext = createContext();
export default AuthContext



initialState = {
  error: null
}


const handlers = {

[HANDLERS.ERROR]: (state, action)=> {
  const thereError= action.payload
  return{...state}
}


}


const reducer = (state, action) => (
  handlers[action.type] ? handlers[action.type](state, action) : state
);



export const UserAuth = () => {
  return useContext(AuthContext);
};



export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [state, dispatch] = useReducer(reducer, initialState);
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
    
      return signInWithEmailAndPassword(auth, email, password).then((userCredential)=>{
        const user = userCredential.user;
        console.log(user)
      }).catch((error)=>{
        const errorCode= error.code;
        console.log(errorCode)
        const errorMessage=error.message;
        console.log(errorMessage)
      })  
  
    
    
   }


  const logout = () => {
    setUser(null)
      return signOut(auth)
      
  }

  console.log(user)
  //console.log('Auth:', auth)
  console.log(state.error, state.thereError)
  return (
    <AuthContext.Provider value={{ user, login, signup, logout, state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node
};


export const AuthConsumer = AuthContext.Consumer;

