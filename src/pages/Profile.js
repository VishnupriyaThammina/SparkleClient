import React,{useState,useEffect} from 'react'
import { Button, Grid,CircularProgress, Typography} from '@mui/material'
import img11 from "../images/Sparkle.png"
import Card from '../components/Card'
import { Link ,Outlet} from 'react-router-dom'
import axios from 'axios'
function Profile() {
  const [loading, setLoading] = useState(true); 
  const [loading1, setLoading1] = useState(true); 

  const [userData,setUserData] = useState({
    username:'',
    bio:'',
    name:'',
   
    
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
  
        const response = await axios.get('https://sparkle-server-lyart.vercel.app/users/current' ,{ headers: {
          token: `${token}`,
      },});
  
        setUserData(response.data);  
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user data', error.response.data);
        setLoading(false);
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

      const response = await axios.get('https://sparkle-server-lyart.vercel.app/posts/userposts' ,{ headers: {
        token: `${token}`,
    },});
    setPosts(response.data)
    setLoading1(false);
    }catch(error){
      console.log("Error in fetching posts")
      setLoading1(false);

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

  <Grid display="flex" item justifyContent="center" container flexDirection="column" style={{width:"70%"}}>
<Grid item><Typography variant='h6'>{userData?.name}</Typography></Grid>
<Grid item><Typography variant='body1'>@{userData?.username}</Typography></Grid>

  </Grid>
  <Grid display="flex" justifyContent="center" alignItems="center" style={{width:"30%"}}>
  <Link to="/editprofile">  <Button variant='contained' size="small" style={{backgroundColor:"#405DE6"}}>
    Edit profile
</Button>    </Link>
  </Grid>
</Grid>
<Grid item container  display="flex" justifyContent="center" alignItems="center" className="Bio" style={{width:"100%"}} >
<Grid container item display="flex" justifyContent="flex-start" alignItems="center" style={{width:"90%"}}>
<Typography variant="body1">{userData?.bio}
</Typography>
</Grid>
 
</Grid>
</Grid>
<Grid container  display="flex" flexDirection="row" justifyContent="center" alignItems="center" item style={{height:"100vh",width:"100%"}} >

  <Grid item container style={{width:"90%",margin:"1vh"}}>
<Typography variant='h6' fontWeight="bold" style={{color:"rgba(114,120,136,.6)"}}>BLOGS</Typography>
  </Grid>
  {loading1 ? (  <Grid item container display="flex" flexDirection="row"  style={{width:"90%",margin:"1vh"}}>
    <CircularProgress style={{ color: '#fff' }} /></Grid>):(  <>
  <Grid item container display="flex" flexDirection="row"  style={{width:"90%",margin:"1vh"}}>



  {posts.map((post) => {
    console.log(post);
    return <Card key={post._id} thumbnail={post.imgUp} id={post._id} title={post.title} subtitle={post.subtitle} />;

  })}
 
  </Grid>
  </>
  )}
</Grid>

  </Grid>
</Grid>
<Outlet/>
</Grid>
 </>
    
 
  )
}

export default Profile