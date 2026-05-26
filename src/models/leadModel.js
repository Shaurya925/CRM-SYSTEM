import mongoose from "mongoose";

const leadSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },

    phone: {
      type: String,
      required: true,
      trim: true,
    },

    message: {
      type: String,
      required: true,
      trim: true,
    },

    status: {
      type: String,
      enum: ["new", "contacted", "follow-up", "converted", "lost"],
      default: "new",
    },

    notes: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const leadModel = mongoose.model("leadModel", leadSchema);

export default leadModel;