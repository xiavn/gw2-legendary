import { Divider, Heading, VStack } from "@chakra-ui/react";
import { ComponentType } from "react";

const Header: ComponentType = () => {
    return (
        <VStack textAlign="center">
            <Heading size="lg" textTransform="uppercase">
                Guild Wars 2
            </Heading>
            <Heading as="h1" size="4xl" pb={4}>
                Envoy Armor Guide
            </Heading>
            <Divider width="80%" variant="thick" />
        </VStack>
    );
};

export default Header;
