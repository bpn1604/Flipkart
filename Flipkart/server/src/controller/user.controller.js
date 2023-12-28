const User = require('../model/user.schema')
const userSignup = async (req, res) => {
    try {
        const exist = await User.findOne({ userName: req.body.userName })
        if (exist) {
            return res.status(401).json({
                message: "Username Already Exist"
            })
        }
        const user = req.body;
        const newUser = new User(user);
        await newUser.save();

        return res.status(201).json({
            message: user
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const userLogin = async (req, res) => {
    try {
        const userName = req.body.userName;
        const password = req.body.password;

       let user = await User.findOne({ userName:userName, password:password })
        if(user){
            return res.status(201).json({data:user})
        }
        else{
            return res.status(401).json(
            "Invalid Username or Password"
            )
        }
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}




module.exports = {userSignup,userLogin}