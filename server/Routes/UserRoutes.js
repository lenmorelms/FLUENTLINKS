import express from 'express';
import asyncHandler from "express-async-handler";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import passport from "passport";
import User from '../models/UserModel.js'
import contactSocial from '../Models/ContactSocialModel.js';
import musicCreative from '../Models/MusicCreativeModel.js';
import sendVerificationEmail from '../utils/email.js';
import sanitizeInput from '../utils/sanitizeInput.js';

const userRouter = express.Router();

// REGISTER
userRouter.post(
    "/register",
    asyncHandler(async (req, res) => {
        const { email, username, age, gender, country } = req.body;
        const password = sanitizeInput(req.body.password);

        try {
            // Check if user already exists
            let user = await User.findOne({ email });
            if (user) {
              return res.status(400).json({ msg: 'User already exists' });
            }

            // generate verification token
            const verificationToken = Math.random().toString(36).substring(7);
        
            // Create new user
            user = new User({ email, username, age, gender, country, password, verificationToken });
        
            // Hash password
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(password, salt);
        
            // Save user to database and send verification token to email
            await user.save();
            await sendVerificationEmail(email, verificationToken, "register");    
            res.json({ user, msg: "User registered successfully" });
          } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
          }
}));

// LOGIN
userRouter.post(
    "/login",
    asyncHandler(async (req, res) => {
        const { email } = req.body;
        const password = sanitizeInput(req.body.password);

        try {
          // Check if user exists
          let user = await User.findOne({ email });
          if (!user) {
            return res.status(400).json({ msg: 'Invalid credentials' });
          }
      
          // Check password
          const isMatch = await bcrypt.compare(password, user.password);
          if (!isMatch) {
            return res.status(400).json({ msg: 'Invalid credentials' });
          }
          // Check if user is verifield
          if(user.verified === false) {
            return res.status(400).json({ msg: 'User not verifield' });
          }
      
          // Generate JWT token
          const payload = {
            user: {
              id: user.id
            }
          };
      
          jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' }, (err, token) => {
            if (err) throw err;
            res.json({ token, user });
          });
        } catch (err) {
          console.error(err.message);
          res.status(500).send('Server Error');
        }

}));

// FORGOT PASSWORD
userRouter.patch(
  '/forgot-password',
  asyncHandler ( async (req, res) => {
    const { email } = req.body;
    try {
      const user = await User.findOne({ email });
      
      if (user) {
        const verificationToken = Math.random().toString(36).substring(3);
        user.verificationToken = verificationToken;
        await user.save();
        await sendVerificationEmail(email, verificationToken, "forgot-password");
        res.json({ user, msg: "Email with password reset link sent" });
    } else {
      return res.status(204).json({ msg: 'Email does not exist' });
    }
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
  })
);

// RESET PASSWORD
userRouter.patch(
  '/reset-password/:id',
  asyncHandler ( async (req, res) => {
    const verificationToken = req.params.id;
    const password = sanitizeInput(req.body.password);

    try {
      const user = await User.findOne({ verificationToken });

      if(user) {
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);
        await user.save();
        res.json({ user, msg: "Password reset successfully" });
      } else {
        return res.status(404).json({ msg: 'Invalid verification token' });
      }
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
  })
);

// VERIFY USER
userRouter.patch(
  '/verify/:id',
  asyncHandler ( async (req, res) => {
    const verificationToken = req.params.id;
    
    try {
      const user = await User.findOne({ verificationToken });

      if (user) {
        user.verified = true;
        await user.save();

         // Generate JWT token
         const payload = {
          user: {
            id: user.id
          }
        };
    
        jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' }, (err, token) => {
          if (err) throw err;
          res.json({ token, user });
        });
      } else {
        return res.status(404).json({ msg: "Invalid verification code" });
      }

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
  })
);

// RESEND CODE
userRouter.get(
  '/resend-code/:id',
  asyncHandler ( async (req, res) => {
    try {
        const user = await User.findById(req.params.id);

        if (user) {
          sendVerificationEmail(user.email, user.verificationToken, "register");
          res.json({ user, msg: "Verification link sent" });
        } else {
          return res.status(404).json({ msg: "User does not exist" });
        }
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Sever Error');
    }
  })
);

// GET USER PROFILE
userRouter.get(
  '/profile/:id',
   passport.authenticate('jwt', { session: false }),
   asyncHandler ( async (req, res) => {
      // The user is authenticated, so req.user contains the authenticated user
      res.json({ user: req.user});
}));

// UPDATE PROFILE
userRouter.patch(
  '/profile/:id',
   passport.authenticate('jwt', { session: false }),
   asyncHandler ( async (req, res) => {
      const { email, username } = req.body;
      const password = sanitizeInput(req.body.password);

      // check if user exists
      try {
        const user = await User.findById(req.params.id);
        if(user) {
          user.email = email || user.email;
          user.username = username || user.username;
        if (req.body.password) {
          // Hash password
          const salt = await bcrypt.genSalt(10);
          user.password = await bcrypt.hash(password, salt);
        }
          const upddatedUser = await user.save();
          res.json({ user: upddatedUser })
        } else {
          return res.status(204).json({ msg: 'User does not exist' });
        }
      } catch (err) {
          console.error(err.message);
          res.status(500).send('Server Error');
      }
}));

// DELETE USER
userRouter.delete(
  "/profile/:id",
  passport.authenticate('jwt', { session: false }),
  asyncHandler( async (req, res) => {
      // check if user exists
      try {
          const user = User.findById(req.params.id);
          if(user) {
              const deletedUser = await User.deleteOne({ _id: req.params.id });

              // delete contactSocial and musicCreative links
              await Promise.all([
                contactSocial.deleteOne({ userId: deletedUser._id }),
                musicCreative.deleteOne({ userId: deletedUser._id })
              ]);

              res.status(200).json({ msg: "User deleted successfully." });
          } else {
              return res.status(204).json({ msg: "User not found" });
          }
      } catch (err) {
          console.error(err.message);
          res.status(500).send('Server Error');
      }
  })
);

// LOGOUT
userRouter.post(
  '/logout',
  passport.authenticate('jwt', { session: false }),
  asyncHandler( async (req, res) => {
    // Clear session (if you're using sessions)
    // req.logout();

    // Clear JWT token (if you're using JWT)
    res.clearCookie('jwt');

    // Optionally, you can also send a response indicating successful logout
    res.json({ msg: 'Logout successful' });
}));

export default userRouter;