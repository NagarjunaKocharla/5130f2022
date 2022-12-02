import {
  Center,
  Text,
  Heading,
  VStack,
  Button,
  ButtonGroup,
  useDisclosure,
} from "@chakra-ui/react";

import { useState, useEffect } from "react";
import TransactionsTable from "../components/TransactionsTable";
import { ChakraProvider } from "@chakra-ui/react";
import AddModal from "../components/AddModal";

function App() {
  const [transactions, setTransactions] = useState([]);
  /*const [rollups, setRollups] = useState([]);*/
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    fetch("http://127.0.0.1:5000/transactions")
      .then((response) => response.json())
      .then((data) => {
          var newdata = data["bitcoin"].concat(data["solana"]);
          setTransactions(newdata);
      });
  },[isOpen]);
  /*}, [isOpen]);*/
  const ToAnalysis = () => {
    window.location.href = "http://localhost:3000/Analysis";
  }

  return (
    <ChakraProvider>
      <AddModal isOpen={isOpen} onOpen={onOpen} onClose={onClose}></AddModal>
      <Center bg="black" color="white" padding={8}>
        <VStack spacing={7}>
          <Heading>Crypto Portfolio</Heading>
            <ButtonGroup variant='outline' spacing='6'>
              <Button size="lg" colorScheme="teal" onClick={onOpen} variant='solid'>
                Add Transaction
              </Button>
              <Button size="lg" colorScheme="teal" onClick = {ToAnalysis} variant='solid'>
                    Portfolio Analysis
              </Button>
            </ButtonGroup>
          <TransactionsTable transactions={transactions}></TransactionsTable>
        </VStack>
      </Center>
    </ChakraProvider>
  );
}

export default App;
