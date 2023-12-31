import mongoose from "mongoose";

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    viewsCount: {
      type: Number,
      unique: true,
      default: 0,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    imageUrl: String,
    fileUrl: String,
    fileFormat: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Post", PostSchema);
