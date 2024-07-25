const profileModel = require("../model/profile")
const User = require("../model/usersAuth")

const handleUserProfile = (async(req, res)=>{
    try{
        const user_id = req.id
        const profile = await profileModel.findOne({ user_id })
        const user = await User.findOne({user_id})
        return res.status(200).json({ profile, referral: { refCode: user.refCode, QrCode_src: user.QrCode_src } })
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

const handleReferralLeaderBoard = (async (req, res) => {
    try {
        const users = await User.find({referralEarnings: {$gt: 0}}).limit(10).select('email Invitees referralEarnings').sort({referralEarnings: -1}).lean();
        return res.status(200).json({ leaderboard: users.map(user => ({ ...user, email: user.email.replace(/^(.{2}).*@/, '$1***@') }))})
    }
    catch (err) {
        console.log(err)
        return res.status(500).json("Server Error")
    }
})

module.exports = { handleUserProfile, handleUserSecurity, handleReferralLeaderBoard }