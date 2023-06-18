import React, { ChangeEvent, useEffect, useState } from "react";
import AvatarIcon from "../../assets/images/user.png";
import * as S from "./styles";
import instance from "../../axios";

interface IComments {
  id: string;
  userId: string;
  authId: string;
}

const Comments = ({ id, userId, authId }: IComments) => {
  const [inputText, setInputText] = useState("");
  const [comments, setComments] = useState([]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  const handleButtonClick = () => {
    const data = {
      title: inputText,
      post: id,
    };

    instance.post("/comments", data).then((res) => {
      if (res.status === 200) {
        window.location.reload();
      }
      console.log(res);
    });
  };

  useEffect(() => {
    instance.get("/comments").then((res) => setComments(res.data));
  }, []);

  const filteredComments = comments.filter((obj: any) => obj?.post?._id === id);

  return (
    <S.Container>
      {userId !== authId ? (
        <>
          <S.Title>Написати коментар</S.Title>
          <S.Field>
            <S.Input
              type="text"
              value={inputText}
              onChange={handleInputChange}
            />
            <S.Button onClick={handleButtonClick}>Відправити</S.Button>
          </S.Field>
        </>
      ) : null}
      <S.Title>Коментарі</S.Title>
      <S.Comments>
        {filteredComments.length > 0 ? (
          filteredComments.map((obj: any) => (
            <S.Comment key={obj._id}>
              <S.User>
                <S.Avatar src={AvatarIcon} />
                <S.UserInfo>
                  <S.Name>{obj.user?.firstName}</S.Name>
                  <S.Name>{obj.user?.lastName}</S.Name>
                </S.UserInfo>
              </S.User>
              <S.Message>{obj.title}</S.Message>
              <S.Data>{new Date(obj.createdAt).toLocaleString()}</S.Data>
            </S.Comment>
          ))
        ) : (
          <S.CommentEmpty>Коментарів ще немає</S.CommentEmpty>
        )}
      </S.Comments>
    </S.Container>
  );
};

export default Comments;
