import styled from "styled-components";

export const Container = styled.div`
  background-color: silver;
  border-radius: 0 0 4px 4px;
  display: flex;
  align-items: end;
  flex-direction: column;
  gap: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;

  &:hover {
    box-shadow: 20px 20px 10px 0 rgba(0, 0, 0, 0.5);
  }
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 3px 10px;
`;

export const User = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
`;

export const UserImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

export const UserNameBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserText = styled.p`
  font-size: 10px;
  font-weight: bold;
  color: darkred;
  letter-spacing: 1px;
`;

export const UserTitle = styled.h2`
  font-size: 14px;
`;

export const Post = styled.div``;

export const Img = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

export const Title = styled.div`
  font-weight: bold;
  font-size: 20px;
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px;
  max-width: 200px;
  color: #ffffff;
  background-color: rgba(0, 0, 0, 0.2);
`;
export const Format = styled.div`
  font-weight: bold;
  font-size: 12px;
`;
