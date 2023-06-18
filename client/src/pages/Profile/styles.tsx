import styled from "styled-components";

export const Section = styled.div`
  width: 100%;
  height: 100%;
  padding: 100px 200px;
  background-color: #262626;
`;

export const FirstBlock = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Icons = styled.img`
  width: 24px;
  height: auto;
  background-color: #ffffff;
  padding: 6px;
  border-radius: 50%;
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 60px;
  width: 100%;
  position: relative;
`;

export const Text = styled.p`
  color: #ffffff;
  font-size: 24px;
`;

export const InputUserInfo = styled.input<{ backgroundColor: string }>`
  outline: none;
  border: none;
  padding: 6px;
  font-size: 24px;
  color: #ffffff;
  background-color: ${(props) => props.backgroundColor};
`;

export const EditImg = styled.img`
  cursor: pointer;
  width: 20px;
  position: absolute;
  right: -30px;
`;

export const LabelUpload = styled.label<{ cursor: string }>`
  width: 300px;
  height: auto;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  cursor: ${(props) => props.cursor};
`;

export const Upload = styled.p`
  color: darkred;
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 16px;
  font-weight: bold;
  background-color: rgba(0, 0, 0, 0.2);
  padding: 4px 12px;
  border-radius: 4px;
  text-transform: uppercase;
`;

export const ImagePreview = styled.img<{ isIcon: boolean }>`
  width: 300px;
  height: 300px;
  background-color: silver;
  object-fit: ${({ isIcon }) => (isIcon ? "contain" : "cover")};
`;

export const SecondBlock = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 100px;
  margin-top: 40px;
`;

export const AboutUser = styled.div`
  width: 100%;
`;

export const Textarea = styled.textarea`
  width: 100%;
  height: 400px;
  resize: none;
  outline: none;
  background-color: transparent;
  color: #ffffff;
  font-size: 20px;
  border: none;
  padding: 10px;
`;

export const ButtonEditBlock = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  gap: 20px;
  margin-bottom: 40px;
`;

export const ButtonEdit = styled.button`
  padding: 15px 30px;
  font-size: 16px;
  border: none;
  border-radius: 6px;
  background-color: yellowgreen;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    color: #ffffff;
  }
`;
