import { Button, Grid ,Checkbox} from '@mui/material'
import React from 'react'


function Del() {
  return (
  <Grid>
    <h1>Hi</h1>
    <Grid container  display ="flex" flexDirection="row" justifyContent="center" alignItems="center" style={{paddingBlock:"2vh",width:"100%"}}>
<Grid item container >
<Checkbox color="primary"  style={{color:"white"}}/>
    <span>
        Check the box to delete
    </span>
</Grid>
  
    <Grid item container >

<Button variant="outlined" style={{color:"red",borderColor:"Red"}}>Delete</Button>


    </Grid>
    </Grid>
  </Grid>
  )
}

export default Del