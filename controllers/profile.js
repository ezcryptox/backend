const profileModel = require("../model/profile")
const User = require("../model/usersAuth")

const handleUserProfile = (async(req, res)=>{
    const user_id = req.id
    try{
        const profile = await profileModel.findOne({user_id})
        return res.status(200).json(profile)
    }
    catch(err){
        return res.status(500).json(err)
    }
})

const handleUserSecurity = (async(req, res)=>{
    const user_id = req.id
    try{
        const user = await User.findOne({user_id})
        return res.status(200).json(user)
    }
    catch(err){
        return res.status(500).json(err)
    }
})

module.exports = { handleUserProfile, handleUserSecurity }