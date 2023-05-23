//second version 
import '@components/styles/globals.css'
//import { AuthConsumer, AuthProvider } from '@components/src/contexts/auth-context';
import { AuthConsumer, AuthProvider } from '@components/context/AuthContext';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { GeneralProvider, GeneralConsumer } from '@components/context/GeneralContext';

export default function App({ Component, pageProps }) {
 
  const getLayout = Component.getLayout ?? ((page) => page);

 
 
  return(

   <GeneralProvider> 
   {/* <GeneralConsumer> */}
  <AuthProvider>
  <CssBaseline />
  {/* <AuthConsumer> */}

   {
     getLayout(<Component {...pageProps} />)
    } 


    {/* </AuthConsumer> */}
    </AuthProvider>
   {/* /GeneralConsumer> */}
       </GeneralProvider> 
  ) 
              
}





              /* import '@components/styles/globals.css'
import { useRouter } from 'next/router'
import { AuthContextProvider } from '@components/context/AuthContext'
import ProtectedRoute from '@components/components/ProtectedRoute'
const noAuthRequired = ['/', '/Welcome']

export default function App({ Component, pageProps }) {

  const router = useRouter()


  return(
    <AuthContextProvider>
  
    {noAuthRequired.includes(router.pathname) ? (
      <Component {...pageProps} />
    ) : (
      <ProtectedRoute>
        <Component {...pageProps} />
      </ProtectedRoute>
    )}
  </AuthContextProvider>
  )
}
 */


