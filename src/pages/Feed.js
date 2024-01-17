import { Grid,CircularProgress } from '@mui/material'
import React,{useEffect,useState} from 'react'
import style from '../styles/Home.module.css'
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Card from '../components/Card';
import axios from 'axios';
function Feed() {
  const [data,setData] = useState([]);
  const [loading, setLoading] = useState(true); 
  useEffect(() => {
    const fetchRecentData = async () => {
      try {
        const token = localStorage.getItem('token');
        console.log('Token:', token);
    
        if (!token) {
          console.error('Token not available');
          return;
        }
    
        const response = await axios.get('https://sparkle-server-lyart.vercel.app/posts/', {
          headers: {
            token: `${token}`,
          },
        });
    
        setData(response.data); // Update state with fetched data
        setLoading(false);
      } catch (error) {
        console.error('Error fetching recent data', error);
        setLoading(false);
      }
    };    
fetchRecentData()    
  }, []);
  
  

  return (

      <Grid container className={style.centerFlex1} style={{width:"100%",height:"100% "}} >
<Grid container className={style.centerFlex1} style={{width:"50%",height:"100%",padding:"1vh",borderRadius:"10px"}}>
  <Grid className={`${style.centerFlex1} ${style.shadowType1}`} style={{width:"100%",height:"100%",backgroundColor:"white",padding:"1vh",borderRadius:"10px"}}>
<TextField
        label="Search"
        variant="outlined"
        fullWidth
         />
      <IconButton aria-label="search" >
        <SearchIcon />
      </IconButton>
</Grid>
<Grid container className={style.centerFlex1} style={{width:"100%",marginTop:"5vh"}} >
{loading ? ( <CircularProgress style={{ color: '#fff' }} />):(
  <>

{data.map((post) => {
    console.log(post);
    return <Card key={post._id} thumbnail={post.thumbnail} id={post._id} title={post.title} subtitle={post.subtitle} />;
  })}  </>
  )}
</Grid>

</Grid>

      </Grid>
    

 
  )
}

export default Feed