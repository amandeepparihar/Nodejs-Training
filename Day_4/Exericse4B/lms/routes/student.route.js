var express = require("express");
var requireLogin = require("../middleware/auth");
var studentController = require("../controllers/studentController");
var router = express.Router();

router.get("/", requireLogin, studentController.getStudents);
router.get("/:id", requireLogin, studentController.getStudentById);
router.post("/", requireLogin, studentController.createStudent);
router.put("/:id", requireLogin, studentController.updateStudent);
router.delete("/:id", requireLogin, studentController.deleteStudent);

module.exports = router;
