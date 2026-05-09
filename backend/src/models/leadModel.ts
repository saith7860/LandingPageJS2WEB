import mongoose, { Types } from "mongoose";
const leadSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },

    campaign: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Campaign",
    },

    isVerified: {
      type: Boolean,
      default: false,
    },

    verificationToken: {
      type: String,
    },

    verificationTokenExpires: {
      type: Date,
    },

    verifiedAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

const Lead= mongoose.model("Lead", leadSchema);
export default Lead;