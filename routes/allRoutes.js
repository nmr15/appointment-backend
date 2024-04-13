const express = require("express");
const multer = require("multer");
let getField = multer();
let allRoutes = express.Router();
const { ApptModel, DoctorModel, PatientModel } = require("../models/allSchemas");

// Get all appointments
allRoutes.get("/appointments", async(req, res) =>
{
  const apptData = await ApptModel.find({});
  try
  {
    res.send(apptData);
  }
  catch(error)
  {
    res.status(500).send(error);
  }
});

allRoutes.get("/doctors", async (req, res) => {
  const doctorsData = await DoctorModel.find({});
  try {
    res.send(doctorsData);
  }
  catch (error) {
    res.status(500).send(error);
  }
});

allRoutes.post("/signup", getField.none(), async(req,res) =>
{
  try
  {
    const newPatient = new PatientModel(req.body);
    console.log(req.body);
    let patient = await newPatient.save();
    patient = patient.toObject();
    res.send(patient);
  }
  catch(error)
  {
    console.log(error);
    res.status(500).send(error);
  }
});

allRoutes.post("/newappointment", getField.none(), async(req,res) =>
{
  try
  {
    const newAppt = new ApptModel(req.body);
    console.log(req.body);
    let appt = await newAppt.save();
    apt = appt.toObject();
    res.send(appt);
  }
  catch(error)
  {
    console.log(error);
    res.status(500).send(error);
  }
})

module.exports = { allRoutes };