import mongoose from "mongoose";

const contactSocialSchema = mongoose.Schema(
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
        instagram: {
            type: String,
        },
        twitter: {
            type: String,
        },
        tiktok: {
            type: String,
        },
        facebook: {
            type: String,
        },
        whatsapp: {
            type: String,
        },
        telegram: {
            type: String,
        },
        email: {
            type: String,
        },
        website: {
            type: String,
        },
        saveContact: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);
const contactSocial = mongoose.model("contactSocial", contactSocialSchema);

export default contactSocial;