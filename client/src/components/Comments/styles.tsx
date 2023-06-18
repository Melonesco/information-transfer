import styled from "styled-components";

export const Container = styled.div`
  background-color: silver;
  margin-bottom: 300px;
  padding: 40px 20px;
`;

export const Title = styled.h2`
  font-size: 32px;
  font-weight: bold;
  text-align: center;
`;

export const Field = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px 0 60px 0;
  gap: 60px;
`;

export const Input = styled.input`
  height: 60px;
  width: 100%;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid firebrick;
  outline: none;
  font-size: 24px;
  padding: 0 15px;
`;

export const Button = styled.button`
  background-color: darkred;
  border: none;
  border-radius: 6px;
  color: #ffffff;
  padding: 10px 20px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: firebrick;
  }
`;

export const Comments = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: 30px;
`;

export const Comment = styled.div`
  border-bottom: 2px solid darkred;
  position: relative;
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Avatar = styled.img`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  object-fit: cover;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Name = styled.p`
  font-size: 14px;
  font-weight: bold;
`;

export const Message = styled.p`
  margin: 20px 60px;
  font-size: 20px;
  color: firebrick;
`;

export const Data = styled.p`
  position: absolute;
  font-size: 14px;
  font-weight: bold;
  top: 10px;
  right: 10px;
`;

export const CommentEmpty = styled.div`
  text-align: center;
  color: firebrick;
  font-size: 24px;
  font-weight: bold;
`;
