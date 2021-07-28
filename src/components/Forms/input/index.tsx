import React from "react";
import { TextInputProps } from "react-native";
import { Container } from "./styles";

type Props = TextInputProps;

const input: React.FC<Props> = ({ ...rest }) => {
  return <Container {...rest} />;
};

export default input;
