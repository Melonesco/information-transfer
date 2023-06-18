import styled from "styled-components";

export const UserBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid darkred;
  padding-bottom: 30px;
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

export const UserImg = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const UserName = styled.div`
  font-weight: bold;
`;

export const ButtonRemove = styled.button`
  background-color: darkred;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  padding: 10px 40px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: firebrick;
  }
`;

export const Empty = styled.p`
  text-align: center;
  font-size: 32px;
  font-weight: bold;
`;
