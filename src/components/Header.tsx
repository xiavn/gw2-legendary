import { Box, Heading } from "@chakra-ui/react";
import { ComponentType } from "react";

const Header: ComponentType = () => {
    return (
        <Box textAlign="center">
            <Heading size="lg" textTransform="uppercase">
                Guild Wars 2
            </Heading>
            <Heading as="h1" size="4xl">
                Envoy Armor Guide
            </Heading>
        </Box>
    );
};

export default Header;
