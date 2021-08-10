const { Router } = require("express");
const express = require("express");
const Employee= require('../model/employee');
const createError= require('http-errors');

const router = express.Router();

router.get("/list", async (req, res, next) => {
  
  try {
     const result=new Employee.find({},{__password});
     console.log(result);
     res.json(result);
  } catch (error) {
    console.log(error);
      res.json(createError.InternalServerError());
  }
});

router.post('/add',async(req,res)=>{
    try {
        const employee= new Employee(req.body);
        const result = await employee.save();
        console.log(result);
        res.send(result);      
    } catch (error) {
        console.log(error);
        res.json(createError.InternalServerError());
    }
})

module.exports = router;
