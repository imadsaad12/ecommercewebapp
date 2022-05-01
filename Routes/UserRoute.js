const express = require("express")
const route = express.Router();
const User = require("../models/Users");

route.post("/login", async (req, res) => {

    const data = req.body;
    const email = data.email;
    const password = data.password;

    try {
        await User.findOne({ email: email, password: password }, (err, result) => {
            if (err)
                return res.status(500).send("Error during Login");
            if (!result)
                return res.status(404).send("No User found or Wrong Password");
            else
                return res.status(200).send("Login Succeed");
        });

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
                const user = new User({
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