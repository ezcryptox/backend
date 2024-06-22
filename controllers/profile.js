const profileModel = require("../model/profile")
const User = require("../model/usersAuth")

const handleUserProfile = (async(req, res)=>{
    try{
        const user_id = req.id
        const profile = await profileModel.findOne({user_id})
        return res.status(200).json(profile)
    }
    catch(err){
        console.log(err)
        return res.status(500).json("Server Error")
    }
})

const handleUserSecurity = (async(req, res)=>{
    try{
        const user_id = req.id
        const user = await User.findOne({user_id})
        return res.status(200).json(user)
    }
    catch(err){
        console.log(err)
        return res.status(500).json("Server Error")
    }
})

module.exports = { handleUserProfile, handleUserSecurity }