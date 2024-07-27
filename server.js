const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const app = express();
require("dotenv").config();


// ===================================================== APIs folders ===============================================================
const giveAway = require("./routes/public_api")
const referral = require("./routes/referrals")
const Auth = require("./routes/auth")
const Profile = require("./routes/profle")
const notificationRoutes = require('./routes/notifications');
const transactionRoutes = require('./routes/transaction');
const cryptoAssetRoutes = require('./routes/cryptoasset');
const blogRoutes = require('./routes/blog');
const articleRoutes = require('./routes/article');


// ===================================================== APIs middlewares ===============================================================
require("dotenv").config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"))

// ===================================================== APIs routes ===============================================================
app.use("/api/give-away", giveAway);
app.use("/api/referral", referral);
app.use("/auth", Auth);
app.use("/api/profile", Profile);
app.use('/api/notifications', notificationRoutes);
app.use('/api/transactions', transactionRoutes);
app.use('/api/assets', cryptoAssetRoutes);
app.use('/api/blog', blogRoutes);
app.use('/api/article', articleRoutes);

app.get("/", (req, res) => {
    res.status(200).json({ status: "Server is running smoothly" })
})
const dbHost = "highscoreteh"
const dbPass = "eNiIQbm4ZMSor8VL"
const dbCompany = "ezcryptox"

// const dbUri = `mongodb://127.0.0.1:27017/ezcryptox`
const dbUri = `mongodb+srv://${dbHost}:${dbPass}@cluster0.xmpkpjc.mongodb.net/${dbCompany}?retryWrites=true&w=majority`

mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => console.log('Database connected'))
    .catch((err) => console.log(err))
app.listen(process.env.PORT, () => {
    console.log("Running on port " + process.env.PORT)
})