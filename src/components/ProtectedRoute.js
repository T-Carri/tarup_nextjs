import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';
import { UserAuth } from '@components/context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { user } = UserAuth();
  const router = useRouter();
  const userRef = useRef(user);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('user:', user);
    if (!user) {
      router.replace('/Welcome');
    } else {
      setLoading(false);
    }
  }, [router, user]);

  return loading ? (
    <div>Cargando...</div>
  ) : (
    <>{user ? children : null}</>
  );
};

export default ProtectedRoute;





/* import { useRouter } from 'next/router';
import React, { useEffect, useRef } from 'react';
//import { useAuth } from '../context/AuthContext';
import { UserAuth } from '@components/context/AuthContext';
const ProtectedRoute = ({ children }) => {
  const { user } = UserAuth();
  const router = useRouter();
  const userRef = useRef(user);

  useEffect(() => {
    console.log('user:', user);
    if (!userRef.current) {
      router.replace('/Welcome');
    }
  }, [router, user]);

  return <>{user ? children : null}</>;
}

export default ProtectedRoute;
 */