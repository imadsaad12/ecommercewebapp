const User = require("../models/Users");

const login = async (req, res) => {
    console.log(req.body)
    try {
        const data = req.body;
        const email = data.email;
        const password = data.password;
        const user = await User.findOne({ email: email, password: password });
        if (user) {
            console.log(user)
            res.status(200).send("done")
        }
        else {
            res.status(400).send("failed")
        }
    } catch (error) {
        console.log(error);
    }
}

const signup = async (req, res) => {
    const data = req.body;
    const newUser = await User.findOne({ email: data.email });
    if (newUser) {
        res.status(400).send("user exist");
    }
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
}

module.exports = {
    login,
    signup
}