import React from "react";
import { Button, Grid,Tooltip, Typography } from "@mui/material";
import { Link, Outlet } from "react-router-dom";

function Card(props) {
  return (
    <>
      <Grid
        container
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        style={{
          width: "100%",
          height: "35vh",
          borderRadius: "15px",
          margin: "1vh",
          backdropFilter: "blur(4px) saturate(80%)",
          WebkitBackdropFilter: "blur(4px) saturate(80%)",
          backgroundColor: "rgba(0, 0, 0, 0.74)",
          borderRadius: "12px",
          border: "1px solid rgba(255, 255, 255, 0.125)",
          boxShadow:
            "0px 10px 36px 0px rgba(0, 0, 0, 0.16), 0px 0px 0px 1px rgba(0, 0, 0, 0.06)",
        }}
      >
        <Grid
          item
          container
          display="flex"
          justifyContent="flexStart"
          alignItems="center"
          style={{ width: "50%", height: "100%" }}
        >
          <img
            src={props.thumbnail}
            style={{
              margin: "2vh",
              width: "70%",
              height: "90%",
              borderRadius: "20px",
            }}
          />
        </Grid>
        <Grid
          container
          display="flex"
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          item
          style={{ width: "50%", height: "100%"}}
        >
          <Grid item display="flex" style={{ height: "50%",width:"90%",justifyContent:"flex-start",alignItems:"center"  }}>
            <Typography className="title" variant="h6">
              {props.title}
            </Typography>
          </Grid>
         
          <Grid
            item
            container
            display="flex"
            justifyContent="center"
            alignItems="center"
            style={{ height: "50%" }}
          >
            <Link to={`/post/${props.id}`}>
            <Tooltip title="view post" arrow sx={{cursor:"pointer"}}>    <Button
                variant="outlined"
                size="small"
                style={{ borderColor: "white", color: "white" }}
              >
                Read More
              </Button></Tooltip>
            </Link>
          </Grid>
        </Grid>
        <Outlet />
      </Grid>
    </>
  );
}

export default Card;
