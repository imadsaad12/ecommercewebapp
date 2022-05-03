import React, { useEffect, useState } from "react";
import { Button, makeStyles, TextField, Typography } from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { api } from "../../constants/api";
const useStyle = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    marginTop: "7%",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "lightblue",
    width: "450px",
    height: "450px",
    borderRadius: "10px",
  },
});
const Index = () => {
  const classes = useStyle();
  const navigate = useNavigate();
  const [values, setvalues] = useState({});
  // const [dummy, setdummy] = useState([]);
  // const [loading, setloading] = useState(false);
  // useEffect(() => {
  //   setloading(true);
  //   axios
  //     .get(`${api}/home`)
  //     .then((res) => {
  //       setdummy(res.data);
  //       console.log(res.data);
  //       setloading(false);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);
  const handleSubmit = async () => {
    try {
      console.log(values);
      await axios.post(`${api}/login`, values);
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setvalues({ ...values, [name]: value });
    console.log(values);
  };
  return (
    <div className={classes.root}>
      {loading ? (
        <h1>loading . . .</h1>
      ) : (
        <div className={classes.form}>
          <Typography
            variant="h4"
            style={{ fontFamily: "serif", marginBottom: "30px" }}
          >
            Welcome back !!
          </Typography>
          <Typography
            variant="h4"
            style={{ fontFamily: "serif", marginBottom: "30px" }}
          >
            {/* {dummy.length >1?dummy[1].name:null} */}
          </Typography>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <TextField
              variant="outlined"
              color="primary"
              style={{ marginBottom: "15px", width: "300px" }}
              placeholder="example@gmail.com"
              label="Email"
              name="email"
              inputProps={{
                "data-testid": "email",
              }}
              onChange={handleChange}
            />
            <TextField
              variant="outlined"
              color="primary"
              label="Password"
              name="password"
              inputProps={{
                "data-testid": "password",
              }}
              onChange={handleChange}
            />
            <Button
              variant="contained"
              color="primary"
              style={{ marginTop: "30px", width: "200px", alignSelf: "center" }}
              onClick={handleSubmit}
            >
              Sign in
            </Button>
            <Typography
              style={{
                alignSelf: "center",
                marginTop: "15px",
                color: "gray",
                textDecoration: "none",
              }}
            >
              <Link to="/signup">create account ?</Link>
            </Typography>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
