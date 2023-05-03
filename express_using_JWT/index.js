const express = require('express');
const exp = express();
const jwt = require('jsonwebtoken');
require('dotenv').config();
exp.use(express.json());
const fs = require('fs');

const privateKEY = fs.readFileSync('./private.key', 'utf8');
const publicKEY  = fs.readFileSync('./public.key', 'utf8');

const employee = [
  {
    Empcode: 'Emp1',
    EmpName: 'Sundararajan',
    Designation: 'Software Engineer'
  }, {
    Empcode: 'Emp2',
    EmpName: 'Omkumar',
    Designation: 'Software Engineer'
  }, {
    Empcode: 'Emp3',
    EmpName: 'Revathi',
    Designation: 'Software Engineer'
  }, {
    Empcode: 'Emp4',
    EmpName: 'Thinakaran',
    Designation: 'Software Engineer'
  }

]

exp.get('/', (req, res) => {
  res.json(employee);
})

exp.post('/login', (req, res) => {

  const username = req.body.username;
  const empName = { EmpName: username };

  const accestoken = jwt.sign(empName,privateKEY,{
    expiresIn: "24h",
    algorithm: "ES256",
    });
  res.json({ accestoken: accestoken });

})



exp.get('/employee', authenticateToken, (req, res) => {
  console.log(req.empName.EmpName);

  res.json((employee.filter(employee => employee.EmpName === req.empName.EmpName)));


  res.json((employee.filter(employee => employee.EmpName === req.empName.EmpName)));

})


exp.listen(8081, () => { console.log('Working on 127.0.0.1:8081 port') });