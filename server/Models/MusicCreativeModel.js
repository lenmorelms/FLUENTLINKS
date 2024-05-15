import mongoose from "mongoose";

const musicCreativeSchema = mongoose.Schema(
    {
        userId: {
            // type: mongoose.Schema.Types.ObjectId,
            type: String,
            required: true,
        },
        // links: {
        //     type: Array,
        //     required: true,
        //     default: [],
        // },
        image: {
            type: String,
        },
        heading: {
            type: String,
        },
        youtube: {
            type: String,
        },
        audiomack: {
            type: String,
        },
        soundcloud: {
            type: String,
        },
        spotify: {
            type: String,
        },
        appleMusic: {
            type: String,
        },
        itunes: {
            type: String,
        },
        tidal: {
            type: String,
        },
        boomsPlay: {
            type: String,
        },
        other: {
            type: Array,
        },
    },
    {
        timestamps: true,
    }
);
const musicCreative = mongoose.model("musicCreative", musicCreativeSchema);

export default musicCreative;