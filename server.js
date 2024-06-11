const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();


// ===================================================== APIs folders ===============================================================
const giveAway = require("./routes/public_api")
const Auth = require("./routes/auth")
const Profile = require("./routes/profle")

// ===================================================== APIs middlewares ===============================================================
require("dotenv").config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// ===================================================== APIs routes ===============================================================
app.use("/api/give-away", giveAway);
app.use("/auth", Auth);
app.use("/api/profile", Profile);


const dbUri = `mongodb://localhost:27017/ezcryptox`
// const dbUri = `mongodb+srv://${dbHost}:${dbPass}@cluster0.xmpkpjc.mongodb.net/${dbCompany}?retryWrites=true&w=majority`
mongoose.connect(dbUri, { useNewUrlParser: true,  useUnifiedTopology: true })
    .then((result)=>  console.log('Database connected'))
    .catch((err)=> console.log(err))
app.listen(process.env.PORT, ()=>{
    console.log("Running on port "+ process.env.PORT)
})