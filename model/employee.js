const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const employeeSchema = new Schema({
  emp_id: {
      type:Number,
      unique: true
  },
  f_name: {
    type: String,
    required: true,
  },
  l_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  sup_id: {
    type: Number,
  },
  status: {
    type: Number,
    required: true,
  },
  role: {
    type: Number,
    required: true,
  }
});

const Employee = mongoose.model("employee", employeeSchema);
module.exports = Employee;
