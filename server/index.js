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

const storageImg = multer.diskStorage({
  destination: (_, __, cb) => {
    cb(null, "./uploads/images");
  },
  filename: (_, file, cb) => {
    cb(null, file.originalname);
  },
});

const storageAvatarsImg = multer.diskStorage({
  destination: (_, __, cb) => {
    cb(null, "./uploads/users/images");
  },
  filename: (_, file, cb) => {
    cb(null, file.originalname);
  },
});

const storageFile = multer.diskStorage({
  destination: (_, __, cb) => {
    cb(null, "./uploads/files");
  },
  filename: (_, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storageImg });
const uploadAvatarsImg = multer({ storage: storageAvatarsImg });
const upload2 = multer({ storage: storageFile });
app.use("/uploads/images", express.static("uploads/images"));
app.use("/uploads/users/images", express.static("uploads/users/images"));
app.use("/uploads/files", express.static("uploads/files"));

app.post("/upload/images", checkAuth, upload.single("image"), (req, res) => {
  res.json({
    url: `/uploads/images/${req.file.originalname}`,
  });
});

app.post("/upload/files", checkAuth, upload2.single("file"), (req, res) => {
  res.json({
    url: `/uploads/files/${req.file.originalname}`,
  });
});

app.post(
  "/upload/users/images",
  checkAuth,
  uploadAvatarsImg.single("image"),
  (req, res) => {
    res.json({
      url: `/uploads/users/images/${req.file.originalname}`,
    });
  }
);

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
