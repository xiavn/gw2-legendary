import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import MainPage from "./components/MainPage";
import theme from "./theme";

export const App = () => (
    <ChakraProvider theme={theme}>
        <MainPage />
    </ChakraProvider>
);
