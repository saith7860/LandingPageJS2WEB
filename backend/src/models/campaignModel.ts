import mongoose from "mongoose";

const campaignSchema = new mongoose.Schema(
  {
    slug: {
      type: String,
      required: true,
      unique: true,
    },

    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
    },

    resourceUrl: {
      type: String,
      required: true,
    },

    thumbnail: String, // optional (for future UI)

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Campaign", campaignSchema);