import React from "react";
import AvatarIcon from "../../assets/images/user.png";
import * as S from "./styles";
import { IPost } from "../../utils/types";
import { useNavigate } from "react-router-dom";

interface IPostCard {
  obj: IPost;
}

const PostCard = ({ obj }: IPostCard) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/posts/${obj._id}`);
  };

  return (
    <S.Container onClick={handleNavigate}>
      <S.Img src={`http://localhost:4000${obj.imageUrl}`} alt="img" />
      <S.Info>
        <S.User>
          <S.UserImg
            src={
              obj.user?.avatarUrl
                ? `http://localhost:4000${obj.user.avatarUrl}`
                : AvatarIcon
            }
            alt="icon"
          />
          <S.UserNameBlock>
            <S.UserText>Автор</S.UserText>
            <S.UserTitle>{obj.user?.firstName}</S.UserTitle>
            <S.UserTitle>{obj.user?.lastName}</S.UserTitle>
          </S.UserNameBlock>
        </S.User>
        <S.Post>
          <S.Title>{obj.title}</S.Title>
          <S.Format>Формат: {obj.fileFormat}</S.Format>
        </S.Post>
      </S.Info>
    </S.Container>
  );
};

export default PostCard;
