import React, { useEffect, useState } from "react";
import UserNameIcon from "../../assets/images/id-card.png";
import GmailIcon from "../../assets/images/envelope.png";
import LockIcon from "../../assets/images/padlock.png";
import UserIcon from "../../assets/images/user.png";
import * as S from "./styles";
import { useSelector } from "react-redux";
import { selectAuthData } from "../../redux/auth/selectors";
import { useLocation } from "react-router-dom";
import instance from "../../axios";
import { IUser } from "../../utils/types";
import PencilIcon from "../../assets/images/pencil.png";
import PostsInUser from "../../components/PostsInUser";
import DescriptionProfile from "../../components/DescriptionProfile";

const Profile = () => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const authData = useSelector(selectAuthData);

  const location = useLocation();
  const id = location.pathname.split("/").pop();

  const [userInfo, setUserInfo] = useState<IUser | null>(null);

  useEffect(() => {
    instance.get(`/users/${id}`).then((res) => setUserInfo(res.data));
  }, [id]);

  const handleImageUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    try {
      if (event.target.files && event.target.files.length > 0) {
        const formData = new FormData();
        const file = event.target.files[0];
        formData.append("image", file);
        const { data } = await instance.post("/upload/users/images", formData);
        setImagePreview(data.url);
      }
    } catch (err) {
      console.warn(err);
      alert("Error in the download file");
    }
  };

  const [editStatus, setEditStatus] = useState(false);
  const [editPassword, setEditPassword] = useState(false);
  const [password, setPassword] = useState(userInfo?.passwordHash || "");

  const filteredUser = authData?._id === userInfo?._id;

  const handleInputUserInfoChange = (event: any) => {
    const { name, value } = event.target;
    setUserInfo((prevUserInfo: any) => ({
      ...prevUserInfo,
      [name]: value,
    }));
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { value } = event.target;
    setUserInfo((prevUserInfo: any) => ({
      ...prevUserInfo,
      description: value,
    }));
  };

  const handleSaveButtonClick = () => {
    if (userInfo) {
      const updatedUserInfo = {
        ...userInfo,
        passwordHash: password,
        avatarUrl: imagePreview,
      };
      instance.patch(`/users/${id}`, updatedUserInfo).then((res) => {
        if (res.status === 200) {
          window.location.reload();
        }
        console.log(res);
      });
      setUserInfo(updatedUserInfo);
    }
  };

  return (
    <S.Section>
      {filteredUser ? (
        <S.ButtonEditBlock>
          {filteredUser && !editStatus ? (
            <S.ButtonEdit onClick={() => setEditStatus(true)}>
              Редагувати
            </S.ButtonEdit>
          ) : (
            <S.ButtonEdit onClick={handleSaveButtonClick}>
              Зберегти
            </S.ButtonEdit>
          )}
        </S.ButtonEditBlock>
      ) : null}
      <S.FirstBlock>
        <S.Block>
          <S.Content>
            <S.Icons src={UserNameIcon} alt="icon" />
            <S.Info>
              <S.Text>Імя:</S.Text>
              <S.InputUserInfo
                type="text"
                name="firstName"
                value={userInfo?.firstName}
                placeholder="Пусто"
                disabled={!editStatus}
                backgroundColor={
                  editStatus ? "rgba(255, 255, 255, 0.1)" : "transparent"
                }
                onChange={handleInputUserInfoChange}
              />
            </S.Info>
          </S.Content>
          <S.Content>
            <S.Icons src={UserNameIcon} alt="icon" />
            <S.Info>
              <S.Text>Прізвище:</S.Text>
              <S.InputUserInfo
                type="text"
                name="lastName"
                value={userInfo?.lastName}
                placeholder="Пусто"
                disabled={!editStatus}
                backgroundColor={
                  editStatus ? "rgba(255, 255, 255, 0.1)" : "transparent"
                }
                onChange={handleInputUserInfoChange}
              />
            </S.Info>
          </S.Content>
          <S.Content>
            <S.Icons src={GmailIcon} alt="icon" />
            <S.Info>
              <S.Text>Пошта:</S.Text>
              <S.InputUserInfo
                type="email"
                name="email"
                value={userInfo?.email}
                placeholder="Пусто"
                disabled={!editStatus}
                backgroundColor={
                  editStatus ? "rgba(255, 255, 255, 0.1)" : "transparent"
                }
                onChange={handleInputUserInfoChange}
              />
            </S.Info>
          </S.Content>
          {filteredUser ? (
            <S.Content>
              <S.Icons src={LockIcon} alt="icon" />
              <S.Info>
                <S.Text>Пароль:</S.Text>
                <S.InputUserInfo
                  type="password"
                  name="password"
                  value={password}
                  placeholder="ЗАШИФРОВАНО!"
                  backgroundColor={
                    editPassword ? "rgba(255, 255, 255, 0.1)" : "transparent"
                  }
                  disabled={!editPassword}
                  onChange={handlePasswordChange}
                />
                {editStatus ? (
                  <S.EditImg
                    onClick={() => setEditPassword(true)}
                    src={PencilIcon}
                    alt="icon"
                  />
                ) : null}
              </S.Info>
            </S.Content>
          ) : null}
        </S.Block>
        <S.LabelUpload cursor={editStatus ? "pointer" : "default"}>
          {imagePreview || !editStatus ? null : <S.Upload>Загрузити</S.Upload>}
          <S.ImagePreview
            src={
              imagePreview
                ? `http://localhost:4000${imagePreview}`
                : userInfo?.avatarUrl
                ? `http://localhost:4000${userInfo.avatarUrl}`
                : UserIcon
            }
            alt="Preview"
            isIcon={!imagePreview}
          />
          {editStatus ? (
            <input
              style={{ display: "none" }}
              type="file"
              onChange={handleImageUpload}
              accept="image/*"
            />
          ) : null}
        </S.LabelUpload>
      </S.FirstBlock>
      <S.SecondBlock>
        <S.AboutUser>
          <S.Text>
            {filteredUser ? "Розкажіть про себе:" : "Опис про автора"}
          </S.Text>
          <S.Textarea
            maxLength={800}
            disabled={!editStatus}
            value={userInfo?.description ? userInfo.description : ""}
            placeholder="Пусто"
            onChange={handleDescriptionChange}
          />
        </S.AboutUser>
        <DescriptionProfile />
      </S.SecondBlock>
      <PostsInUser userInfo={userInfo} />
    </S.Section>
  );
};

export default Profile;
