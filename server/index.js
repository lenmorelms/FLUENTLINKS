import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
// import mongoose from "mongoose";
import bodyParser from "body-parser";
import morgan from "morgan";
import passport from "passport";
// import expressValidation from "express-validation";
// import asyncHandler from "express-async-handler";
import rateLimit from "express-rate-limit";
// import { errorHandler, notFound } from "./Middleware/Errors.js";
import userRouter from "./Routes/UserRoutes.js";
import { Strategy, ExtractJwt } from "passport-jwt";
// import redis from "redis";
import connectDatabase from "./Config/mongoDB.js";
import User from "./models/UserModel.js";
import ContactSocialRouter from "./Routes/ContactSocialRoutes.js";
import musicCreativeRouter from "./Routes/MusicCreativeRoutes.js";

dotenv.config();
connectDatabase();
const app = express();

// Middleware
app.use(cors());
app.use(helmet());
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("combined"));
app.use(express.static("public"));
app.use("/images", express.static("images"));

// Passport JWT Strategy
const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET,
};

passport.use(
  new Strategy(opts, async (jwt_payload, done) => {
    try {
      // Check if the user associated with the token exists in the database
      const user = await User.findById(jwt_payload.user.id);

      if (user) {
        // If user exists, return them as authenticated
        return done(null, user);
      } else {
        // If user does not exist, return false
        return done(null, false);
      }
    } catch (err) {
      console.error(err);
      return done(err, false);
    }
  })
);

// Routes
app.use("/api/users", userRouter);
app.use("/api/social", ContactSocialRouter);
app.use("/api/creative", musicCreativeRouter);

// Error Handling
// app.use(notFound);
// app.use(errorHandler);

// Rate Limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Testing
// Your Mocha/Chai setup for testing goes here

// Environment Variables
const PORT = process.env.PORT || 3000;

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});