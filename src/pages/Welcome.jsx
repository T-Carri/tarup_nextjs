//import { withAuthUser, AuthAction } from 'next-firebase-auth'
import React, {useState} from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import tarupcard from '../assets/mainlogo.png'
import wel from '../assets/Welcome.jpg'
import Image from 'next/image';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Menu from '@mui/material/Menu';
import { Acceso } from '@components/components/acceso/Acceso';
import { UserAuth } from '@components/context/AuthContext';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        tarup 
      </Link>{' '}
      by
      {' '}
      <Link color="inherit" href="https://mui.com/">
         Bitral
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

 const theme = createTheme({
  typography:{ 
    fontFamily: 'Shadows Into Light, cursive', 
  }
 })




function PricingContent() {

   //const navigate = useNavigate()
   const [anchorEl, setAnchorEl] = useState(null);
   const open = Boolean(anchorEl);
   const handleClick = (event) => {
     setAnchorEl(event.currentTarget);
   };
   const handleClose = () => {
     setAnchorEl(null);
   };

  return (

    <>

      
          
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
       <ThemeProvider theme={theme}> 
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
        <Image  style={{width:'3vh', height:'5vh', opacity:1}}  src={tarupcard}/> 
        {' '}
        <Typography variant="h5" style={{fontFamily: 'Shadows Into Light, cursive', fontSize: 30}} component="h1" sx={{ flexGrow: 1, pl:3 }} id='cepoint' >
              <strong>
           Tarup 

            </strong>
          </Typography>
          <nav>
            <Link
              variant="button"
              color="text.primary"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
            >
               ¿Como funciona?
            </Link>y
       
            <Link
              variant="button"
              color="text.primary"
              href="#"
      yy        sx={{ my: 1, mx: 1.5 }}
            >
              Soporte
            </Link>
          </nav>
       {/*    <Button  onClick={()=>navigate('/acceso')} variant="outlined" sx={{ my: 1, mx: 1.5 }}>
            Login
          </Button> */}  
          <button onClick={handleClick} id='acceso'>
            
    Iniciar sesion
</button>
        </Toolbar>
      </AppBar>
       </ThemeProvider> 

{/*Menu de login*/}       

       <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        /* onClick={handleClose} */
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >

<Card>

<Acceso/>
</Card>




      </Menu>


      {/* Hero unit */}
      <Box disableGutters  component="main" sx={{ pt:4, maxWidth: "100%" , height: '90vh' }}>
      <Image src={wel} style={{ width: "100%", height: '75vh', opacity: 0.8 }} />
      
      <Copyright sx={{ mt: 5 }} />
      </Box>

    
  
  
    
      
    </>



  
  );
}

export default function Welcome() {
  return <PricingContent />;
}




/* export default withAuthUser({
    whenAuthed: AuthAction.REDIRECT_TO_APP
   
  })(Welcome) */