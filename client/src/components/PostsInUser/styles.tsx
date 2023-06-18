import styled from "styled-components";

export const LastBlock = styled.div``;

export const Text = styled.p`
  color: #ffffff;
  font-size: 24px;
`;

export const Containers = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 100%;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20%, 1fr));
  grid-gap: 60px;
  overflow: auto;
`;

export const Container = styled.div`
  background-color: silver;
  border-radius: 0 0 6px 6px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 4px;
  padding-bottom: 4px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    box-shadow: 20px 20px 10px 0px rgba(0, 0, 0, 0.5);
  }
`;

export const ContainerImg = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

export const ContainerTitle = styled.div`
  font-weight: bold;
`;

export const ContainerFormat = styled.div`
  font-weight: bold;
  font-size: 12px;
`;

export const EmptyText = styled.p`
  font-size: 64px;
  color: darkred;
  text-align: center;
  margin-top: 30px;
`;
