import express from "express";

const router = express.Router();

router.get("/", getGeneral);

export default router;
