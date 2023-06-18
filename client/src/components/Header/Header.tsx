import React, { useState, useRef, useEffect } from "react";
import Logo from "../../assets/images/Logo.png";
import QuestionMarkIcon from "../../assets/images/question.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectAuthData } from "../../redux/auth/selectors";
import ProfileIcon from "../../assets/images/user.png";
import * as S from "./styles";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { RootState } from "../../redux/store";
import { logout } from "../../redux/auth/slice";
import { fetchAuthMe } from "../../redux/auth/asyncAction";

const Header: React.FC = () => {
  const authData = useSelector(selectAuthData);
  const dispatch: ThunkDispatch<RootState, null, AnyAction> = useDispatch();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const onClickNavigate = (id: string) => {
    closeMenu();
    navigate(`/users/${id}`);
  };

  useEffect(() => {
    dispatch(fetchAuthMe());
  }, []);

  const onClickLogout = () => {
    closeMenu();
    if (window.confirm("Are you sure you want to log")) {
      dispatch(logout());
      window.localStorage.removeItem("token");
      navigate("/login");
    }
  };

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const closeMenu = () => setIsModalOpen(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setIsModalOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", setIsModalOpen.bind(null, false));

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", setIsModalOpen.bind(null, false));
    };
  }, []);

  return (
    <S.Header>
      <S.LogoBlock to="/">
        <S.ImgLogo src={Logo} alt="img" />
      </S.LogoBlock>
      <S.Navigate>
        <S.QuestionLink to="/">
          <S.ImgIcon src={QuestionMarkIcon} alt="icon" />
        </S.QuestionLink>
        {window.localStorage.getItem("token") || authData ? (
          <S.Content>
            {authData?.isAdmin ? (
              <S.ButtonCreate to="/admin">Панель адміністратора</S.ButtonCreate>
            ) : null}
            <S.ButtonCreate to="/add-post">Створити пост</S.ButtonCreate>
            <S.ProfileImg
              src={
                authData?.avatarUrl
                  ? `http://localhost:4000${authData.avatarUrl}`
                  : ProfileIcon
              }
              alt="icon"
              onClick={toggleModal}
            />
            {isModalOpen && (
              <S.ModalContainer ref={modalRef}>
                <S.ModalContent>
                  <S.MenuItem onClick={() => onClickNavigate(authData._id)}>
                    Профіль
                  </S.MenuItem>
                  <S.MenuItem onClick={onClickLogout}>Вийти</S.MenuItem>
                </S.ModalContent>
              </S.ModalContainer>
            )}
          </S.Content>
        ) : (
          <S.SignIn to="/login">Увійти</S.SignIn>
        )}
      </S.Navigate>
    </S.Header>
  );
};

export default Header;
