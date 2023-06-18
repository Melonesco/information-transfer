import React, { useEffect, useState } from "react";
import { IPost, IUser } from "../../utils/types";
import * as S from "./styles";
import AvatarIcon from "../../assets/images/user.png";
import instance from "../../axios";
import { Empty } from "./styles";

const PostsInAdmin = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    instance.get("/posts").then((res) => setPosts(res.data));
  }, []);

  const handleRemovePost = (id: string) => {
    instance.delete(`/posts/${id}`).then((res) => {
      if (res.status === 200) {
        window.location.reload();
      }
      console.log(res);
    });
  };

  return (
    <>
      {posts.length > 0 ? (
        posts.map((obj: IPost) => (
          <S.PostBlock key={obj._id}>
            <S.Post>
              <S.PostImg
                src={
                  obj?.imageUrl
                    ? `http://localhost:4000${obj.imageUrl}`
                    : AvatarIcon
                }
              />
              <S.PostInfo>
                <S.PostTitle>{obj?.title}</S.PostTitle>
                <S.PostFileFormat>
                  Формат файлу: {obj?.fileFormat}
                </S.PostFileFormat>
                <S.PostFileFormat>
                  Дата: {new Date(obj.createdAt).toLocaleString()}
                </S.PostFileFormat>
              </S.PostInfo>
            </S.Post>
            <S.ButtonRemove onClick={() => handleRemovePost(obj?._id)}>
              Видалити Пост
            </S.ButtonRemove>
          </S.PostBlock>
        ))
      ) : (
        <S.Empty>Пусто</S.Empty>
      )}
    </>
  );
};

export default PostsInAdmin;
