import { Button, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import style from '../styles/Home.module.css'
import i1 from '../images/sparkleBg.png'
import { Link ,Outlet,useNavigate} from 'react-router-dom'
import axios from 'axios'

function Login({setAuth}) {
  const navigate = useNavigate();
const [username, setUsername] = useState('');
const [password,setPassword] = useState('');
const handleLogin = async () => {
  try {
    const response = await axios.post('https://sparkle-server-lyart.vercel.app/users/login', {
      username,
      password,
    });
    const { token } = response.data;
    localStorage.setItem('token', token);
    setAuth(true);
    navigate('/');
  } catch (error) {
    console.error('Login failed', error.response.data);
  }
};

  return (
<Grid className={style.centerFlex1} style={{width:"100%",height:"100vh"}}>
    <Grid className={style.centerFlex1}  style={{backdropFilter: 'blur(4px) saturate(80%)',
    WebkitBackdropFilter: 'blur(4px) saturate(80%)',
    backgroundColor: 'rgba(0, 0, 0, 0.14)',
    borderRadius: '12px',
    border: '1px solid rgba(0, 255, 255, 0.125)',    boxShadow: '0px 10px 36px 0px rgba(0, 0, 0, 0.16), 0px 0px 0px 1px rgba(0, 0, 0, 0.06)',width:"70%",height:"80%"}}>
<Grid container className={style.centerFlex1} style={{width:"50%",height:"90%"}}>
    <img src={i1} style={{wdith:"90%", height:"80%"}} />
</Grid>
<Grid container item className={style.centerFlex1} style={{width:"50%",height:"100%"}}>
    <Grid container item className={style.centerFlex1}   style={{width:"60%", height:"40%"}}>

<form>

<Grid item container style={{width:"100%"}} className={style.centerFlex1} >
   <input type="text" placeholder='username' onChange={(e)=>{setUsername(e.target.value)}} style={{width:"90%",height:"4vh",border: "none",
    outline: "none",
    appearance: "none",borderRadius:"5px",backgroundColor:"#eaf5ff",marginBottom:"2vh"  ,padding:"1vh" ,fontSize:"17px"}}/>
</Grid>

<Grid item container style={{width:"100%"}} className={style.centerFlex1} >
   <input type="password" placeholder='password' onChange={(e)=>{setPassword(e.target.value)}} style={{width:"90%",height:"4vh",border: "none",
    outline: "none",
    appearance: "none",borderRadius:"5px",backgroundColor:"#eaf5ff" ,marginBottom:"2vh" ,padding:"1vh" ,fontSize:"17px"}}/>
</Grid>

<Grid className={style.centerFlex1} style={{width:"100%",height:"5vh" }}   >
   <Link to="/" style={{width:"100%"}}>
   <Button variant='contained' onClick={handleLogin} style={{width:"100%",marginTop:"1vh",padding:"1vh",backgroundColor:"#000f5d"}} >Login</Button>
    </Link> 
</Grid>
</form>

<Grid className={style.centerFlex1}style={{width:"100%"}} >
    
    <Typography className={style.centerFlex1} style={{width:"70%"}}>Don't have an account?</Typography>
  <Link to="/signup">
  <Typography style={{width:"30%",color:"blue"}}>SignUp</Typography>
  </Link>  

</Grid>
</Grid>

</Grid>

    </Grid>
    <Outlet />
  </Grid>)
}

export default Login