import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import "easymde/dist/easymde.min.css";
import * as S from "./styles";
import UploadIcon from "../../assets/images/cloud-computing.png";
import instance from "../../axios";
import { selectIsAuth } from "../../redux/auth/selectors";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { RootState } from "../../redux/store";
import { fetchAuthMe } from "../../redux/auth/asyncAction";
import { IUser } from "../../utils/types";
import { supportedFormats } from "../../utils/Storage";

interface PostFields {
  title: string;
  fileUrl: string;
  fileFormat: string;
  imageUrl: string;
  text: string;
  user: any;
}

const AddPost: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isAuth = useSelector(selectIsAuth);
  const dispatch: ThunkDispatch<RootState, null, AnyAction> = useDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const [fileUrl, setFileUrl] = useState("");
  const [fileFormat, setFileFormat] = useState("");
  const [imageUrl, setImageUrl] = useState<string>("");
  const [userInfo, setUserInfo] = useState<IUser | null>(null);

  const isEditing = Boolean(id);

  useEffect(() => {
    dispatch(fetchAuthMe()).then((data) => {
      setUserInfo(data.payload);
    });
  }, [dispatch]);

  const handleImageUpload = async (event: any) => {
    try {
      const formData = new FormData();
      const file = event.target.files[0];
      formData.append("image", file);
      const { data } = await instance.post("/upload/images", formData);
      setImageUrl(data.url);
    } catch (err) {
      console.warn(err);
      alert("Error in the download file");
    }
  };

  const handleChangeFile = async (event: any) => {
    try {
      const file = event.target.files[0];
      const fileFormat = file.name.split(".").pop();

      const maxSize = 10 * 1024 * 1024;
      if (file.size > maxSize) {
        alert("Файл перевищує максимальний розмір 10MB");
        window.location.reload();
      }

      setIsLoading(true);

      const formData = new FormData();
      formData.append("file", file);

      const { data } = await instance.post("/upload/files", formData);
      setFileUrl(data.url);
      setFileFormat(fileFormat);
      setIsLoading(false);
    } catch (err) {
      console.warn(err);
      alert("Помилка в створенні поста");
    }
  };

  const onChange = React.useCallback((value: string) => {
    setText(value);
  }, []);

  const onSubmit = async () => {
    try {
      setIsLoading(true);

      const fields: PostFields = {
        title,
        imageUrl,
        fileUrl,
        fileFormat,
        text,
        user: userInfo ? userInfo._id : "",
      };

      const { data } = isEditing
        ? await instance.patch(`/posts/${id}`, fields)
        : await instance.post("/posts", fields);

      const _id = isEditing ? id : data._id;

      navigate(`/posts/${_id}`);
    } catch (err) {
      console.warn("Error>>>", err);
      alert("Error in create post");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      instance.get(`/posts/${id}`).then(({ data }: any) => {
        setTitle(data.title);
        setText(data.text);
        setFileUrl(data.imageUrl);
      });
    }
  }, [id]);

  const options = React.useMemo(
    () => ({
      spellChecker: false,
      maxHeight: "500px",
      autofocus: true,
      placeholder: "Опис",
      status: false,
      autosave: {
        enabled: true,
        delay: 1000,
        uniqueId: "my-editor-autosave",
      },
    }),
    []
  );

  if (!window.localStorage.getItem("token") && !isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <S.Paper>
      <S.TitleContainer>
        <S.TitleInput
          placeholder="Назва"
          value={title}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTitle(e.target.value)
          }
        />
      </S.TitleContainer>
      <S.LabelUpload>
        {imageUrl ? null : <S.Upload>Загрузити фото</S.Upload>}
        <S.ImagePreview
          src={imageUrl ? `http://localhost:4000${imageUrl}` : UploadIcon}
          alt="Preview"
          isIcon={!imageUrl}
        />
        <input
          style={{ display: "none" }}
          type="file"
          onChange={handleImageUpload}
          accept="image/*"
        />
      </S.LabelUpload>
      <S.InputUpload
        type="file"
        onChange={handleChangeFile}
        accept={supportedFormats.join(", ")}
      />
      {isLoading && <div>Загрузка...</div>}
      <S.Editor value={text} onChange={onChange} options={options} />
      <S.Buttons>
        <S.ButtonSubmit onClick={onSubmit} theme="darkred">
          {isEditing ? "Зберегти" : "Опублікувати"}
        </S.ButtonSubmit>
        <Link to="/">
          <S.ButtonSubmit theme="black">Головна сторінка</S.ButtonSubmit>
        </Link>
      </S.Buttons>
    </S.Paper>
  );
};

export default AddPost;
