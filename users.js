import express from "express";

const router = express.Router();
router.get('/users',(req, res)=>{
    res.send("GET route is reached successfully");
})

export default router;