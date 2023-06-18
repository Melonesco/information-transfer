import CommentModel from "../models/Comment.js";

export const createComment = async (req, res) => {
  const { title, post } = req.body;

  const { userId } = req;

  try {
    const comment = await CommentModel.create({ title, user: userId, post });
    res.status(200).json(comment);
  } catch (error) {
    res.status(500).json({ error: "Помилка при створенні коментаря" });
  }
};

export const deleteComment = async (req, res) => {
  try {
    const { id } = req.params;
    await CommentModel.findByIdAndRemove(id);
    res.status(200).json({ message: "Коментар видалено успішно" });
  } catch (error) {
    res.status(500).json({ error: "Помилка при видаленні коментаря" });
  }
};

export const getCommentById = async (req, res) => {
  try {
    const { id } = req.params;
    const comment = await CommentModel.findById(id);
    res.status(200).json(comment);
  } catch (error) {
    res.status(500).json({ error: "Помилка при отриманні коментаря" });
  }
};

export const getAllComments = async (req, res) => {
  try {
    const comments = await CommentModel.find()
      .populate("user")
      .populate("post");
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ error: "Помилка при отриманні коментарів" });
  }
};
