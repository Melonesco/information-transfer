import PostModel from "../models/Post.js";

export const createPost = async (req, res) => {
  const { title, text, user, imageUrl, fileUrl, fileFormat } = req.body;

  try {
    const post = new PostModel({
      title,
      text,
      user,
      imageUrl,
      fileUrl,
      fileFormat,
    });
    await post.save();
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ error: "Не вийшло створити статтю" });
  }
};

export const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    await PostModel.findByIdAndRemove(id);
    res.status(200).json({ message: "Статтю видалено успішно" });
  } catch (error) {
    res.status(500).json({ error: "Не вийшло видалити статтю" });
  }
};

export const getAllPosts = async (req, res) => {
  try {
    const posts = await PostModel.find().populate("user");
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: "Не вийшло получити статті" });
  }
};

export const getPostById = async (req, res) => {
  try {
    const { postId } = req.params;
    const post = await PostModel.findById(postId).populate("user");
    if (!post) {
      return res.status(404).json({ message: "Статтю не знайдено" });
    }
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ error: "Не вийшло получити статтю" });
  }
};
