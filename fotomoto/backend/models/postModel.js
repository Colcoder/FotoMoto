const mongoose = require("mongoose");

const postSchema = mongoose.Schema(
  {
    description:{
      type:String
    }
  },
  {
    timestamps: true,
  },
  {
    collection: "posts",
  }
);

const Post = mongoose.model("Post",postSchema);
module.exports = Post;
