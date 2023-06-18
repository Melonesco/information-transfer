import React from "react";
import { Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as S from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { selectIsAuth } from "../../redux/auth/selectors";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { RootState } from "../../redux/store";
import { fetchAuth } from "../../redux/auth/asyncAction";

type FormData = {
  email: string;
  password: string;
};

const Login: React.FC = () => {
  const isAuth = useSelector(selectIsAuth);
  const dispatch: ThunkDispatch<RootState, null, AnyAction> = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (values: FormData) => {
    const data = await dispatch(fetchAuth(values));

    if (!data.payload) {
      return alert("Could not log in");
    }

    if ("token" in data.payload) {
      window.localStorage.setItem("token", data.payload.token);
    }

    console.log(data);
  };

  if (window.localStorage.getItem("token") && isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <S.Container>
      <S.Content>
        <S.Line theme="#00ff0a"></S.Line>
        <S.Line theme="#ff0057"></S.Line>
        <S.Line theme="#fffd44"></S.Line>
        <S.Login>
          <S.Title>Увійти</S.Title>
          <form onSubmit={handleSubmit(onSubmit)}>
            <S.InputBlock>
              <S.Input
                type="text"
                placeholder="Пошта"
                {...register("email", {
                  required: "Це поле є обов'язковим",
                  pattern: /^\S+@\S+$/i,
                })}
              />
              {errors.email && (
                <S.ErrorMessage>{errors.email.message}</S.ErrorMessage>
              )}
            </S.InputBlock>
            <S.InputBlock>
              <S.Input
                type="password"
                placeholder="Пароль"
                {...register("password", {
                  required: "Це поле є обов'язковим",
                  minLength: {
                    value: 6,
                    message: "Пароль повинен мати мінімум 6 символів",
                  },
                })}
              />
              {errors.password && (
                <S.ErrorMessage>{errors.password.message}</S.ErrorMessage>
              )}
            </S.InputBlock>
            <S.InputBlock>
              <S.Input type="submit" value="Увійти" />
            </S.InputBlock>
          </form>
          <S.Links>
            <S.Navigate to="/">Забули пароль</S.Navigate>
            <S.Navigate to="/register">Реєстрація</S.Navigate>
          </S.Links>
        </S.Login>
      </S.Content>
    </S.Container>
  );
};

export default Login;
