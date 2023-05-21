import React, { useState, useRef, useEffect } from 'react'
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { UserAuth } from '@components/context/AuthContext';
import { useRouter } from 'next/router'

export const Login = () => {
  const router = useRouter()

  const [error, setError] = useState('');
  const [emailError, setEmailError] = useState('');
  

  const { user, login, logout} = UserAuth() 

  const emailRef = useRef(null)
  const passwordRef= useRef(null)

   useEffect(()=>{
    let authToken = sessionStorage.getItem('Auth Token')
    if(user){
        router.replace('/Dashboard')
    }
    if(!user){
        router.replace('/Welcome')
    }
},[])
 
//building my own handle login 


const handleSubmit = async (e) => {
  e.preventDefault();
  // Validación del formato del correo electrónico
  const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  if (!emailRegex.test(emailRef.current.value)) {
      setEmailError('El correo electrónico es inválido.');
      return;
  }
  setEmailError('');
  try {
      await login(emailRef.current.value, passwordRef.current.value).then((response)=>{
        router.replace('/Dashboard')
          sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
      });
  } catch (e)  {
    if(e.code === 'auth/invalid-email'){
      setError('El correo electrónico es inválido')
    }else if(e.code === 'auth/user-not-found'){
      setError('El usuario no existe')
    }else if(e.code === 'auth/wrong-password'){
      setError('La contraseña es incorrecta')
    }else{
      setError(e.message)
    }
  }
}; 


console.log(user)


//handle login by example sairajchouhan 
/* const handleLogin = async (e: any) => {
  e.preventDefault()

  console.log(user)
  try {
    await login(data.email, data.password)
    router.push('/dashboard')
  } catch (err) {
    console.log(err)
  }
} */








  return (
    <Box
          sx={{
            marginTop: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
        {/*   <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar> */}
          <Typography component="h1" variant="h5">
            Iniciar sesion
          </Typography>
          {error}
          <Box component="form"  onSubmit={handleSubmit}   noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
             /*  onChange={(e) => setEmail(e.target.value)} */
             inputRef={emailRef} 
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password" 
              type="password"
              id="password"
              inputRef={passwordRef} 
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Iniciar sesion
            </Button>
            <button
             onClick={()=>logout()}
            >
              cerrar sesion
            </button>
          
          </Box>
        </Box>
  )
}
