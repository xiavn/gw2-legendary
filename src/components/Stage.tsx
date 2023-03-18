import {
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Heading,
} from "@chakra-ui/react";
import { ComponentType } from "react";

interface StageProps {
    stage: {
        id: string;
        name: string;
        wiki?: string;
        api?: string;
        description: string;
        instructions?: string[];
        blocks?: string[];
        blockedBy?: string[];
        contains?: string[];
    };
}

const Stage: ComponentType<StageProps> = ({ stage }) => {
    return (
        <AccordionItem>
            <Heading as="h3" size="lg">
                <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                        {stage.name}
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
            </Heading>
            <AccordionPanel>{stage.description}</AccordionPanel>
        </AccordionItem>
    );
};

export default Stage;
