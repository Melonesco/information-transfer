import styled from "styled-components";

export const Info = styled.div`
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Img = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;

export const Button = styled.button`
  background-color: #ffffff;
  padding: 20px 20px;
  border: none;
  border-radius: 10px;
  margin-top: 25%;
  z-index: 90000;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 16px;
  font-weight: bold;

  &:hover {
    background-color: #000000;
    color: #ffffff;
  }
`;

export const SearchBlock = styled.div`
  text-align: center;
  margin-top: 60px;
`;

export const Input = styled.input`
  height: 40px;
  width: 260px;
  background-color: rgba(255, 255, 255, 0.1);
  border: none;
  outline: none;
  padding: 0 10px;
  border-radius: 4px 0 0 4px;
  color: #ffffff;
  font-size: 20px;
`;
export const SearchButton = styled.button`
  height: 40px;
  border: none;
  background-color: rgba(255, 255, 255, 0.5);
  padding: 0 20px;
  border-radius: 0 4px 4px 0;
  color: #ffffff;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 20px;

  &:hover {
    color: #000000;
  }
`;

export const Containers = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20%, 1fr));
  grid-gap: 60px;
  overflow: auto;
  padding: 100px 100px 200px 100px;
`;

export const Empty = styled.div`
  text-align: center;
  font-size: 32px;
  font-weight: bold;
  color: #ffff;
`;
