const express = require("express");
const router = express.Router();
const EmployeeModule = require("../modules/EmployeeModule");

router.get("/get", EmployeeModule.getEmployees);

router.put("/update/:employeeId", EmployeeModule.updateEmployee);

router.post("/create", EmployeeModule.createEmployee);

router.delete("/delete/:deleteId", EmployeeModule.deleteEmployee);

module.exports = router;
