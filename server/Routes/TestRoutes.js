import express from 'express';
import asyncHandler from "express-async-handler";

const testRouter = express.Router();
const testData = [
    { id: 1, name: "ABC" },
    { id: 2, name: "EFG" },
    { id: 3, name: "HIJ" },
    { id: 4, name: "KLM" }
]
testRouter.get(
    '/',
     asyncHandler ( async (req, res) => {
        res.json({ testData });
}));

export default testRouter;