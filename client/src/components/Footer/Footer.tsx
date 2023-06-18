import React from "react";
import Logo from "../../assets/images/profile.png";
import * as S from "./styles";

const Footer = () => {
  return (
    <S.Footer>
      <S.Logo src={Logo} alt="img" />
      <div>
        <S.Text>Студент: Максим Винницький</S.Text>
      </div>
    </S.Footer>
  );
};

export default Footer;
