import React from "react";
import {
  Text,
  VStack,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  TableCaption,
} from "@chakra-ui/react";
import TransactionItem from "./TransactionItem";

export default function TransactionsTable({ transactions }) {
  console.log("Neeharika",transactions);
  return (
    <VStack>
      <Text> Recent Transactions</Text>
      <Table size="sm" variant="striped" colorScheme="blackAlpha" width={20}>
        <TableCaption>All crypto buy and sell records</TableCaption>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Symbol</Th>
            <Th>Type</Th>
            <Th>Number of Coins</Th>
            <Th>Price Purchased At</Th>
            <Th>Value USD</Th>
            <Th>Transaction Date</Th>
          </Tr>
        </Thead>
        <Tbody>
          {transactions.map((tran, index) => {
            if(tran != null && index != null){
              return (
                <TransactionItem key={index} transaction={tran}></TransactionItem>
              );
            }
          })}
        </Tbody>
      </Table>
    </VStack>
  );
}
