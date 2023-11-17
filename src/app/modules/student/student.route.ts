import express from "express";
import { studentControllers } from "./student.controller";

const router = express.Router();

router.get("/", studentControllers.getAllStudents);
router.get("/:id", studentControllers.getSingleStudent);
router.post("/create-student", studentControllers.createStudent);

export const studentRoutes = router;