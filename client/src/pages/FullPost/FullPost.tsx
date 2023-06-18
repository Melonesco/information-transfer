import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import instance from "../../axios";
import Post from "../../components/Post";
import * as S from "./styles";

const FullPost = () => {
  const [data, setData] = useState<any>(null);
  const { id } = useParams();

  useEffect(() => {
    instance
      .get(`/posts/${id}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.warn(err);
        alert("Помилка при отриманні статті");
      });
  }, [id]);

  return (
    <S.Container>
      <Post data={data} />
    </S.Container>
  );
};

export default FullPost;
