import { Button, makeStyles, Typography } from "@material-ui/core";
import React from "react";
const useStyle = makeStyles({
  navbar: {
    display: "flex",
    justifyContent:"center",
    width: "100%",
    height: "100px",
    background: "lightgray",
  },
  subConatiner: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "30%",
  },
  navItem:{
    color:"gray",
    fontSize:"18px",
    height:"90px"
  }
});
const Index = () => {
  const classes = useStyle();
  return (
    <div>
      <div className={classes.navbar}>
        <div className={classes.subConatiner}>
         <Button className={classes.navItem}>Home</Button>
         <Button className={classes.navItem}>Contact</Button>
         <Button className={classes.navItem}>About</Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
