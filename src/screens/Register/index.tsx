import React, { useState } from "react";
import {
  Container,
  Header,
  Title,
  Form,
  Fields,
  TransactionsTypes,
} from "./styles";
import Input from "../../components/Forms/input";
import Button from "../../components/Forms/Button";
import TransactionTypeButton from "../../components/Forms/TransactionTypeButton";
import CategorySelect from "../../components/Forms/CategorySelect";

const Register: React.FC = () => {
  const [transactionType, setTransactionType] = useState("");

  function handleTransactionTypeSelect(type: "up" | "down") {
    setTransactionType(type);
  }
  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>
      <Form>
        <Fields>
          <Input placeholder="Nome" />
          <Input placeholder="Preço" />
          <TransactionsTypes>
            <TransactionTypeButton
              onPress={() => handleTransactionTypeSelect("up")}
              type="up"
              title="Income"
              isActive={transactionType === "up"}
            />
            <TransactionTypeButton
              onPress={() => handleTransactionTypeSelect("down")}
              type="down"
              title="Outcome"
              isActive={transactionType === "down"}
            />
          </TransactionsTypes>
          <CategorySelect title="Categoria" />
        </Fields>
        <Button title="enviar" />
      </Form>
    </Container>
  );
};

export default Register;
