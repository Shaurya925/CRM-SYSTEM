import express from "express";
import { createLeadController, deleteLeadController, getAllLeadsController, getLeadByIdController, updateLeadController } from "../controller/leadController.js";


const router = express.Router()

router.post("/",createLeadController)
router.get("/",getAllLeadsController)
router.get("/:id", getLeadByIdController)
router.put("/:id",updateLeadController)
router.delete("/:id",deleteLeadController)

export default router;