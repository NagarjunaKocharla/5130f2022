import {
    Center,
    Text,
    Heading,
    VStack,
    Button,
    useDisclosure,
  } from "@chakra-ui/react";

import { useState, useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Summary from "../components/Summary";
import Visualization from "../components/Visualization";

function App() {
    const [portfolioCost, setPortfolioCost] = useState(0);
    const [portfolioValue, setPortfolioValue] = useState(0);
    const [absoluteGain, setAbsoluteGain] = useState(0);
    const [totalGainPercent, setTotalGainPercent] = useState(0);
    const [rollups, setRollups] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:5000/get_details_coinwise")
        .then((response) => response.json())
        .then((data) => {
            setRollups(data);
            let costAccumulator = 0;
            let valueAccumulator = 0;
            data.forEach((item) => {
            costAccumulator += item["total_equity"];
            valueAccumulator += item["total_value"];
            });
            let absoluteGain = costAccumulator -  valueAccumulator;

            setPortfolioCost(costAccumulator);
            setPortfolioValue(valueAccumulator);
            setAbsoluteGain(absoluteGain);
            setTotalGainPercent((absoluteGain / costAccumulator) * 100);
        });
    });

    const home = () => {
        window.location.href = "http://localhost:3000";
    }

    return (
        <ChakraProvider>
            <Center bg="black" color="white" padding={8}>
                <Summary
                    portfolioCost={portfolioCost}
                    portfolioValue={portfolioValue}
                    absoluteGain={absoluteGain}
                    totalGainPercent={totalGainPercent}
                    >
                </Summary>
                <Visualization rollups={rollups}></Visualization>
                <Button size="lg" colorScheme="teal" onClick={home} variant='solid'>
                    Back
                </Button>
            </Center>
        </ChakraProvider>
        );
}
export default App;

