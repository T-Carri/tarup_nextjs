{lgUp&& (<Container   maxWidth="lg"  sx={{ mt: 0, mb: 0, height:'90vh' }}>
    
<Grid  container >
<Grid item md={2} sm={2} sx={{ height:'85vh', mb: 0, pt:3}}>


<Grid  container /* sx={{mt:6, flexDirection: { xs: 'column', sm: 'column', md: 'column' }}} */ direction={'column'} justifyContent={'center'} alignItems={'center'} spacing={2}>
<Grid item >
<button   id='tpx1' onClick={()=>setActivos(true)}>
<Typography></Typography>
Grupos activos
</button>
</Grid>
<Grid item>
<button   id='tpx2' onClick={()=>setActivos(false)}>
<Typography variant='
h5'>
Grupos inactivos
</Typography>


</button>
</Grid>

</Grid>

</Grid>
<Grid item md={10} sm={10} sx={{ mb:4}}>
{activos? <Activos/>:<Inactivos/>}
</Grid>

</Grid> 

</Container>)

}