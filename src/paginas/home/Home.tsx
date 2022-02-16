import React from "react";
import {Typography, Box, Grid, Button} from '@material-ui/core';
import './Home.css'

function Home(){
  return (
    <>
       <Grid   className="back">
                <Grid  item xs={6}>
                    <Box paddingX={20} className="text">
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "#054F77", fontWeight: "bold" }}>Seja bem vindo(a)!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "#054F77", fontWeight: "bold" }}>expresse aqui os seus pensamentos e opiniões!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button variant="outlined" style={{ borderColor: "black", backgroundColor: "#bfbfbf", color: "D90429" }}>Ver Postagens</Button>
                    </Box>
                </Grid>
                {/* <Grid item xs={6} > */}
                    {/* <img src="https://i.imgur.com/d1gKw2C.jpg[/img]" alt="" width="682px" height="393px" /> */}
                {/* </Grid> */}
                <Grid xs={12} style={{ backgroundColor: "white" }}>
                </Grid>
            </Grid>
    </>
  );
}

export default Home;