import { ButtonWrapper, ButtonText } from "@styles/common/button.style";

import type { FC } from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
}

const Button: FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <ButtonWrapper onClick={onClick}>
      <ButtonText>{children}</ButtonText>
    </ButtonWrapper>
  );
};

export default Button;
