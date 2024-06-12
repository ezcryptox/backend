const jwt = require("jsonwebtoken");
var bcrypt = require('bcryptjs');
const validator = require('validator')
const profileModel = require("../model/profile")
const userAuth = require("../model/usersAuth")
const { handleNodeMailer } = require("../emailConfig/config")
const { randomUUID } = require("crypto");

const handleCreateOTP = ((length)=>{
    return Math.floor(Math.pow(10, length-1) + Math.random() * (Math.pow(10, length) - Math.pow(10, length-1) - 1));
}) 

const uniqueId = (length=15) => {
  return parseInt(Math.ceil(Math.random() * Date.now()).toPrecision(length).toString().replace(".", ""))
}

const createToken = ((_id)=>{
    return  jwt.sign({_id}, `InenwiNIWb39Nneol?s.mee39nshoosne(3n)`, { expiresIn: '7d' })
})

const handleLoginAuth = (async(req, res)=>{

})


const handleSignAuth = (async(req, res)=>{
    const { auth } = req.body
    if(!validator.isEmail(auth?.email)){
      return  res.status(404).json("Email is not valid")
    }
    if(!validator.isStrongPassword(auth?.password)){
       return res.status(401).json("Password is not strong")
    }
    const Emailexist = await profileModel.findOne({ email: auth?.email })
    if (Emailexist){
      return  res.status(401).json("Email already exist")
    }
    if (!Emailexist){
        const otp = handleCreateOTP(6)
        let netToken = otp.toString()
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(netToken, salt)
        await handleNodeMailer(auth?.email, netToken )
        return res.status(200).json({token: hash, email:`${auth?.email.slice(0,3)}******${auth?.email.slice(-9)}`, resent:{password: auth?.password, email: auth?.email}})
    }
})

const handleCreateUserAuth = (async(req, res)=>{
    const { auth } = req.body
    if(auth){
      const match = await bcrypt.compare(auth.code,auth?.user.token)
      if(!match){
        return res.status(404).json('Incorrect code')
      }
      const Emailexist = await profileModel.findOne({ email: auth.user?.resent.email})
      if (Emailexist){
        return  res.status(401).json("Email already exist")
      }
      else{
        let user_id = uniqueId()
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(auth.user?.resent.password, salt)
        const Token = createToken(user_id)
        await userAuth.create({
          user_id,
          password : hash,
          fa_auth : false,
          created_at : auth.time,
          lastLoginAt : auth.time,
          loginWithGoogle: false,
          email : auth.user?.resent.email,
          phone: "",
          passkey: false,
        })

        await profileModel.create({
          user_id, 
          UUID: randomUUID(),
          email : auth.user?.resent.email,
          level : 1,
        })
        res.status(200).json({Token, user: {user_id, email: auth.user?.resent.email }})
      }
    }
})


module.exports = { handleLoginAuth, handleSignAuth , handleCreateUserAuth}