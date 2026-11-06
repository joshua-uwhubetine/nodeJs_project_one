import express from "express";

const router = express.Router();

router.get("/about", (req, res) => {
  res.json({
    message: "About Us",
    description: "Express.js application business",
  });
});

export default router;
