import React,{useState,useEffect} from 'react'
import { Button, Grid, Typography} from '@mui/material'
import img11 from "../images/Sparkle.png"
import Card from '../components/Card'
import { Link ,Outlet} from 'react-router-dom'
import axios from 'axios'
function Profile() {
  const [userData,setUserData] = useState({
    username:'',
    bio:'',
    name:'',
    pfp:'',
    
  })
  const [posts,setPosts] = useState([]);
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
  
        if (!token) {
          console.error('Token not available');
          return;
        }
  
        const response = await axios.get('http://localhost:8080/users/current' ,{ headers: {
          token: `${token}`,
      },});
  
        setUserData(response.data);  
      } catch (error) {
        console.error('Error fetching user data', error.response.data);
      }
    };
  
    fetchUserData();
  }, []);

  useEffect(()=>{
   const fetchPosts=async()=>{
    try{
      const token = localStorage.getItem('token');
      console.log('Token:', token);

      if (!token) {
        console.error('Token not available');
        return;
      }

      const response = await axios.get('http://localhost:8080/posts/userposts' ,{ headers: {
        token: `${token}`,
    },});
    setPosts(response.data)
    }catch{

    }
    }
  fetchPosts();
  },[])
  
  
  return (
 <>
<Grid container display="flex" justifyContent="center" alignItems="center" style={{ width:"100%",height:"100vh"}}>
<Grid item container display="flex" justifyContent="center" alignItems="center" style={{width:"55%",height:"100vh"}}>
  <Grid item container style={{backgroundColor:"",width:"90%",height:"100%"}}>

<Grid item display="flex" flexDirection="column" justifyContent="center" alignItems="center" style={{width:"100%",height:"45vh"}} >
<Grid item container display="flex" flexDirection="row" style={{width:"90%",paddingBottom:"3vh"}} >
  <Grid item display="flex" justifyContent="flex-start" alignItems="center" style={{width:"30%",height:"100%"}}>

                                <img src={userData?.pfp} style={{ width: '100px', height: '100px', borderRadius: '100%' }} alt="Default Avatar" />
                         
  </Grid>
  <Grid display="flex" item justifyContent="center" container flexDirection="column" style={{width:"30%"}}>
<Grid item><Typography variant='h6'>{userData?.name}</Typography></Grid>
<Grid item><Typography variant='body1'>@{userData?.username}</Typography></Grid>

  </Grid>
  <Grid display="flex" justifyContent="center" alignItems="center" style={{width:"40%"}}>
  <Link to="/editprofile">  <Button variant='contained' size="small" style={{backgroundColor:"#405DE6"}}>
    Edit profile
</Button>    </Link>
  </Grid>
</Grid>
<Grid item container  display="flex" justifyContent="center" alignItems="center" className="Bio" style={{width:"100%"}} >
<Grid container item display="flex" justifyContent="flex-start" alignItems="center" style={{width:"90%"}}>
<Typography variant="h6">{userData?.bio}
</Typography>
</Grid>
 
</Grid>
</Grid>
<Grid container  display="flex" flexDirection="row" justifyContent="center" alignItems="center" item style={{height:"100vh",width:"100%"}} >

  <Grid item container style={{width:"90%",margin:"1vh"}}>
<Typography variant='h6' fontWeight="bold" style={{color:"rgba(114,120,136,.6)"}}>BLOGS</Typography>
  </Grid>
  <Grid item container display="flex" flexDirection="row"  style={{width:"90%",margin:"1vh"}}>
  {posts.map((post) => {
    console.log(post);
    return <Card key={post._id} thumbnail={post.thumbnail} id={post._id} title={post.title} subtitle={post.subtitle} />;

  })}
  </Grid>
 
</Grid>

  </Grid>
</Grid>
<Outlet/>
</Grid>
 </>
    
 
  )
}

export default Profile