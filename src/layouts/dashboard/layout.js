import { useCallback, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { styled } from '@mui/material/styles';
import { withAuthGuard } from '@components/hocs/with-auth-guard';
import Navbar from '@components/components/navbar/Navbar';

const SIDE_NAV_WIDTH = 280;

const LayoutRoot = styled('div')(({ theme }) => ({
  display: 'flex',
  flex: '1 1 auto',
  maxWidth: '100%',
  [theme.breakpoints.up('lg')]: {
    paddingLeft: SIDE_NAV_WIDTH
  }
}));

const LayoutContainer = styled('div')({
  display: 'flex',
  flex: '1 1 auto',
  flexDirection: 'column',
  width: '100%'
});


export const Layout = withAuthGuard((props)=>{

    const { children } = props;

  const pathname = usePathname();

  return(
    <>

    <Navbar/>
     <LayoutRoot>
        <LayoutContainer>

    {children}
        </LayoutContainer>
        </LayoutRoot>
    </>
  )

})

