import { Grid, GridItem, Heading } from "@chakra-ui/react";
import { ComponentType } from "react";

const MainPage: ComponentType = () => {
    return (
        <Grid
            minH="100vh"
            templateAreas={`
    "menu colorSwitcher
    "header header"
    "main shoppingList"
    "footer footer"`}
            gap={1}
        >
            <GridItem area="colorSwitcher"></GridItem>
            <GridItem area="header">
                <Heading>Guild Wars 2</Heading>
                <Heading>Envoy Armor Guide</Heading>
            </GridItem>
        </Grid>
    );
};

export default MainPage;
