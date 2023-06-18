import styled from "styled-components";

export const PostBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 2px solid darkred;
`;

export const Post = styled.div`
  display: flex;
  gap: 10px;
  cursor: pointer;
`;

export const PostImg = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 4px;
`;

export const PostInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const PostTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
`;

export const PostFileFormat = styled.p``;
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
