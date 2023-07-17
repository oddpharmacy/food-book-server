import express from "express";
import apiCall from "../service/apiCall";

const router = express.Router();

// Fetch restaurants
router.post("/search", apiCall);

export default router;
