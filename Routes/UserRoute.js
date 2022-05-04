const express = require("express")
const route = express.Router();
const User = require("../models/Users");

route.post("/login", async (req, res) => {
    console.log(req.body)
    try {
        const data = req.body;
        const email = data.email;
        const password = data.password;
        const user=await User.findOne({ email: email, password: password });
        if(user){
            console.log(user)
            res.status(200).send("done")
        }
        else{
            res.status(400).send("failed")
        }
    } catch (error) {
        console.log(error);
    }

});

route.post("/signup", async (req, res) => {
    const data = req.body;
    await User.findOne({ email: data.email }, async (err, result) => {
        if (err)
            return res.status(500).send("Error while registering,try later");
        if (result)
            return res.status(404).send("User already exist");
        else {
            try {
                const user = await new User({
                    name: {
                        firstname: data.name.firstname,
                        lastname: data.name.lastname,
                    },
                    username: data.username,
                    email: data.email,
                    password: data.password,
                    age: data.age
                });
                await user.save();
                res.send("Registered a new User");
            } catch (error) {
                console.log(error);
                res.send("Failed to register a new User");
            }
        }
    });
});

module.exports = route;