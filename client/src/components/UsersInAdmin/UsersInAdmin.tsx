import React, { useEffect, useState } from "react";
import * as S from "./styles";
import { IUser } from "../../utils/types";
import AvatarIcon from "../../assets/images/user.png";
import instance from "../../axios";
import { useNavigate } from "react-router-dom";

interface IUsersInAdmin {
  authData: IUser;
}

const UsersInAdmin = ({ authData }: IUsersInAdmin) => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  const handleClick = (id: string) => navigate(`/users/${id}`);

  useEffect(() => {
    instance.get("/users").then((res) => setUsers(res.data));
  }, []);

  const handleRemoveUser = (id: string) => {
    instance.delete(`/users/${id}`).then((res) => {
      if (res.status === 200) {
        window.location.reload();
      }
      console.log(res);
    });
  };

  return (
    <>
      {users.length > 0 ? (
        users.map((obj: IUser) => (
          <S.UserBlock key={obj?._id}>
            <S.User onClick={() => handleClick(obj._id)}>
              <S.UserImg
                src={
                  obj?.avatarUrl
                    ? `http://localhost:4000${obj.avatarUrl}`
                    : AvatarIcon
                }
                alt="img"
              />
              <S.UserInfo>
                <S.UserName>
                  Ім'я: {obj?.firstName} {obj?.lastName}
                </S.UserName>
                <S.UserName>Пошта: {obj?.email}</S.UserName>
              </S.UserInfo>
            </S.User>
            {authData?._id !== obj._id && authData?.isAdmin ? (
              <S.ButtonRemove onClick={() => handleRemoveUser(obj._id)}>
                Видалити Користувача
              </S.ButtonRemove>
            ) : null}
          </S.UserBlock>
        ))
      ) : (
        <S.Empty>Пусто</S.Empty>
      )}
    </>
  );
};

export default UsersInAdmin;
