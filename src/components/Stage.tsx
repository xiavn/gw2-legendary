import {
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Heading,
    ListItem,
    UnorderedList,
    VStack,
} from "@chakra-ui/react";
import { ComponentType, Fragment } from "react";
import StageStatusIcon from "./StageStatusIcon";

export enum StageStatus {
    COMPLETED,
    IN_PROGRESS,
    LOCKED,
}

interface StageProps {
    stage: {
        id: string;
        name: string;
        status: StageStatus;
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
                    <StageStatusIcon stageStatus={stage.status} />
                    <Box as="span" flex="1" textAlign="left">
                        {stage.name}
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
            </Heading>
            <AccordionPanel>
                <VStack align="left">
                    <Box as="p">{stage.description}</Box>
                    {typeof stage.instructions !== "undefined" && (
                        <Fragment>
                            <Heading
                                as="h4"
                                size="sm"
                                mb={4}
                                textDecoration="underline"
                            >
                                Instructions
                            </Heading>
                            <UnorderedList spacing={4} pl={4}>
                                {stage.instructions.map((item) => (
                                    <ListItem>{item}</ListItem>
                                ))}
                            </UnorderedList>
                        </Fragment>
                    )}
                </VStack>
            </AccordionPanel>
        </AccordionItem>
    );
};

export default Stage;
