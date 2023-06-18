import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  background-color: silver;
  margin: 60px 120px 300px 120px;
  height: 100%;
  min-height: 50vh;
  padding: 20px 100px 100px 100px;
  max-height: 1000px;
  overflow: auto;
  position: relative;
`;

export const ButtonReturn = styled(Link)`
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: #000000;
  color: #ffffff;
  padding: 12px 20px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    color: #000000;
    background-color: #ffffff;
  }
`;

export const Title = styled.h2`
  font-size: 32px;
  font-weight: bold;
  text-align: center;
`;

export const Blocks = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  gap: 200px;
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 20px;
`;

export const Button = styled.button<{ active: string; color: string }>`
  background-color: ${(props) => props.active};
  color: ${(props) => props.color};
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 24px;
  width: 200px;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
