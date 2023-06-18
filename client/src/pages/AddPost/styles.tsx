import styled from "styled-components";
import TextField from "@mui/material/TextField";
import SimpleMDE from "react-simplemde-editor";

export const Paper = styled.div`
  padding: 30px 30px 200px 30px;
  background-color: rgba(255, 255, 255, 0.5);
`;

export const TitleContainer = styled.div`
  position: relative;
  height: 40px;
  margin-bottom: 40px;
`;

export const TitleInput = styled.input`
  width: 100%;
  padding: 10px 0;
  background-color: transparent;
  outline: none;
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.4);
  font-size: 24px;
  font-weight: bold;

  &::placeholder {
    color: rgba(0, 0, 0, 0.4);
  }

  &:hover {
    border-bottom: 2px solid rgba(0, 0, 0, 0.4);
  }

  &:focus {
    border-color: darkred;
  }
`;

export const InputUpload = styled.input`
  display: block;
  margin-top: 40px;
  font-size: 16px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 50px;
  box-shadow: 5px 5px 10px #000000;
  width: 350px;
  outline: none;

  &::-webkit-file-upload-button {
    color: #ffffff;
    background-color: #206a5d;
    padding: 16px;
    border: none;
    border-radius: 50px;
    outline: none;
    cursor: pointer;
    margin-left: -1px;

    &:hover {
      background-color: #438a5e;
    }
  }
`;

export const LabelUpload = styled.label`
  width: 300px;
  height: auto;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  cursor: pointer;
`;

export const Upload = styled.p`
  text-align: center;
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
  border: 2px dashed #206a5d;
  width: ${({ isIcon }) => (isIcon ? "128px" : "256px")};
  height: auto;
  object-fit: ${({ isIcon }) => (isIcon ? "contain" : "cover")};
`;

export const UploadContainer = styled.div`
  margin-top: 40px;
`;

export const Tags = styled(TextField)`
  margin: 15px 0;
`;

export const Editor = styled(SimpleMDE)`
  margin: 30px -30px;

  .cm-s-easymde {
    border: 0;
    font-size: 22px;
    background-color: rgba(255, 255, 255, 0.5);
  }

  .editor-toolbar {
    border: 0;
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;

  button {
    margin-right: 15px;
  }
`;

interface IButtonSubmit {
  theme: string;
}

export const ButtonSubmit = styled.button<IButtonSubmit>`
  color: #ffffff;
  background-color: ${(props) => props.theme};
  border: none;
  padding: 15px 30px;
  border-radius: 6px;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    color: #000000;
    background-color: #ffffff;
  }
`;
