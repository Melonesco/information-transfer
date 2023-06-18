import bcrypt from "bcrypt";
import UserModel from "../models/User.js";
import PostModel from "../models/Post.js";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    const password = req.body.password;
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const doc = new UserModel({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      avatarUrl: req.body.avatarUrl,
      isAdmin: req.body.isAdmin,
      passwordHash: hash,
    });

    const user = await doc.save();

    const token = jwt.sign(
      {
        _id: user._id,
      },
      "secret123",
      {
        expiresIn: "30d",
      }
    );

    const { passwordHash, ...userData } = user._doc;

    res.json({
      ...userData,
      token,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Не получилося зареєструвати користувача",
    });
  }
};

export const login = async (req, res) => {
  try {
    const user = await UserModel.findOne({ email: req.body.email });

    if (!user) {
      return res.status(404).json({
        message: "Користувача не найдено",
      });
    }

    const isValidPass = await bcrypt.compare(
      req.body.password,
      user._doc.passwordHash
    );

    if (!isValidPass) {
      return res.status(404).json({
        message: "Неправильний логін або пароль",
      });
    }

    const token = jwt.sign(
      {
        _id: user._id,
      },
      "secret123",
      {
        expiresIn: "30d",
      }
    );

    const { passwordHash, ...userData } = user._doc;

    res.json({
      ...userData,
      token,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Не получилося зареєструватися користувача",
    });
  }
};

export const getMe = async (req, res) => {
  try {
    const user = await UserModel.findById(req.userId);

    if (!user) {
      return res.status(404).json({
        message: "Користувача не знайдено",
      });
    }
    const { passwordHash, ...userData } = user._doc;

    res.json(userData);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Немає доступу",
    });
  }
};

export const getUserById = async (req, res) => {
  const userId = req.params.id;

  try {
    const user = await UserModel.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const updateUser = async (req, res) => {
  const userId = req.params.id;

  try {
    const user = await UserModel.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "Користувача не знайдено" });
    }

    user.firstName = req.body.firstName || user.firstName;
    user.lastName = req.body.lastName || user.lastName;
    user.email = req.body.email || user.email;
    user.avatarUrl = req.body.avatarUrl || user.avatarUrl;
    user.description = req.body.description || user.description;

    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(req.body.password, salt);
      user.passwordHash = hash;
    }

    const updatedUser = await user.save();

    const { passwordHash, ...userData } = updatedUser._doc;

    res.status(200).json(userData);
  } catch (error) {
    res.status(500).json({ message: "Помилка сервера" });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await UserModel.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: "Помилка при отриманні користувачів" });
  }
};

export const deleteUserAndPosts = async (req, res) => {
  const { id } = req.params;

  try {
    await UserModel.findByIdAndDelete(id);

    await PostModel.deleteMany({ user: id });

    res
      .status(200)
      .json({ message: "Користувач та його пости успішно видалені" });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Помилка при видаленні користувача та його постів" });
  }
};
