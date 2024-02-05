import React, { useEffect, useState } from 'react'
import style from '../styles/Home.module.css'
import im1 from '../images/banner1.png'
import Card from '../components/Card'
import { Button, Grid, Typography } from '@mui/material'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function Post() {
const { id} = useParams();
const [post,setPost]=useState(null);

const [userData,setUserData] = useState({
  username:'',
  bio:'',
  name:'',
  _id:''
  
})

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
    } catch (error) {
      console.error('Error fetching user data', error.response.data);
    }
  };

  fetchUserData();
}, []);
useEffect(()=>{
const fetchPostData = async ()=>{
try{

  const token = localStorage.getItem('token');

  if (!token) {
    console.error('Token not available');
    return;
  }

const res = await axios.get(`https://sparkle-server-lyart.vercel.app/posts/${id}` ,{ headers: {
  token: `${token}`,
},})
setPost(res.data);
}catch(error){
  console.error('Error fetching post view data', error.response.data);

}
}
fetchPostData();
},[id])



if (!post) {
  return null;
}


  return (
    <Grid container className={style.centerFlex1} style={{width:"100%",height:"100%"}} >
<Grid item container className={style.centerFlex1} style={{width:"50%",height:"100%"}}>
<Grid item container className={style.centerFlex1} style={{width:"100%",height:"45vh",color:"white"}}>
<img src={post.banner} style={{width:"100%",height:"100%",borderRadius:"20px",boxShadow: "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px"}}/>
</Grid>
<Grid item container className={style.centerFlex1} justifyContent="flex-start" style={{marginTop:"3vh",marginBottom:"3vh",width:"100%",color:"white"}}>
<Typography variant='h4'> {post.title}
</Typography>
</Grid>
<Grid item container className={style.centerFlex1} justifyContent="flex-start" style={{marginBottom:"3vh",width:"100%",color:"white"}}>
<Typography variant='subtitle2'>{post.subtitle}</Typography>

</Grid>
<Grid>
<div dangerouslySetInnerHTML={{__html:post.content}} style={{ width:"100%", fontFamily: "'Arial', sans-serif"}}/>
</Grid>
{userData._id === post.userid && (
          <Grid display="flex" justifyContent="center" style={{ width: '100%', margin: '5vh' }}>
            <Link to={`/edit/${id}`}>
              <Button variant="contained" size="small" sx={{ backgroundColor: '#405DE6', color: 'white', margin: '1vh' }}>
                Edit
              </Button>
            </Link>
          </Grid>
        )}
</Grid>
</Grid>
  )
}

export default Post