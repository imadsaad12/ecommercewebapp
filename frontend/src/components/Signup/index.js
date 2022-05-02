import React, { useState } from "react";
import { Button, makeStyles, TextField, Typography } from "@material-ui/core";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import { api } from "../../constants/api";
const useStyle = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    marginTop: "3%",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "lightblue",
    width: "550px",
    height: "650px",
    borderRadius: "10px",
  },
});
const Index = () => {
  const classes = useStyle();
  const [values, setvalues] = useState({});
  const navigate=useNavigate()
  const handleSubmit=async()=>{
      try {
          const payload={
              name:{
                  firstname:values.firstname,
                  lastname:values.lastname,
              },
              username:values.username,
              age:values.age,
              email:values.email,
              password:values.password
          }
          await axios.post(`${api}/signup`,payload)
         navigate(`/home`)
      } catch (error) {
          console.log(error)
      }
  }
  const handleChange=(e)=>{
    const {name,value}=e.target;
    setvalues({...values,[name]:value})
    console.log(values)
  }
  return (
    <div className={classes.root}>
      <div className={classes.form}>
        <Typography
          variant="h4"
          style={{ fontFamily: "serif", marginBottom: "30px" }}
        >
          Sign up 
        </Typography>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <TextField
            variant="outlined"
            color="primary"
            style={{ marginBottom: "15px", width: "300px" }}
            placeholder="example@gmail.com"
            name="firstname"
            label="First name"
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            color="primary"
            style={{ marginBottom: "15px", width: "300px" }}
            name="lastname"
            label="Last name"
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            color="primary"
            style={{ marginBottom: "15px", width: "300px" }}
            name="username"
            label="User name"
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            color="primary"
            style={{ marginBottom: "15px", width: "300px" }}
            name="age"
            label="Age"
            type={"number"}
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            color="primary"
            style={{ marginBottom: "15px", width: "300px" }}
            placeholder="example@gmail.com"
            label="Email"
            name="email"
            onChange={handleChange}
          />
          <TextField variant="outlined" color="primary" label="Password" name="password" onChange={handleChange} />
          <Button
            variant="contained"
            color="Primary"
            style={{ marginTop: "30px", width: "200px", alignSelf: "center" }}
            onClick={handleSubmit}
          >
            Create account
          </Button>
          
        </div>
      </div>
    </div>
  );
};

export default Index;
