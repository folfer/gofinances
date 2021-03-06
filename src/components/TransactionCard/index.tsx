import React from "react";

import {
  Container,
  Title,
  Amount,
  Footer,
  Category,
  Icon,
  CategoryName,
  Date,
} from "./styles";

interface Catergory {
  name: string;
  icon: string;
}

export interface TransactionCardProps {
  type: "positive" | "nagative";
  title: string;
  amount: string;
  category: Catergory;
  date: string;
}

interface Props {
  data: TransactionCardProps;
}

const TransactionCard: React.FC<Props> = ({ data }) => {
  return (
    <Container>
      <Title>{data.title}</Title>
      <Amount type={data.type}>
        {data.type === "negative" && "- "}
        {data.amount}
      </Amount>

      <Footer>
        <Category>
          <Icon name={data.category.icon} />
          <CategoryName>{data.category.name}</CategoryName>
        </Category>
        <Date>{data.date}</Date>
      </Footer>
    </Container>
  );
};

export default TransactionCard;
