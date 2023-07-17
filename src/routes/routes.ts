import express from "express";
import apiCall from "../service/apiCall";
import locationCall from "../service/locationCall";

const router = express.Router();

// Fetch restaurants
router.post("/search", apiCall);

// Fetch location
router.post("/location", locationCall);

export default router;
