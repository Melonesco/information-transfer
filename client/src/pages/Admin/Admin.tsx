import React, { useState } from "react";
import * as S from "./styles";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAuthData } from "../../redux/auth/selectors";
import PostsInAdmin from "../../components/PostsInAdmin";
import UsersInAdmin from "../../components/UsersInAdmin";

const Admin = () => {
  const authData = useSelector(selectAuthData);
  const [changeStatus, setChangeStatus] = useState(true);

  if (!window.localStorage.getItem("token") && !authData?.isAdmin) {
    return <Navigate to="/" />;
  }

  return (
    <S.Container>
      <S.ButtonReturn to="/">Повернутися на головну сторінку</S.ButtonReturn>
      <S.Title>Адмін меню</S.Title>
      <S.Blocks>
        <S.Buttons>
          <S.Button
            active={changeStatus ? "#ffffff" : "darkred"}
            color={changeStatus ? "darkred" : "#ffffff"}
            onClick={() => setChangeStatus(true)}
          >
            Пости
          </S.Button>
          <S.Button
            active={!changeStatus ? "#ffffff" : "darkred"}
            color={!changeStatus ? "darkred" : "#ffffff"}
            onClick={() => setChangeStatus(false)}
          >
            Користувачі
          </S.Button>
        </S.Buttons>
        <S.Content>
          {changeStatus ? (
            <PostsInAdmin />
          ) : (
            <UsersInAdmin authData={authData} />
          )}
        </S.Content>
      </S.Blocks>
    </S.Container>
  );
};

export default Admin;
