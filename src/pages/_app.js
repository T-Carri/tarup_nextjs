import '@components/styles/globals.css'
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
