import React, {useState} from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import google from '../../assets/btngoogle.png' 
import GoogleButton from 'react-google-button'
import { Grid } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Signup } from './Acceso/Signup';
import { Login } from './Acceso/Login';


export const Acceso = () => {

const [access, setAccess] = useState(false )


  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };


  return (
 <Card sx={{width:400}}>
    <CardContent>

<Grid container   direction="column"
  justifyContent="center"
  alignItems="center" 
  spacing={4}
  >
  <Grid item>
        {access?<Signup/>:<Login/>}
  </Grid>
  <Grid item>

{access? <Grid container spacing={3}>
              <Grid item xs>
                <Link onClick={()=> setAccess(false)} variant="body2">
                  Ya tienes cuenta? Inicia sesion
                </Link>
              </Grid>
           
            </Grid>: <Grid container spacing={3}>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Olvide mi contraseña
                </Link>
              </Grid>
              <Grid item>
                <Link onClick={()=> setAccess(true)} variant="body2">
                  {"No tienes cuenta? Registrate"}
                </Link>
              </Grid>
            </Grid>}

  

  


     </Grid>
  <Grid item>
    <GoogleButton
  onClick={() => { console.log('Google button clicked') }}
/>

  </Grid>

</Grid>
      

    </CardContent>
 </Card>
  )
}
