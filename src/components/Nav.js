import React from 'react'
import { Grid} from '@mui/material'
import logo from '../images/sparkleBg.png'
import SearchIcon from '@mui/icons-material/Search';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import { Outlet, Link, Navigate, useNavigate } from "react-router-dom";
import axios from 'axios';
function Nav({setAuth}) {
  const navigate =useNavigate();
  const handleLogout = async () => {
    console.log("Logout button clicked");
    try {
      await axios.post('https://sparkle-server-lyart.vercel.app/users/logout');
      localStorage.removeItem('token');
      setAuth(false);
      navigate('/login');
    } catch (error) {
      console.error("Error in logging out", error);
    }
  };
  
  return (
  <>
 <Grid container display="flex" justifyContent="center" alignItems="center" style={{fontFamily:"sans-serif",color:"#ecedee",height:"15vh"}}>
        <Grid container  display="flex" justifyContent="center" alignItems="center" item style={{  backdropFilter: 'blur(4px) saturate(80%)',
    WebkitBackdropFilter: 'blur(4px) saturate(80%)',
    backgroundColor: 'rgba(0, 0, 0, 0.14)',
    borderRadius: '12px',
    border: '1px solid rgba(255, 255, 255, 0.125)',    boxShadow: '0px 10px 36px 0px rgba(0, 0, 0, 0.16), 0px 0px 0px 1px rgba(0, 0, 0, 0.06)',width:"50%",height:"70%"}}>
        <Grid item  display="flex" justifyContent="center" alignItems="center" style={{width:"20%",height:"100%",}} >
        <Link to="/"> 
        <Grid  display="flex" justifyContent="center" alignItems="center" style={{width:"100%",height:"100%"}}>
        <img src={logo}  to="/" width="50%" height="100%" alt="logo"/>
        </Grid>
</Link>
        </Grid>
    <Grid item  display="flex" justifyContent="center" alignItems="center" style={{width:"20%",height:"100%"}} >
    <Link to="/feed">   <SearchIcon style={{color:"white"}}/> </Link>
    </Grid>
    <Grid item  display="flex" justifyContent="center" alignItems="center" style={{width:"20%",height:"100%"}} >
    <Link to="/create">  <AddBoxOutlinedIcon style={{color:"white"}}/> </Link>
    </Grid>
    <Grid item  display="flex" justifyContent="center" alignItems="center" style={{width:"20%",height:"100%"}} >
    <Link to="/profile">  <AccountCircleRoundedIcon style={{color:"white"}}/> </Link>
    </Grid>
    <Grid item  display="flex" justifyContent="center" alignItems="center" style={{width:"20%",height:"100%"}} >
    <LogoutRoundedIcon onClick={handleLogout} style={{color:"white"}}/> 
    </Grid>
        </Grid>
  
    </Grid>
  
    <Outlet />

    </> 
  )
}

export default Nav