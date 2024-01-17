import React from 'react'
import { Button, Grid, Typography} from '@mui/material'
import i1 from "../images/3dicons.webp";
import { Link ,Outlet} from 'react-router-dom'

function Card(props) {

  return (
    <>
   <Grid container display="flex" flexDirection="row" justifyContent="center" alignItems="center" style={{width:"100%",height:"35vh",borderRadius:"15px",margin:"1vh",backdropFilter: 'blur(4px) saturate(80%)',
    WebkitBackdropFilter: 'blur(4px) saturate(80%)',
    backgroundColor: 'rgba(0, 0, 0, 0.74)',
    borderRadius: '12px',
    border: '1px solid rgba(255, 255, 255, 0.125)',    boxShadow: '0px 10px 36px 0px rgba(0, 0, 0, 0.16), 0px 0px 0px 1px rgba(0, 0, 0, 0.06)'}}>
<Grid item container   display="flex"  justifyContent="flexStart" alignItems="center"  style={{width:"50%",height:"100%"}}>
    <img src={props.thumbnail} style={{margin:"1vh",width:"70%",height:"90%",borderRadius:"20px"}}/>
</Grid>
<Grid  container display="flex" flexDirection="column" justifyContent="flex-start" alignItems="flex-start" item style={{width:"50%",height:"70%"}}>
<Grid item style={{height:"30%"}} >
    <Typography className='title' variant="h6">{props.title}</Typography>
</Grid>
<Grid item style={{height:"40%",width:"90%",textOverflow: "ellipsis", overflow: "hidden" ,   wordWrap: 'break-word',}}>
    <Typography className='Subtitle' variant="subtitle2" >{props.subtitle}</Typography>
</Grid>
<Grid item contianer display="flex" justifyContent="center" alignItems="center" style={{height:"30%"}} >
   <Link to={`/post/${props.id}`}>
   <Button  variant="outlined" size="small" style={{borderColor:"white",color:"white"}}>Read</Button>
   </Link> 
</Grid>
</Grid>
<Outlet/>
   </Grid>

    </>

  )
}

export default Card