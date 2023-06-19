import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";
import multer from "multer";
import routes from "./src/routes/index.js";
import * as http from "http";
import "dotenv/config";
import { checkAuth } from "./utils/index.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", routes);

const storageImg = multer.memoryStorage();
const storageUserImg = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/users/images");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});
const storageFile = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/files");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});

const uploadImg = multer({ storage: storageImg });
const uploadUserImg = multer({ storage: storageUserImg });
const uploadFile = multer({ storage: storageFile });

app.use("/uploads/images", express.static("uploads/images"));
app.use("/uploads/users/images", express.static("uploads/users/images"));
app.use("/uploads/files", express.static("uploads/files"));

app.post(
  "/upload/images",
  checkAuth,
  uploadImg.single("image"),
  async (req, res) => {
    try {
      const { originalname, buffer } = req.file;
      const encodedImage = buffer.toString("base64");
      const response = await fetch(
        `${process.env.KV_REST_API_URL}/set/${originalname}`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${process.env.KV_REST_API_TOKEN}`,
            "Content-Type": "application/octet-stream",
          },
          body: encodedImage,
        }
      );
      if (response.ok) {
        res.json({
          url: `/uploads/images/${originalname}`,
        });
      } else {
        throw new Error("Image upload failed");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      res.status(500).json({ error: "Image upload failed" });
    }
  }
);

app.post(
  "/upload/users/images",
  checkAuth,
  uploadUserImg.single("image"),
  async (req, res) => {
    try {
      const { originalname, buffer } = req.file;
      const encodedImage = buffer.toString("base64");
      const response = await fetch(
        `${process.env.KV_REST_API_URL}/set/${originalname}`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${process.env.KV_REST_API_TOKEN}`,
            "Content-Type": "application/octet-stream",
          },
          body: encodedImage,
        }
      );
      if (response.ok) {
        res.json({
          url: `/upload/users/images/${originalname}`,
        });
      } else {
        throw new Error("Image upload failed");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      res.status(500).json({ error: "Image upload failed" });
    }
  }
);

app.post(
  "/upload/files",
  checkAuth,
  uploadFile.single("file"),
  async (req, res) => {
    try {
      const { originalname, path } = req.file;
      // Process the uploaded file for "/uploads/files"
      // ...
      res.json({
        url: `/uploads/files/${originalname}`,
      });
    } catch (error) {
      console.error("Error uploading file:", error);
      res.status(500).json({ error: "File upload failed" });
    }
  }
);

app.get("/images/:filename", async (req, res) => {
  try {
    const { filename } = req.params;
    const response = await fetch(
      `${process.env.KV_REST_API_URL}/get/${filename}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.KV_REST_API_TOKEN}`,
        },
      }
    );
    if (response.ok) {
      const encodedImage = await response.text();
      const decodedImage = Buffer.from(encodedImage, "base64");
      res.set("Content-Type", "image/jpeg");
      res.send(decodedImage);
    } else {
      res.status(404).json({ error: "Image not found" });
    }
  } catch (error) {
    console.error("Error retrieving image:", error);
    res.status(500).json({ error: "Failed to retrieve image" });
  }
});

app.get("/users/images/:filename", async (req, res) => {
  try {
    const { filename } = req.params;
    const response = await fetch(
      `${process.env.KV_REST_API_URL}/get/${filename}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.KV_REST_API_TOKEN}`,
        },
      }
    );
    if (response.ok) {
      const encodedImage = await response.text();
      const decodedImage = Buffer.from(encodedImage, "base64");
      res.set("Content-Type", "image/jpeg");
      res.send(decodedImage);
    } else {
      res.status(404).json({ error: "Image not found" });
    }
  } catch (error) {
    console.error("Error retrieving image:", error);
    res.status(500).json({ error: "Failed to retrieve image" });
  }
});

const port = process.env.PORT || 4000;

const server = http.createServer(app);

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Mongodb connected");
    if (!server.listening) {
      server.listen(port, () => {
        console.log(`Server is listening on port ${port}`);
      });
    }
  })
  .catch((err) => {
    console.log({ err });
    process.exit(1);
  });

export default server;
