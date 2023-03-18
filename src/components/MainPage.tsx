import { Grid, GridItem } from "@chakra-ui/react";
import { ComponentType } from "react";
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import Header from "./Header";

const MainPage: ComponentType = () => {
    return (
        <Grid
            minH="100vh"
            templateAreas={`
    "menu colorSwitcher"
    "header header"
    "main shoppingList"
    "footer footer"`}
            gridTemplateRows={`50px 200px 1fr 50px`}
            gridTemplateColumns={`70% 30%`}
            gap={1}
        >
            <GridItem area="menu">Menu</GridItem>
            <GridItem area="colorSwitcher" justifySelf="flex-end">
                <ColorModeSwitcher />
            </GridItem>
            <GridItem area="header">
                <Header />
            </GridItem>
            <GridItem area="main">Main</GridItem>
            <GridItem area="shoppingList">Shopping List</GridItem>
            <GridItem area="footer">Footer</GridItem>
        </Grid>
    );
};

export default MainPage;
