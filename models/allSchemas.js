const mongoose = require("mongoose");

const AppointmentSchema = new mongoose.Schema(
{
  doctor: {
    type: String,
    required: true
  },
  fname: {
    type: String,
    required: true
  },
  lname: {
    type: String,
    required: true
  },
  contact: {
    type: String,
    required: true
  },
  appt_date: {
    type: String,
    required: true
  },
  appt_time: {
    type: String,
    required: true
  },
  dateCreated: {
    type: Date,
    default: Date.now
  }
});

const DoctorSchema = new mongoose.Schema(
{
  doctor_name: String,
  specialty: String
});

const PatientSchema = new mongoose.Schema(
{
  fname: {
    type: String,
    required: true
  },
  lname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    index: {unique:true}
  },
  phone: {
    type: Number,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    enum: ["Male", "Female", "Other", "Rather Not Say"],
    default: "Rather Not Say"
  },
  role: {
    type: String,
    enum: ["patient", "doctor"],
    default: "patient"
  }
});

const ApptModel = mongoose.model('Appointment', AppointmentSchema);
const DoctorModel = mongoose.model('Doctor', DoctorSchema);
const PatientModel = mongoose.model('Patient', PatientSchema);

module.exports = { ApptModel, DoctorModel, PatientModel };