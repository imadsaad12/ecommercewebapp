import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import Navbar from "./Navbar/index";
import Product from "./Product/index";

const useStyle=makeStyles({
    root:{
        display:"flex",
        flexDirection:"column",
    }
})
const Index = () => {
    const classes=useStyle();

  return (
    <div className={classes.root}>
      <Navbar />
      <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
      <Grid container  >
        <Grid item md={3} sm={2}>
          <Product />
        </Grid>
        <Grid item md={3} sm={2}>
          <Product />
        </Grid>
        <Grid item md={3} sm={2}>
          <Product />
        </Grid>
        <Grid item md={3} sm={2}>
          <Product />
        </Grid>
        <Grid item md={3} sm={2}>
          <Product />
        </Grid>
      </Grid>
      </div>
    </div>
  );
};

export default Index;
