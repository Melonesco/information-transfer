import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.header`
  background-color: darkred;
  width: 100%;
  height: 80px;
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoBlock = styled(Link)`
  height: 100%;
`;

export const ImgLogo = styled.img`
  width: auto;
  height: 100%;
  cursor: pointer;
`;

export const Navigate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const QuestionLink = styled(Link)`
  width: 32px;
  height: 32px;
  background-color: #000000;
  border-radius: 50%;
  padding: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImgIcon = styled.img`
  width: 16px;
  height: auto;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const ButtonCreate = styled(Link)`
  padding: 14px 16px;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.2s ease;
  background-color: #ffffff;

  &:hover {
    background-color: #000000;
    color: #ffffff;
  }
`;

export const ProfileImg = styled.img`
  width: 50px;
  height: auto;
  border-radius: 50%;
  cursor: pointer;
`;

export const SignIn = styled(Link)`
  font-weight: bold;
  background-color: #ffffff;
  padding: 10px 20px;
  border: 2px solid #ffffff;
  border-radius: 4px;
  transition: all 0.3s ease;

  &:hover {
    background-color: transparent;
    color: #ffffff;
  }
`;

export const ModalContainer = styled.div`
  position: absolute;
  top: 40px;
  right: 0;
  width: 200px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  z-index: 500;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MenuItem = styled.div`
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;
