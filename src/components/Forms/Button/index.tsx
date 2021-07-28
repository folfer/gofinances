import React from "react";
import { Container, Title } from "./styles";
import { TouchableOpacityProps } from "react-native";

interface Props extends TouchableOpacityProps {
  title: string;
}

const Button: React.FC<Props> = ({ title, ...rest }) => {
  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  );
};

export default Button;
