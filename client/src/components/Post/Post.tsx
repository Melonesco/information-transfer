import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { IPost } from "../../utils/types";
import * as S from "./styles";
import AvatarIcon from "../../assets/images/user.png";
import { useNavigate } from "react-router-dom";
import instance from "../../axios";
import { selectAuthData } from "../../redux/auth/selectors";
import Comments from "../Comments";
import { supportedFileFormatsForDisplay } from "../../utils/Storage";

interface IPostProps {
  data: IPost;
}

const Post: React.FC<IPostProps> = ({ data }) => {
  const [fileContent, setFileContent] = useState<string>("");
  const navigate = useNavigate();
  const authData = useSelector(selectAuthData);

  const handleNavigate = (id: string) => navigate(`/users/${id}`);

  const formattedDate = data?.createdAt
    ? new Date(data.createdAt).toLocaleDateString()
    : "";

  useEffect(() => {
    if (data?.fileUrl) {
      const fetchData = async () => {
        const response = await fetch(`http://localhost:4000${data.fileUrl}`);
        const content = await response.text();
        setFileContent(content);
      };

      fetchData();
    }
  }, [data?.fileUrl]);

  const handleDownload = async () => {
    if (data?.fileUrl) {
      const response = await fetch(`http://localhost:4000${data.fileUrl}`);
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = `file.${data.fileFormat}`;
      link.click();

      setTimeout(() => {
        URL.revokeObjectURL(url);
      }, 1000);
    }
  };

  const handleRemove = (id: string) => {
    if (window.confirm("Ви точно хочете видалити пост?")) {
      instance.delete(`/posts/${id}`).then((res) => {
        if (res.status === 200) {
          navigate("/");
        }
        console.log(res);
      });
    }
  };

  const getFileContent = () => {
    if (supportedFileFormatsForDisplay.includes("." + data?.fileFormat)) {
      if (fileContent) {
        return <S.FileText>{fileContent}</S.FileText>;
      } else {
        return <S.FileText>Завантаження вмісту файлу...</S.FileText>;
      }
    } else {
      return (
        <S.FileText>
          Формат файлу не підтримується для показу на сторінці.
        </S.FileText>
      );
    }
  };

  return (
    <S.Wrapper>
      <S.Inner>
        <S.Img src={`http://localhost:4000${data?.imageUrl}`} alt="img" />
        <S.Container>
          <S.Content>
            <S.Title>{data?.title}</S.Title>
            <S.Date>Дата створення: {formattedDate}</S.Date>
            <S.Text>Опис:</S.Text>
            <S.Description>{data?.text}</S.Description>

            <S.BlockUpload>
              <S.ButtonUpload onClick={handleDownload}>Скачати</S.ButtonUpload>
              <S.FileName>Документ.txt</S.FileName>
            </S.BlockUpload>
            <S.Format>Формат файлу: {data?.fileFormat}</S.Format>
          </S.Content>
          <S.User>
            <S.UserContent onClick={() => handleNavigate(data.user._id)}>
              <S.UserNameBlock>
                <S.UserText>Автор</S.UserText>
                <S.UserTitle>{data?.user.firstName}</S.UserTitle>
                <S.UserTitle>{data?.user.lastName}</S.UserTitle>
              </S.UserNameBlock>
              <S.UserImg
                src={
                  data?.user?.avatarUrl
                    ? `http://localhost:4000${data.user.avatarUrl}`
                    : AvatarIcon
                }
                alt="icon"
              />
            </S.UserContent>
            {authData?._id === data?._id ? (
              <S.UserButtonRemove onClick={() => handleRemove(data._id)}>
                Видалити пост
              </S.UserButtonRemove>
            ) : null}
          </S.User>
        </S.Container>
      </S.Inner>
      <S.Info>
        <S.InfoTitle>Інформація про файл</S.InfoTitle>
        <S.FileInfo>{getFileContent()}</S.FileInfo>
      </S.Info>
      <Comments
        id={data?._id}
        userId={data?.user?._id}
        authId={authData?._id}
      />
    </S.Wrapper>
  );
};

export default Post;
