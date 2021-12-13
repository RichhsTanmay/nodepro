const express = require('express');
const router = express.Router();
const StudentController = require("../controllers/studentcontroller");


router.post("/create-User",StudentController.createUser);
router.get("/get-Users",StudentController.getUsers);
router.get("/get-User/:id",StudentController.getUser);
router.patch("/update-User/:id",StudentController.updateUser);
router.delete("/delete-User/:id",StudentController.deleteUser);

module.exports = router;