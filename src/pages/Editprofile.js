import { Button, Grid, Typography} from '@mui/material'
import img11 from "../images/Sparkle.png"
import React,{useState} from 'react'
import style from '../styles/Home.module.css'
import { Link ,Outlet, useNavigate} from 'react-router-dom'
import axios from 'axios'
function Editprofile() {
    const [pfp,setPfp ] = useState(img11)
    const [ name,setName] = useState('')
    const [bio,setBio] = useState('')
    const navigate = useNavigate();

function handleBio(e){
    setBio(e.target.value)
}

function handleName(e){
setName(e.target.value)
}
function handlePfp(e){
  setPfp(e.target.value);
}
const handleSubmit = async () => {
  try {
      const token = localStorage.getItem('token');
      const response = await axios.put('http://localhost:8080/users/update', {
          name,
          bio,
          pfp,
      }, {
          headers: {
              'Content-Type': 'application/json',
              token,
          },
      });

navigate('/profile')
      
  } catch (error) {
      console.error('Error updating user profile', error.response.data);
  }
};


  return (
   <>
   <Grid container className={style.centerFlex1} style={{width:"100%",height:"100%"}}>
<Grid item container  className={style.centerFlex1}  style={{width:"50%", height:"100%"}}>
    <Grid item container className={style.centerFlex1} style={{width:"75%"}}>
  
    <Grid item container alignItems="center"  style={{width:'100%',margin:"1vh"}}>
    <label for="name" style={{width:"25%"}}>Name*</label>

    <input id="name" type="text" onChange={handleName} style={{width:'70%',height:"5vh"}}/>
    </Grid>
    <Grid item container alignItems="center" style={{width:'100%',margin:"1vh"}} >
    <label for="bio" style={{width:"25%"}}>Bio*</label>
    <input type="text" id="bio" onChange={handleBio} style={{width:'70%',height:"5vh"}}/>
    </Grid> 
    <Grid item container alignItems="center" style={{width:'100%',margin:"1vh"}} >
    <label for="bio" style={{width:"25%"}}>Image Url*</label>
    <input type="text" id="pfp" onChange={handlePfp} style={{width:'70%',height:"5vh"}}/>
    </Grid> 
    </Grid>

    <Grid item container display="flex" justifyContent="center" alignItems="center" style={{width:"100%",height:"10vh"}}>
  <Typography variant='h6' fontWeight="bold" style={{color:"rgba(114,120,136,.6)"}}>Preview</Typography>

  </Grid>
  <Grid item container display="flex" flexDirection="row" style={{width:"90%",paddingBottom:"3vh"}} >
  <Grid item display="flex" justifyContent="flex-start" alignItems="center" style={{width:"30%",height:"100%"}}>
<img src={pfp} style={{width:"100px", height:"100px",borderRadius:"100%"}} alt="pfp"/>
  </Grid>
  <Grid display="flex" item justifyContent="center" container flexDirection="column" style={{width:"30%"}}>
<Grid item><Typography variant='h6'>{name}</Typography></Grid>
<Grid item><Typography variant='body1'>@vishhxh</Typography></Grid>

  </Grid>
  <Grid display="flex" justifyContent="center" alignItems="center" style={{width:"40%"}}>
 <Button variant='contained' size="small" onClick={handleSubmit} style={{backgroundColor:"green",margin:"1vh"}}>update</Button>
   <Link  to="/profile">  <Button variant='outlined' size="small" style={{borderColor:"#405DE6",color:"#405DE6",margin:"1vh"}}>Go Back</Button></Link>

  </Grid>
</Grid>
<Grid item container  display="flex" justifyContent="center" alignItems="center" className="Bio" style={{width:"100%"}} >
<Grid container item display="flex" justifyContent="flex-start" alignItems="center" style={{width:"90%"}}>
<Typography variant="h6">{bio}

</Typography>
</Grid>
 
</Grid>
</Grid>
<Outlet/>
   </Grid>
   </>
  )
}

export default Editprofile