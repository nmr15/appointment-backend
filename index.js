const express = require("express");
const mognoose = require("mongoose")
const cors = require("cors");
const dotenv = require("dotenv");
const { default: mongoose } = require("mongoose");
dotenv.config();
const { allRoutes } = require("./routes/allRoutes");

const app = express();
app.use(express.json());
// let corspolicy = { origin: 'https://nmr-appointment-app.onrender.com/' };
// app.use(cors(corspolicy));

app.use((req, res, next) => 
{
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
  next();
});
        
const db = module.exports = async () =>
{
  try
  {
    await mongoose.connect('mongodb+srv://atlascluster.5m8bpqm.mongodb.net/appointmentApp?retryWrites=true&w=majority', { user: process.env.DBUSERNAME, pass: process.env.DBPASSWORD, useNewUrlParser: true, useUnifiedTopology: true});
    console.log("MongoDB Connection is successful");
  }
  catch(error)
  {
    console.log(error);
    console.log("MongoDB Connection failed");
  }
}

db();

app.use('/', (req,res, next) =>
{
  console.log("A new request received at " + new Date(Date.now()));
  next();
});

app.use('/', allRoutes)

app.listen(process.env.PORT, () =>
{
  console.log(`App listening at http://localhost:${process.env.PORT}`);
});
