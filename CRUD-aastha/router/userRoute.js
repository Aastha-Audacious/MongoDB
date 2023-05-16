const express = require('express');
const router = express.Router();
const controller = require("../controller/crudController")

router.post("/create",controller.createUser)
router.get('/getalluser', controller.getAllUser)
router.get('/totalusers', controller.countUsers)

router.get("/read/:id",controller.getUser)
router.put("/update/:id",controller.updateUser)
router.delete("/delete/:id",controller.deleteUser)

module.exports = router