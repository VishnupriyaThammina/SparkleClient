import { Grid, Typography,CircularProgress } from '@mui/material'
import React ,{useEffect,useState}from 'react'
import style from '../styles/Home.module.css'
import im1 from '../images/banner1.png'
import Card from '../components/Card'
import axios from 'axios';

function Home() {
  const [data,setData] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchRecentData = async () => {
      try {
        const token = localStorage.getItem('token');
    
        if (!token) {
          console.error('Token not available');
          return;
        }
    
        const response = await axios.get('http://localhost:8080/posts/recents', {
          headers: {
            token: `${token}`,
          },
        });
    
        setData(response.data);
        // console.log(data)
         // Update state with fetched data
        setLoading(false);

      } catch (error) {
        console.error('Error fetching recent data', error);
        setLoading(false);

      }
    };    
fetchRecentData()    
  }, []);
  
  
  return (
  <>


 <Grid container className={style.centerFlex1} style={{width:"100%",height:"100%"}} >

<Grid item container className={style.centerFlex1} style={{width:"50%",height:"100%"}}>
<Grid item container className={style.centerFlex1} style={{width:"100%",height:"50%"}}>
<img src={im1} style={{width:"100%",height:"100%",borderRadius:"20px",boxShadow: "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px"}}/>

</Grid>
<Grid item container className={style.centerFlex1} style={{width:"100%",height:"100%"}}>
  <Grid item container display="flex" justifyContent="flex-start" alignItems="center" style={{width:"100%",height:"10vh"}}>
  <Typography variant='h6' fontWeight="bold" style={{color:"rgba(114,120,136,.6)"}}>RECENT BLOGS</Typography>

  </Grid>
<Grid style={{width:"100%"}} >
{loading ? ( <CircularProgress style={{ color: '#fff' }} />):(
  <>
{data.map((post) => (
  <Card key={post._id} thumbnail={post.imgUp} id={post._id} title={post.title} subtitle={post.subtitle} />
))}
</>
  )}
</Grid>
</Grid>

</Grid>
 </Grid>
  </>
  )
}

export default Home