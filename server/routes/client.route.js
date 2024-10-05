import express from "express";

const router = express.Router();

router.get("/", getClient);

export default router;
