
import ICGrupos from '@components/components/grupos/ICGrupos';
import Navbar from '@components/components/navbar/Navbar';
import { UserAuth } from '@components/context/AuthContext';
import { useRouter } from 'next/router'
import { useEffect } from 'react';


 const Dashboard = () => {

  const router = useRouter()
  const { user, logout} = UserAuth() 

  useEffect(()=>{
    let authToken = sessionStorage.getItem('Auth Token')
    if(user){
        router.push('/Dashboard')
    }
    if(!user){
        router.replace('/Welcome')
    }
},[user])

 



  return (
    <>

<Navbar/>
<ICGrupos/>

        
       
    </>

    
  )
}

export default Dashboard