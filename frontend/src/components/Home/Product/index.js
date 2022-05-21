import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
const useStyle=makeStyles({
    root:{
        display:"flex",
        flexDirection:"column",
        width:"250px",
        height:"350px",
        background:"lightgray",
        marginTop:"25%"
    },
    image:{
        width:"100%",
        height:"60%"
    },
    text:{
        fontSize:"20px",
        marginLeft:"20px",
        marginTop:"20px"
    },
    salary:{
        fontSize:"10px",
        marginLeft:"20px",
        color:"gray"
    }
})
const Index = () => {
    const img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPLcoY4t7smd_xiqo0a0-X4zbWjUVXhstH0Q&usqp=CAU";

    const classes=useStyle();
    return (
        <div className={classes.root}>
           <img src={img} />
           <Typography className={classes.text}>New Cup</Typography>
           <Typography className={classes.salary}>Salary : 400,000 L.L</Typography>
        </div>
    );
}

export default Index;
