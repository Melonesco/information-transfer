import React, { useEffect, useState } from "react";
import * as S from "./styles";
import instance from "../../axios";
import { useNavigate } from "react-router-dom";

const PostsInUser = ({ userInfo }: any) => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    instance.get("/posts").then((res) => setPosts(res.data));
  }, []);

  const filteredPosts = posts.filter(
    (obj: any) => obj.user._id === userInfo._id
  );

  const handleNavigate = (id: string) => {
    navigate(`/posts/${id}`);
  };

  return (
    <S.LastBlock>
      <S.Text>Роботи автора:</S.Text>
      <S.Containers>
        {filteredPosts.length > 0 ? (
          filteredPosts.map((obj: any) => (
            <S.Container onClick={() => handleNavigate(obj._id)}>
              <S.ContainerImg
                src={`http://localhost:4000${obj.imageUrl}`}
                alt="img"
              />
              <S.ContainerTitle>{obj.title}</S.ContainerTitle>
              <S.ContainerFormat>Формат: {obj.fileFormat}</S.ContainerFormat>
            </S.Container>
          ))
        ) : (
          <S.EmptyText>Пусто =(</S.EmptyText>
        )}
        <div></div>
        <div></div>
        <div></div>
      </S.Containers>
    </S.LastBlock>
  );
};

export default PostsInUser;
