import express from 'express';
import asyncHandler from "express-async-handler";
import passport from "passport";
import contactSocial from '../Models/ContactSocialModel.js';

const contactSocialRouter = express.Router();

// POST SOCIAL LINKS
contactSocialRouter.post(
    "/",
    passport.authenticate('jwt', { session: false }),
    asyncHandler( async (req, res) => {
        // const userId = mongoose.Types.ObjectId(req.body.userId);
        const { userId, image, heading, instagram, twitter, tiktok, facebook, whatsapp, telegram, email, website, saveContact } = req.body;
        try {
            // check if link/liknks exist
            const socialLinks = await contactSocial.findOne({ userId });

            if(socialLinks) {
                socialLinks.image = image || socialLinks.image;
                socialLinks.heading = heading || socialLinks.heading;
                socialLinks.instagram = instagram || socialLinks.instagram;
                socialLinks.twitter = twitter || socialLinks.twitter;
                socialLinks.tiktok = tiktok || socialLinks.tiktok;
                socialLinks.facebook = facebook || socialLinks.facebook;
                socialLinks.whatsapp = whatsapp || socialLinks.whatsapp;
                socialLinks.telegram = telegram || socialLinks.telegram;
                socialLinks.email = email || socialLinks.email;
                socialLinks.website = website || socialLinks.website;
                socialLinks.saveContact = saveContact || socialLinks.saveContact;

                // await socialLinks.save();
                await contactSocial.create(socialLinks);
                res.status(201).json({ socialLinks });
             } else {
                const links = await contactSocial.create({ userId, image, heading, instagram, twitter, tiktok, facebook, whatsapp, telegram, email, website, saveContact });
                if(links) {
                    res.status(201).json({ socialLinks: links });
                } else {
                    res.status(400).json({ msg: "Failed to create links." });
                }
             }
        } catch(err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }
    })
);

// GET USER SPECIFIC SOCIAL LINKS
contactSocialRouter.get(
    "/",
    passport.authenticate('jwt', { session: false }),
    asyncHandler( async (req, res) => {
        const { userId } = req.body;

        try {
            const socialLinks = await contactSocial.findOne({ userId });
            if(socialLinks) {
                res.status(200).json({ socialLinks });
            } else {
                res.status(204).json({ msg: "Failed to get links." });
            }
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }
    })
);

// GET USER SPECIFIC SOCIAL LINKS
contactSocialRouter.get(
    "/:id",
    passport.authenticate('jwt', { session: false }),
    asyncHandler( async (req, res) => {
         try {
            const socialLinks = await contactSocial.findOne({ userId: req.params.id});
            if(socialLinks) {
                res.json({ socialLinks });
            } else {
                res.status(200).status(204).json({ msg: "Failed to get links." });
            }
         } catch(err) {
            console.error(err.message);
            res.status(500).send('Server Error');
         }
    })
);
// EDIT USER SPECIFIC SOCIAL LINKS
contactSocialRouter.patch(
    "/:id",
    asyncHandler( async (req, res) => {
        const { image, heading, instagram, twitter, tiktok, facebook, whatsapp, telegram, email, website, saveContact } = req.body;

        // check if links exists
        try {
            const links = await contactSocial.findById(req.params.id);
            // res.json(links);

            if (links) {
                links.image = image || links.heading;
                links.heading = heading || links.heading;
                links.instagram = instagram || links.instagram;
                links.twitter = twitter || links.twitter;
                links.tiktok = tiktok || links.tiktok;
                links.facebook = facebook || links.facebook;
                links.whatsapp = whatsapp || links.whatsapp;
                links.telegram = telegram || links.telegram;
                links.email = email|| links.email;
                links.website = website || links.website
                links.saveContact = saveContact || links.saveContact;

                const updatedLinks = await links.save();
                res.status(201).json({ socialLinks: updatedLinks });
            } else {
                return res.status(204).json({ msg: 'Links do not exist' });
            }
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }
    })
);
contactSocialRouter.delete(
    "/:id",
    asyncHandler( async (req, res) => {
        // check if link exists
        try {
            const link = contactSocial.findById(req.params.id);
            if(link) {
                await contactSocial.deleteOne({ _id: req.params.id }).then(() => {
                    res.status(200).json({ msg: "Deleted links successfully." });
                });
            } else {
                return res.status(204).json({ msg: "Links do not exist" });
            }
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }
    })
);

export default contactSocialRouter;