import { Button, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import style from '../styles/Home.module.css'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';
function Create() {
  const [thumb,setThumb] = useState('https://media.assettype.com/freepressjournal/2023-10/f5c9fe2e-b602-4514-81e0-8c2ee0cba9b3/Our_overall_well_being_depends_on_both_our_mental_health_and_physical_health__and_hence_the_growing_.png');
  const [url,setUrl] = useState('https://www.blogtyrant.com/wp-content/uploads/2020/03/free-images-for-blog.png');
  const [title,setTitle] = useState();
  const [subtitle,setSubtitle] = useState();
  const [content, setContent] = useState('');
  const [imgUp,setIm] = useState(null)
const navigate = useNavigate();
  const handleTitle=(e)=>{
    setTitle(e.target.value);
  }
  const handleSubTitle=(e)=>{

    setSubtitle(e.target.value);
  }
  const handleContent = (value) => {
    setContent(value);
  };
  function handleEveryUpload(e){
  setUrl(e.target.value)
  }
  function handleThumbnail(e){
    setThumb(e.target.value)
    }

    function handleIm(e){
      const file = e.target.files[0]
      setIm(file)
      }
  
  const handlePost = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        
        console.error('Token not available');
        return;
      }
      const postData = {
        title: title,
        subtitle: subtitle,
        content: content,
        banner:url,
        thumbnail:thumb,
        imgUp:imgUp,
      };
      console.log(postData.title)
      const formData = new FormData();
    formData.append('title', title);
    formData.append('subtitle', subtitle);
    formData.append('content', content);
    formData.append('banner', url);
    formData.append('thumbnail', thumb);
    formData.append('imgUp', imgUp);
    const response = await axios.post('http://localhost:8080/posts/', formData, {
      headers: {
        token: `${token}`,
        "Content-Type": "multipart/form-data"
      },
    });
navigate('/');
      
    } catch (error) {
      console.error('Error creating post', error);
    }
  };



  return (
<>
<form>


<Grid container className={style.centerFlex1} style={{width:"100%", height:"100%"}}>
  <Grid container className={style.centerFlex1} style={{width:"50%"}}>

  <Grid container display="flex" flexDirection="row" justifyContent="flex-start" alignItems="center" style={{width:"100%",height:"7vh"}}>
  <label style={{width:"25%"}} for="title"> Title:</label>
    <input style={{width:"65%",padding:"1vh",borderRadius:"10px"}} name="title" onChange={handleTitle} id="title" type="text" />
    </Grid> 
  <Grid container display="flex" flexDirection="row" justifyContent="flex-start" alignItems="center" style={{width:"100%",height:"7vh"}}>
  <label style={{width:"25%"}} for="sub-title">Sub title:</label>
    
    <input style={{width:"65%",padding:"1vh",borderRadius:"10px"}} name="subtitle" onChange={handleSubTitle} id="subtitle" type="text" />
    </Grid> 
    <Grid container display="flex" flexDirection="row" justifyContent="flex-start" alignItems="center" style={{width:"100%",height:"7vh"}}>

  <label style={{width:"25%"}} for="sub-title">Image url:</label>
    
    <input style={{width:"65%",padding:"1vh",borderRadius:"10px"}} type="url" onChange={handleEveryUpload} name="banner" id="img-preview" />
  

    </Grid> 
    <Grid container display="flex" flexDirection="row" justifyContent="flex-start" alignItems="center" style={{width:"100%",height:"7vh"}}>

<label style={{width:"25%"}} for="sub-title">Thumbnail url:</label>
  
  <input style={{width:"65%",padding:"1vh",borderRadius:"10px"}}  type="url" onChange={handleThumbnail} name="thumb" id="img-preview" />


  </Grid> 
  <Grid container display="flex" flexDirection="row" justifyContent="flex-start" alignItems="center"  style={{width:"100%",height:"7vh"}}>

<label style={{width:"25%"}} for="img-up">upload Image:</label>
  
  <input style={{width:"65%",padding:"1vh",borderRadius:"10px"}} type="file" onChange={handleIm} name="imgUp" id="img-up" />


  </Grid> 
     <Grid item container className={style.centerFlex1} style={{width:"100%"}}>
  <ReactQuill
  value={content}
  onChange={handleContent}
  style={{ width: '100%', margin: '2vh', fontFamily: "'Arial', sans-serif" }}
/>

  </Grid>
  <Grid item container display="flex" justifyContent="center" alignItems="center" style={{width:"100%",height:"10vh"}}>
  <Typography variant='h6' fontWeight="bold" style={{color:"rgba(114,120,136,.6)"}}>Preview</Typography>

  </Grid>
<Grid  item container display="flex" justifyContent="center"alignItems="center" style={{width:"100%"}} >


  <Grid item container className={style.centerFlex1} style={{width:"100%",height:"45vh",backdropFilter: 'blur(4px) saturate(80%)',
    WebkitBackdropFilter: 'blur(4px) saturate(80%)',
    backgroundColor: 'rgba(0, 0, 0, 0.74)',
    borderRadius: '12px',
    border: '1px solid rgba(255, 255, 255, 0.125)'   , boxShadow: '0px 10px 36px 0px rgba(0, 0, 0, 0.16), 0px 0px 0px 1px rgba(0, 0, 0, 0.06)'}}>
      
<img src={url} style={{width:"100%",height:"100%"}}/>

<Grid item container className={style.centerFlex1} justifyContent="flex-start" style={{width:"100%",margin:"5vh",height:"45vh",backdropFilter: 'blur(4px) saturate(80%)',
    WebkitBackdropFilter: 'blur(4px) saturate(80%)',
    backgroundColor: 'rgba(0, 0, 0, 0.74)',
    borderRadius: '12px',
    border: '1px solid rgba(255, 255, 255, 0.125)'   , boxShadow: '0px 10px 36px 0px rgba(0, 0, 0, 0.16), 0px 0px 0px 1px rgba(0, 0, 0, 0.06)'}}>
      
<img src={imgUp} style={{width:"50%",height:"100%"}}/>
</Grid>
  <Grid item container display="flex" justifyContent="flex-start" alignItems="center" style={{width:"100%",height:"50%"}}>
    <Typography variant='h3'>{title}</Typography>
  </Grid>
  <Grid item  container display="flex" justifyContent="flex-start" alignItems="center" style={{width:"100%",height:"25%",marginTop:"5vh"}}>
    <Typography variant='subtitle1' style={{color:"#5e5e5e"}}>{subtitle}</Typography>
  </Grid>
  <Grid item  container className={style.centerFlex1} style={{marginTop:"5vh"}}>
<div dangerouslySetInnerHTML={{__html:content}} style={{ width:"100%", fontFamily: "'Arial', sans-serif"}}/>

  </Grid>
  
  <Grid className={style.centerFlex1} style={{height:"20vh"}}>
<Button variant='contained' onClick={handlePost} size="large" style={{backgroundColor:"#405DE6"}}  >Post</Button>
  </Grid>
  </Grid> </Grid>
  </Grid>



</Grid>
</form>
</>
  )
}

export default Create
