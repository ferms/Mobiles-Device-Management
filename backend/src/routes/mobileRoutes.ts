
const express = require("express");
const router = express.Router();
import { getSmartphone, createSmartphone, updateSmartphone, deleteSmartphone } from "../controllers/mobileController";

router.get("/mobileAll", getSmartphone);
router.post("/mobileCreate", createSmartphone); 
router.put("/mobileUpdate/:id", updateSmartphone);
router.delete("/mobileDelete/:id", deleteSmartphone);

export default router;
