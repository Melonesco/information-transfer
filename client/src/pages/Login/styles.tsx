import styled, { DefaultTheme, StyledComponent } from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

interface LineProps {
  theme: keyof DefaultTheme | string;
}

export const Line: StyledComponent<
  "i",
  DefaultTheme,
  LineProps
> = styled.i<LineProps>`
  color: ${(props) => props.theme};
  position: absolute;
  inset: -60px;
  border: 2px solid #ffffff;
  transition: 0.5s;

  &:nth-child(1) {
    border-radius: 43% 57% 74% 26% / 44% 30% 70% 56%;
    animation: animate 6s linear infinite;
  }

  &:nth-child(2) {
    border-radius: 23% 77% 31% 69% / 71% 30% 70% 29%;
    animation: animate 4s linear infinite;
  }

  &:nth-child(3) {
    border-radius: 44% 56% 42% 58% / 37% 65% 35% 63%;
    animation: animate2 10s linear infinite;
  }

  @keyframes animate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes animate2 {
    0% {
      transform: rotate(360deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`;

export const Content = styled.div`
  position: relative;
  width: 500px;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover ${Line} {
    border: 6px solid ${(props) => props.theme};
    filter: drop-shadow(0 0 20px ${(props) => props.theme});
  }
`;

export const Login = styled.div`
  position: absolute;
  width: 300px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;

export const Title = styled.h2`
  font-size: 2em;
  color: #ffffff;
`;

export const InputBlock = styled.div`
  position: relative;
  width: 100%;
  height: 80px;

  &:last-child {
    height: 40px;
  }
`;

export const Input = styled.input`
  position: relative;
  width: 100%;
  padding: 12px 20px;
  background-color: transparent;
  border: 2px solid #ffffff;
  border-radius: 40px;
  font-size: 1.2em;
  color: #ffffff;
  box-shadow: none;
  outline: none;

  &::placeholder {
    color: rgba(255, 255, 255, 0.75);
  }

  &[type="submit"] {
    background: linear-gradient(45deg, #ff357a, #fff172);
    border: none;
    cursor: pointer;
    font-size: 1.2em;
  }
`;

export const Links = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

export const Navigate = styled(Link)`
  color: #ffffff;
  text-decoration: none;
`;

export const ErrorMessage = styled.span`
  color: darkred;
  position: absolute;
  bottom: 8px;
  left: 4px;
  width: 100%;
`;
