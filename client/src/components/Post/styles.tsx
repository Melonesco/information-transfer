import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  margin: 100px;
  overflow: hidden;
`;

export const Inner = styled.div`
  display: flex;
`;

export const Img = styled.img`
  height: 520px;
  max-width: 700px;
  object-fit: cover;
`;

export const Container = styled.div`
  background-color: silver;
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 40px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  max-width: 70%;
`;

export const Title = styled.h2`
  margin-bottom: 4px;
`;

export const Date = styled.p`
  font-weight: bold;
  font-size: 14px;
`;

export const Text = styled.p`
  margin-top: 20px;
  margin-bottom: 4px;
  font-weight: bold;
`;

export const Description = styled.p`
  letter-spacing: 1px;
  font-size: 14px;
  height: 300px;
  overflow: auto;
`;

export const BlockUpload = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 40px;
`;

export const ButtonUpload = styled.button`
  border: none;
  background-color: transparent;
  font-size: 18px;
  text-transform: uppercase;
  border-bottom: 2px solid #000000;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    color: #ffffff;
    border-bottom: 2px solid #ffffff;
  }
`;

export const FileName = styled.p`
  font-weight: bold;
  color: darkred;
`;

export const Format = styled.p`
  margin-top: 10px;
  font-size: 12px;
  font-weight: bold;
`;

export const User = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 20px;
`;

export const UserContent = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
  cursor: pointer;
`;

export const UserImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

export const UserNameBlock = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
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

export const UserButtonRemove = styled.button`
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  background-color: darkred;
  color: #ffffff;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: firebrick;
  }
`;

export const Info = styled.div`
  background-color: silver;
  text-align: center;
  padding-top: 40px;
  margin-bottom: 160px;
`;

export const InfoTitle = styled.h2`
  font-size: 32px;
`;

export const FileInfo = styled.div`
  margin-top: 40px;
  min-height: 700px;
  max-height: 1200px;
  overflow: auto;
`;

export const FileText = styled.p`
  text-align: start;
  margin: 30px 40px;
`;
