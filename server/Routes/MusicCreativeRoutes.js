import express from 'express';
import asyncHandler from "express-async-handler";
import passport from "passport";
import musicCreative from '../Models/MusicCreativeModel.js';

const musicCreativeRouter = express.Router();

musicCreativeRouter.post(
    "/",
    passport.authenticate('jwt', { session: false }),
    asyncHandler( async (req, res) => {
        const { userId, image, heading, youtube, audiomack, soundcloud, spotify, appleMusic, itunes, tidal, boomsPlay, other } = req.body;
        try {
            // check if link/liknks exist
            const creativeLinks = await musicCreative.findOne({ userId });

            if(creativeLinks) {
                creativeLinks.image = image || creativeLinks.image;
                creativeLinks.heading = heading || creativeLinks.heading;
                creativeLinks.youtube = youtube || creativeLinks.youtube;
                creativeLinks.audiomack = audiomack || creativeLinks.audiomack;
                creativeLinks.soundcloud = soundcloud || creativeLinks.soundcloud;
                creativeLinks.spotify = spotify || creativeLinks.spotify;
                creativeLinks.appleMusic = appleMusic || creativeLinks.appleMusic;
                creativeLinks.itunes = itunes || creativeLinks.itunes;
                creativeLinks.tidal = tidal || creativeLinks.tidal;
                creativeLinks.boomsPlay = boomsPlay || creativeLinks.boomsPlay;
                creativeLinks.other = other || creativeLinks.other;

                await musicCreative.create(creativeLinks);
                res.json({ creativeLinks });
             } else {
                const links = await musicCreative.create({ userId, image, heading, youtube, audiomack, soundcloud, spotify, appleMusic, itunes, tidal, boomsPlay, other });
                if(links) {
                    res.status(201).json({ creativeLinks: links });
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

musicCreativeRouter.get(
    "/",
    passport.authenticate('jwt', { session: false }),
    asyncHandler( async (req, res) => {
        const { userId } = req.body;

        try {
            const creativeLinks = await musicCreative.findOne({ userId });
            if(creativeLinks) {
                res.status(200).json({ creativeLinks });
            } else {
                res.status(204).json({ "msg": "Failed to get links." });
            }
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }
    })
);

musicCreativeRouter.get(
    "/:id",
    passport.authenticate('jwt', { session: false }),
    asyncHandler( async (req, res) => {
         try {
            const creativeLinks = await musicCreative.findOne({ userId: req.params.id });
            if(creativeLinks) {
                res.status(201).json({ creativeLinks });
            } else {
                res.status(204).json({ msg: "Failed to get links." });
            }
         } catch(err) {
            console.error(err.message);
            res.status(500).send('Server Error');
         }
    })
);
musicCreativeRouter.patch(
    "/:id",
    asyncHandler( async (req, res) => {
        const { image, heading, youtube, audiomack, soundcloud, spotify, appleMusic, itunes, tidal, boomsPlay, other } = req.body;

        // check if links exists
        try {
            const links = await musicCreative.findById(req.params.id);

            if (links) {
                links.image = image || links.image;
                links.heading = heading || heading;
                links.youtube = youtube || links.youtube;
                links.audiomack = audiomack || links.audiomack;
                links.soundcloud = soundcloud || links.soundcloud;
                links.spotify = spotify || links.spotify;
                links.appleMusic = appleMusic || links.appleMusic;
                links.itunes = itunes || links.itunes;
                links.tidal = tidal || links.tidal;
                links.boomsPlay = boomsPlay || links.boomsPlay;
                links.other = other || links.other;

                const updatedLinks = await links.save();
                res.status(201).json({ creativeLinks: updatedLinks });
            } else {
                return res.status(204).json({ msg: 'Links do not exist' });
            }
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }
    })
);
musicCreativeRouter.delete(
    "/:id",
    asyncHandler( async (req, res) => {
        // check if link exists
        try {
            const link = musicCreative.findById(req.params.id);
            if(link) {
                await musicCreative.deleteOne({ _id: req.params.id }).then(() => {
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

export default musicCreativeRouter;